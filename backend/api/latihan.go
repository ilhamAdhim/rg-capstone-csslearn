package api

import (
	"encoding/json"
	"net/http"
)

type LatihanErrorRespone struct {
	Error string `json:"error"`
}

type Latihan struct {
	Title      string `json:"title"`
	Question   string `json:"question"`
	Answer1    string `json:"answer1"`
	Answer2    string `json:"answer2"`
	Answer3    string `json:"answer3"`
	Answer4    string `json:"answer4"`
	Answer5    string `json:"answer5"`
	Key_answer string `json:"key_answer"`
	// id_course int  `json:"id_course"`

}

type LatihanSuccesRespone struct {
	Latihan []Latihan `json:"latihan"`
}

func (api *API) Latihan(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := LatihanSuccesRespone{}
	respone.Latihan = make([]Latihan, 0)

	latihan, err := api.latihanRepo.FecthLatihan()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(LatihanErrorRespone{Error: err.Error()})
			return
		}
	}()

	if err != nil {
		return
	}

	for _, list := range latihan {
		respone.Latihan = append(respone.Latihan, Latihan{
			Title:      list.Question,
			Answer1:    list.Answer1,
			Answer2:    list.Answer2,
			Answer3:    list.Answer3,
			Answer4:    list.Answer4,
			Answer5:    list.Answer5,
			Key_answer: list.Key_Answer,
		})
	}

	encoder.Encode(respone)
}
