package repository

import (
	"database/sql"
)

type ScoreRepository struct {
	db *sql.DB
}

func NewScoreRepository(db *sql.DB) *ScoreRepository {
	return &ScoreRepository{db: db}
}

func (s *ScoreRepository) FetchScore() ([]ScoreCourse, error) {
	sqlStatement := "SELECT"
	var score []ScoreCourse
	rows, err := s.db.Query(sqlStatement)

	if err != nil {
		return score, err
	}
	for rows.Next() {
		var scores ScoreCourse
		err := rows.Scan(&scores.Score)

		if err != nil {
			return score, err
		}

		score = append(score, scores)
	}

	return score, nil
}
