package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type User struct {
	ID       int64  `json:"id_siswa"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
	// Token    string `json:"token"`
}

type UserRegister struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type UserLogin struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type UserErrorRespone struct {
	Error string `json:"error"`
}

type GetUserSuccesRespone struct {
	Users []User `json:"users"`
}

type LoginSuccesResponse struct {
	Username string `json:"username"`
	Token    string `json:"token"`
}

type AuthErrorRespone struct {
	Error string `json:"error"`
}

//jwtkey untuk membuat signature
var jwtkey = []byte("Key_testing")

// Struct claim sebagai object yang akan diencode oleh jwt
// jwt.StandardClaims sebagai embedded type untuk provide standart claim JWT

type Claims struct {
	Username string `json:"username"`
	jwt.StandardClaims
}

func (api *API) login(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user UserLogin
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.usersRepo.Login(user.Username, user.Password)

	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorRespone{Error: err.Error()})
		return
	}

	// claim menggunakan variable yang sudah didefinisikan diatas
	expirationTime := time.Now().Add(24 * time.Hour)

	claims := &Claims{
		Username: *res,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	//token encoded claim dengan salah satu algoritma
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	//return internal error ketika ada kesalahan ketika pembuatan JWT string
	tokenStr, err := token.SignedString(jwtkey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		return
	}

	//Set token string kedalam cookie response
	//Return response berupa username dan token JWT

	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenStr,
		Expires: expirationTime,
		Path:    "/",
	})

	json.NewEncoder(w).Encode(LoginSuccesResponse{Username: *res, Token: tokenStr})
}

func (api *API) editProfile(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.usersRepo.UpdateProfile(user.ID, user.Username, user.Email, user.Password)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Update profile Failed"))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Update profile successful"))

}

func (api *API) register(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user UserRegister
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.usersRepo.Register(user.Username, user.Email, user.Password)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Registration Failed"))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Registration successful"))

}

func (api *API) getusers(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := GetUserSuccesRespone{}
	response.Users = make([]User, 0)

	users, err := api.usersRepo.GetAllUserData()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(UserErrorRespone{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, list := range users {
		response.Users = append(response.Users, User{
			ID:       list.ID,
			Username: list.Username,
			Email:    list.Email,
			Password: list.Password,
		})
	}
	encoder.Encode(response)

}

func (api *API) logout(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	token, err := req.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// return unauthorized ketika token kosong
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		// return bad request ketika field token tidak ada
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if token.Value == "" {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	c := http.Cookie{
		Name:   "token",
		MaxAge: -1,
	}
	http.SetCookie(w, &c)

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Logout succes"))
}
