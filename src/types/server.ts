import * as spdy from 'spdy';
import {connect ,app, httpsOptions, sequelize} from './loaders/index';
import {PORT, mongodbUrl} from './config/index';

sequelize
.authenticate()
  .then(() => console.log("connected to db"))
  .catch(() => {
      throw "error";
  });

connect(mongodbUrl);

const handlerServer = (port: any, err?: any) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port: ' + port + '.')
  }
}

spdy.createServer(httpsOptions, app)
  .listen(PORT, handlerServer(PORT))