import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    // passhref passa a PROPRIEDADE HREF para o primeiro elemento filho do <Link />
    // https://app.rocketseat.com.br/node/chapter-iv-1/group/responsividade/lesson/fluxo-de-navegacao
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}

export default NavLink;
