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
	sqlStatement := `SELECT nama_course, course, content FROM tb_course`
	var course []Course
	rows, err := c.db.Query(sqlStatement)

	if err != nil {
		return course, err
	}
	for rows.Next() {
		var Course
		err := rows.Scan(&course.Title_Content, &course.Content)

		if err != nil {
			return course, err
		}

		course = append(course)
	}

	return course, nil
}

func (c *CourseRepository) FecthCourseByID(id int64) (Course, error) {

	sqlStatement := `SELECT nama_course, materi  FROM tb_course WHERE id_course= ?`

	var course Course
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&course.ID, &course.nama_course, &course.Content)
	if err != nil {
		return course, err
	}

	return course, nil
}

func (c *CourseRepository) CreateCourse([]Course) (*string, error) {

	var course Course
	SqlStatement := `INSERT INTO (nama_course, course) from tb_course VALUES ( ?, ?)`
	_, err := c.db.Exec(SqlStatement, &course.Title_nama_course, &course.nama_course, &course.content)
	if err != nil {
		return nil, err
	}

	return &course.Title_nama_course, nil

}

func (c *CourseRepository) UpdateCourse([]Course) (*string, error) {
	var course Course
	SqlStatement := `Update tb_course SET nama_course = ?, course = ? from tb_course WHERE id_course = ?`
	_, err := c.db.Exec(SqlStatement, &course.ID, &course.Title_nama_course, &course.nama_course, &course.content)
	if err != nil {
		return nil, err
	}

	return &course.Title_nama_course, nil

}

// func (c *CourseRepository) DeleteCourseByID(id int64) error {

// 	sqlStatement := `DELETE *FROM tb_course WHERE id_course = ?;`

// 	_, err := c.db.Exec(sqlStatement, id)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }
