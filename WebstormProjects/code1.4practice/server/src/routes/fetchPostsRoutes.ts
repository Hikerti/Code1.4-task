import express from 'express';
import {Request, Response} from "express";
import {GetFetchsPosts, GetFetchsPostsCount, GetFetchsPostsIndex} from "../services/getFetchs/getFetchsPosts";
import {postFetchsPosts} from "../services/postFetchs/postFetchsPosts";

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

router.get('/posts/index/:index', async (req: Request, res: Response) => {
    const index = Number(req.params.index);
    const fetchPostsIndex = new GetFetchsPostsIndex(index);
    await fetchPostsIndex.getFetchedPosts(req, res);
})

router.post('/posts/create', async (req: Request, res: Response) => {
    const fetchPostsPost = new postFetchsPosts();
    await fetchPostsPost.postFetchedPosts(req, res)
})

export default router;