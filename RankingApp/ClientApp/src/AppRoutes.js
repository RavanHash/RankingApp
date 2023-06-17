import Home from "./components/Home";
import RankItems from "./components/RankItems";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImageArr from "./components/MovieImages";
import AlbumImageArr from "./components/AlbumImages";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/rank-movies",
    element: <RankItemsContainer dataType={1} imgArr={MovieImageArr} />,
  },
  {
    path: "/rank-albums",
    element: <RankItemsContainer dataType={2} imgArr={AlbumImageArr} />,
  },
];

export default AppRoutes;
