import React from 'react';
import styled from 'styled-components';
import { Box, Card, Image } from 'rebass';
import banner from '../../assets/banner.jpg';

const List = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 0.2rem;
    span {
      &:first-child {
        display: inline-block;
        width: 30px;
        text-align: center;
      }
    }
  }
`;

function CoursesHeader() {
  return (
    <header>
      {/* <Box
        sx={{
          px: 4,
          py: [5, 5, 4, 4],
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          borderRadius: 5,
          color: 'white',
          bg: 'gray',
        }}
      >
      </Box> */}
      <Card width={'100%'} pt={3}>
        <Image src={banner} />
      </Card>

      <h3>Trailer</h3>
      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingBottom: 900 / 16 + '%',
          position: 'relative',
          overflow: 'hidden',
          '& > iframe': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            border: 0,
          },
        }}
      >
        <iframe
          title="God with Us with Desi Maxwell Trailer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y3UApDAfmGw"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <h3>Series Overview</h3>
      <p>
        Between the covers of the book called The Bible, there lies a wealth of
        fascinating accounts, such as Noah's ark, David defeating Goliath,
        Jesus' birth and his resurrection. But all these stories are actually
        part of a much bigger story – a story that sweeps from the creation of
        our cosmos to the climactic recreation of the cosmos.{' '}
      </p>

      <p>
        Central to this story is the Almighty God, who keeps coming down to be
        with his people. He comes into the garden, into the wilderness, into the
        Temple, in the flesh, in the Holy Spirit, and finally, he will dwell
        among his people in a new creation, in which he will be the centre.{' '}
      </p>
      
    </header>
  );
}

export default CoursesHeader;

// eslint-disable-next-line no-lone-blocks
{
  /* 
<li>
  <span role="img" aria-label="memo">
    📝
  </span>{' '}
  Use .mdx file to save course & lesson information and notes. This is a
  test
</li>
<li>
  <span role="img" aria-label="video Camera">
    📹
  </span>{' '}
  Youtube as video host
</li>
<li>
  <span role="img" aria-label="motorcycle">
    🏍️
  </span>{' '}
  Support autoplay
</li>
<li>
  <span role="img" aria-label="chart increasing">
    💹
  </span>{' '}
  Save learning progress
</li>
<li>
  <span role="img" aria-label="heart">
    💖
  </span>{' '}
  Bookmark courses
</li> */
}
