import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../redux/count/selector";

const WishlistItems = ({ id }) => {
  const wishlistItems = useSelector(selectWishlist);
  return (
    <>
      <ul>
        {wishlistItems.map((wishlistItem, key) => {
          return <li key={wishlistItem}>{wishlistItem}</li>;
        })}
      </ul>
    </>
  );
};

export default connect(null, null)(WishlistItems);
