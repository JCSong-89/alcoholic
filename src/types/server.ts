import * as spdy from 'spdy';
import {connect ,app, httpsOptions} from './loaders/index';
import config from './config/index';

connect(<string>config.databaseURL);

const handlerServer = (port, err?) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port: ' + port + '.')
  }
}

spdy.createServer(httpsOptions, app)
  .listen(config.port, handlerServer(config.port))