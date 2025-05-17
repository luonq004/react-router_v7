// Mọi component trong react-router đều có thể export ra một loader function
// để thực hiện việc lấy dữ liệu trước khi render component đó

import { Form, redirect, useFetcher } from 'react-router';
import type { Route } from './+types/post';

export const clientLoader = async ({ params }: Route.LoaderArgs) => {
  const postId = params.postId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return await res.json();
};

export const clientAction = async ({ params }: Route.ClientActionArgs) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: 'DELETE',
    });

    return { isDeleted: true };
  } catch (error) {
    return { isDeleted: false };
  }
};

const Post = ({ loaderData }: Route.ComponentProps) => {
  const fetcher = useFetcher();
  const isDeleted = fetcher.data?.isDeleted;

  const isDeleting = fetcher.state !== 'idle';

  return (
    <div>
      {!isDeleted && (
        <>
          Post: {loaderData.title}
          <fetcher.Form method="delete">
            <button type="submit" disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </fetcher.Form>
        </>
      )}
    </div>
  );
};

export default Post;
