# Product DB

## overview

A sample repository to implement an inventory management system as a learning tool.

Uses MEAN stack and docker concepts to implement a microservices architecture.

## known issues

npm complains about REGEX DOS unless silenced

## Versions and Features

0.0.1 - Basic Versions
0.0.2 - Added better doco, added mongo DB creds for non-test systems

## Starting and Running

### dev mode

Build the application in dev mode using:

```node install
node .
```

This uses ```./build/test-datasources.json``` as it's pre-filled datasource with a product in it.

### Docker mode

To run the application with a real mongo, use the ```Dockerfile``` in ```./build/docker```