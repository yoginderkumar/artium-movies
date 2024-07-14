import HomePage from "./pages/Home/Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/movie/:id',
    element: <MovieDetailsPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
