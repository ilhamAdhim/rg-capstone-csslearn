package api

// import (
// 	"encoding/json"
// 	"net/http"
// )

// type CourseCategoryErrorRespone struct {
// 	Error string `json:"error"`
// }

// type Category struct {
// 	Title  string `json:"nama_materi"`
// 	Materi string `json:"materi"`
// 	// Start_date *time.Time `json:"start_date"`
// 	// End_date   *time.Time `json:"end_date"`
// }

// type CourseCategorySuccesRespone struct {
// 	CategoryCourse []Category `json:"category"`
// }

// func (api *API) coursecategory(w http.ResponseWriter, req *http.Request) {
// 	api.AllowOrigin(w, req)
// 	encoder := json.NewEncoder(w)

// 	respone := CourseCategorySuccesRespone{}
// 	respone.CategoryCourse = make([]Category, 0)

// 	category, err := api.categorycourseRepo.FecthCategoryCourse()
// 	defer func() {
// 		if err != nil {
// 			w.WriteHeader(http.StatusBadRequest)
// 			encoder.Encode(CourseCategoryErrorRespone{Error: err.Error()})
// 			return
// 		}
// 	}()

// 	if err != nil {
// 		return
// 	}

// 	for _, coursecategory := range category {
// 		respone.CategoryCourse = append(respone.CategoryCourse, Category{
// 			Title:  coursecategory.Title_Materi,
// 			Materi: coursecategory.Materi,
// 		})
// 	}

// 	encoder.Encode(respone)
// }
