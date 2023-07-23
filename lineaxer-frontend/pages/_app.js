import "../styles/globals.css"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { MoralisProvider } from "react-moralis"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://65.21.255.216:8000/subgraphs/name/generated/lineaxer",
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Lineaxer</title>
                <meta name="description" content="Linea NFT Indexer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
