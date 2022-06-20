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
	scoreRepo          repository.ScoreRepository
	courseRepo		   repository.CourseRepository
	latihanRepo		   repository.LatihanRepository
	mux                *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, adminsRepo, categorycourseRepo, scoreRepo, courseRepo, latihanRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	// mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	// mux.Handle("/api/admin/loginadmin", api.POST(http.HandlerFunc(api.loginadmin)))
	// mux.Handle("/api/admin/logoutadmin", api.POST(http.HandlerFunc(api.logoutadmin)))
	mux.Handle("/api/course/id_course", api.GET(http.HandlerFunc(api.logout)))
	mux.Handle("/api/course/create", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/course/update", api.POST(http.HandlerFunc(api.logout)))
	// mux.Handle("/api/course/delete", api.DELETE(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/id_latihan", api.GET(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/id_course", api.GET(http.HandlerFunc(api.logout)))
	mux.Handle("/api/latihan/update", api.POST(http.HandlerFunc(api.logout)))
	// mux.Handle("/api/latihan/delete", api.DELETE(http.HandlerFunc(api.logout)))




	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
