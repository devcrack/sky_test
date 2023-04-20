<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Sky_Airline_Logo.svg" width="200" alt="Nest Logo" /></a>
</p>



  <p align="center">A technical test for fullstack job position at sky :blush: </p>
    <p align="center">

## Description

This project creates a small backend using the NestJS framework. 
It simply exposes a GET endpoint "/test/users", 
which provides a response with a body containing a list of users 
with some properties. The users are sorted by Id in descending order. 
In addition to this, when making the "/test/users" request, 
the obtained users are published in rabbitMQ.

___

In order to run the project you must have installed:
- NodeJS
- Docker

## Installation

### Install NodeJS
Debian and Ubuntu based Linux distributions
```bash
$ sudo apt-get update
$ sudo apt-get install nodejs npm
$ node -v
$ npm -v
```
More about: https://nodejs.org/en/download/package-manager
### Install NestJS 
```bash
$ https://docs.nestjs.com/cli/overview
```
More about: https://docs.nestjs.com/

### Docker
- [How to install Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
-  [About Docker Compose Installation](https://docs.docker.com/compose/install/linux/)
- Others handy resources about the use of Docker 
  - https://docs.docker.com/compose/reference/
  - https://docs.docker.com/engine/reference/commandline/container/

In order to run the project is necessary have 

## Running Rabbitmq 
For this purpose a Docker container with the image of RabbitMQ was provided.
Once you have Docker installed you should to follow the next steps:

- In your directory work(where is the docker image ) 
```bash
docker compose up
```
Once you have you downloaded and initialized the container you could use:
```bash
docker start -ai <containerID>
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

$ npm run test:watch
```

