package api

// import (
// 	"encoding/json"
// 	"net/http"
// )

// type ScoreErrorRespone struct {
// 	Error string `json:"error"`
// }

// type Score struct {
// 	Nama   string `json:"nama_siswa"`
// 	Course string `json:"nama_course"`
// 	Score  string `json:"score"`
// }

// type ScoreSuccesRespone struct {
// 	Scores []Score `json:"score"`
// }

// func (api *API) scores(w http.ResponseWriter, req *http.Request) {
// 	api.AllowOrigin(w, req)
// 	score, err := api.scoreRepo.FetchScore()
// 	encoder := json.NewEncoder(w)

// 	defer func() {
// 		if err != nil {
// 			w.WriteHeader(http.StatusBadRequest)
// 			encoder.Encode(ScoreErrorRespone{Error: err.Error()})
// 			return
// 		}
// 	}()

// 	encoder.Encode(ScoreSuccesRespone{Scores: score})
// }
