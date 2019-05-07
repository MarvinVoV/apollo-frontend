const SERVICE_URL = {
    production: 'http://isunyameng.com:8081',
    development: 'http://localhost:8081'
};

const ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    project_name: 'Apollo FrontEnd',
    service_url: SERVICE_URL[ENV]
};




