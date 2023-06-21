
# ONDC Node Implementation

This is a Node.js server implementation for ONDC (Open Network for Digital Commerce). The server is built using Node.js and Express.js, and it uses various libraries such as axios, body-parser, cors, dotenv, and more.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. This project uses JavaScript as the main programming language.

### Installation

Clone the repository with the following command:

```bash
git clone https://github.com/beinnovative/ondc-node-imp.git
```

After cloning, navigate to the project directory and install the dependencies with:

```bash
npm install
```

This project uses the following dependencies:

- axios (version 1.4.0)
- body-parser (version 1.20.2)
- cors (version 2.8.5)
- dotenv (version 16.2.0)
- express (version 4.18.2)
- libsodium-wrappers (version 0.7.11)
- loadash (version 1.0.0)
- lodash (version 4.17.21)
- uuid (version 9.0.0)【17†source】

The server can be started using the command:

```bash
npm start
```

This will start the server using nodemon and the entry point is `index.js`.

## Structure

The server is set up with the `index.js` file serving as the entry point. This file imports and uses Express, body-parser, cors, and a set of APIs defined in the `api/index.js` file. The server listens on the port specified by the `PORT` environment variable or defaults to port 3000【11†source】.

The `api/index.js` file sets up a router and defines a base route that returns a simple message. It also sets up a sub-route, '/ondc', which uses the APIs defined in the `api/ondc.js` file【25†source】.

The `api/ondc.js` file sets up another router and defines two routes. The base route makes a call to an external API, and the '/webhook' route processes a webhook payload【33†source】.

## Environment Variables

This project uses environment variables for configuration. These are the environment variables used:

- `DOMAIN`
- `COUNTRY`
- `CITY`
- `BPP_UNIQUE_KEY_ID`
- `BPP_URI`

These should be defined in a `.env` file in the root directory of the project.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.

## License

This project is licensed under the ISC License.

## Disclaimer

This is a basic project structure inferred from the available code. The actual functionality and purpose of the project may differ. Please contact the original authors for more accurate information.
