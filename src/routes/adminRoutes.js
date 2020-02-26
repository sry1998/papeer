import express from 'express';
import { allUsers, login} from '../controllers/usercontroller';

const router = express.Router();

router.get('/test', allUsers);

router.post('/login', login);

module.exports = router;
