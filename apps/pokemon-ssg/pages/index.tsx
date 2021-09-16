import type { Pokemon } from '@nx-mono/shared-types';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { Card, Col, Container, FormControl, Row } from 'react-bootstrap';
import styles from './index.module.scss';
import Link from 'next/link';
import { getPokemon, getPokemonImageSrc } from '../utils/fetch-pokemon';

export function Index() {
    const [query, setQuery] = useState('');
    const data = useQuery(['q', query], getPokemon).data as Pokemon[];
    const pokemon = data?.map((poke) => ({
        ...poke,
        image: getPokemonImageSrc(poke.name.english),
    }));

    return (
        <div className={styles.page}>
            <Container></Container>
            <FormControl
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {pokemon && (
                <Row>
                    {pokemon.map(({ id, name, type, image }) => (
                        <Col xs={4} key={id} style={{ padding: 5 }}>
                            <Link href={`pokemon/${name.english}`}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={image}
                                        onError={(e) =>
                                            (e.target.src = `https://via.placeholder.com/${300}`)
                                        }
                                        style={{ maxHeight: 300 }}
                                    ></Card.Img>

                                    <Card.Body>
                                        <Card.Title>{name.english}</Card.Title>
                                        <Card.Subtitle>
                                            {type.join(', ')}
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default Index;
