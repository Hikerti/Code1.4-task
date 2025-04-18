import express from 'express';
import FetchPosts from './fetchPostsRoutes'

const router = express.Router();

router.use(FetchPosts);

export default router;