import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { RiRotateLockFill } from "react-icons/ri";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SiderbarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  // { isOpen, onClose, onOpen }
  const disclousure = useDisclosure();
  const router = useRouter();

  // router.asPath é o caminho da rota, todas vez que mudar de página, irá fechar o drawer
  useEffect(() => {
    disclousure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
