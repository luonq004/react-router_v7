// Mọi component trong react-router đều có thể export ra một loader function
// để thực hiện việc lấy dữ liệu trước khi render component đó

import type { Route } from './+types/post';

export const loader = async ({ params }: Route.LoaderArgs) => {
  // const { postId } = params;
  // if (!postId) {
  //   throw new Response('Not found', { status: 404 });
  // }
  // return postId;
  const postId = params.postId;
  return { postId };
};

export const action = async () => {};

const Post = ({ loaderData }: Route.ComponentProps) => {
  return <div>Post {loaderData.postId}</div>;
};

export default Post;
