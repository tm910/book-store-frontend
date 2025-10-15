import { useAuth } from "../../context/AuthContext"
import { useFetchOrderByEmailQuery } from "../../redux/features/order/orderApi"

const Order = () => {
    const {currentUser} = useAuth()
    const { data: orders = [] } = useFetchOrderByEmailQuery(currentUser.email)
    console.log(orders)
  return (
    <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>
    
        {/* <p>No orders found.</p> */}
        <div className="bg-white rounded shadow-lg p-4">
          {
              orders.map(order => {
                  return ( <div key={order._id} className="border-b mb-4 pb-4">
                        <h2 className="font-bold">Order ID: {order._id}</h2>
                        <p className="text-gray-600">Name: {order.name}</p>
                        <p className="text-gray-600">Email: {order.email}</p>
                        <p className="text-gray-600">Phone: {order.phone}</p>
                        <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                        <h3 className="font-semibold mt-2">Address: </h3>
                        <p> City: {order.address.city}, State: {order.address.state}, Country: {order.address.country}, ZipCode: {order.address.zipcode}</p>
                        <h3 className="font-semibold mt-2">Products Id: {order.productIds[0]}</h3>
                        <ul>
                            <li key={order.productIds[0]}>{order.productIds[0]}</li> 
                        </ul>
                    </div>)
              })
            }
            </div>
        </div>
  )
}

export default Order