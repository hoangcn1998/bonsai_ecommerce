import React from "react";

const ReviewProducts = () => {
  return (
    <div className="tabs__content--reviews">
      <h1 className="title">Be the first to comment !</h1>
      <div className="rating">
        <p>Your review</p>
        <div className="star">
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
      </div>
      <div className="comment">
        <form>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Your comments</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="Comments here !"
            ></textarea>
          </div>
          <div className="group__input">
            <input type="text" className="form-control" placeholder="Name" />
            <input type="text" className="form-control" placeholder="Mail" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewProducts;
