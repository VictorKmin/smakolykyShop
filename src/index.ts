import * as http from 'http';

import {app} from './app';
import {config} from './config';
import {cronJobRun} from './cron-jobs';
import Sentry from './errors/sentry';

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
  Sentry.captureException(error);
  console.log(error);
});

process.on('unhandledRejection', error => {
  Sentry.captureException(error);
  console.log(error);
});
