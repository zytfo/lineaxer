import { useRouter } from "next/router"

import NFT from "../components/NFT"
import { useNotification, Input } from "web3uikit"
import { useQuery } from "@apollo/client"
import GET_NFTS from "../constants/subgraphQueries"

export default function AddressPage() {
    const router = useRouter()
    const { address } = router.query

    const { loading, error, data: nfts } = useQuery(GET_NFTS(address))

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                {console.log(nfts)}
                {loading || !nfts || !nfts.account ? (
                    <div>Nothing Found or Still Loading...</div>
                ) : (
                    nfts.account.ERC721tokens.map((nft) => {
                        const { contract, owner, uri, transfers } = nft
                        return (
                            <NFT
                                contractAddress={contract.id}
                                contractName={contract.name}
                                contractSymbol={contract.symbol}
                                ownerAddress={owner.id}
                                uri={uri}
                                transfers={transfers}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}
