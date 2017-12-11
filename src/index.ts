import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as url from 'url';
import { procedure } from './db';

const app = express();

const router = express.Router();

app
    .use(bodyParser.urlencoded({extended: true}))
    // .use('/api', router)
    .get('/api', (req: express.Request, res: express.Response, next: express.NextFunction) => { 
        procedure('spGetMovies')
            .then((movies) => {
                res.json(movies[0])
            })
    })
    .get('/api/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => { 
        procedure('spGetMovie', [+req.params.id])
            .then((movies) => {
                res.json(movies[0][0])
            })
    })
    .post('/api', (req: express.Request, res: express.Response, next: express.NextFunction) => { 
        procedure('spInsertMovie', [req.body.movie, req.body.director, req.body.poster])
            .then((id) => {
                res.json(id)
            })
    })

app.listen(3000, () => {
    console.log(`listening on port 3000`);
});