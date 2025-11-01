import Router from "./router/Router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/stores/store.ts";
import {Toaster} from "sonner";

export default function App () {
    return (
        <Provider store={store}>
            <Router />
            <Toaster />
        </Provider>
    )
}