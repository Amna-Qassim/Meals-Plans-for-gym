import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UserDetailes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const { userId, userName, systemName, days } = data;

  console.log(days);
  return (
    <div className="mx-4">
      <div className="mt-3 mb-5 d-flex justify-content-between">
        <h2 style={{ color: "#636363" }}>
          The course of <span style={{ color: "#009688" }}>{systemName}</span>{" "}
          for <span style={{ color: "#009688" }}>{userName}</span> for this
          month
        </h2>
        <button className="btn btn-light" onClick={() => navigate("/")}>
          Go back
        </button>
      </div>
      <ul className="d-flex flex-row justify-content-around flex-wrap">
        {days.map((day) => {
          return (
            <>
              {Object.keys(day).map((d, i) => {
                return (
                  <div
                    style={{
                      background: "#eee",
                      padding: "10px",
                      width: "250px",
                      borderRadius: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <li className="fw-bold fs-5 list-unstyled">
                      {d}
                      {/* <ul>
                        {day[d].map((h) => {
                          return (
                            <li className="fw-normal fs-6">
                              {h.time} / {h.meal}
                            </li>
                          );
                        })}
                      </ul> */}
                    </li>
                  </div>
                );
              })}
            </>
          );
        })}
      </ul>
    </div>
  );
};

{
  /* <ul>
{Object.keys(day).map((d, i) => {
  console.log(day[d]);
  return (
    <li>
      {d}
      {`=> ${day[d][i].time}, ${day[d][i].meal}`}
    </li>
  );
})}
</ul> */
}
