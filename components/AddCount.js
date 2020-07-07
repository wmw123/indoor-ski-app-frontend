import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../redux/count/action";

const AddCount = ({ addCount, id }) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <button onClick={() => addCount(id)}>Add to wishlist</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddCount);
