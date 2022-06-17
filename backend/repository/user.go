package repository

import (
	"database/sql"
	"errors"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (User, error) {
	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE id_siswa= ?", id).Scan(&user.ID, &user.Password, &user.Token)
	if err != nil {
		return user, err

	}

	return user, nil

}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	var user User
	err := u.db.QueryRow("SELECT username from tb_siswa WHERE username = ? AND password = ?", username, password).Scan(&user.Username)
	if err != nil {
		return nil, errors.New("Login Failed")

	}

	return &user.Username, nil
}
