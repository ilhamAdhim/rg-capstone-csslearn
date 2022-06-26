package repository

import (
	"database/sql"
	"fmt"
)

// type adminRepository interface {
// 	FetchAdminByID(id int64) (Admin, error)
// 	Loginadmin(username string, password string) (*string, error)
// 	// GetAdminRole(username string) (string, error)
// 	Registeradmin(username string, password string) (*string, error)
// 	GetAllAdminData(Admin, error)
// }

type AdminRepository struct {
	db *sql.DB
}

func NewAdminRepository(db *sql.DB) *AdminRepository {
	return &AdminRepository{db: db}
}

func (u *AdminRepository) FetchAdminByID(id int64) (Admin, error) {
	var admin Admin
	err := u.db.QueryRow("SELECT username from tb_admin WHERE id_admin = ?", id).Scan(&admin.ID, &admin.Password, &admin.Token)
	if err != nil {
		return admin, err

	}

	return admin, nil
}

func (u *AdminRepository) GetAllAdminData() ([]Admin, error) {

	sqlStatement := `SELECT id_admin, username, password FROM tb_admin`
	var admin []Admin
	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return admin, err

	}

	defer rows.Close()
	for rows.Next() {
		var admins Admin

		err := rows.Scan(
			&admins.ID,
			&admins.Username,
			&admins.Password,
		)

		if err != nil {
			return admin, nil
		}
		admin = append(admin, admins)
	}

	return admin, nil

}

func (u *AdminRepository) LoginAdmin(username string, password string) (*string, error) {

	admin, err := u.GetAllAdminData()
	if err != nil {
		return nil, err
	}

	for _, admins := range admin {
		if admins.Username == username && admins.Password == password {
			return &admins.Username, nil
		}
	}
	return nil, fmt.Errorf("Login Failed")
}

// func (u *adminRepository) GetAdminRole(username string) (string, error) {
// 	var role string
// 	err := u.db.QueryRow("SELECT role from tb_admin WHERE username = ?", username).Scan(&role)
// 	if err != nil {
// 		return "", err
// 	}

// 	return role, nil
// }

func (u *AdminRepository) RegisterAdmin(username string, password string) (*string, error) {
	var admins Admin
	SqlStatement := `INSERT INTO tb_admin (username, password) VALUES ( ?, ? )`
	_, err := u.db.Exec(SqlStatement, username, password)
	if err != nil {
		return nil, err
	}

	return &admins.Username, nil
}

//sisa edit codingan perlu di cek kembali
