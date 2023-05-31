import React, { useEffect, useState } from 'react'

function Carbon() {

  const [carbon, setCarbon] = useState(null);
  useEffect(() => {
    fetch("https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "57ede76d0emsh8d4e06e204f1feep1d1c21jsn51b436411986",
        "X-RapidAPI-Host": "daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setCarbon(res.co2);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    
    <div>
    
    <table border='1' cellSpacing='0' cellPadding='15px'>
      <tr>
        <th>cycle</th>
        <th>day</th>
        <th>month</th>
        <th>trend</th>
        <th>year</th>
        </tr>
   <tr>
    <td>{carbon && <p>{carbon[1].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[1].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[1].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[1].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[1].year}</p>}
      </td>
   </tr>
   <tr>
    <td>{carbon && <p>{carbon[400].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[400].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[400].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[400].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[400].year}</p>}
      </td>
   </tr>
   <tr>
    <td>{carbon && <p>{carbon[800].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[800].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[800].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[800].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[800].year}</p>}
      </td>
   </tr>
   <tr>
    <td>{carbon && <p>{carbon[1100].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[1100].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[1100].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[1100].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[1100].year}</p>}
      </td>
   </tr>
   <tr>
    <td>{carbon && <p>{carbon[1800].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[1800].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[1800].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[1800].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[1800].year}</p>}
      </td>
   </tr>
   <tr>
    <td>{carbon && <p>{carbon[1900].cycle}</p>}</td>
      <td>
      {carbon&& <p>{carbon[1900].day}</p>}
      </td>
    <td>
    {carbon && <p>{carbon[1900].month}</p>}
    </td>
      <td>
      {carbon && <p>{carbon[1900].trend}</p>}
      </td>
     <td>
      {carbon && <p>{carbon[1900].year}</p>}
      </td>
   </tr>
      </table>
    </div>
  );
  

  
}

export default Carbon