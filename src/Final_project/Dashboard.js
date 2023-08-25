import Chart from "react-apexcharts";
import { json } from "react-router-dom";

function DashBoard() {
  let data1 = localStorage.getItem("dasbhoardPage");

  const data = JSON.parse(data1);
  const FisrtChart = data.latestHits;
  const secondChart = data.performance;
  const thirdChart = data.storage;
  const Notifications = data.notifications;
  const orders = data.orders;

  const latest = {
    options1: {
      chart: {
        id: "apexchart-example",
        name: "Hits",
        background: "#455c71",
        foreColor: "#fff",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#17a2b8", "#e83e8c", "#6f42c1"],

      xaxis: {
        categories: FisrtChart.months,
        labels: {
          show: true,
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        title: {
          text: "Hits",
          style: {
            fontSize: "15px",
            fontWeight: 300,
          },
        },
      },
      title: {
        text: "Latest Hits",
        align: "left",
        offsetX: 14,
        offsetY: 10,
        style: {
          fontSize: "20px",
          fontWeight: "400",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        fullSize: true,
        offsetX: 10,
      },
      grid: {
        borderColor: "#111",
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 10,
        },
      },
    },
    series1: [
      {
        name: "Latest Hits",
        data: FisrtChart.latest,
      },
      {
        name: "Populer Hits",
        data: FisrtChart.popular,
      },
      {
        name: "Featured",
        data: FisrtChart.featured,
      },
    ],
  };

  const Performance = {
    options2: {
      chart: {
        id: "sdf-example",
        name: "Hits",
        background: "#455c71",
        foreColor: "#fff",
        toolbar: {
          show: false,
        },
      },
      grid: {
        borderColor: "#111",
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 10,
        },
      },
      stroke: {
        curve: "smooth",
        colors: "#111",
        width: 19,
      },
      xaxis: {
        categories: [
          "Green",
          "Aqua",
          "Blue",
          "Orange",
          "purple",
          "Red",
          "Yellow",
        ],
      },
      yaxis: {
        title: {
          text: "Hits",
          style: {
            fontSize: "15px",
            fontWeight: 300,
          },
          offsetX: 5,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          // columnWidth: '50',
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Performance",
        align: "left",
        offsetX: 14,
        offsetY: 10,
        style: {
          fontSize: "20px",
          fontWeight: "400",
        },
      },
    },

    series2: [
      {
        data: [
          {
            x: "Populerdasf Hits",
            y: secondChart.Green,
            fillColor: "#28a745",
          },
          {
            x: "Featurdsafed",
            y: secondChart.Aqua,
            fillColor: "#00FFFF",
          },
          {
            x: "Featurdsafed",
            y: secondChart.Blue,
            fillColor: "#007bff",
          },
          {
            x: "Featuewrred",
            y: secondChart.Orange,
            fillColor: "#fd7e14",
          },
          {
            x: "Featrewured",
            y: secondChart.Purple,
            fillColor: "#6f42c1",
          },
          {
            x: "Featwerured",
            y: secondChart.Red,
            fillColor: "#dc3545",
          },
          {
            x: "Featuwerred",
            y: secondChart.Yellow,
            fillColor: "#ecb546",
          },
        ],
      },
    ],
  };

  const Storage = {
    options3: {
      chart: {
        width: 380,
        type: "pie",
        background: "#455c71",
        foreColor: "#fff",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        fullSize: true,
      },
      title: {
        text: "Storage Information",
        align: "left",
        offsetX: 14,
        offsetY: 1,
        style: {
          fontSize: "20px",
          fontWeight: "400",
        },
      },
      labels: [
        `Available Storage (${thirdChart.available} GB)`,
        `System Storage (${thirdChart.system} GB)`,
        `Used Storage (${thirdChart.used} GB)`,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series3: [thirdChart.available, thirdChart.system, thirdChart.used],
  };

  return (
    <>
      <div className="container pt-5">
        <p className="mb-5 text-white">
          Welcome back, <b>Admin</b>
        </p>
        <div className="row ">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div>
              <Chart
                options={latest.options1}
                series={latest.series1}
                type="line"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col ">
            <div>
              <Chart
                options={Performance.options2}
                series={Performance.series2}
                type="bar"
                width={550}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div>
              <Chart
                options={Storage.options3}
                series={Storage.series3}
                type="pie"
                width={550}
                height={350}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col  ">
            <div className="background box">
              <h5 className="text-start pt-4 mb-2  ms-4">Notification List</h5>
              <div className="items">
                {Notifications.map((val, ind) => (
                  <div className="media tm-notification-item" key={ind}>
                    <div className="tm-gray-circle">
                      <img className="rounded-circle" src={val.pic}></img>
                    </div>
                    <div className=".media-body text-start">
                      <p>{val.message}</p>
                      <div>{val.time} ago</div>
                    </div>
                  </div>
                ))}
                {Notifications.map((val, ind) => (
                  <div className="media tm-notification-item" key={ind}>
                    <div className="tm-gray-circle">
                      <img className="rounded-circle" src={val.pic}></img>
                    </div>
                    <div className=".media-body text-start">
                      <p>{val.message}</p>
                      <div>{val.time} ago</div>
                    </div>
                  </div>
                ))}
                {Notifications.map((val, ind) => (
                  <div className="media tm-notification-item" key={ind}>
                    <div className="tm-gray-circle">
                      <img className="rounded-circle" src={val.pic}></img>
                    </div>
                    <div className=".media-body text-start">
                      <p>{val.message}</p>
                      <div>{val.time} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" order-list container row  mt-5  tm-block">
          <div>
            <h4 className="my-5 ms-4">Orders List</h4>
          </div>
          <div className="table">
            <table className="text-center text-white">
              <thead>
                <tr>
                  <th>ORDER NO.</th>
                  <th>STATUS</th>
                  <th>OPERTORS</th>
                  <th>LOCATION</th>
                  <th>DISTANCE</th>
                  <th>START DATE</th>
                  <th>EST DELIVERY DUE</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((val, ind) => {
                  return (
                    <tr key={ind}>
                      <td>#{val.orderNo}</td>
                      <td>
                        <div className={`tm-status-circle ${val.status}`}></div>
                        {val.status}
                      </td>
                      <td>{val.operators}</td>
                      <td>{val.location}</td>
                      <td>{val.distance}</td>
                      <td>{val.startDate}</td>
                      <td>{val.deliveryDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
