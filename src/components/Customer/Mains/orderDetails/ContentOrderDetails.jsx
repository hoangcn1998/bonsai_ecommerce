import React from 'react';
import OrderItem from './OrderItem';
import { connect } from "react-redux";


const ContentOrderDetails = ({order}) => {

console.log(order)
// const orderItem =  order && order.length &&  order.map((item, index) =>  { return <OrderItem data={item} key={index}/>})

  return (
    <div>
        <div className="container">
            <div className="row orderDetails ">
                <div className="col-lg-12 center" >
                    <h1 className="orderDetails__title">Order Success!</h1>
                    <OrderItem data={order}/>
                </div>
            </div>
        </div>
    </div>
  );
}

function mapStateToProps(state) {
    const {
        order: { data }
    } = state;

    return { order: data };
}

export default connect(mapStateToProps)(ContentOrderDetails);




// import React from 'react';
// import { connect } from "react-redux";

// const ContentOrderDetails = (order) => {

//     const { fullname, deleveryAddress, phoneNumber, orderNotes, cart, createdAt } = order.order;
//     const { product, totalPrice } = cart;

//     const orderItem = product.map((item) => {
//         const { name, quantity, price, unitPrice } = item;
//         return <div className="OrderDetails__content--item">
//             <p>
//                 {name} x <strong>{quantity}</strong>
//             </p>
//             <p>${unitPrice}</p>
//         </div>
//     })

//     return (
//         <div>
//             <div className="container">
//                 <div className="row orderDetails ">
//                     <div className="col-lg-10 center" >
//                         <h1 className="orderDetails__title">Order Success!</h1>
//                         <div className="OrderDetails__content">
//                             <h1>Your Bill</h1>
//                             <div className="OrderDetails__content--title">
//                                 <p>Products</p>
//                                 <p>Unit total</p>
//                             </div>
//                             {orderItem}
//                             <div className="OrderDetails__content--deliverycharges">
//                                 <p>Delivery charges</p>
//                                 <p>$0</p>
//                             </div>
//                             <div className="OrderDetails__content--yourName">
//                                 <p>Your Name</p>
//                                 <p>{fullname}</p>
//                             </div>
//                             <div className="OrderDetails__content--deliveryAddress">
//                                 <p>Delivery Address</p>
//                                 <p>{deleveryAddress}</p>
//                             </div>
//                             <div className="OrderDetails__content--yourPhone">
//                                 <p>Your phone</p>
//                                 <p>{phoneNumber}</p>
//                             </div>
//                             <div className="OrderDetails__content--orderNotes">
//                                 <p>Order Notes</p>
//                                 <p>{orderNotes}</p>
//                             </div>
//                             <div className="OrderDetails__content--timeOrder">
//                                 <p>Time order</p>
//                                 <p>{new Date(createdAt).toDateString()}</p>
//                             </div>
//                             <div className="OrderDetails__content--totalprice">
//                                 <p>Total Price</p>
//                                 <p>${totalPrice}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// function mapStateToProps(state) {
//     const {
//         order: { data }
//     } = state;
//     return { order: data };
// }

// export default connect(mapStateToProps)(ContentOrderDetails);