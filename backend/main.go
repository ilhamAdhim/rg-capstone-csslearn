package main

import (
	"database/sql"

	"github.com/rg-km/final-project-engineering-70/backend/api"
	"github.com/rg-km/final-project-engineering-70/backend/repository"
)

func main() {
	db, err := sql.Open("sqlite3", "db/css-learn.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)

	mainAPI := api.NewAPI(*usersRepo)
	mainAPI.Start()
}
