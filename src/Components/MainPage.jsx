import React, { useState } from "react";
import { initialCourses } from "../Constant2";
import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [selectedDay, setSelectedDay] = useState("ALL");

  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const { userId, userName, systemName, days } = data;
  console.log(data);

  const updateMeal = (dayId, mealId, type, data) => {
    const newCourses = courses.map((day) => {
      // if the meal not the required to update meal
      if (day.id !== dayId) {
        return day;
      }

      const newMeals = day.meals.map((meal) => {
        if (meal.id !== mealId) {
          return meal;
        }

        // update the meal

        if (type === "meal") {
          return { ...meal, meal: data };
        }

        if (type === "time") {
          return { ...meal, time: data };
        }
      });

      console.log({ newMeals });

      return { ...day, meals: newMeals };
    });

    console.log({ newCourses });

    setCourses(newCourses);
  };

  return (
    <>
      <div className="mt-3 mb-5 mx-3 d-flex justify-content-between align-items-center">
        {/* <h2 style={{ color: "#636363" }}>
          The course of <span style={{ color: "#009688" }}>{systemName}</span>{" "}
          for <span style={{ color: "#009688" }}>{userName}</span> for this
          month
        </h2> */}
        <select
          onChange={(e) => {
            setSelectedDay(e.target.value);
          }}
          className="h-100"
        >
          <option value={"ALL"}>ALL</option>
          <option value={"SUNDAY"}>SUNDAY</option>
          <option value={"MONDAY"}>MONDAY</option>
          <option value={"TUESDAY"}>TUESDAY</option>
          <option value={"WEDNESDAY"}>WEDNESDAY</option>
          <option value={"THURSDAY"}>THURSDAY</option>
        </select>
        <button className="btn btn-light" onClick={() => navigate("/")}>
          Go back
        </button>
      </div>

      <div className="mx-3 my-2 d-flex justify-content-around">
        {courses.map((day) => {
          if (day.day === selectedDay || selectedDay === "ALL") {
            return (
              <div className="mb-4">
                <h4 className="border-bottom border-1 border-success mx-3">
                  {day.day}
                </h4>
                {day.meals.map((meal, index) => {
                  return (
                    <div className="">
                      <p className="mt-3 text-success fw-bold">
                        {"Meal :" + (index + 1)}
                      </p>
                      <input
                        value={meal.time}
                        placeholder={"time"}
                        onChange={(e) => {
                          updateMeal(day.id, meal.id, "time", e.target.value);
                        }}
                        className="mb-2"
                      />
                      {"  "}
                      <input
                        value={meal.meal}
                        placeholder={"meal"}
                        onChange={(e) => {
                          updateMeal(day.id, meal.id, "meal", e.target.value);
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
    </>
  );
};

export default MainPage;
