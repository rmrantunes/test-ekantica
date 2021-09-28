import Link from "next/link";
import * as S from "./styles";

export type AppNavigationButtonProps = S.AppNavigationButtonSCProps & {
  children: React.ReactNode;
  href?: string;
};

export function AppNavigationButton(props: AppNavigationButtonProps) {
  const { href = "", ...propsRest } = props;
  return (
    <Link href={href} passHref>
      <S.Button {...propsRest} />
    </Link>
  );
}
