import "./scss/App.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// * Layouts and Pages:
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import ArticlesPage from "./pages/ArticlesPage";
import About from "./pages/About";
import Team from "./pages/Team";

// * Router and Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />}></Route>
      <Route path="/articles" element={<ArticlesPage />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
