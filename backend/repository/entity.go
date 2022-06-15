package repository

import "time"

type User struct {
	ID            int64  `db:"id_siswa"`
	Username      string `db:"username"`
	jenis_kelamin string `db:"jenis_kelamin"`
	email         string `db:"email"`
	Password      string `db:"password"`
	Token         string `db:"token"`
}
