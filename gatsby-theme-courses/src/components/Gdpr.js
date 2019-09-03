import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useThemeUI } from 'theme-ui';

const Gdpr = () => {
  const context = useThemeUI();
  const { colors } = context.theme;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept or scroll to accept"
      cookieName="GDPRConsent"
      style={{ background: colors.alert }}
      buttonStyle={{ color: colors.text, fontSize: '13px' }}
      acceptOnScroll
    >
      This website uses only cookies and stores information necessary to play
      YouTube videos and record that you accepted this term.{' '}
    </CookieConsent>
  );
};

export default Gdpr;
