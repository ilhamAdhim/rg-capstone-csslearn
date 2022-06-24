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
		nama_course, 
		course, 
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
		err := rows.Scan(&course.Title_Content, &course.Content)

		if err != nil {
			return courses, err
		}

		courses = append(courses, course)
	}

	return courses, nil
}

func (c *CourseRepository) FecthCourseByID(id int64) (Course, error) {

	sqlStatement := `SELECT nama_course, content  FROM tb_course WHERE id_course= ?`

	var course Course
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&course.ID, &course.Title_Content, &course.Content)
	if err != nil {
		return course, err
	}

	return course, nil
}

func (c *CourseRepository) CreateCourse([]Course) (*string, error) {

	var course Course
	SqlStatement := `
	INSERT INTO
		tb_course 
		(
			nama_course, 
			course
		) 
		VALUES 
		( ?, ?)`
	_, err := c.db.Exec(SqlStatement, &course.Title_Content, &course.Content)
	if err != nil {
		return nil, err
	}

	return &course.Title_Content, nil

}

func (c *CourseRepository) UpdateCourse([]Course) (*string, error) {
	var course Course
	SqlStatement := `Update tb_course SET nama_course = ?, course = ? from tb_course WHERE id_course = ?`
	_, err := c.db.Exec(SqlStatement, nama_course, id)
	if err != nil {
		return nil, err
	}

	return &nama_course, nil

}

unc (c *CourseCategoryRepository) DeleteCourseCategoryByID(id int64) error {

	sqlStatement := `DELETE FROM tb_course WHERE id_course = ?;`

	_, err := c.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}
