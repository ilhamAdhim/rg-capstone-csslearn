import { Flex, Link, Text, chakra, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <chakra.div bg={useColorModeValue("gray.100", "gray.900")} p={4}>
      <Flex as="footer" width="full" justify="center" gap="4">
        {/* <SocialList /> */}
      </Flex>
      <Text align="center" mt="6">
        <Link
          to="https://www.github.com/ilhamadhim"
          isExternal
          rel="noopener noreferrer"
        >
          ©️ RG-Kelompok-70
        </Link>
        {" - "} {new Date().getFullYear()}
      </Text>
    </chakra.div>
  );
};

export default Footer;
