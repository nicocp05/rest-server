import { Router } from 'express';
import { getUsers, postUsers, putUsers, deleteUsers } from '../controllers/user.controller';

const router: Router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:id', putUsers);

router.delete('/:id', deleteUsers);


export default router;