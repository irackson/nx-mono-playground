import { NextApiRequest, NextApiResponse } from 'next';

import pokemon from '../../pokemon.json';
export default (req: NextApiRequest, res: NextApiResponse) => {
    const pokemonToFind =
        typeof req.query.name === 'string'
            ? req.query.name
            : req.query.name.shift();

    if (!pokemonToFind) {
        res.statusCode = 400;
        res.end('Must have a name');
    } else {
        const found = pokemon.find(
            ({ name: { english } }) => english === pokemonToFind
        );

        if (!found) {
            res.statusCode = 404;
            res.end(`Pokemon ${pokemonToFind}`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(found));
        }
    }
};
