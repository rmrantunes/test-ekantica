import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const List = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 2rem 2rem;

    border-radius: 2rem;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);

    display: grid;
    gap: 1.5rem;
  `}
`;
