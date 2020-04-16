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
        <h1>India Dashboard coming soon..</h1>
        <h1>🛺</h1>
      </Container>
    </Layout>
  );
};

export default ThirdPage;
