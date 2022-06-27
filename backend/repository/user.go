package repository

import (
	"database/sql"
	"fmt"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUserByID(id int64) (User, error) {
	var user User
	err := u.db.QueryRow("SELECT * from tb_siswa WHERE id_siswa = ?", id).Scan(&user.ID, &user.Username, &user.Password, &user.Email)
	if err != nil {
		return user, err

	}

	return user, nil
}

func (u *UserRepository) Register(username string, email string, password string) (*string, error) {
	var user User

	SqlStatement := `INSERT INTO tb_siswa (username, email, password) VALUES ( ?, ?, ?)`

	_, err := u.db.Exec(SqlStatement, username, email, password)
	if err != nil {
		return nil, err
	}

	return &user.Username, nil

}

func (u *UserRepository) GetAllUserData() ([]User, error) {
	sqlStatement := `SELECT id_siswa, username, email, password FROM tb_siswa`
	var users []User

	rows, err := u.db.Query(sqlStatement)
	if err != nil {
		return users, err
	}
	defer rows.Close()

	for rows.Next() {
		var user User
		err := rows.Scan(
			&user.ID,
			&user.Username,
			&user.Email,
			&user.Password,
		)

		if err != nil {
			return users, nil

		}

		users = append(users, user)
	}

	return users, nil
}

func (c *UserRepository) UpdateProfile(id int64, username string, email string, password string) (*string, error) {

	SqlStatement := `Update tb_siswa SET username = ?, email = ?, password = ? WHERE id_siswa= ?`
	_, err := c.db.Exec(SqlStatement, username, email, password, id)
	if err != nil {
		return nil, err
	}

	return &username, nil

}

func (u *UserRepository) Login(username string, password string) (*string, error) {

	users, err := u.GetAllUserData()

	if err != nil {
		return nil, err
	}

	for _, user := range users {
		if user.Username == username && user.Password == password {
			return &user.Username, nil
		}
	}
	return nil, fmt.Errorf("Login Failed")
}

// func (u *UserRepository) DeleteUserByID(id int64) error {
// 	sqlStatement := `DELETE FROM tb_siswa WHERE id_siswa= ?`

// 	_, err := u.db.Exec(sqlStatement, id)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }

//sisa edit codingan perlu di cek kembali
