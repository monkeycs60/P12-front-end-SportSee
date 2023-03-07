import {
  getDataUser,
  getDataUserActivity,
  getDataUserAverageSession,
  getDataUserPerformance,
} from "./services/apiService";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataUserActivity, setDataUserActivity] = useState(null);
  const [dataUserAverageSession, setDataUserAverageSession] = useState(null);
  const [dataUserPerformance, setDataUserPerformance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const dataFromBack = await getDataUser(18);
      setDataUser(dataFromBack);

      const dataFromBackActivity = await getDataUserActivity(18);
      setDataUserActivity(dataFromBackActivity);

      const dataFromBackAverageSession = await getDataUserAverageSession(18);
      setDataUserAverageSession(dataFromBackAverageSession);

      const dataFromBackPerformance = await getDataUserPerformance(18);
      setDataUserPerformance(dataFromBackPerformance);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Index
              dataUser={dataUser}
              dataUserActivity={dataUserActivity}
              dataUserAverageSession={dataUserAverageSession}
              dataUserPerformance={dataUserPerformance}
            />
          }
        />
        <Route path="/error404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
};

export default App;
