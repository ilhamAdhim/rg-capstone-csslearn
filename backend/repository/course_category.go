package repository

import (
	"database/sql"
)

type CourseCategoryRepository struct {
	db *sql.DB
}

func NewCourseCategoryRepository(db *sql.DB) *CourseCategoryRepository {
	return &CourseCategoryRepository{db: db}
}

func (c *CourseCategoryRepository) FecthCategoryCourse() ([]CourseCategory, error) {
	sqlStatement := `SELECT nama_materi, materi, start_date FROM tb_course_category`
	var course []CourseCategory
	rows, err := c.db.Query(sqlStatement)

	if err != nil {
		return course, err
	}
	for rows.Next() {
		var category CourseCategory
		err := rows.Scan(&category.Title_Materi, &category.Materi, &category.Start_date)

		if err != nil {
			return course, err
		}

		course = append(course, category)
	}

	return course, nil
}

func (c *CourseCategoryRepository) FecthCategoryCourseByID(id int64) (CourseCategory, error) {

	sqlStatement := `SELECT nama_materi, materi  FROM tb_course_category WHERE id_course_category= ?`

	var coursecategory CourseCategory
	row := c.db.QueryRow(sqlStatement, id)
	err := row.Scan(&coursecategory.ID, &coursecategory.Title_Materi, &coursecategory.Materi)
	if err != nil {
		return coursecategory, err
	}

	return coursecategory, nil
}

func (c *CourseCategoryRepository) CreateCourseCategory(title string, materi string) (*string, error) {

	var course CourseCategory
	SqlStatement := `INSERT INTO (nama_materi, materi) from tb_course_category VALUES ( ?, ?)`
	_, err := c.db.Exec(SqlStatement, title, materi)
	if err != nil {
		return nil, err
	}

	return &course.Title_Materi, nil

}

func (c *CourseCategoryRepository) UpdateCourseCategory(id int64) (*string, error) {
	var course CourseCategory
	SqlStatement := `Update tb_course_category SET nama_materi = ?, materi = ? from tb_course_category WHERE id_course_category = ?`
	_, err := c.db.Exec(SqlStatement, &course.ID, &course.Title_Materi, &course.Materi)
	if err != nil {
		return nil, err
	}

	return &course.Title_Materi, nil

}

func (c *CourseCategoryRepository) DeleteCourseCategoryByID(id int64) error {

	sqlStatement := `DELETE *FROM tb_course category WHERE id_course_category = ?;`

	_, err := c.db.Exec(sqlStatement, id)
	if err != nil {
		return err
	}

	return nil
}
