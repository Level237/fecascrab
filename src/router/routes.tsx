import Inscription from "../pages/Inscription";
import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ConfirmPage from "../pages/ConfirmPage";
import OriginePage from "../pages/OriginePage";
import OrganisationPage from "../pages/OrganisationPage";
import ClubPage from "../pages/ClubPage";
import PalmaresPage from "../pages/PalmaresPage";

export const routes=createBrowserRouter([{
    path:'/',
    element:<Homepage/>
},{
    path:'/inscription',
    element:<Inscription/>
},{
    path:'/confirm',
    element:<ConfirmPage/>
},
{
    path:'/origine',
    element:<OriginePage/>
},
{
    path:"/organisation",
    element:<OrganisationPage/>
},{
    path:"/clubs",
    element:<ClubPage/>
},{
    path:"/palmares",
    element:<PalmaresPage/>
}

])