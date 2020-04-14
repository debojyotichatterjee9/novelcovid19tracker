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
        <Container className="homedashboard">
            <h4>Updated At: {new Date(data.updated).toLocaleString()}</h4>
            <h4>Total Cases: {data.cases}</h4>
            <h4>Total Deaths: {data.deaths}</h4>
            <h4>Today Cases: {data.todayCases}</h4>
            <h4>Today Deaths: {data.todayDeaths}</h4>
            <h4>Recovered: {data.recovered}</h4>
            <h4>Active: {data.active}</h4>
            <h4>Critical: {data.critical}</h4>
            <h4>Updated At: {data.casesPerOneMillion}</h4>
            <h4>Updated At: {data.deathsPerOneMillion}</h4>
            <h4>Updated At: {data.tests}</h4>
            <h4>Updated At: {data.testsPerOneMillion}</h4>
            <h4>Updated At: {data.affectedCountries}</h4>
        </Container>
    );
};

export default HomeDashboard;
