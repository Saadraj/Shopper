import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import path from "path";

const { serverRuntimeConfig } = getConfig();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const items = [];
    const Carousel = fs.readdirSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "/public/img/Digital")
    );
    Carousel.forEach((data) => {
        items.push({
            src: `/img/Digital/${data}`,
            product: `Product Code ${String.fromCharCode(
                Math.round(Math.random() * (90 - 65) + 65)
            ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
            price: Math.round(Math.random() * 1000) + 100,
            discount: Math.round(Math.random() * 5) > 2 && Math.round(Math.random() * 20) + 20
        });
    });
    const currentPage = Number(req.query.page) || 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
