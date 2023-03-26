import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index />}
        />
        <Route path="/error404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
};

export default App;
