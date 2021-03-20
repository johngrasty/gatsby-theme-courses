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
    {
      resolve: 'gatsby-plugin-ackee-tracker',
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: '17af5641-03af-4cdc-b69d-666f4e326083',
        // URL to Server eg: "https://analytics.test.com".
        server: 'https://ackee-2q8g.onrender.com',
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // Enable or disable the tracking of your own visits (as identified by your login to the Ackee dashboard).
        ignoreOwnVisits: false,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true,
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
