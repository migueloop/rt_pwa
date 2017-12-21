import StoryListing from "../app/components/story";
import StoryPost from "../app/components/story/post";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/story",
    exact: true,
    layout: DefaultLayout,
    component: StoryListing,
    preLoadData: async () => {},
  },
  {
    path: "/story/:id",
    layout: DefaultLayout,
    component: StoryPost,
    preLoadData: async () => {},
  }
];

export default routes;
