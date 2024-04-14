import { createTypedHooks } from "easy-peasy";
import { StoreT } from "./types/Store";
const {
    useStoreActions,
    useStoreState,
    useStoreDispatch,
    useStore
} = createTypedHooks<StoreT>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore}