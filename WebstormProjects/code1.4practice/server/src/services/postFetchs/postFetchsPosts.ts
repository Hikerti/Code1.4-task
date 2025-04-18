import {prisma} from "../../config/db";
import {Request, Response} from "express";

export class postFetchsPosts {
    async postFetchedPosts(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;

            const posts = await prisma.posters.create({
                data
            });
            res.status(200).json(posts);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}