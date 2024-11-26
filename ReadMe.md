# Number transformer

## Project description

This project is a simple number transformer.

## Architecture

The project is divided into 4 main parts:

- **Display Service**: Display the current number. Receive an operation to transform the current and send it to the backend.
- **Operation Service**: The user can submit an operation to transform the current number. The operation is sent to the backend
- **Backend**: The backend receives the operation and performs the transformation. The result is sent back to the main frontend.
- **Database**: The database stores the current number.

## Interactions

- **Operation service -> Backend**: The operation service sends the operation to the backend.
- **Backend -> Database**: The backend sends the current number to the database.
- **Display Service -> Backend**: The main frontend views the current number.

## Uesful commands

- **Build a Docker image**: `docker build -t <image_name> .` being in the root directory of the project.
- **Run the Docker image**: `docker run -p 8080:3000 <image_name>` with 8080 being the port of the host machine and 3000 the port of the container.

- **MongoDB command**: `docker run -d --network number-transformer -p 27017:27017 --network-alias mongo --name mongo mongo:latest` the --name mongo is the name used inside the network to refer to the container.
- **backend command**: `docker run -p 8082:3000 --network number-transformer --name backend julio/backend` the --name backend is the name used inside the network to refer to the container.
