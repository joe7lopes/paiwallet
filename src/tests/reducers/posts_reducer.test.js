import { ADD_POST, FETCH_POSTS } from '../../actions/types';
import postsReducer from '../../reducers/posts_reducer';

describe('POSTS REDUCER', ()=>{
  
    it('should set default state', () =>{
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
  