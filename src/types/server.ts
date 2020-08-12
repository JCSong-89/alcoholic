import * as spdy from 'spdy';
import {connect ,app, httpsOptions, mysql} from './loaders/index';
import {PORT, mongodbUrl, DB_ENV} from './config/index';

connect(mongodbUrl);
mysql(DB_ENV)
.authenticate()
  .then(() => console.log("connected to db"))
  .catch(() => {
      throw "error";
  });

const handlerServer = (port, err?) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port: ' + port + '.')
  }
}

spdy.createServer(httpsOptions, app)
  .listen(PORT, handlerServer(PORT))