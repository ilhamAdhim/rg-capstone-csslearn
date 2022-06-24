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
	mux.Handle("/api/user/editprofile", api.PUT(http.HandlerFunc(api.editProfile)))
	mux.Handle("/api/user/getusers", api.GET(http.HandlerFunc(api.getusers)))

	mux.Handle("/api/admin/getadmins", api.GET(http.HandlerFunc(api.getadmins)))
	mux.Handle("/api/admin/loginadmin", api.POST(http.HandlerFunc(api.loginadmin)))
	mux.Handle("/api/admin/logoutadmin", api.POST(http.HandlerFunc(api.logoutadmin)))

	mux.Handle("/api/course/id_course", api.GET(http.HandlerFunc(api.course)))
	mux.Handle("/api/course/create", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/course/update", api.PUT(http.HandlerFunc(api.logout)))
	mux.Handle("/api/course/delete", api.DELETE(http.HandlerFunc(api.logout)))

	mux.Handle("/api/topic/getcourse", api.GET(http.HandlerFunc(api.getcoursecategory)))
	mux.Handle("/api/topic/getcoursebyid", api.GET(http.HandlerFunc(api.getcoursecategorybyid)))
	mux.Handle("/api/topic/insertcourse", api.POST(http.HandlerFunc(api.insertCourseCategory)))
	mux.Handle("/api/topic/updatecourse", api.PUT(http.HandlerFunc(api.updateCourseCategory)))
	mux.Handle("/api/topic/deletecourse", api.DELETE(http.HandlerFunc(api.deleteCourseCategory)))

	mux.Handle("/api/latihan/id_latihan", api.GET(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/id_course", api.GET(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/update", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/delete", api.DELETE(http.HandlerFunc(api.logout)))
	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
