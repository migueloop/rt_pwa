import StoryListing from "../app/components/story";
import StoryPost from "../app/components/story/story";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/story",
    exact: true,
    layout: DefaultLayout,
    component: StoryListing,
    preLoadData: async ({api}) => {
      return api.fetch(`http://localhost:3003/api/story`, { swcache: 20000 });
    },
  },
  {
    path: "/story/:id",
    layout: DefaultLayout,
    component: StoryPost,
    preLoadData: async ({match, api}) => {
      const { params } = match; 
      return api.fetch(`http://localhost:3003/api/story/${params.id}`, { swcache: 20000 });
    },
  }
];

export default routes;
