import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import SEO from './seo';
import CoursesList from './CoursesList';
import CoursesHeader from './CoursesHeader';

const Wrapper = styled.div`
  padding: 0 1rem;
`;

function Courses() {
  return (
    <Layout>
      <SEO title="God with Us course with Desi Maxwell" />
      <Wrapper>
        <CoursesHeader />
        <h3>Courses</h3>
        <CoursesList />
      </Wrapper>
    </Layout>
  );
}
export default Courses;
