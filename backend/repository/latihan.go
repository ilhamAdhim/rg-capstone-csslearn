package repository

import (
	"database/sql"
)

type LatihanRepository struct {
	db *sql.DB
}

func NewLatihanRepository(db *sql.DB) *LatihanRepository {
	return &LatihanRepository{db: db}
}

func (c *LatihanRepository) FecthLatihan() ([]Latihan, error) {
	sqlStatement := `SELECT id_latihan, id_course, question, answer1, answer2, answer3, answer4, key_answer FROM tb_latihan`
	var latihans []Latihan
	rows, err := c.db.Query(sqlStatement)

	if err != nil {
		return latihans, err
	}
	for rows.Next() {
		var latihan Latihan
		err := rows.Scan(&latihan.ID, &latihan.Id_course, &latihan.Question, &latihan.Answer1, &latihan.Answer2, &latihan.Answer3, &latihan.Answer4, &latihan.Key_Answer)
		if err != nil {
			return latihans, err
		}

		latihans = append(latihans, latihan)
	}

	return latihans, nil
}

func (c *LatihanRepository) FecthLatihanByID(id int64) (Latihan, error) {

	sqlStatement := `SELECT question FROM tb_latihan WHERE id_latihan= ?`

	var latihan Latihan
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&latihan.ID, &latihan.Question)
	if err != nil {
		return latihan, err
	}

	return latihan, nil
}

func (c *LatihanRepository) CreateLatihan(courseid int64, soal string, answer1 string, answer2 string, answer3 string, answer4 string, keyanswer string) (*string, error) {

	// var latihan Latihan
	SqlStatement := `INSERT INTO 
			tb_latihan(
				id_course,
				question,
				answer1,
				answer2,
				answer3,
				answer4,
				key_answer) 
				VALUES(?,?, ?, ?, ? , ? ,? )`
	_, err := c.db.Exec(SqlStatement, courseid, soal, answer1, answer2, answer3, answer4, keyanswer)

	if err != nil {
		return nil, err
	}

	return &soal, nil

}

func (c *LatihanRepository) FecthLatihanByidCourse(id int64) ([]LatihanByCourse, error) {

	sqlStatement := `
		SELECT 
		c.id_course,
		l.question,
		l.answer1,
		l.answer2,
		l.answer3,
		l.answer4,
		l.key_answer FROM tb_latihan l
		INNER JOIN tb_course c ON c.id_course = l.id_course 
		WHERE c.id_course= ?`

	var course []LatihanByCourse
	rows, err := c.db.Query(sqlStatement, id)

	if err != nil {
		return course, err
	}

	for rows.Next() {
		var category LatihanByCourse
		err := rows.Scan(
			&category.Course_ID,
			&category.Question,
			&category.Answer1,
			&category.Answer2,
			&category.Answer3,
			&category.Answer4,
			&category.Key_Answer,
		)

		if err != nil {
			return course, err
		}

		course = append(course, category)
	}

	return course, nil
}

func (c *LatihanRepository) UpdateLatihan(id int64, courseid int64, soal string, answer1 string, answer2 string, answer3 string, answer4 string, keyanswer string) (*string, error) {
	// var latihan Latihan
	SqlStatement := `Update 
	tb_latihan SET 
		id_course = ?,
		question = ?, 
		answer1 = ?,
		answer2 = ?,
		answer3 = ?,
		answer4 = ?,
		key_answer = ? WHERE id_latihan = ?`

	_, err := c.db.Exec(SqlStatement, courseid, soal, answer1, answer2, answer3, answer4, keyanswer, id)

	if err != nil {
		return nil, err
	}

	return &soal, nil

}

func (c *LatihanRepository) DeleteLatihanByID(id int64) error {

	sqlStatement := `DELETE FROM tb_latihan WHERE id_latihan= ?;`

	_, err := c.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}
