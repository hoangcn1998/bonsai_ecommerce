import React from "react";
import FormInformation from "./FormInfomation";
import { connect, useDispatch } from "react-redux";
import { addOrder } from "../../../../../redux/actions/orderAction";


const ContentCheckout = ({ cart }) => {

  const dispatch = useDispatch()

  const formatDataProducts = cart.map((item) => {
    const { name, sale, price, quantity } = item;
    return {
      name,
      quantity,
      price: price - price * sale,
      unitPrice: (price - price * sale) * quantity,
    }
  })

  const order = cart.map((product, index) => {

    const { name, sale, price, quantity } = product;

    const unitPrice = (price - price * sale) * quantity;

    return <div className="Order__item" key={index}>
      <p>
        {name}  x <strong>{quantity}</strong>
      </p>
      <p>${unitPrice}</p>
    </div>
  });


  const calcualteTotalPrice = (cart) => {
    const total = cart.reduce((sum, currentProduct) => {
      const { price, sale, quantity } = currentProduct || {};
      return sum + (price - price * sale) * quantity;
    }, 0);
    console.log(`total --->`, total)
    return total;
  }

  const getDataUser = (dataUser) => {
    const { fullname, phoneNumber, orderNotes, deleveryAddress } = dataUser;
    const dataOrder = {
      fullname,
      phoneNumber,
      orderNotes,
      deleveryAddress,
      cart: {
        product: formatDataProducts,
        totalPrice: calcualteTotalPrice(cart)
      },

    };
    dispatch(addOrder(dataOrder))

  }

  return (
    <div className="container-fluid">
      <div className="row checkout">
        <div className="col-lg-7">
          <FormInformation getDataUser={getDataUser}></FormInformation>
        </div>
        <div className="col-lg-5">
          <div className="Order">
            <h1>Your Order</h1>
            <div className="Order__title">
              <p>Products</p>
              <p>Unit total</p>
            </div>
            {order}
            <div className="deliverycharges">
              <p>Delivery charges</p>
              <p>$0</p>
            </div>
            <div className="totalprice">
              <p>Total Price</p>
              <p>${calcualteTotalPrice(cart)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default ContentCheckout;

function mapStateToProps(state) {
  const {
    cart: { data },
  } = state;
  return { cart: data };
}

export default connect(mapStateToProps)(ContentCheckout);
