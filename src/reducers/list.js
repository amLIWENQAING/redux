import  { REQUESTPOSTS,RECEIVEPOSTS }  from '../actions/cart-actions';

export default function(state=[], action) {
    switch (action.type) {
      case REQUESTPOSTS: {
        return {
          ...state,
          ispending:action.ispending,
          isfinished:action.isfinished,
          data:action.data||[]
        }
      }
  
      case RECEIVEPOSTS: {
        return {
          ...state,
          isfinished:action.isfinished,
          ispending:action.ispending,
          data:action.data
        }
      }
  
      default:
        return state;
    }
  }