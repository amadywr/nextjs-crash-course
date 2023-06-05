"use client";
import { useState, useEffect } from "react";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import CourseSearch from "./components/CourseSearch";

const page = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Ahmad Media</h1>
      <CourseSearch getSeachResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default page;
