import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/saga-blue/theme.css";  
import "primereact/resources/primereact.min.css";
import NAV from "@/components/NAV/NAV";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/components/store/store";
 
function App({ Component, pageProps, canonical }) {
  return (
    <Provider store={store}>  
      
      <NAV />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

App.getInitialProps = ({ ctx }) => {
  const base = "https://www.rowadtechnology.com";
  const { asPath } = ctx;
  const canonical = base + asPath;
  return { canonical };
};

export default App;
