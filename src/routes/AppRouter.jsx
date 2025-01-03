import App from "../App";
import Header from "../components/ui/Header/Header";
import BlogPosts from "../routes/blog/BlogPosts.jsx";

const Routes = [
  {
    path: "/",
    element: (
      <div>
        <Header home="RJ Leyva" />
        <App />
      </div>
    ),
  },
  {
    path: "/blog/:slug/",
    element: (
      <div>
        <Header home="RJ Leyva" />
        <BlogPosts />
      </div>
    ),
  },
];

export default Routes;
