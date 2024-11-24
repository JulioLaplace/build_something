# Number transformer

## Project description

This project is a simple number transformer.

## Architecture

The project is divided into 4 main parts:

- **Main frontend**: Display the current number. Receive an operation to transform the current and send it to the backend.
- **Operation service**: The user can submit an operation to transform the current number. The operation is sent to the backend
- **Backend**: The backend receives the operation and performs the transformation. The result is sent back to the main frontend.
- **Database**: The database stores the current number.
