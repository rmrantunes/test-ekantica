import { Button } from "components/Button";
import { RadioInput } from "components/RadioInput";

import * as S from "./styles";

export function ResultsActions() {
  return (
    <S.Wrapper>
      <RadioInput />
      <Button>Aplicar</Button>
    </S.Wrapper>
  );
}
