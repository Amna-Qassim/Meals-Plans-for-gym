import { useEffect, useState } from "react";
import { MealPlans } from "../Constant";
import { useNavigate, Link } from "react-router-dom";
import { Select, Table } from "antd";

const Home = () => {
  const [mealPlans, setMealPlans] = useState(MealPlans);
  const page_size = 5;
  const navigate = useNavigate();
  const { Option } = Select;

  useEffect(() => {
    const MealPlans = JSON.parse(localStorage.getItem("mealPlans"));
    if (!MealPlans) {
      localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
      setMealPlans(MealPlans);
    } else {
      setMealPlans(MealPlans);
    }
  }, []);

  const filterUsers = () => {
    const users = MealPlans.filter((obj) => {
      return obj.systemName !== "";
    });
    return users;
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    navigate("/addNewCourse", { state: { userId: value } });
  };

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
              state={record}
            >
              {console.log("rid", record.userId)}
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
          dataSource={filterUsers()}
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
