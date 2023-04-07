"use client";
import { shoppingCartAtom, deliveryAtom } from "./state";
import { getProduct } from "./utils";
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

export const useProduct = (code) => {
    const product = useMemo(() => getProduct(code), [code]);
    return product;
};

export const useTotalPrice = () => {
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const deliveryCosts = useDeliveryCosts();

    const totalPrice = useMemo(
        () => sum(map(shoppingCart, ({ code, amount }) => parseInt(amount) * getProduct(code).price)),
        [shoppingCart]
    );

    return totalPrice > 0 ? deliveryCosts + totalPrice : 0;
};

export const useShoppingCartItemAmount = (code) => {
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const shoppingCartItem = useMemo(() => find(shoppingCart, ["code", code]), [shoppingCart, code]);

    return isNil(shoppingCartItem) ? "" : String(shoppingCartItem.amount);
};
