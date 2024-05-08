import React from 'react';
import { User } from '../types/User';
import { Post } from '../types/Post';

type Props = {
  selectedUsers: User | null;
  usersPosts: Post[];
  onPostCommentSelect: (postComment: Post) => void;
};

export const PostsList: React.FC<Props> = ({
  selectedUsers,
  usersPosts,
  onPostCommentSelect,
}) => {
  return (
    <div>
      {selectedUsers && (
        <div data-cy="PostsList">
          <p className="title">Posts:</p>
          <table
            className="table
            is-fullwidth
            is-striped
            is-hoverable
            is-narrow"
          >
            <thead>
              <tr className="has-background-link-light">
                <th>#</th>
                <th>Title</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {usersPosts.map((post, index) => (
                <tr key={index} data-cy="Post">
                  <td data-cy="PostId">{post.id}</td>
                  <td data-cy="PostTitle">{post.title}</td>
                  <td className="has-text-right is-vcentered">
                    <button
                      type="button"
                      data-cy="PostButton"
                      className="button is-link is-light"
                      onClick={() => onPostCommentSelect(post)}
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
