package api

import (
	"encoding/json"
	"net/http"
)

type LatihanErrorRespone struct {
	Error string `json:"error"`
}

type Latihan struct {
	// Title      string `json:"title"`
	ID         int64  `json:"id_latihan"`
	Question   string `json:"question"`
	Answer1    string `json:"answer1"`
	Answer2    string `json:"answer2"`
	Answer3    string `json:"answer3"`
	Answer4    string `json:"answer4"`
	Answer5    string `json:"answer5"`
	Key_answer string `json:"key_answer"`
	// id_course int  `json:"id_course"`

}

type LatihanInsert struct {
	// Title      string `json:"title"``
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
	Latihans []Latihan `json:"latihan"`
}

func (api *API) getlatihan(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := LatihanSuccesRespone{}
	respone.Latihans = make([]Latihan, 0)

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
		respone.Latihans = append(respone.Latihans, Latihan{
			ID:       list.ID,
			Question: list.Question,
			Answer1:  list.Answer1,
			Answer2:  list.Answer2,
			Answer3:  list.Answer3,
			Answer4:  list.Answer4,
			Answer5:  list.Answer5,
		})
	}

	encoder.Encode(respone)
}

func (api *API) insertLatihan(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var test LatihanInsert
	err := json.NewDecoder(req.Body).Decode(&test)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.latihanRepo.CreateLatihan(test.Question, test.Answer1, test.Answer2, test.Answer3, test.Answer4, test.Answer5, test.Key_answer)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Insert question Failed"))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Insert question successful"))

}

func (api *API) updateTest(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var test Latihan
	err := json.NewDecoder(req.Body).Decode(&test)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.latihanRepo.UpdateLatihan(test.ID, test.Question, test.Answer1, test.Answer2, test.Answer3, test.Answer4, test.Answer5, test.Key_answer)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Update question Failed"))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Update question successful"))

}
