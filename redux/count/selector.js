export const selectWishlistCount = (state) => {
  if (state.count.wishlist[0] === null) {
    return state.count.wishlist.length - 1;
  } else {
    return state.count.wishlist.length;
  }
};

export const selectWishlist = (state) => state.count.wishlist;
