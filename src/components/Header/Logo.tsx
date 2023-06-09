import { Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Text
      // quando o usuário estiver no breakpoint xm usará 2xl, 3xl md, dali pra cima usará 4xl, o último valor é o que usará pro resto das resoluções
      fontSize={["2xl", "3xl", "4xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml={1} color="pink.500">
        .
      </Text>
    </Text>
  );
}

export default Logo;
