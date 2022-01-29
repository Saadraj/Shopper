const common = ["Casual", "Accessories", "Formal", "Shoes", "Watch"];
const digital = ["Camera", "Mobile", "Laptop", "Television"];

export const menu = [
    {
        title: "men",
        apiName: "men",
        list: common,
    },
    {
        title: "women",
        apiName: "women",
        list: common,
    },
    {
        title: "digital",
        apiName: "digital",
        list: digital,
    },
    {
        title: "kids",
        apiName: "product/kids",
    },
    {
        title: "Grocery",
        apiName: "product/menGrocery",
    },
    {
        title: "furniture",
        apiName: "product/furniture",
    },
    {
        title: "other Services",
        apiName: "product/otherServices",
    },
    {
        title: "about Us",
        apiName: "about",
    },
    {
        title: "Contact Us",
        apiName: "contact",
    },
];

export const subNav = [
    {
        title: "Profile",
        apiName: "profile",
    },
    {
        title: "Carts",
        apiName: "carts",
    },
    {
        title: "check Out",
        apiName: "checkout",
    },
];

const temp = [];
const ite = menu.map((v) => {
    v?.list?.map((li) => {
        temp.push(v.title.concat(li));
    });
    return temp.join(" ");
});

const { createClient } = require("contentful");
const client = createClient({
    space: "doo6cri3y11h",
    accessToken: "qC6PHdhvjl72S-kZojUJM2zgCOEiiN9lutZLBG9Dc30",
});
const data = [];

export const contentNames = ite.slice(ite.length - 1, ite.length)[0].split(" ");

contentNames.map(async (v) => {
    const temp = await client.getEntries({ content_type: v });
    data.push(temp?.items);
});

export const searchContent = data;
