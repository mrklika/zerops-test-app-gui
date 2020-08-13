import * as express from 'express';
import { AddressInfo } from 'net';
import { join } from 'path';

const app = express();
const port = 3000;
const host = '0.0.0.0';
const path = 'dist/app';

app.use(express.static(join(__dirname, '..', '..', path)));

export const server = app.listen(port, host, () => console.log(`✌️`));
