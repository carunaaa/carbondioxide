import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';

const ExampleComponent = () => {
  const { data, fetchData } = useContext(AppContext);

  return (
    <div>
      <p>The concentration of carbon dioxide (CO2) in the Earth's atmosphere has been increasing over time due to human activities such as burning fossil fuels and deforestation. This increase in CO2 concentration is a significant contributor to climate change. The Mauna Loa Observatory in Hawaii is one of the most well-known monitoring stations that tracks atmospheric CO2 levels. They have been recording daily CO2 measurements since 1958. You can visit their website or other reliable sources to obtain specific data for the period you're interested in. Additionally, various scientific organizations and institutions regularly publish reports and data on atmospheric CO2 concentrations. Some prominent sources include the National Oceanic and Atmospheric Administration (NOAA) and the Intergovernmental Panel on Climate Change (IPCC). Checking their websites or databases can provide you with historical CO2 data as well. Remember to consult authoritative sources for the most accurate and up-to-date information on atmospheric CO2 concentrations.</p>
      <Link to="/dashboard/graph">
      <button onClick={fetchData}>Fetch Data</button>
      </Link>
      <ul>
        {data.exampleComponent.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;