import { NextApiRequest, NextApiResponse } from "next";
import womenItems from "../../component/Api/women.json";
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const items = womenItems.items;
    const currentPage = Number(req.query.page) || 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
