import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Category from "../components/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import NewsDetails from "../components/Home/News/NewsDetails";

const router = createBrowserRouter([
   {
    path : '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'category/:id',
            element: <Category/>,
            loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
    ]
   },
   {
    path:'news',
    element: <NewsLayout></NewsLayout>,
    children:[
        {
            path: ":id",
            element: <NewsDetails/>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
    ]
   }
])

export default router;