import {
    getPokemonByName,
    getPokemonImageSrc,
} from '../../utils/fetch-pokemon';
import { useQuery } from 'react-query';
import type { Pokemon } from '@nx-mono/shared-types';
import { Card, Col, Container, FormControl, Row } from 'react-bootstrap';

import { useRouter } from 'next/router';
import './[name].module.scss';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface NameProps {}

export function Name(props: NameProps) {
    const router = useRouter();

    const data = useQuery(['name', router.query.name], getPokemonByName)
        .data as Pokemon;

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
