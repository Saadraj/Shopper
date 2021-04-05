import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";
import path from "path";

const { serverRuntimeConfig } = getConfig();
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const latest = [];
    const items = [];
    const feedback = [];
    const partners = [];
    const features = [
        {
            icon: "fa fa-rocket",
            title: "Fast",
            description: "Having a baby can be a nerve wracking experience for new"
        },
        {
            icon: "fa fa-check",
            title: "Easy",
            description: "If you are looking for a new way to promote your business that"
        },
        {
            icon: "fa fa-bullhorn",
            title: "Cheap",
            description: "Okay, you’ve decided you want to make money with Affiliate"
        },
        {
            icon: "fa fa-arrows-alt",
            title: "Affordable",
            description: "A Pocket PC is a handheld computer, which features many"
        }
    ];
    const Carousel = fs.readdirSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "./public/img/Home/Carousel")
    );
    Carousel.forEach((data) => {
        items.push({
            src: `/img/Home/Carousel/${data}`,
            product: `Product Code ${String.fromCharCode(
                Math.round(Math.random() * (90 - 65) + 65)
            ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
            price: Math.round(Math.random() * 1000) + 100,
            discount: Math.round(Math.random() * 5) > 2 && Math.round(Math.random() * 20) + 20
        });
    });

    const Latest = fs.readdirSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "./public/img/Home/Latest/")
    );
    Latest.forEach((data) => {
        latest.push({
            src: `/img/Home/Latest/${data}`,
            product: `Product Code ${String.fromCharCode(
                Math.round(Math.random() * (90 - 65) + 65)
            ).toUpperCase()} - ${Math.round(Math.random() * 1000)}`,
            price: Math.round(Math.random() * 1000) + 100
        });
    });

    const Feedback = fs.readdirSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "./public/img/Home/Feedback/")
    );
    Feedback.forEach((data) => {
        feedback.push({
            src: `/img/Home/Feedback/${data}`,
            name: [
                "consectetur",
                "architecto",
                "assumenda",
                "numquam",
                "voluptates",
                "molestias",
                "blanditiis"
            ][Math.floor(Math.random() * 7)],
            comment: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus natus tenetur soluta, molestias, laborum, quia itaque sint quas adipisci eligendi sequi saepe ipsam perspiciatis neque odit numquam deserunt. Ad ratione itaque neque!",
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor commodi voluptatum tempora eaque, ad vero placeat dicta adipisci, accusamus accusantium. Officia facilis quod incidunt facere fuga id libero consequatur rem excepturi placeat.",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident distinctio aspernatur quidem. Laboriosam ad asperiores, deleniti saepe expedita inventore qui et officiis esse tempora quam soluta a corporis quaerat labore debitis! Accusantium!"
            ][Math.floor(Math.random() * 3)],
            rating: [4, 4.5, 4.7, 5][Math.floor(Math.random() * 4)]
        });
    });

    const Partners = fs.readdirSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, "./public/img/Home/Partners/")
    );
    Partners.forEach((data) => {
        partners.push(`/img/Home/Partners/${data}`);
    });
    res.json({ latest, items, features, feedback, partners });
};
