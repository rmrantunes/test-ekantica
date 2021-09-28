import { Pagination } from "components/Pagination";
import * as S from "./styles";

export function ResultsFooter() {
  return (
    <S.Wrapper>
      <S.ResultsPaginationData>
        Visualizando 1 - 25 de 70 resultados
      </S.ResultsPaginationData>

      <Pagination />
    </S.Wrapper>
  );
}
