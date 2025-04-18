import {prisma} from "../../config/db";
import {Request, Response} from "express";

export class GetFetchsPosts {
    async getFetchedPosts(req: Request, res: Response): Promise<void> {
        try {
            const postsData = await prisma.posters.findMany();
            res.json(postsData).status(200).send(postsData);
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export class GetFetchsPostsCount extends GetFetchsPosts {
    constructor(private count: number) {
        super();
    }
    async getFetchedPosts(req: Request, res: Response): Promise<void> {
        try {
            const count = this.count || parseInt(req.params.count);

            if (isNaN(count)) {
                res.status(400).send("Not a valid count");
            }

            const postsData = await prisma.posters.findMany({
                take: count,
                orderBy: {
                    id: 'asc'
                }
            });
            res.json(postsData).status(200)
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export class GetFetchsPostsIndex extends GetFetchsPosts {
    constructor(private index: number) {
        super();
    }

    async getFetchedPosts(req: Request, res: Response): Promise<void> {
        try {
            const index = this.index || parseInt(req.params.index);

            if (isNaN(index)) {
                res.status(400).send("Not a valid count");
            }

            if (isNaN(index)) {
                res.status(500).send("Not Posts for index");
            }

            if (index < 0) {
                res.status(404).send("Not Found");
            }

            const posts = await prisma.posters.findMany({
                where: {id: index}
            })

            res.status(200).json(posts)
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}