import * as S from "./styles";

export type PageTitleProps = {
  icon: React.ReactElement;
  children: React.ReactNode;
};

export function PageTitle(props: PageTitleProps) {
  return (
    <S.Wrapper>
      <S.Icon>{props.icon}</S.Icon>
      {props.children}
    </S.Wrapper>
  );
}
