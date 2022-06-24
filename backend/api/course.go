package api

import (
	"encoding/json"
	"net/http"
)

type CourseErrorRespone struct {
	Error string `json:"error"`
}

type Course struct {
	Title   string `json:"nama_course"`
	Content string `json:"content"`
}

type CourseInsert struct {
	Nama_course	string `json:"nama_course"`
	Content		string `json:"content"`
}

type CourseUpdate struct {
	ID			int64  `json:"id_course"`
	Nama_course	string `json:"nama_course"`
	content		string `json:"content"`
}

type CourseSuccesRespone struct {
	Course []Course `json:"course"`
}

func (api *API) getcourse(w http.ResponseWriter, req *http.Request) {
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
			Title:  course.Nama_Course,
			Content: course.Content,
		})
	}

	encoder.Encode(respone)
}

func (api *API) getcoursebyid(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)
	var course Course

	respone := CourseSuccesRespone{}
	respone.Course = make([]Course, 0)

	_, err := api.courseRepo.FecthCourseByID(course.ID)
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
	var courses []Course
	for _, course := range courses {
		respone.Course = append(respone.Course, Course{
			Title:  course.Nama_Course,
			Content: course.Content,
		})
	}

	encoder.Encode(respone)
}

func (api *API) insertCourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course CourseInsert
	err := json.NewDecoder(req.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.courseRepo.CreateCourse(course.Nama_Course, course.Content)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Insert course Failed"))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Insert course successful"))

}

func (api *API) updateCourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course CourseUpdate
	err := json.NewDecoder(req.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// user harus ngirim data apa yang mau di update
	// title dan materi

	_, err = api.courseRepo.updateCourse(course.ID, course.Nama_Course, course.Content)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Update course Failed"))
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Update course successful"))

}

func (api *API) DeleteCourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course Course
	err := api.courseRepo.DeleteCourseByID(course.ID)
	encoder := json.NewEncoder(w)
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(CourseErrorRespone{Error: err.Error()})
		}
	}()

	w.WriteHeader(http.StatusOK)
}