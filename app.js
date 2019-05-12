let winston = require('winston');

const {combine, printf, colorize} = winston.format;

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  },
  colors: {
    error: 'red',
    warn: 'magenta',
    info: 'yellow',
    verbose: 'green',
    debug: 'cyan',
    silly: 'cyan'
  }
};

const customFormat = printf(info => {
  let d = new Date();
  let date = require('./date')();
  let printLog = info.level + '[' + d.dateDe() + ' ' + date.getTimeDe(d) + ']' + ' ' + (undefined !== info.message ? info.message : '');

  //need to delete properties to get a clean and well formatted task on console
  delete info.level;
  delete info.message;

  return printLog;
});

winston.addColors(customLevels.colors);

let Elasticsearch = require('winston-elasticsearch');

let esTransportOpts = {
  level: 'info'
};

let logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: combine(
          colorize(),
          customFormat
      )
    }),
    new Elasticsearch(esTransportOpts)
  ]
});

let i = 0;
setInterval(function () {
  logger.info('Some message ' + i, {});
  i++;
}, 100);