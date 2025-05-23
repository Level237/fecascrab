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
import JoinTeamPage from "../pages/JoinTeamPage";
import GaleryPage from "../pages/GaleryPage";
import ContactPage from "../pages/ContactPage";
import ProgrammePage from "../pages/ProgrammePage";
import PostDetail from "../pages/posts/PostDetailPage";
import ArticlesPage from "../pages/posts/ArticlesPage";
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
},{
    path:"rejoindre-equipe-national",
    element:<JoinTeamPage/>
},{
    path:"gallerie",
    element:<GaleryPage/>
},{
    path:"contact",
    element:<ContactPage/>
},
{
    path:"/programme-de-la-compétition",
    element:<ProgrammePage/>
},{
    path:"/articles/:postUrl",
    element:<PostDetail/>
},{
    path:"/articles",
    element:<ArticlesPage/>
}

])