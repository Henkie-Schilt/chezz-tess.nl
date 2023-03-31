"use client";
import { shoppingCartAtom, deliveryAtom } from "./state";
import { getProduct } from "./utils";
import concat from "lodash/concat";
import reject from "lodash/reject";
import isNil from "lodash/isNil";
import { useAtom } from "jotai";
import { useMemo } from "react";
import find from "lodash/find";
import sum from "lodash/sum";
import map from "lodash/map";

export const useDeliveryCosts = () => {
    const [delivery] = useAtom(deliveryAtom);
    return delivery ? 4.95 : 0;
};

export const useTotalPrice = () => {
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const deliveryCosts = useDeliveryCosts();

    const totalPrice = sum(map(shoppingCart, ({ code, amount }) => parseInt(amount) * getProduct(code).price));
    return totalPrice > 0 ? deliveryCosts + totalPrice : 0;
};

export const useShoppingCartItem = (code) => {
    const [shoppingCart, setShoppingCart] = useAtom(shoppingCartAtom);
    const shoppingCartItem = useMemo(() => find(shoppingCart, ["code", code]), [shoppingCart, code]);

    return [
        isNil(shoppingCartItem) ? "" : String(shoppingCartItem.amount),
        (amount) => setShoppingCart(concat(shoppingCart, { code, amount: parseInt(amount) })),
        (amount) => setShoppingCart(shoppingCart.map((item) => (item.code === code ? { code, amount } : item))),
        () => setShoppingCart(reject(shoppingCart, ["code", code])),
    ];
};
