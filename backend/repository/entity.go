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

type Course struct {
	ID            int64  `db:"id_course_category"`
	Siswa_ID      int64  `db:"id_siswa"`
	Title_Content string `db:"nama_materi"`
	Content       string `db:"materi"`
}

type Latihan struct {
	ID                int64  `db:"id_latihan"`
	Course_ID         int64  `db:"id_course"`
	Question          string `db:"question"`
	Answer1           string `db:"answer1"`
	Answer2           string `db:"answer2"`
	Answer3           string `db:"answer3"`
	Answer4           string `db:"answer4"`
	Answer5           string `db:"answer5"`
	Key_Answer        string `db:"key_answer"`
	Score             int64  `db:"score"`
}

