// let a = Math.random();
// a = Math.floor(Math.random() * 32) + 1;

// // console.log(a);

// const aa =
//     // "https://drive.google.com/file/d/1IHFkEcSJ5DGk6iSvuY-PIOyxeURyzvBm/view?usp=sharing";
//     "https://drive.google.com/file/d/1RJlieN_FFW_xibWo2xNleEDzHZ_1gvsm/view?usp=sharing";

// console.log(
//     `https://lh1.googleusercontent.com/d/${aa
//         .replace("https://drive.google.com/file/d/", "")
//         .replace("/view?usp=sharing", "")}?authuser=0`
// );

// const FirstLetterCapitalize = (s) =>
//     (s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());

// const type = "men test";
// console.log(
//     type.split(" ").length > 1
//         ? type.split(" ")[0].concat(FirstLetterCapitalize(type.split(" ")[1]))
//         : type
// );

// const common = ["Casual", "Grocery", "Formal"];
// const digital = ["Camera", "Mobile", "Laptop", "Television"];

// const menu = [
//     {
//         title: "men",
//         apiName: "men",
//         list: common,
//     },
//     {
//         title: "women",
//         apiName: "women",
//         list: common,
//     },
//     {
//         title: "kids",
//         apiName: "product/kids",
//     },
//     {
//         title: "digital",
//         apiName: "digital",
//         list: digital,
//     },
//     {
//         title: "other Services",
//         apiName: "product/otherServices",
//     },
//     {
//         title: "furniture",
//         apiName: "product/furniture",
//     },
//     {
//         title: "Contact Us",
//         apiName: "contact",
//     },
//     {
//         title: "about Us",
//         apiName: "about",
//     },
// ];

// const subNav = [
//     {
//         title: "My Account",
//         apiName: "myAccount",
//     },
//     {
//         title: "Carts",
//         apiName: "carts",
//     },
//     {
//         title: "check Out",
//         apiName: "checkOut",
//     },
//     {
//         title: "Login",
//         apiName: "login",
//     },
// ];

// const temp = [];
// const ite = menu.map((v) => {
//     v?.list?.map((li) => {
//         temp.push(v.title.concat(li));
//     });
//     return temp.join(" ");
// });

// console.log(ite.slice(ite.length - 1, ite.length).join(" "));

const t = [
    "menCasual menAccessories menFormal menShoes menWatch womenCasual womenAccessories womenFormal womenShoes womenWatch digitalCamera digitalMobile digitalLaptop digitalTelevision",
][0].split(" ");
// console.log(t[0].split(" "));

const { createClient } = require("contentful");
const client = createClient({
    space: "doo6cri3y11h",
    accessToken: "qC6PHdhvjl72S-kZojUJM2zgCOEiiN9lutZLBG9Dc30",
});
const data = [];

t.map(async (v) => {
    console.log(v);
    const temp = await client.getEntries({ content_type: v });
    console.log(temp?.items);
    data.push(temp?.items);
});
console.log(data);
