
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


export const SidebarData = [
    
    {
        title: "Dashboard",
        Icon: <HomeIcon/>,
        Link:"/"
    },
    {
        title: "Add Ring",
        Icon: <AddIcon/>,
        Link:"/ring/add"
    },
    {
        title: "Statistics",
        Icon: <EqualizerIcon/>,
        Link:"/Statistics"
    },
    {
        title: "Profile",
        Icon: <AccountCircleIcon/>,
        Link:"/Profile"
    },
    {
    title: "Logout",
    Icon: <MeetingRoomIcon/>,
    Link:"/Logout"
    },
    

]
 
