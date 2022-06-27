package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-70/repository"
)

type API struct {
	usersRepo          repository.UserRepository
	adminsRepo         repository.AdminRepository
	categorycourseRepo repository.CourseCategoryRepository
	courseRepo         repository.CourseRepository
	latihanRepo        repository.LatihanRepository
	mux                *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, adminsRepo repository.AdminRepository, categorycourseRepo repository.CourseCategoryRepository, courseRepo repository.CourseRepository, latihanRepo repository.LatihanRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, adminsRepo, categorycourseRepo, courseRepo, latihanRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))

	//Siswa(User)
	mux.Handle("/api/user/editprofile", api.PUT(api.AuthMiddleware(http.HandlerFunc(api.editProfile))))

	//Admin
	mux.Handle("/api/admin/login", api.POST(http.HandlerFunc(api.loginadmin)))
	mux.Handle("/api/admin/logout", api.GET(api.AdminMiddleware(http.HandlerFunc(api.logoutadmin))))
	mux.Handle("/api/user/getusers", api.GET(api.AdminMiddleware(http.HandlerFunc(api.getusers))))
	mux.Handle("/api/admin/getadmins", api.GET(api.AdminMiddleware(http.HandlerFunc(api.getadmins))))

	mux.Handle("/api/course/create", api.POST(api.AdminMiddleware(http.HandlerFunc(api.insertCourse))))
	mux.Handle("/api/course/update", api.PUT(api.AdminMiddleware(http.HandlerFunc(api.updatecourse))))
	mux.Handle("/api/course/delete", api.GET(api.AdminMiddleware(http.HandlerFunc(api.deletecourse))))

	mux.Handle("/api/topic/create", api.POST(api.AdminMiddleware(http.HandlerFunc(api.insertCourseCategory))))
	mux.Handle("/api/topic/update", api.PUT(api.AdminMiddleware(http.HandlerFunc(api.updateCourseCategory))))
	mux.Handle("/api/topic/delete", api.GET(api.AdminMiddleware(http.HandlerFunc(api.deleteCourseCategory))))

	mux.Handle("/api/latihan/update", api.PUT(api.AdminMiddleware(http.HandlerFunc(api.updateTest))))
	mux.Handle("/api/latihan/insert", api.POST(api.AdminMiddleware(http.HandlerFunc(api.insertLatihan))))
	mux.Handle("/api/latihan/delete", api.GET(api.AdminMiddleware(http.HandlerFunc(api.deleteSoal))))

	// Siswa(User) & Admin
	mux.Handle("/api/course/getcourse", api.GET(http.HandlerFunc(api.getcourses)))
	mux.Handle("/api/course/getbyid", api.GET(http.HandlerFunc(api.getcoursebyid)))

	mux.Handle("/api/topic/gettopics", api.GET(http.HandlerFunc(api.getcoursecategory)))
	mux.Handle("/api/topic/getbyidCourse", api.GET(http.HandlerFunc(api.getcategorybyidcourse)))
	mux.Handle("/api/topic/getbyid", api.GET(http.HandlerFunc(api.getcoursecategorybyid)))

	mux.Handle("/api/latihan/getlatihan", api.GET(http.HandlerFunc(api.getlatihan)))
	mux.Handle("/api/latihan/getbyidCourse", api.GET(http.HandlerFunc(api.getlatihanbyidcourse)))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
