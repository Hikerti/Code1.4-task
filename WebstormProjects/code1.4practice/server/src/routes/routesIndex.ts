import express from 'express';
import getPosts from './fetchPostsRoutes'

const router = express.Router();

router.use(getPosts);

export default router;