import { OfficeBuildingIcon } from "@heroicons/react/outline";

import { PageTitle } from "components/PageTitle";
import { Main } from "components/Main";
import { Results } from "components/Results";

export default function Home() {
  return (
    <Main>
      <PageTitle icon={<OfficeBuildingIcon />}>Gestão de clientes</PageTitle>
      <Results />
    </Main>
  );
}
