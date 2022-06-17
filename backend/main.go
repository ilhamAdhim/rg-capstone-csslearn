package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
<<<<<<< HEAD
=======

>>>>>>> cf91618c520000875814da66d502018ad8b0169b
	"github.com/rg-km/final-project-engineering-70/api"
	"github.com/rg-km/final-project-engineering-70/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "db/css-learn.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	adminRepo := repository.NewAdminRepository(db)

	mainAPI := api.NewAPI(usersRepo, adminRepo)
	mainAPI.Start()
}
