import { SearchIcon } from "@heroicons/react/outline";
import { Button } from "components/Button";
import { TextField } from "components/TextField";

import * as S from "./styles";

export function ResultsSearchOrAdd() {
  return (
    <S.Wrapper>
      <TextField icon={<SearchIcon />} placeholder="Buscar" />
      <Button variant="fill">CRIAR NOVO</Button>
    </S.Wrapper>
  );
}
