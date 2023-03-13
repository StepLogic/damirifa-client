import "@assets/datepicker.css";
import "@assets/dropdown.css";
import "@assets/normalize.css";
import "@assets/palette.css";
import "@assets/tailwind.css";
import "@assets/typography.css";
import "@assets/modals.css";
import "@splidejs/react-splide/css";

import firebase from "@services/firebase";
import Loader from "@components/ui/common/loader";
import MainLayout from "@layouts/(home)/layout";
import ErrorBoundary from "@lib/error-boundaries/component-boundary";
import Router from "next/router";
import NProgress from "nprogress";
import { FC, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import smoothscroll from "smoothscroll-polyfill";

import configureStore from "../utils/store";


// import 'react-perfect-scrollbar/dist/css/styles.css'
import type { AppProps } from "next/app";
import ModalContext from "@contexts/ModalContext";

// import Loader from "@commmon-ui";
// import  from ''
const { store, persistor } = configureStore();
// kick off the polyfill!

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || MainLayout;

  useEffect(() => {
    if (window) {
      smoothscroll.polyfill();
      document.querySelector("body")?.classList.remove("loading");
    }
  }, []);
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (

        <Suspense fallback={<Loader />}>
          <ErrorBoundary>
              <Layout>
                <ModalContext>
                  <Component {...pageProps} />
                </ModalContext>
              </Layout>
          </ErrorBoundary>
        </Suspense>

  );
}

export default MyApp;
