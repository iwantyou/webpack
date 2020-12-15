import { useContext } from "react";
import { context } from "../entry";

export default function useStore() {
  let store = useContext(context);
  return store;
}
