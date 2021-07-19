
import MyOrderItem from './MyOrderItem';
import { useEffect, useState } from 'react';
import urlApi from '../../../../urlApi'
import axios from 'axios';
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";


const ContentMyOrder = ({auth}) => {

const [userId, setUserId] = useState('');
const [orders, setOrders] = useState([])

useEffect(() => {
    const { accessToken } = auth || {};
    if (accessToken) {
        const userInfo = jwt_decode(accessToken);
        const {id} = userInfo;
        setUserId(id)
    }
    }, [auth])

useEffect(() => {
    axios.get(`${urlApi}orders`)
    .then(function (response) {
        const order = response.data;
        setOrders(order)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}, [])

console.log(userId)
console.log(orders)
const myOrder = () => {
    if(orders.length > 0) {
        const dataOrder = orders.filter(order => order.userId === userId)
        return dataOrder;
    }
}
console.log(myOrder())
const dataOrder = myOrder();

const orderItem =  dataOrder.map((item, index) =>  { return <MyOrderItem data={item} key={index}/>})

  return (
    <div>
        <div className="container">
            <div className="row orderDetails ">
                <div className="col-lg-12 center" >
                    <h1 className="orderDetails__title">Order Success!</h1>
                    {/* {orderItem} */}
                </div>
            </div>
        </div>
    </div>
  );
}


// export default ContentMyOrder;

function mapStateToProps(state) {
    const {
        auth: { data }
    } = state;

    return { auth: data };
}

export default connect(mapStateToProps)(ContentMyOrder);
