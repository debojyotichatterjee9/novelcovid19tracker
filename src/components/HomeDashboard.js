import React, {useState, useEffect } from 'react';

import Container from 'components/Container';
import axios from "axios";


  
const HomeDashboard = () => {
    const [data, setData] = useState({ globalData: [] });

    useEffect(() => {
        const getGlobalTotal = async (yesterdayDataFlag) => {
            const result = await axios(
                `https://corona.lmao.ninja/v2/all?yesterday=${yesterdayDataFlag}`,
              );
              setData(result.data);    
        }
        getGlobalTotal(true)
      }, []);
      console.log(data)
    return (
    <div>
        <Container className="homedashboard">
            <div className="column">
                <div className="total">
                    <h1> ☢ </h1>
                    <h4>Total</h4>
                    <h5>Cases: {data.cases}</h5>
                    <h5>Deaths: {data.deaths}</h5>  
                </div>
            </div>
            
            <div className="column">
                <div className="today">
                    <h1> ☢ </h1>
                    <h4>Today</h4>
                    <h5>Cases: {data.todayCases}</h5>
                    <h5>Today Deaths: {data.todayDeaths}</h5>
                </div>
            </div>
                
            <div className="column">
                <div className="stats">
                    <h1> ⚠ </h1>
                    <h5>Recovered: {data.recovered}</h5>
                    <h5>Active: {data.active}</h5>
                    <h5>Critical: {data.critical}</h5>
                </div>
            </div>
            
            <div className="column">
                <div className="other">
                    <h1> 👁‍🗨 </h1>
                    <h5>Tests: {data.tests}</h5>
                    <h5>Affected Countries: {data.affectedCountries}</h5>
                </div>
            </div>
        </Container>
        
        <div className="updated">
          <div>
              <h4><code>Updated At: {new Date(data.updated).toLocaleString()}</code></h4>    
          </div>
        </div>

    </div>
    );
};

export default HomeDashboard;
