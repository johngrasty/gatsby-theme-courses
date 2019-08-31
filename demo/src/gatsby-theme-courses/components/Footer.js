/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

function Footer() {
  return (
    <footer
      sx={{
        fontSize: 3,
        color: 'background',
        bg: 'text',
        variant: 'styles.footer',
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: 1200,
          mx: 'auto',
          mt: 5,
          px: 2,
          py: 4,
        }}
      >
        <Link to="/" sx={{ variant: 'styles.navlink', py: [3, 1], px: 3 }}>
          Home
        </Link>
        <a
          href="http://www.xplorations.org"
          sx={{ variant: 'styles.navlink', py: 1, px: 3 }}
        >
          Xplorations
        </a>
        <Link to="/about-desi" sx={{ variant: 'styles.navlink', py: [3, 1], px: 3 }}>
          About Desi Maxwell
        </Link>
        <div sx={{ mx: 'auto' }} />
        <div sx={{ py: [3, 1], pl: 3 }}>
          © {new Date().getFullYear()} Desi Maxwell
        </div>
      </div>
    </footer>
  );
}

export default Footer;
