import products from "@/config/products";
import flatMap from "lodash/flatMap";
import isEmpty from "lodash/isEmpty";
import omitBy from "lodash/omitBy";
import reject from "lodash/reject";
import filter from "lodash/filter";
import merge from "lodash/merge";
import find from "lodash/find";
import uniq from "lodash/uniq";
import map from "lodash/map";

const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
});

export const getRelatedProducts = (code) =>
    reject(filter(products, ["category", getProduct(code)?.category]), ["code", code]);
export const getProductTokens = () => uniq(flatMap(map(products, "tokens")));
export const getProduct = (code) => find(products, ["code", code]);
export const formatPrice = (price) => formatter.format(price);

export const mergeObjects = (a, b) => merge(omitBy(a, isEmpty), omitBy(b, isEmpty));
