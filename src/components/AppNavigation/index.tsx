import {
  HomeIcon,
  OfficeBuildingIcon,
  UsersIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import { AppNavigationButton } from "./Button";
import * as S from "./styles";

export function AppNavigation() {
  return (
    <S.Wrapper>
      <AppNavigationButton>
        <HomeIcon width="2rem" />
      </AppNavigationButton>
      <AppNavigationButton isActive>
        <OfficeBuildingIcon width="2rem" />
      </AppNavigationButton>
      <AppNavigationButton>
        <UsersIcon width="2rem" />
      </AppNavigationButton>
      <AppNavigationButton>
        <NewspaperIcon width="2rem" />
      </AppNavigationButton>
      <AppNavigationButton>
        <QuestionMarkCircleIcon width="2rem" />
      </AppNavigationButton>
    </S.Wrapper>
  );
}
