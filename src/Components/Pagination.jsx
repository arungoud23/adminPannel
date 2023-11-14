import React from 'react';
import {Box} from "@chakra-ui/react";
import {ArrowBackIcon,ArrowForwardIcon} from "@chakra-ui/icons";

const Pagination = () => {
  return (
    <Box marginLeft={"70%"} marginTop={"25px"}>
        <Box display={"flex"} gap={"30px"}>
            <Box border={"3px solid skyblue "} borderRadius={"17px"} width={"50px"} height={"30px"}>
                <ArrowBackIcon color={"skyblue"} />
            </Box>
            <Box display={"flex"}  gap={"5px"}>
                <Box>Page</Box>
                <Box>1</Box>
                <Box>of 10</Box>
            </Box>
            <Box border={"1px solid darkcyan "} borderRadius={"15px"} bgColor={"darkcyan"} color={"white"}  width={"140px"} height={"30px"} alignItems={"center"}>
                Next Page
                <ArrowForwardIcon marginLeft={"10px"} />
            </Box>
            
        </Box>
    </Box>
  )
}

export default Pagination