import { ResultsActions } from "./Actions";
import { ResultsHeader } from "./Header";
import { ResultsSearchOrAdd } from "./SearchOrAdd";
import { ResultsTable } from "./Table";

import * as S from "./styles";

export function Results() {
  console.log(ResultsActions);

  return (
    <S.Wrapper>
      <ResultsHeader>
        <ResultsActions />
        <ResultsSearchOrAdd />
      </ResultsHeader>

      <ResultsTable />
    </S.Wrapper>
  );
}
