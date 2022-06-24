package api

import (
	"encoding/json"
	"net/http"

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
	var course Category
	err := json.NewDecoder(req.Body).Decode(&course)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	r(w)

	_, err := api.categorycourseRepo.FecthCategoryCourseByID(course.ID)
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

	w.WriteHeader(http.StatusOK)
	encoder.Encode(CourseCategoryListSuccesRespone{
		ID:     &course.ID,
		Title:  &course.Title,
		Materi: &course.Materi,
	})

	encoder.Encode(respone)
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
	var course Category

	err := api.categorycourseRepo.DeleteCourseCategoryByID(course.ID)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Delete course category Failed"))
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Delete course category successful"))
}
