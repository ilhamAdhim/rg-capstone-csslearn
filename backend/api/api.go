package api

import (
	"fmt"
	"net/http"

	"github.com/rg-km/final-project-engineering-70/repository"
)

type API struct {
	usersRepo repository.UserRepository
	// adminRepo repository.AdminRepository
	mux *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
<<<<<<< HEAD
	// mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	// mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
=======
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
>>>>>>> b096bb6eb0f4e41423bbc4690561c1f7d299a2d0
	// mux.Handle("/api/admin/login", api.POST(http.HandlerFunc(api.login)))
	// mux.Handle("/api/admin/logout", api.POST(http.HandlerFunc(api.logout)))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
