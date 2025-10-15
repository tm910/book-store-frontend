import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import App from '../App';
import Login from '../components/Login';
import Register from '../components/Register';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import SingleBook from '../pages/books/SingleBook';
import Order from '../pages/orders/Order';
import AdminRoute from './AdminRoute';
import AdminLogin from '../components/AdminLogin';
import ManageBooks from '../pages/dashboard/manageBooks/ManageBooks';
import DashboardLayouts from '../pages/dashboard/DashboardLayouts';
import Dashboard from '../pages/dashboard/Dashboard';
import AddBook from '../pages/dashboard/addBook/AddBook';
import PrivateRoute from './PrivateRoute';
import UpdateBook from '../pages/dashboard/editBook/UpdateBook';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/books/:id',
                element: <SingleBook />
            },
            {
                path: '/orders',
                element:
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/checkout',
                element:
                <PrivateRoute>
                    <Checkout/>
                </PrivateRoute> 
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin/>
    },
    {
        path: '/dashboard',
        element:
            <AdminRoute>
                <DashboardLayouts/>
            </AdminRoute>,
        children: [
            {
                path: '',
                element: 
                <AdminRoute>
                    <Dashboard/>
               </AdminRoute>,
            },
            {
                path: 'add-new-book',
                element:
                    <AdminRoute>
                        <AddBook/>
                    </AdminRoute>,
            },
            {
                path: 'edit-book/:id',
                element:
                    <AdminRoute>
                        <UpdateBook/>
                    </AdminRoute>,
            },
            {
                path: 'manage-books',
                element:
                    <AdminRoute>
                        <ManageBooks/>
                    </AdminRoute>,
            },
            {
                 path: 'delete-book/:id',
                element:
                    <AdminRoute>
                        <div>Delete Book</div>
                    </AdminRoute>,
            },
        ]
    }
]);

export default router;