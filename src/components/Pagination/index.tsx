import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

// quantidade de páginas "irmãs", se estiver na pagina 5, mostra 4 e 6
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  // cria um array vazio de tamanho x, depois vai preenchendo ele
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        {currentPage > 1 + siblingsCount && (
          <React.Fragment>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
          </React.Fragment>
        )}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                pageNumber={page}
                key={page}
              />
            );
          })}
        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                pageNumber={page}
                key={page}
              />
            );
          })}
        {currentPage + siblingsCount < lastPage && (
          <React.Fragment>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </React.Fragment>
        )}
      </Stack>
    </Stack>
  );
}

export default Pagination;
