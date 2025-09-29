var config = {};


const defaultURI = 'mongodb+srv://leonuser:1234@cluster0.3mpsuyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

config.mongoURI = {
  production: process.env.MONGO_URI || defaultURI,
  development: process.env.MONGO_URI || defaultURI,
  test: process.env.MONGO_URI || defaultURI,
};

module.exports = config;
