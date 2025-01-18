import Inscription from "../pages/Inscription";
import Homepage from "../pages/Homepage";
import { createBrowserRouter } from "react-router-dom";
import ConfirmPage from "../pages/ConfirmPage";
import OriginePage from "../pages/OriginePage";
import OrganisationPage from "../pages/OrganisationPage";
import ClubPage from "../pages/ClubPage";
import PalmaresPage from "../pages/PalmaresPage";
import EventPage from "../pages/EventPage";
import CreateClubPage from "../pages/CreateClubPage";
import MasterEvent from "../pages/events/MasterEvent";
import ScrabbleJunior from "../pages/events/ScrabbleJunior";
import NationalTeam from "../pages/events/NationalTeam";

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
    path:"/clubs-afiliés",
    element:<ClubPage/>
},{
    path:"/palmares",
    element:<PalmaresPage/>
},{
    path:"events",
    element:<EventPage/>
},{
    path:"creation-club",
    element:<CreateClubPage/>
},{
    path:"events/super-master-scrabble",
    element:<MasterEvent/>
},{
    path:"events/scrabble-scolaire",
    element:<ScrabbleJunior/>
},{
    path:"events/national-team",
    element:<NationalTeam/>
}

])