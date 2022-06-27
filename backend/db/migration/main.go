package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "db/css-learn.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`

		CREATE TABLE IF NOT EXISTS tb_admin (
			id_admin INTEGER not null PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(11) not null,
			email VARCHAR(50) not null,
			password VARCHAR(11) not null

		);

		CREATE TABLE IF NOT EXISTS  tb_siswa (
			id_siswa INTEGER not null PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(11) not null,
			email VARCHAR(50) not null,
			password VARCHAR(11) not null

		);

		CREATE TABLE  IF NOT EXISTS tb_course (
			id_course INTEGER  not null PRIMARY KEY AUTOINCREMENT,
			nama_course VARCHAR(50) not null,
			content TEXT not null
		);

		CREATE TABLE IF NOT EXISTS tb_latihan (
			id_latihan INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_course INTEGER  not null,
			question VARCHAR(255),
			answer1 VARCHAR(255),
			answer2 VARCHAR(255),
			answer3 VARCHAR(255),
			answer4 VARCHAR(255),
			key_answer VARCHAR(255) not null,
			score INTEGER,
			FOREIGN KEY (id_course) REFERENCES tb_course(id_course)
		);

		CREATE TABLE IF NOT EXISTS tb_course_category (
			id_course_category INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_course INTEGER  not null,
			nama_materi VARCHAR(100),
			materi TEXT,
			start_date DATETIME,
			end_date DATETIME,
			FOREIGN KEY (id_course) REFERENCES tb_course(id_course)
		);

		
		
	INSERT INTO tb_admin(username,email, password) VALUES('admin70','admin70@gmail.com', '1234');
	INSERT INTO tb_siswa(username, email, password) VALUES('widatii', 'widati@gmail.com', 'wida12');`)

	if err != nil {
		panic(err)
	}
}

// CREATE TABLE IF NOT EXISTS  tb_nilai (
// 	id_nilai INTEGER not null PRIMARY KEY AUTOINCREMENT,
// 	id_siswa INT(11),
// 	id_latihan INT(11),
// 	id_course INT(11),
// 	score INT(11) not null,
// 	FOREIGN KEY (id_siswa) REFERENCES tb_siswa(id_siswa),
// 	FOREIGN KEY (id_latihan) REFERENCES tb_latihan(id_latihan),
// 	FOREIGN KEY (id_course) REFERENCES tb_course(id_course)
// );
