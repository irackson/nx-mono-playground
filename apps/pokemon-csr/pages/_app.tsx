import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
}

export default CustomApp;
