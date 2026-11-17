import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Pergolados from "./pages/Pergolados";

const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pergolados />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
    </Routes>
  </BrowserRouter>
);

export default App;
