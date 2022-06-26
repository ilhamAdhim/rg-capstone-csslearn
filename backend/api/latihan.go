package api

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/schema"
)

type LatihanErrorRespone struct {
	Error string `json:"error"`
}

type Latihan struct {
	// Title      string `json:"title"`
	ID         int64  `json:"id_latihan"`
	Id_course  int64  `json:"id_course"`
	Question   string `json:"question"`
	Answer1    string `json:"answer1"`
	Answer2    string `json:"answer2"`
	Answer3    string `json:"answer3"`
	Answer4    string `json:"answer4"`
	Key_Answer string `json:"key_answer"`
}

type DeleteLatihan struct {
	// Title      string `json:"title"`
	ID         int64  `schema:"id_latihan"`
	Id_course  int64  `schema:"id_course"`
	Question   string `schema:"question"`
	Answer1    string `schema:"answer1"`
	Answer2    string `schema:"answer2"`
	Answer3    string `schema:"answer3"`
	Answer4    string `schema:"answer4"`
	Key_Answer string `schema:"key_answer"`
	// id_course int  `json:"id_course"`

}

type LatihanTest struct {
	// Title      string `json:"title"``
	Id_course  int64  `json:"id_course"`
	Question   string `json:"question"`
	Answer1    string `json:"answer1"`
	Answer2    string `json:"answer2"`
	Answer3    string `json:"answer3"`
	Answer4    string `json:"answer4"`
	Key_Answer string `json:"key_answer"`
	// id_course int  `json:"id_course"`
}

type GetLatihanTest struct {
	Id_course  int64  `json:"id_course"`
	Question   string `json:"question"`
	Answer1    string `json:"answer1"`
	Answer2    string `json:"answer2"`
	Answer3    string `json:"answer3"`
	Answer4    string `json:"answer4"`
	Key_Answer string `json:"key_answer"`
}

type GetLatihanTestRespone struct {
	Latihans []GetLatihanTest `json:"getlatihan"`
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
			ID:         list.ID,
			Id_course:  list.Id_course,
			Question:   list.Question,
			Answer1:    list.Answer1,
			Answer2:    list.Answer2,
			Answer3:    list.Answer3,
			Answer4:    list.Answer4,
			Key_Answer: list.Key_Answer,
		})
	}

	encoder.Encode(respone)
}

func (api *API) insertLatihan(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var test LatihanTest
	err := json.NewDecoder(req.Body).Decode(&test)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.latihanRepo.CreateLatihan(test.Id_course, test.Question, test.Answer1, test.Answer2, test.Answer3, test.Answer4, test.Key_Answer)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}()
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Insert question successful"))

}

func (api *API) getlatihanbyidcourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	idCourse := req.URL.Query().Get("id")
	id, _ := strconv.Atoi(idCourse)

	respone := GetLatihanTestRespone{}
	respone.Latihans = make([]GetLatihanTest, 0)

	soal, err := api.latihanRepo.FecthLatihanByidCourse(int64(id))
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

	for _, list := range soal {
		respone.Latihans = append(respone.Latihans, GetLatihanTest{
			Id_course:  list.Course_ID,
			Question:   list.Question,
			Answer1:    list.Answer1,
			Answer2:    list.Answer2,
			Answer3:    list.Answer3,
			Answer4:    list.Answer4,
			Key_Answer: list.Key_Answer,
		})
	}

	encoder.Encode(respone)

	// json.NewEncoder(w).Encode(Gettopic{course.Title_Materi, course.Materi})

}

func (api *API) updateTest(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var test Latihan
	err := json.NewDecoder(req.Body).Decode(&test)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.latihanRepo.UpdateLatihan(test.ID, test.Id_course, test.Question, test.Answer1, test.Answer2, test.Answer3, test.Answer4, test.Key_Answer)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}()

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Update question successful"))

}

func (api *API) deleteSoal(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var soal DeleteLatihan

	decoder := schema.NewDecoder()
	err := decoder.Decode(&soal, req.URL.Query())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	err = api.latihanRepo.DeleteLatihanByID(soal.ID)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}()

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Delete  successful"))
}
