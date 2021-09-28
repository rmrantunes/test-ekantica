import { ResultsHeader } from "./Header";
import { ResultsTable } from "./Table";
import { ResultsFooter } from "./Footer";

import * as S from "./styles";

export function Results() {
  return (
    <S.Wrapper>
      <S.List>
        <ResultsHeader />
        <ResultsTable />
      </S.List>
      <ResultsFooter />
    </S.Wrapper>
  );
}
