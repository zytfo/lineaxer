# Linea Local Node Subgraph

## Run a local graph-node connected to Linea Goerli Network

1. `git clone git@github.com:graphprotocol/graph-node.git` - clone a graph node repo

2. Edit row in `docker-compose.yaml` in the `docker` folder:

- From: `ethereum: 'mainnet:http://host.docker.internal:8545'`

- To: `ethereum: 'mainnet:https://linea-goerli.infura.io/v3/<API_KEY>'`, where `<API_KEY>` is your API key from [Infura](https://app.infura.io/dashboard).

3. `docker-compose up -d`

- It may go down on M1 due to out-of-memory problem. Check this out: https://github.com/graphprotocol/graph-node/tree/master/docker#running-graph-node-on-an-macbook-m1

The sample of the `docker-compose.yaml` provided in this repository.

## Generate and deploy an ERC-721 subgraph on a local node with @openzeppelin/subgraphs.

1. `yarn install`

2. Check out `configs/sample.json`.

3. Install `yarn global add @graphprotocol/graph-cli`.

4. `yarn graph-compiler --config configs/sample.json --include node_modules/@openzeppelin/subgraphs/src/datasources --export-schema --export-subgraph` - generate metadata and ABIs with `configs/sample.json`

5. `graph create generated/lineaxer --node http://127.0.0.1:8020` - create a new subgraph on a local Linea node

6. `graph deploy --ipfs http://localhost:5001 --node http://localhost:8020 generated/lineaxer ./generated/lineaxer.subgraph.yaml` - deploy created subgraph

7. Proceed to http://localhost:8000/subgraphs/name/generated/lineaxer/graphql

Deployed subgraph for a hackathon at: http://65.21.255.216:8000/subgraphs/name/generated/lineaxer/graphql
