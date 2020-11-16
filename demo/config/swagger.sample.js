module.exports = {
  definition: {
    info: {
      // API informations (required)
      title: 'Hello World', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'A sample API', // Description (optional)
    },
    host: `localhost:3000`, // Host (optional)
    basePath: '/', // Base path (optional)
  },
  apis: ['./controllers/**/*.js'], // 非必填，默认值`./controllers/**/*.js`
}
