module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    title: 'Resume Generator',
    githubUrl: 'https://github.com/visiky/resume.git',
    author: 'visiky',
    contact: 'https://github.com/visiky',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
