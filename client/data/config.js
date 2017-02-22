import Raven from 'raven-js';

const sentry_key = 'b2e3ff5ad8064fafae778d8237c63172';
const sentry_app = '141324';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
