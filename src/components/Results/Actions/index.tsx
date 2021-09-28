import { useState } from "react";
import { Button } from "components/Button";
import { RadioInput } from "components/RadioInput";
import { Dropdown } from "components/Dropdown";
import { DropdownButton } from "components/Dropdown/Button";

import * as S from "./styles";

export function ResultsActions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <S.Wrapper>
      <RadioInput />
      <Dropdown
        label="Actions"
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      >
        <DropdownButton>Action 1</DropdownButton>
        <DropdownButton>Action 2</DropdownButton>
        <DropdownButton>Action 3</DropdownButton>
      </Dropdown>
      <Button>Aplicar</Button>
    </S.Wrapper>
  );
}
