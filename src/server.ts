import * as express from 'express';
import { AddressInfo } from 'net';
import { join } from 'path';

const app = express();
const port = 3000;
const path = 'dist/app';

app.use(express.static(join(__dirname, '..', '..', path)));

export const server = app.listen(port, '0.0.0.0', () => {
  const addrInfo = server.address() as AddressInfo;
  console.log(`Server started on port ${addrInfo.port} at ${addrInfo.address}`);
});
