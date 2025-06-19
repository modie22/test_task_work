import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { FormPage } from "./components/pages/FormPage/FormPage";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="form" element={<FormPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
