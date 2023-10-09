import { legacy_createStore as createStore } from "redux";
import productsReducer from "./reducer";

const store = createStore(productsReducer);

export default store;
