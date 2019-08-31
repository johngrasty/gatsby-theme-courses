import React from 'react';
import Layout from './Layout';
import SEO from './seo';
import Classroom from './Classroom';
import { usePageValue } from '../context/PageContext';

function Lesson() {
  const { currentCourse } = usePageValue();
  return (
    <Layout>
      <SEO title={currentCourse.title} />
      <Classroom />
    </Layout>
  );
}

export default Lesson;
