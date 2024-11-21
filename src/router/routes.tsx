import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";

export const routes=createBrowserRouter([{
    path:'/',
    element:<Homepage/>
}])