import React, {useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from "axios";
import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
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
    <Layout pageName="two">
      <Helmet>
        <title>🌍Global Dashboard</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Dashboard Coming soon..</h1>
        <p>🚕</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
