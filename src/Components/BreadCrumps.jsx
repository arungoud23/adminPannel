import React from 'react';
import { Box,Button } from '@chakra-ui/react';
import {Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';

const BreadCrumps = () => {
  return (
  <Box display={"flex"} justifyContent={"space-between"} marginTop={"25px"} >
    <Box>
   <Breadcrumb fontWeight='small' fontSize='sm'>
   <BreadcrumbItem marginLeft={"20px"}>
    <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
   </BreadcrumbItem>
   <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>All Customers</BreadcrumbLink>
   </BreadcrumbItem>
   </Breadcrumb>
    </Box>
    <Box marginRight={"20px"}>
    <Box width={"100px"} height={"30px"} border={"1px solid grey"} borderRadius={"15px"}><Icon as={BsFilter} /> Filters</Box>
    </Box>
    </Box>
  )
}

export default BreadCrumps