import styled, { css } from "styled-components";

type TBodyTrSCProps = {
  isDisabled?: boolean;
};

export const Wrapper = styled.table`
  display: block;

  tr {
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    align-items: center;
  }
`;

export const Thead = styled.thead`
  ${({ theme }) => css`
    border-radius: ${theme.rounded.lg};
    background: ${theme.colors.lightGray};
    padding: 0.5rem 1rem;
    display: block;
  `}
`;

export const TheadTh = styled.th`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: uppercase;
  text-align: start;
  display: flex;

  & svg {
    width: 1rem;
    margin-left: 0.5rem;
  }
`;

export const Tbody = styled.tbody`
  display: block;

  & td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TbodyTr = styled.tr<TBodyTrSCProps>`
  ${({ theme, isDisabled }) => css`
    color: ${theme.colors[isDisabled ? "gray" : "black"]};
    padding: 1rem;

    & + & {
      border-top: 1px solid ${theme.colors.lightGray};
    }
  `}
`;
