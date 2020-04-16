import React, {useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from "axios";
import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
    const [data, setData] = useState({ globalData: [] });

    useEffect( () => {
        const getGlobalTotal = async () => {
            const result = await axios(
                `https://corona.lmao.ninja/v2/countries?yesterday=true&sort=cases`,
              );
              setData(result.data);    
        }
        getGlobalTotal()
      }, []);
//      console.log(data)
    
    let renderTableHeader = () => {
        if(data.length > 0) {
//            let header = Object.keys(data[0])
        let header = ["S.No", "Flag", "Country", "Cases", "Deaths", "Today's Cases", "Today's Death", "Active", "Critical", "Recovered", "Tests"];
      return header.map((key, index) => {
         return <th className="tableHeader" key={index}>{key.toUpperCase()}</th>
      })      
        }
      
   }
    
    
    let renderTableGlobalData = (data) => {
        if(data.length > 0) {
            return data.map((info, index) => {
            const { country, cases, deaths, todayCases, todayDeaths, active, critical, recovered, tests } = info //destructuring
            return(
                <tr className="rowStyle" key={index}>
                    <td>{index+1}</td>
                    <td><img className="flag" src={info.countryInfo.flag} /></td>
                    <td>{country}</td>
                    <td className="increasing">{cases}</td>                    
                    <td className="light-danger">{deaths}</td>
                    <td className="increasing">{todayCases}</td>
                    <td className="light-danger">{todayDeaths}</td>
                    <td>{active}</td>
                    <td>{critical}</td>
                    <td>{recovered}</td>
                    <td>{tests}</td>
                </tr>
            )
        })
        }
    }
    
  return (
    <Layout pageName="two">
      <Helmet>
        <title>🌍Global Dashboard</title>
      </Helmet>
      <Container type="content" className="text-center">
        
      <h1 id='globalDataTableHeading'>🌍Global Statistics</h1>
            <table id='globaldataTable'>
               <tbody>
                <tr>{renderTableHeader()}</tr>
                  {renderTableGlobalData(data)}
               </tbody>
            </table>
      
      </Container>
    </Layout>
  );
};

export default SecondPage;
