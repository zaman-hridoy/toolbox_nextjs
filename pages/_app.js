import "../styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "../store/createStore";

import theme from "../config/theme";

import Header from "@layout-components/Header";
import FooterTop from "@layout-components/FooterTop";
import Footer from "@layout-components/Footer";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div>
            <Header />
            <Component {...pageProps} />
            <FooterTop />
            <Footer />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
