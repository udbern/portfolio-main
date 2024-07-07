import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './routes/_Layout/root';
import Home from './routes/root/Home'
import BlogDetails from './routes/BlogDetails/Blogdetails'

const router = createBrowserRouter(
    [
        {
            element:<RootLayout />,

            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/blogs/:blogId',
                    element: <BlogDetails/>,
                },
            ],
        },
    ],
    {
        future: { v7_normalizeFormMethod: true },
    }
);

export { router };