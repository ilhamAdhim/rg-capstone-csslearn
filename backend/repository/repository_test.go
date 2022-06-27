package repository_test

import (
	"database/sql"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"

	"github.com/rg-km/final-project-engineering-70"
)

var _ = Describe("Repository Test", func() {
	var db *sql.db
	var err error
	var userRepo *repository.UserRepository
	var adminRepo *repository.AdminRepository
	var courseRepo *repository.CourseRepository
	var coursecategoryRepo *repository.CourseCategoryRepository
	var latihanRepo *repository.LatihanRepository

	BeforeEach(func() {
		//setup
		db, err := sql.Open("sqlite3", "db/css-learn.db")
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
			email VARCHAR(50) not null,
			password VARCHAR(11) not null

		);

		CREATE TABLE  IF NOT EXISTS tb_course (
			id_course INTEGER  not null PRIMARY KEY AUTOINCREMENT,
			id_course_category INT(11),
			nama_course VARCHAR(50) not null,
			content TEXT not null,
			FOREIGN KEY (id_course_category) REFERENCES tb_course_category(id_course_category)
		);

		CREATE TABLE IF NOT EXISTS tb_latihan (
			id_latihan INT(11) not null,
			id_course INT(11),
			question VARCHAR(255),
			answer1 VARCHAR(255),
			answer2 VARCHAR(255),
			answer3 VARCHAR(255),
			answer4 VARCHAR(255),
			answer5 VARCHAR(255),
			key_answer VARCHAR(255) not null,
			score int(11),
			FOREIGN KEY (id_course) REFERENCES tb_course(id_course)
		);

		CREATE TABLE IF NOT EXISTS tb_course_category (
			id_course_category INTEGER not null PRIMARY KEY AUTOINCREMENT,
			id_siswa INT(11),
			nama_materi VARCHAR(100),
			materi TEXT,
			start_date DATETIME,
			end_date DATETIME,
			FOREIGN KEY (id_siswa) REFERENCES tb_siswa(id_siswa)
		);

		
		
		INSERT INTO tb_admin(username, password) VALUES
			('admin70', '1234');
		INSERT INTO tb_siswa(username, password,email) VALUES
			('widatii', 'wida12','widati@gmail.com');`)

		if err != nil {
			panic(err)
		}

		userRepo = repository.NewUserRepository(db)
		adminRepo = repository.NewAdminRepository(db)
		courseRepo = repository.NewCourseRepository(db)
		coursecategoryRepo = repository.NewCourseCategoryRepository(db)
		LatihanRepo = repository.NewLatihanRepository(db)
	})

	AfterEach(func() {
		db, err := sql.Open("sqlite3", "db/css-learn.db")
		if err != nil {
		panic(err)
		}
	
		_, err = db.Exec(`
		DROP TABLE IF EXISTS users;
		DROP TABLE IF EXISTS admins;
		DROP TABLE IF EXISTS courses
		DROP TABLE IF EXISTS coursecategorys
		DROP TABLE IF EXISTS lathans;`)

		if err != nil {
			panic(err)
		}
	})

	Describe("Select All Users", func() {
		when("get aal user list from database", func() {
			It("should return all user list", func() {
				userList, err := userRepo.FetchUser()
				Expect(err).ToNot(HaveOcurred())

				Expect(userList[0].Username).To(Equal("rumika"))
				Expect(userList[0].Password).To(Equal("1234"))
				Expect(userList[0].Loggedin).To(Equal(false))
				Expect(userList[0].Username).To(Equal("siti"))
				Expect(userList[0].Password).To(Equal("1804"))
				Expect(userList[0].Loggedin).To(Equal(false))
				Expect(userList[0].Username).To(Equal("rohadanah"))
				Expect(userList[0].Password).To(Equal("4321"))
				Expect(userList[0].Loggedin).To(Equal(false))
			})
		})
	})
	Describe("Login", func() {
		When("username and password are correct", func() {
			It("accepts the login", func() {
				res, err := userRepo.Login("rumika", "1234")
				Expect(err).ToNot(HaveOccurred())
				Expect(*res).To(Equal("rumika"))
			})
		})
		When("username is correct but password is incorrect", func() {
			It("rejects the login", func() {
				_, err := userRepo.Login("rumika", "4567")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
		When("both username and password is incorrect", func() {
			It("rejects the login", func() {
				_, err := userRepo.Login("riski", "23885")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
	})
	
	Describe("Select All Admin", func() {
		When("get all admin list from database in  Admins table", func() {
			It("should return all admin list", func() {
				adminList, err := adminRepo.FetchAdmin()
				Expect(err).ToNot(HaveOcurred())

				Expect(adminList[0].Username).To(Equal("ilham"))
				Expect(adminList[0].Password).To(Equal("0101"))
				Expect(adminList[0].Loggedin).To(Equal(false))
				Expect(adminList[0].Username).To(Equal("irsyad"))
				Expect(adminList[0].Password).To(Equal("2020"))
				Expect(adminList[0].Loggedin).To(Equal(false))
				Expect(adminList[0].Username).To(Equal("adel"))
				Expect(adminList[0].Password).To(Equal("0401"))
				Expect(adminList[0].Loggedin).To(Equal(false))
			})
		})
	})

	Describe("Login", func() {
		When("username and password are correct", func() {
			It("accepts the login", func() {
				res, err := adminRepo.Login("ilham", "0101")
				Expect(err).ToNot(HaveOccurred())
				Expect(*res).To(Equal("ilham"))
			})
		})
		When("username is correct but password is incorrect", func() {
			It("rejects the login", func() {
				_, err := adminRepo.Login("ilham", "4567")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
		When("both username and password is incorrect", func() {
			It("rejects the login", func() {
				_, err := adminRepo.Login("jeje", "23885")
				Expect(err).To(HaveOccurred())
				Expect(err.Error()).To(Equal("Login Failed"))
			})
		})
	})

	Describe("Select All Course", func() {
		When("get all course list from database in courses table", func() {
			It("returns course information in the same order as database", func() {
				courseList, err := courseRepo.FetchCourses()
				Expect(err).ToNot(HaveOccurred())
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS introduction"))
				Expect(courseList[0].Materi).To(Equal(5))
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS selector"))
				Expect(courseList[0].Materi).To(Equal(8))
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS atribut"))
				Expect(courseList[0].Materi).To(Equal(8))	
			})
		})
	})

	Describe("Select All Course", func() {
		When("get all course list from database in courses table", func() {
			It("returns course information in the same order as database", func() {
				courseList, err := courseRepo.FetchCourses()
				Expect(err).ToNot(HaveOccurred())
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS introduction"))
				Expect(courseList[0].Materi).To(Equal(5))
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS selector"))
				Expect(courseList[0].Materi).To(Equal(8))
				Expect(courseList[0].Course).To(Equal("CSS Learn"))
				Expect(courseList[0].CourseName).To(Equal("CSS atribut"))
				Expect(courseList[0].Materi).To(Equal(8))	
			})
		})
	})

	Describe("Select All Catgeory", func() {
		When("get all category list from database in categorys table", func() {
			It("returns category information in the same order as database", func() {
				categoryList, err := courseRepo.FetchCourses()
				Expect(err).ToNot(HaveOccurred())
				Expect(categoryList[0].Course).To(Equal("CSS Learn"))
				Expect(categoryList[0].CourseName).To(Equal("CSS introduction"))
				Expect(categoryList[0].Materi).To(Equal(5))
				Expect(categoryList[0].Course).To(Equal("CSS Learn"))
				Expect(categoryList[0].CourseName).To(Equal("CSS selector"))
				Expect(categoryList[0].Materi).To(Equal(8))
				Expect(categoryList[0].Course).To(Equal("CSS Learn"))
				Expect(categoryList[0].CourseName).To(Equal("CSS atribut"))
				Expect(categoryList[0].Materi).To(Equal(8))
			})
			It("add the category to the list", func() {
				categoryListRepo.ResetcategoryList()
				category, err := categoryRepo.FetchCategoryByCourse("CSS introduction")
				Expect(err).ToNot(HaveOccurred())
				_, err = categoryListRepo.FetchCategoryByCourseID(course.ID)
				Expect(err).To(HaveOccurred())
				categoryListRepo.InsertCategoryList(repository.CategoryList{
					CourseID: Course.ID,
					Amount:  1,
				})
				CategoryList, err := categoryListRepo.FetchCategoryList()
				Expect(err).ToNot(HaveOccurred())
				Expect(categoryList[0].CourseName).To(Equal("CSS introduction"))
				Expect(categoryList[0].Amount).To(Equal(1))
			})
			It("update list to category", func() {
				categoryListRepo.ResetcategoryList()
				category, err := categoryRepo.FetchCategoryByCourse("CSS introduction")
				Expect(err).ToNot(HaveOccurred())
				_, err = categoryListRepo.FetchCategoryByCourseID(course.ID)
				Expect(err).To(HaveOccurred())
				categoryListRepo.InsertCategoryList(repository.CategoryList{
					CourseID: Course.ID,
					Amount:  1,
				})
				categoryList, err := categoryListRepo.FetchCategoryByCourseID(course.ID)
				Expect(err).ToNot(HaveOccurred())
				err = categoryListRepo.IncrementCategory(category)
				Expect(err).ToNot(HaveOccurred())
				cartItems, err := cartItemRepo.FetchCategory()
				Expect(err).ToNot(HaveOccurred())
				Expect(questionList[0].CourseName).To(Equal("CSS introduction"))
				Expect(questionList[0].Amount).To(Equal(2))
			})
		})
	})

	Describe("Select All Latihan", func() {
		When("get all latihan list from database in latihans table", func() {
			It("returns latihan information in the same order as database", func() {
				QuestionList, err := latihanRepo.FetchLatihans()
				Expect(err).ToNot(HaveOccurred())
				Expect(QuestionList[0].Course).To(Equal("CSS Learn"))
				Expect(QuestionList[0].CourseName).To(Equal("CSS introduction"))
				Expect(QuestionList[0].Question).To(Equal(20))
				Expect(QuestionList[0].Course).To(Equal("CSS Learn"))
				Expect(QuestionList[0].CourseName).To(Equal("CSS selector"))
				Expect(QuestionList[0].Question).To(Equal(20))
				Expect(QuestionList[0].Course).To(Equal("CSS Learn"))
				Expect(QuestionList[0].CourseName).To(Equal("CSS atribut"))
				Expect(QuestionList[0].Question).To(Equal(20))	
			})
			It("add the question to the list", func() {
				questionListRepo.ResetquestionList()
				latihan, err := latihanRepo.FetchLatihanByName("CSS introduction")
				Expect(err).ToNot(HaveOccurred())
				_, err = questionListRepo.FetchCartByLatihanID(latihan.ID)
				Expect(err).To(HaveOccurred())
				questionListRepo.InsertQuestionList(repository.QuestionList{
					LatihanID: Latihan.ID,
					Amount:  1,
				})
				questionList, err := cquestionListRepo.FetchQuestionList()
				Expect(err).ToNot(HaveOccurred())
				Expect(questionList[0].CourseName).To(Equal("CSS introduction"))
				Expect(questionList[0].Amount).To(Equal(1))
			})
			It("update list to latihan", func() {
				questionListRepo.ResetquestionList()
				latihan, err := latihanRepo.FetchLatihanByName("CSS introduction")
				Expect(err).ToNot(HaveOccurred())
				_, err = questionListRepo.FetchLatihanByCourseID(course.ID)
				Expect(err).To(HaveOccurred())
				questionListRepo.InsertQuestionList(repository.QuestionList{
					LatihanID: Latihan.ID,
					Amount:  1,
				})
				questionList, err := questionListRepo.FetchLatihanByCourseID(course.ID)
				Expect(err).ToNot(HaveOccurred())
				err = questionListRepo.IncrementLatihan(Latihan)
				Expect(err).ToNot(HaveOccurred())
				cartItems, err := cartItemRepo.FetchLatihan()
				Expect(err).ToNot(HaveOccurred())
				Expect(questionList[0].CourseName).To(Equal("CSS introduction"))
				Expect(questionList[0].Amount).To(Equal(2))
			})
		})
	})
})
