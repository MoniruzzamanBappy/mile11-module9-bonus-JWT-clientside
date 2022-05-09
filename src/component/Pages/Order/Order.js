import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Order = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:5000/orders',{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            console.log(res);
            if(res.status === 401 || res.status === 403){
                navigate('/login')
            }
            return res.json()
        })
        .then(data=>{
            setOrders(data)
            console.log(data);
        })

    },[])
    return (
        <div>
            <h1>hello to order page</h1>
            <h1>order: {orders.length}</h1>
        </div>
    );
};

export default Order;