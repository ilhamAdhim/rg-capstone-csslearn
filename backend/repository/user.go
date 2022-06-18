package repository

import (
	"database/sql"
	"errors"
)

type UserRepository interface {
	FetchUserByID(id int64) (User, error)
	Login(username string, password string) (*string, error)
	// GetUserRole(username string) (string, error)
	Register(username string, password string, email string) (*string, error)
	GetAllUserData(User, error)
}

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *userRepository {
	return &userRepository{db: db}
}

func (u *userRepository) FetchUserByID(id int64) (User, error) {
	var user User
	err := u.db.QueryRow("SELECT *from tb_siswa WHERE id_siswa = ?", id).Scan(&user.ID, &user.Username, &user.Password, &user.Email)
	if err != nil {
		return user, err

	}

	return user, nil
}

// func (u *userRepository) GetUserRole(username string) (string, error) {
// 	var role string
// 	err := u.db.QueryRow("SELECT role from tb_siswa WHERE username = ?", username).Scan(&role)
// 	if err != nil {
// 		return "", err
// 	}

// 	return role, nil
// }

func (u *userRepository) Register(username string, password string, email string) (*string, error) {
	var user User
	_, err := u.db.Exec("INSERT username, password, email from tb_siswa VALUES ( ?, ?, ?)", username, password, email)
	if err != nil {
		return nil, errors.New("Register Failed")

	}

	return &user.Username, nil
}

// func (u *userRepository) GetAllUserData(User, error) {
// 	var users []User

// 	rows, err := u.db.Query("SELECT *FROM tb_siswa")
// 	if err != nil {
// 		return users, err
// 	}
// 	defer rows.Close()

// 	for rows.Next() {
// 		var user User
// 		if err := rows.Scan(&user.Username, &user.Email, &user.Password); err != nil {
// 			return users, nil
// 		}
// 		users = append(users, user)
// 	}

// 	return users, nil
// }

func (u *userRepository) Login(username string, password string) (*string, error) {

	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE username = ? AND password = ?", username, password).Scan(&user.Username)
	if err != nil {
		return nil, errors.New("Login Failed")

	}

	return &user.Username, nil
}

//sisa edit codingan perlu di cek kembali dan di register perlu menambahkan email dan jenis kelamin
