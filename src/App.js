import { getData } from "./services/apiService";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const dataFromBack = await getData(18);
      setData(dataFromBack);
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Index data={data} />} />
        <Route path="/error404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
};

export default App;
