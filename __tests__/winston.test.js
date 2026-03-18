const winston = require('winston');

test('erstellt einen Logger und loggt eine Nachricht', () => {
  const logger = winstonxx.createLogger({
    transports: [new winston.transports.Console({ silent: true })],
  });
  logger.info('Testmeldung');
});
