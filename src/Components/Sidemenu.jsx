import React from 'react';
import {Box,Icon} from "@chakra-ui/react";
import {ChevronLeftIcon,SettingsIcon} from "@chakra-ui/icons";
// import {ImProfile} from "react-icons";
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { MdSettings } from 'react-icons/md';
import {CgProfile} from "react-icons/cg";
import {MdLogout} from "react-icons/md";
import {MdOutlinePhonelinkSetup} from "react-icons/md";
import {BsMotherboard} from "react-icons/bs";
import {FcDataConfiguration} from "react-icons/fc";
import {BsTools} from "react-icons/bs";
import {MdInventory} from "react-icons/md";
import {TfiAnnouncement} from "react-icons/tfi";
import {MdOutlineWebStories} from "react-icons/md";
import {FaFirstOrderAlt} from "react-icons/fa";
import {RxDashboard} from "react-icons/rx";


const Sidemenu = () => {
  return (
    <Box border={"1px solid black"} width={"200px"} height={"100%"} bgColor={"#020024"}>
        <Box display={"flex"}  gap={"5px"}>
            <Box>Logo</Box>
            <Box lineHeight={"15px"} borderLeft={"1px solid white"} color={"white"} fontSize={"small"} textAlign={"left"}>
                <Box marginLeft={"2px"}>
                <Box>RELIABLE</Box>
                <Box>SIGN</Box>
                <Box>SUPPLY</Box>
                </Box>
            </Box>
        </Box>

        <Box color={"white"} display={"flex"} flexDirection={"column"} gap={"30px"} marginLeft={"5px"}>
            <Box textAlign={"left"} marginTop={"30px"}> <Icon as={RxDashboard}/> Dashboard</Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={FaFirstOrderAlt} /> Order Management</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={MdOutlineWebStories} /> Web 360</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={TfiAnnouncement} /> Promotion</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={MdInventory} /> Inventory</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={BsTools} /> Custom Tools</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={FcDataConfiguration} /> Configuration</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box> <Icon as={BsMotherboard} /> Customization</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box textAlign={"left"}> <Icon as={MdOutlinePhonelinkSetup}/> Set Up</Box>
                <Box><ChevronLeftIcon/></Box>
            </Box>
            <Box textAlign={"left"}><SettingsIcon /> Setting</Box>
            <Box textAlign={"left"}><Icon as={CgProfile}/> Profile</Box>
            <Box textAlign={"left"}><Icon as={MdLogout}/> Logout</Box>
            <Box></Box>
            
        </Box>

    </Box>
  )
}

export default Sidemenu