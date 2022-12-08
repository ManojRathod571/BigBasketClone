import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Text,
  Image,
  Button,
  HStack,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { RiCouponFill } from "react-icons/ri";
import CartTbale from "../component/CartTbale";
import CartTotal from "./CartTotal";

const Cart = () => {
  const cartData = useSelector((store) => store.CartReducer.cartProduct);
  return (
    <Box bg="#f3f3f3">
      <Box py="1rem">
        <Box w="75.5%" m="auto" bg="white" px="1.5rem" py="2rem">
          <Box>
            <Text
              fontSize="23px"
              fontFamily="Poppins"
              fontWeight="300"
              color="#58595b"
              mb=".2rem"
            >
              Your Basket Has ({`${cartData.length}`} items)
            </Text>
            <Box borderBottom="1px solid #E8E8E8" />
          </Box>
          {/* promo button */}
          <HStack my="1.5rem">
            <Button
              leftIcon={<RiCouponFill fontSize="17px" />}
              borderRadius="5px"
              border="1px solid #f89629"
              bg=" linear-gradient(180deg,#fff 35%,#ebedea 99%)"
              color="#58595b"
              fontSize="12px"
              fontFamily="Poppins"
              fontWeight="500"
            >
              VIEW AVAILABLE PROMOS
            </Button>
          </HStack>
          <CartTbale />
          {cartData.length > 0 ? <CartTotal /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;