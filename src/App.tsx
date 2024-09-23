import React from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Loader from "./pages/loader/Loader";

const App = () => {
  const [errorPage, setErrorPage] = React.useState(false);
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    if (window.location.pathname !== "/") {
      setErrorPage(true);
    }
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const handleError = (state: boolean) => {
    setErrorPage(state);
    setLoader(false);
    window.location.pathname = "/";
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : errorPage ? (
        <Error handleError={handleError} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
