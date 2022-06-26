import { useLocation } from "react-router";
import "./App.css";
<<<<<<< HEAD
import Home from "./pages";
import React from "react";
=======
import Layout from "components/layout";
import PicL from "./logoR.jpeg";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import CourseListFilter from "components/CourseListFilter";
import TimelineSection from "components/TimelineSection";
import { mockGetMateriFromCourse } from "data/admin/MateriCRUD";
>>>>>>> 22f1d3eded471a9ad7da48abb8173efeb993c16f

export default function App() {
  const location = useLocation();
  console.log(location);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [isCourseSelected, setIsCourseSelected] = useState(false);
  
  const [materiByCourse, setMateriByCourse] = useState([]);
  const [isMateriLoaded, setIsMateriLoaded] = useState(false);

<<<<<<< HEAD
export default App;

// import {
//   Button,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useBreakpointValue,
//   Box,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import CourseListFilter from "components/CourseListFilter";
// import TimelineSection from "components/TimelineSection";
// import { mockGetMateriFromCourse } from "data/admin/MateriCRUD";

// export default function App() {
//   const [selectedCourse, setSelectedCourse] = useState({});
//   const [isCourseSelected, setIsCourseSelected] = useState(false);

//   const [materiByCourse, setMateriByCourse] = useState([]);
//   const [isMateriLoaded, setIsMateriLoaded] = useState(false);

//   useEffect(() => {
//     // TODO : fetch materi by courseId
//     // ...
//     mockGetMateriFromCourse().then((response) => {
//       console.log(response);
//       console.log(selectedCourse);

//       setMateriByCourse(
//         response?.filter((item) =>
//           item.course.includes(selectedCourse.judul_course)
//         )
//       );
//       setIsMateriLoaded(true);
//     });
//   }, [selectedCourse]);

//   useEffect(() => {
//     console.log(materiByCourse);
//   }, [materiByCourse]);

//   return (
//     <>
//       <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
//         <Flex p={8} flex={1} align={"center"} justify={"center"}>
//           <Stack spacing={6} w={"full"} maxW={"lg"}>
//             <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
//               <Text
//                 as={"span"}
//                 position={"relative"}
//                 _after={{
//                   content: "''",
//                   width: "full",
//                   height: useBreakpointValue({ base: "20%", md: "30%" }),
//                   position: "absolute",
//                   bottom: 1,
//                   left: 0,
//                   bg: "blue.400",
//                   zIndex: -1,
//                 }}
//               >
//                 Freelance
//               </Text>
//               <br />{" "}
//               <Text color={"blue.400"} as={"span"}>
//                 Design Projects
//               </Text>{" "}
//             </Heading>
//             <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
//               The project board is an exclusive resource for contract work. It's
//               perfect for freelancers, agencies, and moonlighters.
//             </Text>
//             <Stack direction={{ base: "column", md: "row" }} spacing={4}>
//               <Button
//                 rounded={"full"}
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Create Project
//               </Button>
//               <Button rounded={"full"}>How It Works</Button>
//             </Stack>
//           </Stack>
//         </Flex>
//         <Flex flex={1}>
//           <Image
//             alt={"Login Image"}
//             objectFit={"cover"}
//             src={
//               "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//             }
//           />
//         </Flex>
//       </Stack>

//       <CourseListFilter
//         setSelectedCourse={setSelectedCourse}
//         setIsCourseSelected={setIsCourseSelected}
//       />
//       <Box mt="8" mb="8" p="8">
//         <Text
//           textAlign="center"
//           fontSize={isCourseSelected ? "4xl" : "2xl"}
//           fontWeight="bold"
//         >
//           {" "}
//           {isCourseSelected
//             ? `${selectedCourse.judul_course}`
//             : "Harap pilih topik diatas terlebih dahulu"}{" "}
//         </Text>
//         {/* // TODO : Timeline / roadmap nya masih berupa design saja   */}
//         {isCourseSelected && (
//           <TimelineSection
//             dataSource={materiByCourse}
//             isDataLoaded={isMateriLoaded}
//           />
//         )}
//       </Box>
//     </>
//   );
// }
=======
  useEffect(() => {
    
    mockGetMateriFromCourse().then((response) => {
      console.log(response);
      console.log(selectedCourse);

      setMateriByCourse(
        response?.filter((item) =>
          item.course.includes(selectedCourse.judul_course)
        )
      );
      setIsMateriLoaded(true);
    });
  }, [selectedCourse]);

  useEffect(() => {
    console.log(materiByCourse);
  }, [materiByCourse]);

  return (
    // <Layout>
    <div className="App">
    <>
      <Stack minH={"60vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={3} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                About Us
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"orange.400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id elementum nisl, a pulvinar nibh. Fusce ac ex et sapien congue sodales. Curabitur volutpat mattis dignissim. Nunc feugiat et sapien et lacinia. Integer eget eleifend purus. 
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={0}>
              <Button
                rounded={"full"}
                bg={"purple.400"}
                color={"white"}
                _hover={{
                  bg: "red.500",
                }}
              >
                Get Started It
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image
            alt={"Image"}
            objectFit={"cover"}
            src={
              PicL
            }
          />
        </Flex>
      </Stack>
 
      <CourseListFilter
        setSelectedCourse={setSelectedCourse}
        setIsCourseSelected={setIsCourseSelected}
      />
      <Box mt="8" mb="8" p="8">
        <Text
          textAlign="center"
          fontSize={isCourseSelected ? "4xl" : "2xl"}
          fontWeight="bold"
        >
          {" "}
          {isCourseSelected
            ? `${selectedCourse.judul_course}`
            : ""}{" "}
        </Text>
        {isCourseSelected && (
          <TimelineSection
            dataSource={materiByCourse}
            isDataLoaded={isMateriLoaded}
          />
        )}
      </Box>
    </>
    </div>
    // </Layout>
  );
}
>>>>>>> 22f1d3eded471a9ad7da48abb8173efeb993c16f
