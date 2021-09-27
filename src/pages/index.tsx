import { OfficeBuildingIcon } from "@heroicons/react/outline";
import { PageTitle } from "components/PageTitle";
import { Main } from "components/pages/index/Main";

export default function Home() {
  return (
    <Main>
      <PageTitle icon={<OfficeBuildingIcon />}>Gestão de clientes</PageTitle>
    </Main>
  );
}
