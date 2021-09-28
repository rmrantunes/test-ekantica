import { useTheme } from "styled-components";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

import * as S from "./styles";

type ResultsEditOrRemoveProps = {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
};

export function ResultsEditOrRemove(props: ResultsEditOrRemoveProps) {
  const { colors } = useTheme();

  return (
    <S.Wrapper>
      <S.Button onClick={props.onEditClick} aria-label="Editar registro">
        <PencilIcon width="1.25rem" color={colors.gray} />
      </S.Button>
      <S.Button onClick={props.onDeleteClick} aria-label="Deletar registro">
        <TrashIcon width="1.25rem" color={colors.red} />
      </S.Button>
    </S.Wrapper>
  );
}
