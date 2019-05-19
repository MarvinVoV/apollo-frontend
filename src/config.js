const SERVICE_URL = {
    production: 'https://isunyameng.com/server',
    development: 'https://isunyameng.com/server',
    // development: 'http://localhost:8081',
    // development: 'http://localhost/server',
};

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    project_name: 'Apollo FrontEnd',
    service_url: SERVICE_URL[ENV]
};




