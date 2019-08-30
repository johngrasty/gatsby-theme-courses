import React from 'react';
import { Helmet } from 'react-helmet';
import ThemeCourses from '../../../../gatsby-theme-courses/src/components/Courses';
import { useSiteMetadata } from '../../../../gatsby-theme-courses/src/hooks/use-site-metadata.js';
import banner from '../../assets/banner.jpg';

function Courses() {
  const { siteUrl } = useSiteMetadata();
  const bannerUrl = siteUrl + banner;
  return (
    <>
      <ThemeCourses />
      <Helmet>
        <meta name="og:image" content={bannerUrl} />
      </Helmet>
    </>
  );
}

export default Courses;
