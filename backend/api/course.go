package api

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/schema"
)

type CourseErrorRespone struct {
	Error string `json:"error"`
}

type Course struct {
	ID          int64  `json:"id_course"`
	Nama_Course string `json:"nama_course"`
	Content     string `json:"content"`
}

type GetCourse struct {
	ID          int64  `schema:"id_course"`
	Nama_Course string `schema:"nama_course"`
	Content     string `schema:"content"`
}

type Coursedel struct {
	ID          int64  `schema:"id_course"`
	Nama_Course string `schema:"nama_course"`
	Content     string `schema:"content"`
}

type CourseInsert struct {
	Nama_Course string `json:"nama_course"`
	Content     string `json:"content"`
}

type CourseUpdate struct {
	ID          int64  `json:"id_course"`
	Nama_Course string `json:"nama_course"`
	Content     string `json:"content"`
}

type CourseSuccesRespone struct {
	Courses []Course `json:"course"`
}

type GetSuccesResponse struct {
	Nama_course string `json:"nama_course"`
	Content     string `json:"content"`
}

func (api *API) getcourses(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := CourseSuccesRespone{}
	respone.Courses = make([]Course, 0)

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

	for _, courses := range course {
		respone.Courses = append(respone.Courses, Course{
			ID:          courses.ID,
			Nama_Course: courses.Nama_Course,
			Content:     courses.Content,
		})
	}

	encoder.Encode(respone)
}

func (api *API) getcoursebyid(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	idCourse := req.URL.Query().Get("id")
	id, _ := strconv.Atoi(idCourse)

	course, err := api.courseRepo.FecthCourseByID(int64(id))

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	json.NewEncoder(w).Encode(GetSuccesResponse{course.Nama_Course, course.Content})

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
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}()
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Insert course successful"))

}

func (api *API) updatecourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var courses CourseUpdate
	err := json.NewDecoder(req.Body).Decode(&courses)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	// user harus ngirim data apa yang mau di update
	// title dan materi

	_, err = api.courseRepo.UpdateCourse(courses.ID, courses.Nama_Course, courses.Content)

	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}()

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Update course successful"))

}

func (api *API) deletecourse(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var coursedel Coursedel

	// s := req.URL.Query().Get("id_course")
	// id := strconv.Atoi(s)

	// encoder := json.NewEncoder(w)

	decoder := schema.NewDecoder()
	err := decoder.Decode(&coursedel, req.URL.Query())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	err = api.courseRepo.DeleteCourseByID(coursedel.ID)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Delete course category failed"))
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Delete course category successful"))
}
