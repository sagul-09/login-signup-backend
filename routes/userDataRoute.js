import express from 'express'
const router = express.Router()

import{userData} from '../controllers/userDataController.js'
router.route('/').post(userData)

export default router;