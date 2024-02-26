import Chart from "../../components/charts/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import { useState, useEffect, useMemo } from "react";
import axios from 'axios'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFhZmM1NTc4YjVlMjIzZTY3ZmY4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTUwMDEwMn0.DyJMDgFkmEkTelz2iqw_Pv-eGhEArLM_0eaLBX4FaJ4",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (<>
    <Topbar />
    <div style={{
      display: 'flex'
    }}>
      <Sidebar />
      <div className="home">
        <Featuredinfo />
        <Chart data={userStats} title="User Analytics" grid dataKey='New User' />
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
