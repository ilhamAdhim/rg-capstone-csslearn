package repository

import "time"

type User struct {
	ID       int64  `db:"id_siswa"`
	Username string `db:"username"`
	Email    string `db:"email"`
	Password string `db:"password"`
	Token    string `db:"token"`
}

type Admin struct {
	ID       int64  `db:"id_admin"`
	Username string `db:"username"`
	Password string `db:"password"`
	Token    string `db:"token"`
}

type CourseCategory struct {
	ID           int64      `db:"id_course_category"`
	Siswa_ID     int64      `db:"id_siswa"`
	Title_Materi string     `db:"nama_materi"`
	Materi       string     `db:"materi"`
	Start_date   *time.Time `db:"start_date"`
	End_date     *time.Time `db:"end_date"`
}

type ScoreCourse struct {
	ID         int64 `db:"id_nilai"`
	Siswa_ID   int64 `db:"id_siswa"`
	Latihan_ID int64 `db:"id_latihan`
	Course_ID  int64 `db:"id_course"`
	Score      int64 `db:"score"`
}
