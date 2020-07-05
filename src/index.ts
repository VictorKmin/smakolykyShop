import * as http from 'http';

import {app} from './app';
import {config} from './config';
import {cronJobRun} from './cron-jobs';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Listen ${config.PORT}`);
});

cronJobRun();

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

process.on('uncaughtException', error => {
  console.log(error);
});

process.on('unhandledRejection', error => {
  console.log(error);
});
