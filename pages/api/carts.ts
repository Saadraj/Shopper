import { NextApiRequest, NextApiResponse } from "next";

const items = [];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random() * 2000)));
            res.json(items);
            break;
        case "POST":
            items.push(req.body);
            await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random() * 2000)));
            res.json(items);
            break;
        case "DELETE":
            items.splice(
                items.findIndex((v) => v === 3),
                1
            );
            await new Promise((resolve) => setTimeout(resolve, Math.round(Math.random() * 2000)));
            res.json(items);
            break;
        default:
            res.status(404).send("Page Not Found");
            break;
    }
};

export default handler;
