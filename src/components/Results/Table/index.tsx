import { useEffect, useState } from "react";
import apiConfig from "config/api";
import { DefaultResquestResponse, Region } from "types/api";
import { SwitchVerticalIcon } from "@heroicons/react/outline";

import { RadioInput } from "components/RadioInput";
import { ResultsEditOrRemove } from "../EditOrRemove";

import * as S from "./styles";

export function ResultsTable() {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(apiConfig.requestEndpoints.default);

      const data = (await response.json()) as DefaultResquestResponse;

      setRegions(data.regions);
    })();
  });

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
          <S.TbodyTrFlex key={region.idRegion}>
            <RadioInput name="region" id={`region-${region.idRegion}`} />
            <S.TbodyTr>
              <td>{region.idRegion}</td>
              <td>{region.nameRegion}</td>
              <td>
                <ResultsEditOrRemove />
              </td>
            </S.TbodyTr>
          </S.TbodyTrFlex>
        ))}
      </S.Tbody>
    </S.Wrapper>
  );
}
