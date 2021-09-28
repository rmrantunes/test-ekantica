import { SwitchVerticalIcon } from "@heroicons/react/outline";
import { ResultsEditOrRemove } from "../EditOrRemove";
import * as S from "./styles";

const regions = [
  { idRegion: 1, nameRegion: "BRF HQ" },
  { idRegion: 2, nameRegion: "BRF HQ - In Natura" },
  { idRegion: 3, nameRegion: "BRF HQ - Processados" },
  { idRegion: 5, nameRegion: "RG Nordeste" },
  { idRegion: 7, nameRegion: "RG São Paulo Capital" },
  { idRegion: 8, nameRegion: "RG São Paulo Interior" },
  { idRegion: 9, nameRegion: "RG Sul" },
  { idRegion: 4, nameRegion: "RG Centro Norte" },
  { idRegion: 6, nameRegion: "RG Sudeste" },
];

export function ResultsTable() {
  return (
    <S.Wrapper>
      <S.Thead>
        <tr>
          <S.TheadTh>
            ID
            <SwitchVerticalIcon />
          </S.TheadTh>
          <S.TheadTh>
            NOME DA REGIÃO
            <SwitchVerticalIcon />
          </S.TheadTh>
          <S.TheadTh>EDITAR / REMOVER</S.TheadTh>
        </tr>
      </S.Thead>
      <S.Tbody>
        {regions.map((region) => (
          <S.TbodyTr key={region.idRegion}>
            <td>{region.idRegion}</td>
            <td>{region.nameRegion}</td>
            <td>
              <ResultsEditOrRemove />
            </td>
          </S.TbodyTr>
        ))}
      </S.Tbody>
    </S.Wrapper>
  );
}
