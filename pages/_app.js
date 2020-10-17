import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: false });

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default wrapper.withRedux(MyApp);
