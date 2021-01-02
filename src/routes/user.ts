import routerx from 'express-promise-router';
import usercontroller from '../controllers/UserController'
const router = routerx();

router.post('/add',usercontroller.add);

export default router;