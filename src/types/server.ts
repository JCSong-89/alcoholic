import * as spdy from 'spdy';
import {connect ,app, httpsOptions} from './loaders/index';

connect(db);

spdy.createServer(httpsOptions, app)
  .listen(PORT, (error: any) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + PORT + '.')
    }
  }) 