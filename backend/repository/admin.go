package repository

import (
	"database/sql"
	"errors"
)

type AdminRepository interface {
	FetchAdminByID(id int64) (Admin, error)
	Login(username string, password string) (*string, error)
	GetAdminRole(username string) (string, error)
	Register(username string, password string) (*string, error)
	GetAllAdminData(admin, error)
}

type adminRepository struct {
	db *sql.DB
}

func NewAdminRepository(db *sql.DB) AdminRepository {
	return &adminRepository{db: db}
}

func (u *adminRepository) FetchAdminByID(id int64) (Admin, error) {
	var admin Admin
	err := u.db.QueryRow("SELECT username from tb_admin WHERE id_admin = ?", id).Scan(&admin.ID, &admin.Password, &admin.Token)
	if err != nil {
		return admin, err

	}

	return admin, nil
}

func (u *adminRepository) Login(username string, password string) (*string, error) {

	var admin Admin
	err := u.db.QueryRow("SELECT username from tb_admin WHERE username = ? AND password = ?", username, password).Scan(&admin.Username)
	if err != nil {
		return nil, errors.New("Login Failed")

	}

	return &admin.Username, nil
}

func (u *adminRepository) GetAdminRole(username string) (string, error) {
	var role string
	err := u.db.QueryRow("SELECT role from tb_admin WHERE username = ?", username).Scan(&role)
	if err != nil {
		return "", err
	}

	return role, nil
}

func (u *adminRepository) Register(username string, password string) (*string, error) {

	var admin Admin
	err := u.db.QueryRow("SELECT username from tb_admin WHERE username = ? AND password = ?", username, password).Scan(&admin.Username)
	if err != nil {
		return nil, errors.New("Register Failed")

	}

	return &admin.Username, nil
}

func (u *AdminRepository) GetAllAdminData(Admin, error) {
	var admin Admin
	err := u.db.QueryRow("SELECT tb_admin", tb_admin).Scan(&admin.ID, &admin.Password, &admin.Token)
	if err != nil {
		return admin, err

	}

	return admin, nil
}
//sisa edit codingan perlu di cek kembali
