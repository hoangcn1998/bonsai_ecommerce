import React from "react";

const FormProducts = () => {
  return (
    <form className="form__products--add">
      <input type="text" className="form-control" placeholder="Categories" />
      <input type="text" className="form-control" placeholder="Products Name" />
      <input
        type="text"
        className="form-control"
        placeholder="Products Price"
      />
      <input type="text" className="form-control" placeholder="Big picture " />
      <textarea
        className="form-control"
        rows="5"
        placeholder="thumbnail Url (4)"
      ></textarea>
      <textarea
        className="form-control"
        rows="5"
        placeholder="description"
      ></textarea>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormProducts;
