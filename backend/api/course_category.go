package api

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/schema"
	"github.com/rg-km/final-project-engineering-70/repository"
)

type CourseCategoryErrorRespone struct {
	Error string `json:"error"`
}

type Category struct {
	ID       int64  `json:"id_course_category"`
	Siswa_ID string `json:"id_siswa"`
	Title    string `json:"title"`
	Materi   string `json:"materi"`
	// Start_date *time.Time `json:"start_date"`
	// End_date   *time.Time `json:"end_date"`
}

type Deltopic struct {
	ID     int64  `schema:"id_course_category"`
	Title  string `schema:"title"`
	Materi string `schema:"materi"`
}

type Gettopic struct {
	ID     int64  `schema:"id_course_category"`
	Title  string `schema:"title"`
	Materi string `schema:"materi"`
}

type CategoryInsert struct {
	Title  string `json:"title"`
	Materi string `json:"materi"`
}

type CategoryDelete struct {
	ID int64 `json:"id_course_category"`
}

type CategoryUpdate struct {
	ID     int64  `json:"id_course_category"`
	Title  string `json:"title"`
	Materi string `json:"materi"`
}

type CourseCategorySuccesRespone struct {
	CategoryCourse []Category `json:"category"`
}

type CourseCategoryListSuccesRespone struct {
	CategoryCourse []repository.CourseCategory `json:"category"`
}

func (api *API) getcoursecategory(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	respone := CourseCategorySuccesRespone{}
	respone.CategoryCourse = make([]Category, 0)

	category, err := api.categorycourseRepo.FecthCategoryCourse()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(CourseCategoryErrorRespone{Error: err.Error()})
			return
		}
	}()

	if err != nil {
		return
	}

	for _, coursecategory := range category {
		respone.CategoryCourse = append(respone.CategoryCourse, Category{
			ID:     coursecategory.ID,
			Title:  coursecategory.Title_Materi,
			Materi: coursecategory.Materi,
		})
	}

	encoder.Encode(respone)
}

func (api *API) getcoursecategorybyid(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)

	decoder := schema.NewDecoder()
	var course Category

	// id := req.URL.Query().Get("id_course")

	err := decoder.Decode(&course.ID, req.URL.Query())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	err = api.categorycourseRepo.FecthCategoryCourseByID(course.ID)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	respBody, _ := json.Marshal(course)
	w.WriteHeader(http.StatusOK)
	w.Write(respBody)

}

func (api *API) insertCourseCategory(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course CategoryInsert
	err := json.NewDecoder(req.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	_, err = api.categorycourseRepo.CreateCourseCategory(course.Title, course.Materi)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte("Insert course category Failed"))
		return
	}
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Insert course category successful"))

}

func (api *API) updateCourseCategory(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course CategoryUpdate
	err := json.NewDecoder(req.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// title dan materi

	_, err = api.categorycourseRepo.UpdateCourseCategory(course.ID, course.Title, course.Materi)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Update course category Failed"))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Update course category successful"))

}

func (api *API) deleteCourseCategory(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var course Deltopic

	decoder := schema.NewDecoder()
	err := decoder.Decode(&course, req.URL.Query())
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
	err = api.categorycourseRepo.DeleteCourseCategoryByID(course.ID)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Delete course category failed"))
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Delete course category successful"))
}
