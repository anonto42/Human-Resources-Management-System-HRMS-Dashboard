import Router from "./router/Router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/stores/store.ts";

export default function App () {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}