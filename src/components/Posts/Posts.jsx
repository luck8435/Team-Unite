import React, {useEffect} from 'react'
import './Posts.css';
import Post from '../Post/Post';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getTimelinePosts } from '../../actions/PostAction';

const Posts = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.authReducer.authData);
  let {posts, loading} = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  const params = useParams();

  if(!posts) return "No posts";
  if(params.id) posts = posts.filter((post) => post.userId === params.id);

  return (
    <div className='Posts'>
        {loading ? "Fetching posts..." :posts.map((post, id) => {
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts