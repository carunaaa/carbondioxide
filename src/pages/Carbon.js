import React, { useEffect, useState } from "react";

function Carbon() {
  const [carbon, setCarbon] = useState([]);
  useEffect(() => {
    fetch(
      "https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "57ede76d0emsh8d4e06e204f1feep1d1c21jsn51b436411986",
          "X-RapidAPI-Host":
            "daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setCarbon(res.co2);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-1">
      <table className="table">
        <tbody>
          <tr class="table-dark">
            <th scope="row">Cycle</th>
            <th scope="row">Day</th>
            <th scope="row">Month</th>
            <th scope="row">Trend</th>
            <th scope="row">Year</th>
          </tr>
          {carbon.map((co2) => (
            <tr class="table-warning" key={co2.co2}>
              <td>{co2.cycle}</td>
              <td>{co2.day}</td>
              <td>{co2.month}</td>
              <td>{co2.trend}</td>
              <td>{co2.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Carbon;
