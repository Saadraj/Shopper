import { NextApiRequest, NextApiResponse } from "next";
import digitalItems from "../../component/Api/digital.json";
import furnitureItems from "../../component/Api/furniture.json";
import kidsItems from "../../component/Api/kids.json";
import menItems from "../../component/Api/men.json";
import otherServicesItem from "../../component/Api/otherService.json";
import womenItems from "../../component/Api/women.json";

const items = [
    ...otherServicesItem.items,
    ...digitalItems.items,
    ...furnitureItems.items,
    ...kidsItems.items,
    ...menItems.items,
    ...womenItems.items,
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const currentPage = Math.floor(Math.random() * 32) + 1;
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const totalPage = Math.floor((items.length + 1) / itemsPerPage);
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    res.json({ totalPage, currentItems });
};
