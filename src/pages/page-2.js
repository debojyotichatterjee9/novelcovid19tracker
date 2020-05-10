import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from "axios";
import Layout from 'components/Layout';
import Container from 'components/Container';
import Table from 'react-bootstrap/Table';

const SecondPage = () => {
  const [data, setData] = useState({ globalData: [] });

  useEffect(() => {
    const getGlobalTotal = async () => {
      const result = await axios(
        `https://corona.lmao.ninja/v2/countries?yesterday=true&sort=cases`,
      );
      setData(result.data);
    }
    getGlobalTotal()
  }, []);
  // console.log(data)

  let renderTableHeader = () => {
    if (data.length > 0) {
      //            let header = Object.keys(data[0])
      //had to reduce the table to achieve a better mobile view
      let header = ["S.No", "Flag", "Country", "Cases", "Deaths", "Today's Cases", "Today's Death", "Active", "Critical", "Recovered", "Tests"];
      // let header = ["S.No", "Flag", "Country", "Cases", "Deaths", "Today's Cases", "Today's Death", "Recovered"];
      return header.map((key, index) => {
        return <th className="tableHeader" key={index}>{key.toUpperCase()}</th>
      })
    }

  }


  let renderTableGlobalData = (data) => {
    if (data.length > 0) {
      return data.map((info, index) => {
        const { country, cases, deaths, todayCases, todayDeaths, active, critical, recovered, tests } = info //destructuring
        return (
          <tr className="rowStyle" key={index}>
            <td>{index + 1}</td>
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
      <Container className="container text-center">

        <h1 id='globalDataTableHeading' className="display-4 text-center">Global Stats</h1>
        <Table striped bordered hover variant="dark" responsive="xl" id='globaldataTable'>
          <thead>
            <tr>{renderTableHeader()}</tr>
          </thead>
          <tbody>
            {renderTableGlobalData(data)}
          </tbody>
        </Table>

      </Container>
    </Layout>
  );
};

export default SecondPage;
