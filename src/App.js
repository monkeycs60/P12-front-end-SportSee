import { getData } from "./services/apiService";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       const dataFromBack = await getData(18);
//       setData(dataFromBack);
//     }
//     fetchData();
//   }, []);
//   console.log(data);
  
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>salut à tous</h1>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route exact path="/user/:id" element={<UserIdPage />} /> */}
        <Route path="/error404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/error404"} />} />
      </Routes>
    </Layout>
  );
};

export default App;