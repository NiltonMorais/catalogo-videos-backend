FROM node:18.7-slim as base
RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates
USER node
WORKDIR /home/node/app
#COPY package.json ./
#COPY yarn.lock ./
#RUN yarn install
#COPY . .

FROM base as dev
#CMD yarn run dev
CMD ["sh", "-c", "yarn install && tail -f /dev/null"]
# FROM base as prod
# #RUN yarn run build
# CMD yarn run start