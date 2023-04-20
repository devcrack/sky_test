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

[More about](docs/Prueba tecnica.pdf)
___
In order to execute the project you must have installed:
- NodeJS 
- NestJS
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
- Others handy sources about the use of Docker 
  - https://docs.docker.com/compose/reference/
  - https://docs.docker.com/engine/reference/commandline/container/

In order to run the project is necessary have 

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

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
