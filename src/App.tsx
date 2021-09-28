import React, { useEffect } from "react";
import "./App.scss";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Routes from "./Routes/Routes";
import useConfig from "./utils/hooks/useConfig";

function App() {
  const { config, loading } = useConfig();

  useEffect(() => {
    if (config) {
      import(`./styles/style${config?.appId}.scss`);
    }
  }, [config]);
  return (
    <React.Fragment>
      {!loading ? (
        <div className="App">
          <Navbar config={config} />
          <div className="" style={{ marginTop: "10vh" }}>
            <Routes services={config?.services} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}

export default App;
