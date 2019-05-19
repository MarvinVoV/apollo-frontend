FROM node:10.15-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm run build:prod

FROM nginx:1.16-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/certs /etc/nginx/certs

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]