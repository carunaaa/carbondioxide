import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

const ExampleComponent = () => {
  const { data, fetchData } = useContext(AppContext);

  return (
    <div>
      {/* <div
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white h-auto w-auto"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <h1 className="mb-3 h2">Jumbotron</h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
        labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi
        voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
      </p>




    </div> */}
     
     <div
        className="image-container bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447522760800-59f967f9083e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          height: "100vh",
        }}
      >
        
        <div className="text-container">
          <h1 className="card-title">ecoCO2 Daily</h1>
          <p className="card-text">
            Daily Atmospheric Carbon Dioxide Concentration
          </p>
          <Link to="/dashboard/graph">
        {/* <button onClick={fetchData}>Fetch Data</button> */}
        <button onClick={fetchData} class="btn btn-success">
          CO2 Concentration
        </button>
      </Link>
      <ul>
        {data.exampleComponent.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
        </div>
      </div>
     {/* <h2 className="d-flex justify-content-center align-item-center">What is CO2?</h2> */}
    </div>
  );
};

export default ExampleComponent;
