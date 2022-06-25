package repository

import (
	"database/sql"
)

type CourseRepository struct {
	db *sql.DB
}

func NewCourseRepository(db *sql.DB) *CourseRepository {
	return &CourseRepository{db: db}
}

func (c *CourseRepository) FecthCourse() ([]Course, error) {
	sqlStatement := `
	SELECT 
	id_course,
		nama_course, 
		content 
	FROM 
		tb_course`

	var courses []Course
	rows, err := c.db.Query(sqlStatement)

	if err != nil {
		return courses, err
	}
	for rows.Next() {
		var course Course
		err := rows.Scan(
			&course.ID,
			&course.Nama_Course,
			&course.Content)

		if err != nil {
			return courses, err
		}

		courses = append(courses, course)
	}

	return courses, nil
}

func (c *CourseRepository) FecthCourseByID(id int64) error {

	sqlStatement := `SELECT nama_course, content FROM tb_course WHERE id_course= ?`

	var course Course
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(
		&course.Nama_Course,
		&course.Content)
	if err != nil {
		return err
	}

	return nil
}

func (c *CourseRepository) CreateCourse(title string, konten string) (*string, error) {

	var course Course
	SqlStatement := `INSERT INTO tb_course(nama_course,content) VALUES( ?, ?)`
	_, err := c.db.Exec(SqlStatement, title, konten)
	if err != nil {
		return nil, err
	}

	return &course.Nama_Course, nil

}

func (c *CourseRepository) UpdateCourse(id int64, title string, konten string) (*string, error) {
	// var course Course
	SqlStatement := `Update tb_course SET nama_course = ?, content = ? WHERE id_course = ?`
	_, err := c.db.Exec(SqlStatement, title, konten, id)
	if err != nil {
		return nil, err
	}

	return &title, nil

}

func (c *CourseRepository) DeleteCourseByID(id int64) error {

	sqlStatement := `DELETE FROM tb_course WHERE id_course = ?;`

	_, err := c.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}
