package repository

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
	Email    string `db:"email"`
	Password string `db:"password"`
	Token    string `db:"token"`
}

type CourseCategory struct {
	ID           int64  `db:"id_course_category"`
	Course_ID    int64  `db:"id_course"`
	Title_Materi string `db:"nama_materi"`
	Materi       string `db:"materi"`
	// Start_date   *time.Time `db:"start_date"`
	// End_date     *time.Time `db:"end_date"`
}

type Course struct {
	ID          int64  `db:"id_course"`
	Nama_Course string `db:"nama_materi"`
	Content     string `db:"content"`
}

type TopicbyIdcourse struct {
	ID           int64  `db:"id_course"`
	Title_Materi string `db:"nama_materi"`
	Materi       string `db:"materi"`
}

type Latihan struct {
	ID         int64  `db:"id_latihan"`
	Id_course  int64  `db:"id_course"`
	Question   string `db:"question"`
	Answer1    string `db:"answer1"`
	Answer2    string `db:"answer2"`
	Answer3    string `db:"answer3"`
	Answer4    string `db:"answer4"`
	Key_Answer string `db:"key_answer"`
	Score      int64  `db:"score"`
}

type LatihanByCourse struct {
	Course_ID  int64  `db:"id_course"`
	Question   string `db:"question"`
	Answer1    string `db:"answer1"`
	Answer2    string `db:"answer2"`
	Answer3    string `db:"answer3"`
	Answer4    string `db:"answer4"`
	Key_Answer string `db:"key_answer"`
}
