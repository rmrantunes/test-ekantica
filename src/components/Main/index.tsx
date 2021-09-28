import * as S from "./styles";

export type IndexPageMainProps = {
  children: React.ReactNode;
};

export function Main(props: IndexPageMainProps) {
  return <S.Wrapper>{props.children}</S.Wrapper>;
}
