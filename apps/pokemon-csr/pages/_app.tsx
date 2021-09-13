import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Pokemon-CSR!</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="app">
                <header className="flex">
                    <h1>Welcome to pokemon-csr!</h1>
                </header>
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default CustomApp;
