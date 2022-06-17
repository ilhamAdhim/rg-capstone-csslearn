package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// Run This Script for migration db
func main() {
	db, err := sql.Open("sqlite3", "../css-learn.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`

		CREATE TABLE IF NOT EXISTS tb_admin (
			id_admin INTEGER not null PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(11) not null,
			password VARCHAR(11) not null

		);

		CREATE TABLE IF NOT EXISTS  tb_siswa (
			id_siswa INTEGER not null PRIMARY KEY AUTOINCREMENT,
			username VARCHAR(11) not null,
			jenis_kelamin TEXT CHECK( jenis_kelamin IN ('P','L')) not null DEFAULT 'P',
			email VARCHAR(50) not null,
			password VARCHAR(11) not null

		);

		CREATE TABLE  IF NOT EXISTS tb_course_css (
			id_course INTEGER  not null PRIMARY KEY AUTOINCREMENT,
			id_course_category INT(11) not null,
			nama_course VARCHAR(50) not null,
			content TEXT not null,
			FOREIGN KEY (id_course_category) REFERENCES tb_course_category(id_course_category)
		);

		CREATE TABLE  IF NOT EXISTS tb_latihan (
			id_latihan INT(11) not null,
			id_course_category INT(11) not null,
			id_course INT(11) not null,
			question VARCHAR(255) not null,
			answer1 VARCHAR(255) not null,
			answer2 VARCHAR(255) not null,
			answer3 VARCHAR(255) not null,
			answer4 VARCHAR(255) not null,
			answer5 VARCHAR(255) not null,
			key_answer VARCHAR(255) not null,
			FOREIGN KEY (id_course_category) REFERENCES tb_course_category(id_course_category),
			FOREIGN KEY (id_course) REFERENCES tb_course(id_course)
		);

		CREATE TABLE  IF NOT EXISTS tb_course_category (
			id_course_category INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_siswa INT(11) not null,
			nama_materi VARCHAR(100),
			materi TEXT,
			start_date DATETIME,
			end_date TIMESTAMP,
			FOREIGN KEY (id_siswa) REFERENCES tb_siswa(id_siswa)
		);

		CREATE TABLE IF NOT EXISTS  tb_nilai (
			id_nilai INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_siswa INT(11) not null,
			id_latihan INT(11) not null,
			id_course_category INT(11) not null,
			score INT(11) not null,
			FOREIGN KEY (id_siswa) REFERENCES tb_siswa(id_siswa),
			FOREIGN KEY (id_latihan) REFERENCES tb_latihan(id_latihan),
			FOREIGN KEY (id_course_category) REFERENCES tb_course_category(id_course_category)
		);

		CREATE TABLE IF NOT EXISTS tb_roadmap(
			id_roadmap INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_course_category INT(11) not null,
			nama VARCHAR(45),
			FOREIGN KEY (id_course_category) REFERENCES tb_course_category(id_course_category)
		);

		
	INSERT INTO tb_admin(username, password) VALUES('admin70', '1234');`)

	if err != nil {
		panic(err)
	}
}
