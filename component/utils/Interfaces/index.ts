export interface initialStateInterface {
    latest: [
        {
            src: string;
            product: string;
            price: number;
        }
    ];
    items: [
        {
            src: string;
            product: string;
            price: number;
        }
    ];
    features: [
        {
            icon: string;
            title: string;
            description: string;
        }
    ];
    feedback: string[];
    partners: string[];
}
export interface itemInterface {
    src: string;
    product: string;
    title?: string;
    description?: any;
    price: number;
    discount: boolean | number;
}
export interface productInterface {
    currentItems: itemInterface[];
    totalPage: number;
}
