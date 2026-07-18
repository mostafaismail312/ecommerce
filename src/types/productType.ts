export interface ProductItem {
    _id?: string;
    title?: string;
    price?: number;
    priceAfterDiscount?: number;
    imageCover?: string;
    ratingsAverage?: number;
    category?: {
        name?: string;
    };
}