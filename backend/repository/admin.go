package repository

import (
	"database/sql"
	"errors"
)

type AdminRepository interface {
	FetchAdminByID(id int64) (Admin, error)
	Loginadmin(username string, password string) (*string, error)
	// GetAdminRole(username string) (string, error)
	Registeradmin(username string, password string) (*string, error)
	GetAllAdminData(Admin, error)
}

type adminRepository struct {
	db *sql.DB
}

func NewAdminRepository(db *sql.DB) *adminRepository {
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

func (u *adminRepository) Loginadmin(username string, password string) (*string, error) {

	var admin Admin
	err := u.db.QueryRow("SELECT username from tb_admin WHERE username = ? AND password = ?", username, password).Scan(&admin.Username)
	if err != nil {
		return nil, errors.New("Login Failed")

	}

	return &admin.Username, nil
}

// func (u *adminRepository) GetAdminRole(username string) (string, error) {
// 	var role string
// 	err := u.db.QueryRow("SELECT role from tb_admin WHERE username = ?", username).Scan(&role)
// 	if err != nil {
// 		return "", err
// 	}

// 	return role, nil
// }

func (u *adminRepository) Registeradmin(username string, password string) (*string, error) {
	var admin Admin
	_, err := u.db.Exec("INSERT username, password from tb_admin VALUES ( ?, ? )", username, password)
	if err != nil {
		return nil, errors.New("Register Failed")

	}

	return &admin.Username, nil
}

// func (u *adminRepository) GetAllAdminData([]Admin, error) {
// 	var admin Admin
// 	rows, err := u.db.Query("SELECT *FROM tb_admin")
// 	if err != nil {
// 		return admin, err

// 	}

// 	defer rows.Close()
// 	for rows.Next() {
// 		var admins Admin

// 		if err := rows.Scan(&admins.Username, &admins.Password); err != nil {
// 			return admin, nil
// 		}
// 		admin = append(admin, admins)
// 	}

// 	return admin, nil

// }

//sisa edit codingan perlu di cek kembali
