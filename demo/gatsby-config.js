module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-courses`,
      options: {
        contentPath: 'content/courses',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
  siteMetadata: {
    title: `God with Us`,
    author: `Desi Maxwell with Vrelec Publishing of Slovenia`,
    producer: 'Vrelec',
    description: `The central story arc of the Bible taught in 12 video lessons`,
    siteUrl: `https://godwithus.vrelec.si`,
    social: [
      {
        name: `github`,
        url: `https://github.com/hangindev`,
      },
    ],
  },
};
