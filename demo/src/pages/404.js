/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from '../../../gatsby-theme-courses/src/components/Layout';

const Wrapper = props => (
  <div
    {...props}
    sx={{
      px: 0,
      py: '1rem',
    }}
  />
);

function NotFound() {
  return (
    <Layout>
      <Wrapper>
        <h1>
          Not found{' '}
          <span role="img" aria-label="crying face">
            😢
          </span>
        </h1>
      </Wrapper>
    </Layout>
  );
}

export default NotFound;
