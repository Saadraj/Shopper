import { NextApiRequest, NextApiResponse } from "next";

const items = [];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            const totalCarts = items.length;
            res.json({ totalCarts, items });
            break;
        case "POST":
            items.push(req.body);
            res.json(items);
            break;
        case "DELETE":
            items.splice(
                items.findIndex((v) => v === 3),
                1
            );
            res.json(items);
            break;
        default:
            res.status(404).send("Page Not Found");
            break;
    }
};

export default handler;
