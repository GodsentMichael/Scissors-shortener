FROM node:12-alpine

ADD package.json /tmp/package.json

RUN cd /tmp && npm install -q

RUN npm dedupe 

#Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

RUN npm run-script build

RUN npm install pm2 -g

EXPOSE 7070

#node cmd is run through env consul in envconsul-launch
CMD ["pm2-runtime", "process.json"]