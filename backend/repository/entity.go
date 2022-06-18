package repository

type User struct {
	ID           int64  `db:"id_siswa"`
	Username     string `db:"username"`
	JenisKelamin string `db:"jenis_kelamin"`
	Email        string `db:"email"`
	Password     string `db:"password"`
	Token        string `db:"token"`
}

type Admin struct {
	ID           int64  `db:"id_siswa"`
	Username     string `db:"username"`
	Password     string `db:"password"`
	Token        string `db:"token"`
}
