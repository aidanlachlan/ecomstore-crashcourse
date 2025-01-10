import { Button, Container, Flex, HStack, Text} from "@chakra-ui/react";
import { useColorMode } from "./color-mode";
import React from "react";
import { Link } from "react-router-dom";

import { FaRegPlusSquare } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            { colorMode === "light" ? <LuMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
