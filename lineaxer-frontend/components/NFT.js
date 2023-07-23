import notFoundImage from "../images/not-found.jpg"
import Image from "next/image"
import Link from "next/link"
import { Table } from "@nextui-org/react"
import { Card } from "web3uikit"

function extractTransactions(transfers) {
    const result = []

    for (let i = 0; i < transfers.length; i++) {
        const transaction = transfers[i].transaction
        const from = transfers[i].from.id
        const to = transfers[i].to.id
        const blockNumber = transaction.blockNumber

        const strippedTx = transaction.id.slice(0, 4) + "..." + transaction.id.slice(-6)
        const strippedFrom = from.slice(0, 3) + "..." + from.slice(-6)
        const strippedTo = to.slice(0, 3) + "..." + to.slice(-6)

        result.push({
            key: i + 1,
            tx: (
                <Link href={`https://goerli.lineascan.build/tx/${transaction.id}`}>
                    {strippedTx}
                </Link>
            ),
            from: (
                <Link href={`https://goerli.lineascan.build/address/${from}`}>{strippedFrom}</Link>
            ),
            to: <Link href={`https://goerli.lineascan.build/address/${to}`}>{strippedTo}</Link>,
            block: (
                <Link href={`https://goerli.lineascan.build/block/${blockNumber}`}>
                    {blockNumber}
                </Link>
            ),
        })
    }

    return result
}

export default function NFT({
    contractAddress,
    contractName,
    contractSymbol,
    ownerAddress,
    uri,
    transfers,
}) {
    const columns = [
        {
            key: "tx",
            label: "TX",
        },
        {
            key: "from",
            label: "From",
        },
        {
            key: "to",
            label: "To",
        },
        {
            key: "block",
            label: "Block Number",
        },
    ]

    return (
        <div>
            <div>
                {uri ? (
                    <div className="p-2">
                        <div className="flex flex-col items-end gap-2">
                            <Card
                                title={"Name: " + contractName}
                                description={"Symbol: " + contractSymbol}
                            >
                                <div>
                                    Contract:{" "}
                                    {
                                        <Link
                                            href={`https://goerli.lineascan.build/address/${contractAddress}`}
                                        >
                                            {contractAddress}
                                        </Link>
                                    }
                                </div>
                                <div>
                                    Owner:{" "}
                                    {
                                        <Link
                                            href={`https://goerli.lineascan.build/address/${ownerAddress}#tokentxnsErc721`}
                                        >
                                            {ownerAddress}
                                        </Link>
                                    }
                                </div>
                                <Image
                                    loader={() => uri}
                                    src={uri}
                                    height="450"
                                    width="450"
                                ></Image>
                                <Table
                                    aria-label="Example table with dynamic content"
                                    css={{
                                        height: "auto",
                                        minWidth: "100%",
                                    }}
                                >
                                    <Table.Header columns={columns}>
                                        {(column) => (
                                            <Table.Column key={column.key}>
                                                {column.label}
                                            </Table.Column>
                                        )}
                                    </Table.Header>
                                    <Table.Body items={extractTransactions(transfers)}>
                                        {(item) => (
                                            <Table.Row key={item.key}>
                                                {(columnKey) => (
                                                    <Table.Cell>{item[columnKey]}</Table.Cell>
                                                )}
                                            </Table.Row>
                                        )}
                                    </Table.Body>
                                </Table>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-end gap-2">
                        <Card
                            title={"Name: " + contractName}
                            description={"Symbol: " + contractSymbol}
                        >
                            <div>
                                Contract:{" "}
                                {
                                    <Link
                                        href={`https://goerli.lineascan.build/address/${contractAddress}`}
                                    >
                                        {contractAddress}
                                    </Link>
                                }
                            </div>
                            <div>
                                Owner:{" "}
                                {
                                    <Link
                                        href={`https://goerli.lineascan.build/address/${ownerAddress}#tokentxnsErc721`}
                                    >
                                        {ownerAddress}
                                    </Link>
                                }
                            </div>
                            <Image
                                src={notFoundImage}
                                height="450"
                                width="450"
                                alt="Image Not Found"
                            ></Image>
                            <Table
                                aria-label="Example table with dynamic content"
                                css={{
                                    height: "auto",
                                    minWidth: "100%",
                                }}
                            >
                                <Table.Header columns={columns}>
                                    {(column) => (
                                        <Table.Column key={column.key}>{column.label}</Table.Column>
                                    )}
                                </Table.Header>
                                <Table.Body items={extractTransactions(transfers)}>
                                    {(item) => (
                                        <Table.Row key={item.key}>
                                            {(columnKey) => (
                                                <Table.Cell>{item[columnKey]}</Table.Cell>
                                            )}
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
