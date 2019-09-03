/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import globalStyle from '../styled/globalStyle';
import typography from '../styled/typography';
import defaultTheme from '../styled/theme';
import Nav from './Nav';
import Footer from './Footer';
import Gdpr from './Gdpr';

const GlobalStyle = createGlobalStyle`
  ${typography.toString()}
  ${globalStyle}
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Layout = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <GlobalStyle />
      <Nav />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <Container>{children}</Container>
        <Gdpr />
      </main>
      <Footer />
    </div>
  </ThemeProvider>
);
Layout.propTypes = {
  theme: PropTypes.object,
};
Layout.defaultProps = {
  theme: defaultTheme,
};
export default Layout;
