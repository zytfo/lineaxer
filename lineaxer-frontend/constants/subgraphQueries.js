import { gql } from "@apollo/client"

const GET_NFTS = (address) => gql`
    {
        account(id: "${address}") {
            ERC721tokens {
                contract {
                    id
                    supportsMetadata
                    name
                    symbol
                }
                owner {
                    id
                }
                uri
                transfers(first: 10) {
                    transaction {
                        id
                        blockNumber
                    }
                    timestamp
                    from {
                        id
                    }
                    to {
                        id
                    }
                }
            }
        }
    }
`
export default GET_NFTS
