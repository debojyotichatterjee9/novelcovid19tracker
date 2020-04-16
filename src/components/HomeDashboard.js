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
                    <h4>Total Cases: {data.cases}</h4>
                    <h4> . </h4>
                    <h4>Total Deaths: {data.deaths}</h4>  
                </div>
            </div>
            
            <div className="column">
                <div className="today">
                    <h4>Today Cases: {data.todayCases}</h4>
                    <h4> . </h4>
                    <h4>Today Deaths: {data.todayDeaths}</h4>
                </div>
            </div>
                
            <div className="column">
                <div className="stats">
                    <h4>Recovered: {data.recovered}</h4>
                    <h4>Active: {data.active}</h4>
                    <h4>Critical: {data.critical}</h4>
                </div>
            </div>
            
            <div className="column">
                <div className="other">
                    <h4>Tests: {data.tests}</h4>
                    <h4> . </h4>
                    <h4>Affected Countries: {data.affectedCountries}</h4>
                </div>
            </div>
        </Container>
        
        <div className="updated">
          <div>
              <h4>Updated At: {new Date(data.updated).toLocaleString()}</h4>    
          </div>
        </div>

    </div>
    );
};

export default HomeDashboard;
