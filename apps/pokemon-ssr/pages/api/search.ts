import { NextApiRequest, NextApiResponse } from 'next';

import pokemon from '../../pokemon.json';
export default (req: NextApiRequest, res: NextApiResponse) => {
    const filter = req.query.q ? new RegExp(req.query.q as string, 'i') : /.*/;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify(
            pokemon
                .filter(({ name: { english } }) => english.match(filter))
                .slice(0, 10)
        )
    );
};
