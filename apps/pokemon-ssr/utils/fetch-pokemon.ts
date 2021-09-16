import type { Pokemon } from '@nx-mono/shared-types';
import axios from 'axios';
import { QueryFunction } from 'react-query';

export const getPokemon: QueryFunction = async ({
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

export const getPokemonByName: QueryFunction = async ({
    queryKey,
}: {
    queryKey: string[];
}): Promise<Pokemon> => {
    const [key, query] = queryKey;
    const { data } = await axios.get(
        `/api/pokemon?${key}=${encodeURIComponent(query)}`
    );
    return data;
};

export const getPokemonImageSrc = (name: string) => {
    return `/pokemon/${name.toLowerCase().replace(' ', '-')}.jpg`;
};
