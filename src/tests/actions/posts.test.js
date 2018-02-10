import { ADD_POST, FETCH_POSTS } from '../../actions/types';
import { addPost, fetchPosts } from '../../actions/posts_action';
import postsReducer from '../../reducers/posts_reducer';

describe('POSTS ACTIONS', () => {

  test('should add post', () => {
    const post = {
      title: 'new Post',
      text: 'new post text test',
      date: new Date('2011-04-11T10:20:30Z')
    }

    const action = addPost(post);
    expect(action).toEqual({
      type: ADD_POST,
      payload: post
    });

  });

  test('should fetch posts', () =>{
    const posts = [
      {
        title: 'new Post',
        text: 'new post text test',
        date: new Date('2011-04-11T10:20:30Z')
      },
      {
        title: 'new Post2',
        text: 'new post text test2',
        date: new Date('2011-02-11T10:20:30Z')
      },
      {
        title: 'new Post3',
        text: 'new post text test3',
        date: new Date('2011-05-11T10:20:30Z')
      }
    ];

    const action = fetchPosts(posts);

    expect(action).toEqual({
      type: FETCH_POSTS,
      payload: posts
    });

  });

});

describe('POSTS REDUCER', ()=>{
  
  test('should set default state', () =>{
    const state = postsReducer(undefined,{ type: '@@INIT'});
    expect(state).toEqual([]);
  });

  test('should add to existing posts',() => {
    const post = {
      title: 'new Post',
      text: 'new post text test',
      date: new Date('2011-04-11T10:20:30Z')
    }
    const action = {
      type: ADD_POST,
      payload: post
    };

    const state = postsReducer([post], action);
    expect(state).toEqual([
      post,
      post
    ]);

  });

  test('should add post to empty state', ()=>{
    const post = {
      title: 'new Post',
      text: 'new post text test',
      date: new Date('2011-04-11T10:20:30Z')
    }
    const action = {
      type: ADD_POST,
      payload: post
    };
    const state = postsReducer([], action);
    expect(state).toEqual([post]);
  });


});