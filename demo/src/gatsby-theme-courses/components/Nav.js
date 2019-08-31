/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { Image} from 'rebass';
import { useSiteMetadata } from '../../../../gatsby-theme-courses/src/hooks/use-site-metadata.js';
import logo from '../../assets/logo.png'

const Nav = () => {
  const { title } = useSiteMetadata();
  return (
    <header
      sx={{
        variant: 'styles.header',
      }}
    >
      <div
        sx={{
          //   maxWidth: 1024,
          mx: 'auto',
          px: 3,
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Link to="/">
          <Image
            // width={[1, 1, 1 / 2]}
            height={[60, 60, 65, 70]}
            pt={[2]}
            pl={[2, 2, 3]}
            src={logo}
            alt={title}
          />
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link
          to="/about-desi"
          sx={{
            variant: 'styles.header.navlink',
            ml: 4,
            py: 2,
          }}
        >
          About
        </Link>
        <Link
          to="/God-with-us"
          sx={{
            variant: 'styles.header.navlink',
            ml: 4,
            py: 2,
            pr: [2, 2, 5]
          }}
        >
          Course
        </Link>
      </div>
    </header>
  );
};

export default Nav;
