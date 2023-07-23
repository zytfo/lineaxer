# Lineaxer: Linea NFT-indexer

## ETHGlobal Paris. Linea x The Graph x Metamask

### Author: Artur Khaialiev a.k.a [zytfo](https://github.com/zytfo)

### Applied bounties:

- [Metamask x Linea](https://ethglobal.com/events/paris2023/prizes#metamask): Build an NFT indexer on Linea
- [The Graph](https://ethglobal.com/events/paris2023/prizes#the-graph): Best New Subgraph or Substream; Best use of Existing Subgraph or Substream

## Submission Content

1. [Lineaxer-Subgraph](https://github.com/zytfo/lineaxer/tree/master/lineaxer-subgraph) - self-hosted Linea Goerli Subgraph with a ERC721 indexer. Deployed at: http://65.21.255.216:8000/subgraphs/name/generated/lineaxer/graphql

2. [Lineaxer-Frontend](https://github.com/zytfo/lineaxer/tree/master/lineaxer-frontend) - self-hosted Next JS application to gather data from the deployed Linea Goerli subgraph. Deployed at: http://135.181.109.7:3000

## Main Challenges

1. The Graph

- No listed Linea Goerli network in the dashboard at https://thegraph.com/hosted-service

- Since I have an M1 Pro `docker-compose` in the `graph-node` repository has always failed because of an out-of-memory problem and was solved by deploying a node on a remote host. Also, I was talking to a mentor and we discovered [docker-compose.yml](https://github.com/graphprotocol/graph-node/blob/master/docker/docker-compose.yml) maps are not the latest image of the `graphprotocol/graph-node` so it caused the described problem. It may be solved with the latest tag of the image, the latest one is `graphprotocol/graph-node:97e0adc`

- I thought there was a CORS problem asking the subgraph with queries, but it was an incorrect subgraph URL

- Rate limit on Infura. Syncing the Linea Coerli chain caused a rate limit of queries to a chain, thanks to Emily for providing me with an API-key for Infura

2. Linea x Metamask

- **I'M NOT A FRONTEND DEV BUT I MADE IT** (thanks to Patrick Collins from ChainLink with his tutorials)

## How to

1. The Graph

- Use the GraphQL interface to query data at http://65.21.255.216:8000/subgraphs/name/generated/lineaxer/graphql
- or send GraphQL queries to http://65.21.255.216:8000/subgraphs/name/generated/lineaxer

2. Linea x Metamask

- Go at http://135.181.109.7:3000/ (it will redirect to an existing wallet on Linea Goerli)

- Search for an adress in the URL after a slash (e.g. http://135.181.109.7:3000/0xb904c30e0f8f45f2face933523e33072a4e6781e)

- Note: all addresses are clickable

- You may also connect a wallet (just to look at how many funds do you have :))

## Thanks to

- Metamask x Linea team, especially Emily
- The whole Graph team, I love you guys

## A few pics
