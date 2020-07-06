import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../redux/count/action";

const AddCount = ({ count, addCount }) => {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <button onClick={addCount}>Add to wishlist</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count.count,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
