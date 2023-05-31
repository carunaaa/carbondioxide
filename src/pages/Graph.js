import React, { useState, useEffect } from 'react';
import { Line} from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement,Tooltip,Legend, Title } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

function Graph() {
    // const data = {
    //     labels: ["2013","2014","2015","2016","2017","2018"],
    //     datasets: [{
    //         data: [""],
    //         background: 'rgba(75, 192, 192, 0.2)',
    //         borderColor: '#f26c6d',
    //         pointBorderColor: 'rgba(75, 192, 192, 1)',
    //         pointBorderWidth: 4
    //     }]
    // };
  const [graph, setGraph] = useState();

  useEffect(() => {
    fetch("https://daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com/api/co2-api", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "57ede76d0emsh8d4e06e204f1feep1d1c21jsn51b436411986",
        "X-RapidAPI-Host": "daily-atmosphere-carbon-dioxide-concentration.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setGraph({
          // labels: json.co2.map((data) => data.year),
          labels: json.co2.map((data) => {
            const date = new Date(data.year, data.month - 1);
            return date.toLocaleString('en-us', { month: 'numeric', year: 'numeric' });
          }),
          datasets: [
            {
              label: "Trend",
              data: json.co2.map((data) => data.trend),
            //   fill: true,
              borderColor: "#482121",
              backgroundColor: "#482121",
              pointBorderColor: '#482121',
            },
            {
                label: "Cycle",
                data: json.co2.map((data) => data.cycle),
                borderColor: "#E57C23",
                backgroundColor: "#E57C23",
                pointBorderColor: '#E57C23',
            },    
          ],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (

    <div className='graph'>
        <h1>CO2 Concentration</h1>
        
      {graph && (
        <Line
          data={graph}
          options={{
            responsive: true,
            plugins: {
                tooltip: {
                enabled: true,
                backgroundColor: '#41644A ',
                bodyColor: '#F0F0F0',
                bodyFont: {
                size: 14,
                color: '#F0F0F0'
                },
                callbacks: {
                  label: (context) => {
                    const datasetLabel = context.dataset.label || '';
                    const value = context.parsed.y || 0;
                    const year = context.chart.data.labels[context.dataIndex];
                    const month = context.chart.data.labels[context.dataIndex];
                    return `${datasetLabel}: ${value} `;
                  }
                }
              },
                legend: {
                    position:'right',
                },
                title:
                {
                    display: true,
                    text: '(2013-2023)',
                },     
            } 
          }} 
        />  
      )}
    </div>  
  );
}

export default Graph;


 

  