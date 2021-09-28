import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import * as S from "./styles";

export function Pagination() {
  return (
    <S.PaginationNav>
      <S.PaginationButton title="Ir para a página de resultados anterior">
        <ChevronLeftIcon width="1.25rem" />
      </S.PaginationButton>

      <S.PaginationButtons>
        <S.PaginationButton isActive>1</S.PaginationButton>
        <S.PaginationButton>2</S.PaginationButton>
        <S.PaginationButton>3</S.PaginationButton>
      </S.PaginationButtons>

      <S.PaginationButton title="Ir para a próxima página de resultados">
        <ChevronRightIcon width="1.25rem" />
      </S.PaginationButton>
    </S.PaginationNav>
  );
}
