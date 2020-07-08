import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../redux/count/action";
import { useSelector } from "react-redux";
import { selectWishlist } from "../redux/count/selector";

const AddCount = ({ addCount, id }) => {
  const wishlist = useSelector(selectWishlist);
  const itemInWishlistYesOrNo = wishlist.includes(id) ? "♥" : "♡";

  return (
    <div>
      <button onClick={() => addCount(id)}>{itemInWishlistYesOrNo}</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddCount);
