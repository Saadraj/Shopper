import { NextApiRequest, NextApiResponse } from "next";
import kidsItems from "../../component/Api/kids.json";
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const items = kidsItems.items;
    const currentPage = Number(req.query.page) || 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
