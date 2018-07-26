export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const REQUESTPOSTS = 'REQUESTPOSTS';
export const RECEIVEPOSTS = 'RECEIVEPOSTS';


export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}
export function requestPosts(postTitle) {
  return {
    type: REQUESTPOSTS,
    ispending:true,
    isfinished:false,
  }
}
export function receivePosts(postTitle,json) {
  return {
    type: RECEIVEPOSTS,
    ispending:false,
    isfinished:true,
    data:json    
  }
}

export function fetchPosts  (postTitle) {
  return (dispatch, getState) => {
  dispatch(requestPosts(postTitle));
  return fetch(`https://pic4.zhimg.com/80/v2-2bbf3d15d37d67c5c25a31e5073e8e2f_hd.jpg`)
    .then(json => {dispatch(receivePosts(postTitle, json.url));console.log("json",json)})
};}
