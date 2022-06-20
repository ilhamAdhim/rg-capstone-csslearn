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
	sqlStatement := `SELECT question, answer1, answer2, answer3, answer4, answer5, key_answer FROM tb_latihan`
	var latihan []Latihan
	rows, err := c.db.Query(sqlStatement)

	if err != nil {
		return latihan, err
	}
	for rows.Next() {
		var Latihan
		err := rows.Scan(&latihan.Title_question, &Latihan.answer1, &Latihan.answer2, &Latihan.answer3, &Latihan.answer4, &Latihan.answer5, &Latihan.key_answer)

		if err != nil {
			return Latihan, err
		}

		latihan = append(latihan)
	}

	return latihan, nil
}

func (c *LatihanRepository) FecthLatihanByID(id int64) (Latihan, error) {

	sqlStatement := `SELECT question FROM tb_latihan WHERE id_latihan= ?`

	var latihan Latihan
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&latihan.ID, &latihan.question)
	if err != nil {
		return latihan, err
	}

	return latihan, nil
}

func (c *LatihanRepository) FecthLatihanByID_course(id int64) (Latihan, error) {

	sqlStatement := `SELECT id_course FROM tb_latihan WHERE id_latihan= ?`

	var latihan Latihan
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&latihan.ID, &latihan.id_course)
	if err != nil {
		return latihan, err
	}

	return latihan, nil
}

// func (c *LatihanRepository) UpdateLatihan([]Latihan) (*string, error) {
// 	var latihan Latihan
// 	SqlStatement := `Update tb_latihan SET question = ?, latihan = ? from tb_latihan WHERE id_latihan = ?`
// 	_, err := c.db.Exec(SqlStatement, &latihan.ID, &latihan.Title_question, &course.question, &latihan.id_course)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &latihan.Title_question, nil

// }

// func (c *LatihanRepository) DeleteLatihanByID(id int64) error {

// 	sqlStatement := `DELETE *FROM tb_latihan WHERE id_latihan = ?;`

// 	_, err := c.db.Exec(sqlStatement, id)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }
