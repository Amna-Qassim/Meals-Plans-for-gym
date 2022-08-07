import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AddNewCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const { userId } = data;

  const [course, setCourse] = useState(undefined);
  const [courses, setCourses] = useState([]);

  const [selectedDay, setSelectedDay] = useState("ALL");

  useEffect(() => {
    const MealPlans = JSON.parse(localStorage.getItem("mealPlans"));
    // console.log("m", MealPlans);
    setCourses(MealPlans);
    if (MealPlans) {
      const course = MealPlans.find((user) => {
        return user.userId === userId;
      });

      console.log("course1", course);
      setCourse(course);
    }
  }, []);

  const saveChanges = () => {
    console.log("courses", courses);
    console.log("course before save", course);
    const newcourses = courses.map((obj) => {
      if (obj.userId === userId) {
        obj = course;
        return obj;
      } else {
        return obj;
      }
    });
    // console.log(newcourses);
    setCourses(newcourses);
    window.localStorage.setItem("mealPlans", JSON.stringify(newcourses));
    console.log("save courses", newcourses);
    console.log("save course", course);
  };

  const updateMeal = (dayId, mealId, type, data, course) => {
    console.log("update course", course);

    const newCourses = course.days.map((day) => {
      // if the meal not the required to update meal
      if (day.id !== dayId) {
        return day;
      }

      const newMeals = day.meals.map((meal) => {
        if (meal.id !== mealId) {
          return meal;
        }

        if (type === "time") {
          return { ...meal, time: data };
        }
        // update the meal
        if (type === "meal") {
          return { ...meal, meal: data };
        } else {
          return meal;
        }
      });

      console.log({ newMeals });

      return { ...day, meals: newMeals };
    });
    const newCourse = { ...course, days: newCourses };
    console.log("newCourses", newCourse);
    setCourse(newCourse);
  };

  return (
    <>
      <div className="mt-3 mb-5 mx-3 d-flex justify-content-between align-items-center">
        {/* <h2 style={{ color: "#636363" }}>
          The course of <span style={{ color: "#009688" }}>{systemName}</span>{" "}
          for <br />
          <span style={{ color: "#009688" }}>{userName}</span> for this month:
        </h2> */}
        <select
          onChange={(e) => {
            setSelectedDay(e.target.value);
          }}
          style={{
            height: "35px",
            width: "150px",
            color: "#009688",
            fontWeight: "bold",
          }}
        >
          <option value={"ALL"}>ALL</option>
          <option value={"SUNDAY"}>SUNDAY</option>
          <option value={"MONDAY"}>MONDAY</option>
          <option value={"TUESDAY"}>TUESDAY</option>
          <option value={"WEDNESDAY"}>WEDNESDAY</option>
          <option value={"THURSDAY"}>THURSDAY</option>
          <option value={"SATURDAY"}>SATURDAY</option>
        </select>
        <button
          className="btn btn-light fw-bold"
          style={{ height: "40px", width: "100px", color: "#009688" }}
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>

      <div className="mx-3 my-2 d-flex justify-content-around flex-wrap">
        {console.log("jsx course", course)}
        {course &&
          course.days.map((day) => {
            if (day.day === selectedDay || selectedDay === "ALL") {
              return (
                <div className="mb-4">
                  <h4 className="border-bottom border-1 border-success mx-3">
                    {day.day}
                  </h4>
                  {day.meals.map((meal, index) => {
                    return (
                      <div className="mx-4">
                        <p className="mt-3 text-success fw-bold">
                          {"Meal :" + (index + 1)}
                        </p>
                        <input
                          value={meal.time}
                          placeholder={"time"}
                          onChange={(e) => {
                            updateMeal(
                              day.id,
                              meal.id,
                              "time",
                              e.target.value,
                              course
                            );
                          }}
                          className="mb-2"
                        />
                        {"  "}
                        <input
                          value={meal.meal}
                          placeholder={"meal"}
                          onChange={(e) => {
                            updateMeal(
                              day.id,
                              meal.id,
                              "meal",
                              e.target.value,
                              course
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
      </div>
      <div className="d-flex justify-content-center ">
        <button
          onClick={() => saveChanges()}
          className="btn btn-dark mb-5 mt-3"
        >
          save
        </button>
      </div>
    </>
  );
};