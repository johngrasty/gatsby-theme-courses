import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import globalStyle from '../styled/globalStyle';
import typography from '../styled/typography';
import defaultTheme from '../styled/theme';
import Nav from './Nav';
import Footer from './Footer';

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
    <>
      <GlobalStyle />
      <Nav />
      <Container>{children}</Container>
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{' '}
        <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
      </CookieConsent>
      <Footer />
    </>
  </ThemeProvider>
);
Layout.propTypes = {
  theme: PropTypes.object,
};
Layout.defaultProps = {
  theme: defaultTheme,
};
export default Layout;
