import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7071084/pexels-photo-7071084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: "100vh",
        }}
      >
        {/* <div className="mask opacity-10"></div> */}

        {/* <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div> */}
        {/* <h2 class="pt-5 text-white">What is CO2?</h2> */}
        <p
          class="mt-5 pt-5 fs-5"
          style={{
            color: "#F6F1F1",
          }}
        >
          <div class="row justify-content-end">
            {/* <div class="col-sm-6  col-lg-4"> */}
           <div class="card pt-2 col-md-4 align-self-center">
              <div class="card-body text-center text-dark fs-6">
                <p class="card-text">
                  {" "}
                  Carbon dioxide (CO2) is an important heat-trapping gas, or
                  greenhouse gas, that comes from the extraction and burning of
                  fossil fuels (such as coal, oil, and natural gas), from
                  wildfires, and from natural processes like volcanic eruptions.
                  The first graph shows atmospheric CO2 levels levels measured
                  at Mauna Loa Observatory, Hawaii, in recent years, with
                  natural, seasonal changes removed. The second graph shows CO2
                  levels during Earth’s last three glacial cycles, as captured
                  by air bubbles trapped in ice sheets and glaciers. Since the
                  beginning of industrial times (in the 18th century), human
                  activities have raised atmospheric CO2 by 50% – meaning the
                  amount of CO2 is now 150% of its value in 1750. This is
                  greater than what naturally happened at the end of the last
                  ice age 20,000 years ago. The animated map shows how global
                  carbon dioxide has changed over time. 
                </p>
              </div>
              </div>
          </div>
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="card col-md-6 align-self-center">
          <div class="card-body text-center">
            <h2 class="card-title">Why Carbon Dioxide matters</h2>
            <p class="card-text ">
              Carbon dioxide is Earth’s most important greenhouse gas: a gas
              that absorbs and radiates heat. Unlike oxygen or nitrogen (which
              make up most of our atmosphere), greenhouse gases absorb heat
              radiating from the Earth’s surface and re-release it in all
              directions—including back toward Earth’s surface. Without carbon
              dioxide, Earth’s natural greenhouse effect would be too weak to
              keep the average global surface temperature above freezing. By
              adding more carbon dioxide to the atmosphere, people are
              supercharging the natural greenhouse effect, causing global
              temperature to rise. According to observations by the NOAA Global
              Monitoring Lab, in 2021 carbon dioxide alone was responsible for
              about two-thirds of the total heating influence of all
              human-produced greenhouse gases. Another reason carbon dioxide is
              important in the Earth system is that it dissolves into the ocean
              like the fizz in a can of soda. It reacts with water molecules,
              producing carbonic acid and lowering the ocean's pH (raising its
              acidity). Since the start of the Industrial Revolution, the pH of
              the ocean's surface waters has dropped from 8.21 to 8.10. This
              drop in pH is called ocean acidification.
            </p>
            <Link to="/dashboard/Carbon">
              <button type="button" class="btn btn-success">
                Data
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div class="container-2 m-4">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <img
              src="https://images.pexels.com/photos/4206050/pexels-photo-4206050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="img-fluid rounded-4 shadow-2-strong"
              alt="Hollywood Sign on The Hill"
            />
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <img
              src="https://images.pexels.com/photos/9092828/pexels-photo-9092828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="img-fluid rounded-4 shadow-2-strong"
              alt="Five Lands National Park"
            />
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              class="img-fluid rounded-4 shadow-2-strong"
              alt="Los Angeles Skyscrapers"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
