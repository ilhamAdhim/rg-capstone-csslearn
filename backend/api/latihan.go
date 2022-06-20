package api 

import (
	"encoding/json"
	"net/http"
)

type LatihanErrorRespone struct {
	Error string `json:"error"`
}

type Latihan struct {
	Title  string `json:"question"`
	question string `json:"question"`
	answer1 string `json:"answer1"`
	answer2 string `json:"answer2"`
	answer3 string `json:"answer3"`
	answer4 string `json:"answer4"`
	answer5 string `json:"answer5"`
	key_answer string `json:"key_answer"`
	// id_course int  `json:"id_course"`

}

type LatihanSuccesRespone struct {
	Latihan []Latihan`json:"latihan"`
}

func (api *API) Latihan(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := LatihanSuccesRespone{}
	respone.Latihan = make([]Latihan, 0)

	Latihan, err := api.latihanRepo.FecthLatihan() 
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

	for _, latihan := range latihan {
		respone.Latihan = append(respone.Latihan, Latihan{
			Title:  latihan.Title_atihan,
			latihan: latihan.Latihan,
			answer1: latihan.answer1,
			answer2: latihan.answer2,
			answer3: latihan.answer3,
			answer4: latihan.answer4,
			answer5: latihan.answer5,
			key_answer : latihan.key_answer,
		})
	}

	encoder.Encode(respone)
}
