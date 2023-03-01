import { getDataUser } from "./services/apiService";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [dataUser, setDataUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const dataFromBack = await getDataUser(18);
      setDataUser(dataFromBack);
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Index dataUser={dataUser} />} />
        <Route path="/error404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
};

export default App;
