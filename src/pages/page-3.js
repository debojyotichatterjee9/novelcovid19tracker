import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ThirdPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Dashboard Coming soon3..</h1>
        <p>🚕</p>
      </Container>
    </Layout>
  );
};

export default ThirdPage;
