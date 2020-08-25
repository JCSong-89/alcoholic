import login from './account/login';
import topFive from './items/topFive';

export default (app: any) => {
  const router = app;
  router.use('/login', login)
  router.use('/top-five', topFive)
}