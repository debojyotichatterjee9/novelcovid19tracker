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
//      console.log(data)
    return (
    <div>
        <Container className="homedashboard">
            <div className="column">
                <div className="total">
                    <h1> ☢ </h1>
                    <div className="heading">TOTAL</div>
                    <div className="title">Cases:</div><div className="value">{data.cases}</div>
                    <div className="title">Deaths:</div><div className="value">{data.deaths}</div>  
                </div>
            </div>
            
            <div className="column">
                <div className="today">
                    <h1> ☢ </h1>
                    <div className="heading">TODAY</div>
                    <div className="title">Cases:</div><div className="value">{data.todayCases}</div>
                    <div className="title">Deaths:</div><div className="value">{data.todayDeaths}</div>
                </div>
            </div>
                
            <div className="column">
                <div className="stats">
                    <h1> ⚠ </h1>
                    <div className="title">Recovered:</div><div className="value">{data.recovered}</div>
                    <div className="title">Active:</div><div className="value">{data.active}</div>
                    <div className="title">Critical:</div><div className="value">{data.critical}</div>
                </div>
            </div>
            
            <div className="column">
                <div className="other">
                    <h1> 👁‍🗨 </h1>
                    <div className="title">Tests:</div><div className="value">{data.tests}</div>
                    <div className="title">Affected Countries:</div><div className="value">{data.affectedCountries}</div>
                </div>
            </div>
        </Container>
        
        <div className="updated glow">
          <div>
              <code>Updated At: {new Date(data.updated).toLocaleString()}</code>
          </div>
        </div>

    </div>
    );
};

export default HomeDashboard;
