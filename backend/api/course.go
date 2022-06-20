package api 

import (
	"encoding/json"
	"net/http"
)

type CourseErrorRespone struct {
	Error string `json:"error"`
}

type Course struct {
	Title  string `json:"nama_course"`
	content string `json:"content"`
	// id_category int `json: "id_category"`
}

type CourseSuccesRespone struct {
	Course []Course`json:"course"`
}

func (api *API) course(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := CourseSuccesRespone{}
	respone.Course = make([]Course, 0)

	course, err := api.courseRepo.FecthCourse()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(CourseErrorRespone{Error: err.Error()})
			return
		}
	}()

	if err != nil {
		return
	}

	for _, course := range course {
		respone.Course = append(respone.Course, Course{
			Title:  course.Title_content,
			Content: course.Content,
		})
	}

	encoder.Encode(respone)
}
