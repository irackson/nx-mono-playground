import styles from './index.module.scss';
import { Container, FormControl, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery, QueryFunction } from 'react-query';
import type { Pokemon } from '@nx-mono/shared-types';

const getPokemon: QueryFunction = async ({
    queryKey,
}: {
    queryKey: string[];
}): Promise<Pokemon[]> => {
    const [key, query] = queryKey;
    const { data } = await axios.get(
        `/api/search?${key}=${encodeURIComponent(query)}`
    );
    return data;
};

export function Index() {
    const [query, setQuery] = useState('');
    const data = useQuery(['q', query], getPokemon).data as Pokemon[];
    const pokemon = data?.map((poke) => ({
        ...poke,
        image: `/pokemon/${poke.name.english
            .toLowerCase()
            .replace(' ', '-')}.jpg`,
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
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default Index;
