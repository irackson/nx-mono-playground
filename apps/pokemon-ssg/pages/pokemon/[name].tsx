import type { Pokemon } from '@nx-mono/shared-types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import {
    getPokemonImageSrc,
    getServerSidePokemonByName,
} from '../../utils/fetch-pokemon';
import './[name].module.scss';

/* eslint-disable-next-line */
export interface NameProps {
    data: Pokemon;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = (await getServerSidePokemonByName(
        'name',
        context.params.name.toString()
    )) as Pokemon;

    return {
        props: {
            data,
        },
    };
};

export function Name({ data }: NameProps) {
    return (
        <div>
            <Head>
                <title>{data?.name.english ?? 'Pokemon'}</title>
            </Head>
            <Container>
                {data && (
                    <>
                        <h1>{data.name.english}</h1>
                        <Row>
                            <Col xs={4}>
                                <img
                                    src={getPokemonImageSrc(data.name.english)}
                                    onError={(e) =>
                                        ((
                                            e.target as HTMLImageElement
                                        ).src = `https://via.placeholder.com/${600}`)
                                    }
                                    style={{ width: '100%' }}
                                ></img>
                            </Col>
                            <Col xs={8}>
                                {Object.entries(data.base).map(
                                    ([key, value]) => (
                                        <Row key={key}>
                                            <Col xs={2}>{key}</Col>
                                            <Col xs={10}>{value}</Col>
                                        </Row>
                                    )
                                )}
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Name;
