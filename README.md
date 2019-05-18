# Apollo FrontEnd

## Development

cd project_dir

start
```bash
./start_dev
```

stop Nginx
```bash
nginx -s quit
```

## Production
```bash
npm run start:prod 
```

## With Docker

```bash
# build image
docker build -t marvinvov/apollo-front:latest .

# start container (detach)
docker run --name my-nginx --network apollo_service-shared-net -p 80:80 marvinvov/apollo-front:latest -d

# or use docker-compose
docker-compose up --no-build 

```

