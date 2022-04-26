import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const Navigation = lazy(
  () =>
    import(
      "./components/Navigation/Navigation" /* webpackChunkName: "Navigation" */
    )
);
const HomePage = lazy(
  () =>
    import(
      "./components/Pages/HomePage/HomePage" /* webpackChunkName: "HomePage" */
    )
);
const MoviesPage = lazy(
  () =>
    import(
      "./components/Pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */
    )
);
const NotFound = lazy(
  () =>
    import(
      "./components/Pages/NotFound/NotFound" /* webpackChunkName: "NotFound" */
    )
);
// const MovieDetailsPage = lazy(
//   () =>
//     import(
//       "./components/Pages/MoviesPage/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
//     )
// );
function App() {
  return (
    <Suspense fallback={<h1>LOADING....</h1>}>
      <div className="App">
        <header>
          <Navigation />
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
