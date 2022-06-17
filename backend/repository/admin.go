package repository

import "database/sql"

type AdminRepository interface {
}

type adminRepository struct {
	db *sql.DB
}

func NewAdminRepository(db *sql.DB) AdminRepository {
	return &adminRepository{db: db}
}
