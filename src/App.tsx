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
const MovieDetailsPage = lazy(
  () =>
    import(
      "./components/Pages/MoviesPage/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
    )
);
const Cast = lazy(
  () =>
    import(
      "./components/Pages/MoviesPage/Cast/Cast" /* webpackChunkName: "Cast" */
    )
);
const Review = lazy(
  () =>
    import(
      "./components/Pages/MoviesPage/Review/Review" /* webpackChunkName: "Review" */
    )
);
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
          <Route path="/movies/:filmId" element={<MovieDetailsPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
