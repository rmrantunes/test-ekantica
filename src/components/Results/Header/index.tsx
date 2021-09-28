import { ResultsActions } from "../Actions";
import { ResultsSearchOrAdd } from "../SearchOrAdd";
import * as S from "./styles";

export function ResultsHeader() {
  return (
    <S.ResultsHeader>
      <ResultsActions />
      <ResultsSearchOrAdd />
    </S.ResultsHeader>
  );
}
