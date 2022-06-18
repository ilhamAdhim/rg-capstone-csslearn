package repository

import (
	"database/sql"
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

func (u *userRepository) Login(username string, password string) (*string, error) {

	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE username = ? AND password = ?", username, password).Scan(&user.Username)
	if err != nil {
		return err, nil

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
