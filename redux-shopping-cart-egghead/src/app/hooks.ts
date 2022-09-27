import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelectore: TypedUseSelectorHook<RootState> = useSelector;