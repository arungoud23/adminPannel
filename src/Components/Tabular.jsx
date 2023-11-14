import React from 'react';
import {Box,Tag} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';

const Tabular = () => {
  return (
    <Box marginTop={"25px"} marginLeft={"20px"} >
          <TableContainer>
          <Table variant='simple'>
          <Thead>
      <Tr>
        <Th>S no</Th>
        <Th>Thumbnail</Th>
        <Th>Customer Name</Th>
        <Th>Contact</Th>
        <Th>E-Mail</Th>
        <Th>Shipping Adress</Th>
        <Th>Credit Limit</Th>
        <Th>Sales Person</Th>
      </Tr>
      </Thead>
      <Tbody>
      <Tr>
        <Td>1</Td>
        <Td><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Td>
        <Td>Franky</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td width={"200px"} display={"flex"} flexDirection={"column"}>
          <Box>123 Main street Suite 456 Anytown,CA</Box>
          <Box>12345United States</Box>
          {/* 123 Main street Suite 456 Anytown,CA 12345United States */}
          </Td>
        <Td>5000</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td><Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' /></Td>
        <Td>Luffy</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>4656</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td><Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' /></Td>
        <Td>Rorono</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>6464</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>4</Td>
        <Td><Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' /></Td>
        <Td>Jennifer</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>554</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>5</Td>
        <Td><Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' /></Td>
        <Td>Adam</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>5533</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>6</Td>
        <Td><Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' /></Td>
        <Td>A030VGS124</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>745</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>7</Td>
        <Td><Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /></Td>
        <Td>A030VGS124</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>54654</Td>
        <Td>Franky</Td>
      </Tr>
      <Tr>
        <Td>8</Td>
        <Td><Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' /></Td>
        <Td>A030VGS124</Td>
        <Td>+9(372) 7783 383</Td>
        <Td>Stephen76@gmail.com</Td>
        <Td>
        <Box>123 Main street Suite 456 Anytown,CA</Box>
        <Box>12345United States</Box>
        </Td>
        <Td>5464</Td>
        <Td>Franky</Td>
      </Tr>
      </Tbody>
    </Table> 
    </TableContainer>
    </Box>
  )
}

export default Tabular