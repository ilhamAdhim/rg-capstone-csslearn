package api

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

func (api *API) AllowOrigin(w http.ResponseWriter, req *http.Request) {
	// localhost:9000 origin mendapat izin akses
	w.Header().Set("Acces-Control-Allow-Origin", "http://locahost:9000")

	//semua method diperbolehkan masuk
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST")

	//semua header siperbolehkan untuk disisipkan
	w.Header().Set("Acces-Control-Allow-Headers", "*")

	//allow cookie
	w.Header().Set("Acces-Control-Allow-Crenditials", "true")

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if req.Method == "OPTIONS" {

		w.WriteHeader(http.StatusOK)

	}



	func (api *API) AuthMiddleware (next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
			api.AllowOrigin(w, r)

			//ambil token dari cookie yang dikirim ketika request
			//return unauthorized ketika token kosong
			//return bad request ketika field token tidak ada

			c, err := r.Cookie("token")
			if err != nil {
				if err == http.ErrNoCookie{
					w.WriteHeader(http.StatusUnauthorized)
					return
				}

				w.WriteHeader(http.StatusBadRequest)
				return
			}

			//mengambil value dari cookie token
			tokenStr := c.Value
			claims := &Claims{}

		//1. parse JWT token ke dalam claim
		//2. return unauthorized ketika signature invalid
		//3. return bad request ketika field token tidak ada
		//4. return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
		tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(t *jwt.Token) (interface{}, error){
			return jwtkey, nil
		})

			if err != nil {
				if err == jwt.ErrSignatureInvalid {
					w.WriteHeader(http.StatusUnauthorized)
					return
				}
			}

			if !tkn.Valid {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		
		//validasi
		ctx := context.WithValue(r.Context(), "username", claims.Username)
		next.ServeHTTP(w, r.WithContext(ctx))
		return

	})
}

func (api *API) AdminMiddleware (next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		api.AllowOrigin(w, r)

		//ambil token dari cookie yang dikirim ketika request
		//return unauthorized ketika token kosong
		//return bad request ketika field token tidak ada

		c, err := r.Cookie("token")
		if err != nil {
			if err == http.ErrNoCookie{
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			w.WriteHeader(http.StatusBadRequest)
			return
		}

		//mengambil value dari cookie token
		tokenStr := c.Value
		claims := &Claims{}

	//1. parse JWT token ke dalam claim
	//2. return unauthorized ketika signature invalid
	//3. return bad request ketika field token tidak ada
	//4. return unauthorized ketika token sudah tidak valid (biasanya karna token expired)
	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(t *jwt.Token) (interface{}, error){
		return jwtkey, nil
	})

		if err != nil {
			if err == jwt.ErrSignatureInvalid {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}

		if !tkn.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
	
	//validasi
	if claims.Role == "admin"{

		ctx := context.WithValue(r.Context(), "username", claims.Username)
		next.ServeHTTP(w, r.WithContext(ctx))
		return

	}

	w.WriteHeader(http.StatusForbidden)	

	})
}

func (api *API) GET(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodGet{
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(AuthErrorRespone{Error: "Need GET Method"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

func (api *API) POST(next http.Handler) http.Handler{
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		api.AllowOrigin(w, r)
		encoder := json.NewEncoder(w)
		if r.Method != http.MethodPost{
			w.WriteHeader(http.StatusMethodNotAllowed)
			encoder.Encode(AuthErrorRespone{Error: "Need GET Method"})
			return
		}

		next.ServeHTTP(w, r)
	})
}

