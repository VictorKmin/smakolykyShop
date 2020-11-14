import * as Sentry from '@sentry/node';

import { config } from '../config';

Sentry.init({dsn: config.SENTRY_DSN});

export default Sentry;
