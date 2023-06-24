import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsRequest } from './redux/actions';
import { useDispatch } from 'react-redux'

function Post({ loading, posts, error }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  posts: state.posts,
  error: state.error,
});

export default connect(mapStateToProps)(Post);
