import products, { PRODUCT_IMAGES_FILE_TYPE, PRODUCT_IMAGES_PREFIX } from "@/config/products";
import { filter, find, flatMap, map, reject, uniq } from "lodash";

const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
});

export const getRelatedProducts = (code, category) => reject(filter(products, ["category", category]), ["code", code]);
export const getProductLink = (code) => PRODUCT_IMAGES_PREFIX + code + PRODUCT_IMAGES_FILE_TYPE;
export const getProductTokens = () => uniq(flatMap(map(products, "tokens")));
export const getProduct = (code) => find(products, ["code", code]);
export const formatPrice = (price) => formatter.format(price);

