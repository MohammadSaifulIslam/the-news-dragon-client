import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../components/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import NewsDetails from "../components/Home/News/NewsDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Terms from "../components/Shared/Terms/Terms";

const router = createBrowserRouter([
   {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
        {
            path: '/',
            element: <Navigate to='/category/0'></Navigate>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'terms',
            element: <Terms></Terms>
        },
    ]
   },
    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoutes><NewsDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;