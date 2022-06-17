package repository

import (
	"database/sql"
	"errors"
)

type UserRepository interface {
	FetchUserByID(id int64) (User, error)
	Login(username string, password string) (*string, error)
	GetUserRole(username string) (string, error)
}

type userRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) UserRepository {
	return &userRepository{db: db}
}

func (u *userRepository) FetchUserByID(id int64) (User, error) {
	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE id_siswa = ?", id).Scan(&user.ID, &user.Password, &user.Token)
	if err != nil {
		return user, err

	}

	return user, nil
}

<<<<<<< HEAD
func (u *UserRepository) Login(username string, password string) (*string, error) {
=======
func (u *userRepository) Login(username string, password string) (*string, error) {
>>>>>>> cf91618c520000875814da66d502018ad8b0169b

	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE username = ? AND password = ?", username, password).Scan(&user.Username)
	if err != nil {
		return nil, errors.New("Login Failed")

	}

	return &user.Username, nil
}

func (u *userRepository) GetUserRole(username string) (string, error) {
	var role string
	err := u.db.QueryRow("SELECT role from tb_siswa WHERE username = ?", username).Scan(&role)
	if err != nil {
		return "", err
	}

	return role, nil
}
