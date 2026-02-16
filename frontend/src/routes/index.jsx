import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";

import LoginPage from "../pages/LoginPage";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
    {
        // path: "/",
        // element: <MainLayout />,
        // children: [
        // {
        //     path: ["/", "/todo"],
        //     element: <ToDo />,
        // },
        // {
        //     path: ["/edit/:id", "/todo/edit/:id"],
        //     element: <ToDoEdit />,
        // },
        // {
        //     path: "/register",
        //     element: <Register />,
        // },
        // {
        path: "/login",
        element: <LoginPage />,
        // },
        // {
        //     path: "/settings",
        //     element: <Settings />,
        // },
        // ],
    },
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
]);

const AppRouter = () => {
    return (
        <>
            {/* <Toaster position="top-center" richColors /> */}
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;