import { useEffect } from "react";
import { Users, MealPlans } from "../Constant";
import { useNavigate, Link } from "react-router-dom";
import { Table } from "antd";
import { Select } from "antd";

const Home = () => {
  const page_size = 5;
  const navigate = useNavigate();
  // const { Option } = Select;

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(Users));
    localStorage.setItem("mealPlans", JSON.stringify(MealPlans));
  }, []);

  const columns = [
    {
      title: "SystemName",
      dataIndex: "systemName",
      key: "systemName",
    },
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Detailes",
      key: "detail",
      render: (_, record) => {
        if (record.id) {
          return (
            <Link
              className=""
              style={{ color: "#000" }}
              to={{
                pathname: "/userDetails",
              }}
              // state={{
              //   record: record,
              //   userId: record.userId,
              // }}
              state={record}
            >
              {console.log(record.userId)}
              <button type="button" className="btn btn-dark">
                Details
              </button>
            </Link>
          );
        }
      },
    },
  ];

  return (
    <div className="container">
      <>
        <div className="d-flex justify-content-between align-content-center mt-4">
          <h2>Courses of users:</h2>
          <div>
            <button
              type="button"
              className="btn btn-dark me-3"
              onClick={() => navigate("/addCourse")}
            >
              Add Course
            </button>
          </div>
        </div>

        <Table
          className="my-5 fw-bold"
          columns={columns}
          dataSource={MealPlans}
          pagination={{
            pageSize: page_size,
            position: ["bottomCenter"],
          }}
        />
      </>
    </div>
  );
};

export default Home;
