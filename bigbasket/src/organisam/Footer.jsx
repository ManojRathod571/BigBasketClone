import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import FooterHeading from "../molecules/FooterHeading";
import FooterTitle from "../molecules/FooterTitle";
import { GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const bigbasket = [
  "About Us",
  "In News",
  "Green bigbasket",
  "Privacy Policy",
  "Affiliate",
  "Terms and Conditions",
  "Careers At bigbasket",
  "bb Instant",
  "bb Daily",
  "bb Blog",
  "bbnow",
];

const help = [
  "FAQs",
  "Contact Us",
  "bb Wallet FAQs",
  "bb Wallet T&Cs",
  "Vendor Connect",
];

const Footer = () => {
  return (
    <Box w="75.5%" m="auto" mt="1rem">
      <Box borderTop="1px solid #E8E8E8" w="100%" mt="2rem" mb=".5rem" />
      <Flex justify="space-between" my="2rem" px="1rem">
        <Box>
          <FooterHeading heading="heading" />
          <Box>
            {bigbasket.map((item) => {
              return <FooterTitle title={item} />;
            })}
          </Box>
        </Box>
        <Box>
          <FooterHeading heading="Help" />
          <Box>
            {help.map((item) => {
              return <FooterTitle title={item} />;
            })}
          </Box>
        </Box>
        <Box>
          <FooterHeading heading="Download Our App" />
          <Box mb=".5rem">
            <Image
              src="https://www.bbassets.com/static/v2610/custPage/build/content/img/Google-App-store-icon.png"
              alt=""
              w="150px"
              h="auto"
            />
          </Box>
          <Box>
            <Image
              src="https://www.bbassets.com/static/v2610/custPage/build/content/img/Apple-App-store-icon.png"
              alt=""
              w="150px"
              h="auto"
            />
          </Box>
        </Box>
        <Box>
          <FooterHeading heading="Get Social With Us" />
          <Flex gap={3}>
            <Flex
              bg="#3b5998"
              _hover={{ bg: "", border: "1px solid " }}
              w="40px"
              h="40px"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <GrFacebookOption fontSize="20px" color="white" />
            </Flex>
            <Flex
              bg="#db3236"
              _hover={{ bg: "", border: "1px solid " }}
              w="40px"
              h="40px"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <FaPinterestP fontSize="20px" color="white" />
            </Flex>
            <Flex
              bg="#00aced"
              _hover={{ bg: "", border: "1px solid " }}
              w="40px"
              h="40px"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <FaTwitter fontSize="20px" color="white" />
            </Flex>
            <Flex
              bg="#517fa4"
              _hover={{ bg: "", border: "1px solid " }}
              w="40px"
              h="40px"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              <GrInstagram fontSize="20px" color="white" />
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box borderBottom="1px solid 	#E8E8E8" w="100%" mb="1rem"/>
    </Box>
  );
};

export default Footer;
