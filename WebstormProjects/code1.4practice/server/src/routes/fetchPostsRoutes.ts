import express from 'express';
import {Request, Response} from "express";
import {GetFetchsPosts, GetFetchsPostsCount} from "../services/getFetchs/getFetchsPosts";

const router = express.Router();

router.get('/posts', async (req: Request, res: Response) => {
    const fetchPosts = new GetFetchsPosts()
    await fetchPosts.getFetchedPosts(req, res)
})

router.get('/posts/:count', async (req: Request, res: Response) => {
    const count = Number(req.params.count);
    const fetchPostsCount = new GetFetchsPostsCount(count);
    await fetchPostsCount.getFetchedPosts(req, res);
})

export default router;