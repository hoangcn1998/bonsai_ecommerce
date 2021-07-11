import React from "react";

const FormCategories = () => {
  return (
    <form className="form__products--add">
      <input type="text" className="form-control" placeholder="Categories Id" />
      <input
        type="text"
        className="form-control"
        placeholder="Categories Name"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormCategories;
