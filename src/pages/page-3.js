import React, {useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from "axios";
import Layout from 'components/Layout';
import Container from 'components/Container';

const ThirdPage = () => {
  const [data, setData] = useState({ indiaData: [] });

    useEffect( () => {
        const getIndiaData = async () => {
            const result = await axios(
                `https://api.covid19india.org/data.json`,
              );
              setData(result.data.statewise);    
        }
        getIndiaData()
      }, []);
     console.log(data)
    
    let renderTableHeader = () => {
        if(data.length > 0) {
//            let header = Object.keys(data[0])
        let header = ["S.No", "State", "Confirmed", "Recovered", "Active", "Death", "Updated Time"];
      return header.map((key, index) => {
         return <th className="tableHeader" key={index}>{key.toUpperCase()}</th>
      })      
        }
      
   }
    
    
    let renderTableIndiaData = (data) => {
        if(data.length > 0) {
            return data.map((info, index) => {
            const { active, confirmed, deaths, deltaconfirmed, deltadeaths, deltarecovered, lastupdatedtime, recovered, state, statenotes } = info //destructuring
            return(
                <tr className="rowStyle" key={index}>
                    <td>{index+1}</td>
                    <td>{state}</td>
                    <td>{confirmed}</td>
                    <td className="increasing">{recovered}</td>
                    <td>{active}</td>                    
                    <td className="light-danger">{deaths}</td>
                    <td>{lastupdatedtime}</td>
                </tr>
            )
        })
        }
    }
    
  return (
    <Layout pageName="three">
      <Helmet>
        <title>🌍India Dashboard</title>
      </Helmet>
      <Container type="content" className="text-center">
        
      <h1 id='indiaDataTableHeading'>🚩India Statistics</h1>
            <table id='indiadataTable'>
               <tbody>
                <tr>{renderTableHeader()}</tr>
                  {renderTableIndiaData(data)}
               </tbody>
            </table>
      
      </Container>
    </Layout>
  );
};

export default ThirdPage;
