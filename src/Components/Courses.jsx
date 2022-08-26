import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MealPlans } from "../Constant";
import { Select, Table } from "antd";

export const Courses = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [specificUser, setSpecificUser] = useState([]);
  const page_size = 5;
  const { Option } = Select;

  useEffect(() => {
    const mealPlans = JSON.parse(localStorage.getItem("mealPlans"));
    if (!mealPlans) {
      localStorage.setItem("mealPlans", JSON.stringify(MealPlans));
    } else {
      setMealPlans(mealPlans);
    }
  }, []);

  const handleChange = (value) => {
    const users = mealPlans.filter((obj) => {
      return obj.userId === parseInt(value);
    });
    setSpecificUser(users);
    return users;
  };

  const columns = [
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "SystemName",
      dataIndex: "systemName",
      key: "systemName",
    },
    {
      title: "Detailes",
      key: "detail",
      render: (_, record) => {
        console.log("record", record);
        if (record.id) {
          return (
            <Link
              className=""
              style={{ color: "#000" }}
              to={{
                pathname: "/userDetails",
              }}
              state={record}
            >
              <button type="button" className="btn btn-dark">
                {record.systemName === "Doesn't have a Course"
                  ? "Add A Course"
                  : "Course Detailes"}
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
            <Select
              onChange={handleChange}
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select user"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Ahmed</Option>
              <Option value="2">Amna</Option>
              <Option value="3">Mohammed</Option>
            </Select>
          </div>
        </div>

        <Table
          className="my-5 fw-bold"
          columns={columns}
          dataSource={specificUser}
          pagination={{
            pageSize: page_size,
            position: ["bottomCenter"],
          }}
        />
      </>
    </div>
  );
};
