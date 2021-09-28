import styled, { css } from "styled-components";

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: calc(100vh - 4rem); /** 4rem equals header static height */
    padding: 0.5rem 0;

    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};

    & > * + * {
      margin-top: 0.5rem;
    }
  `}
`;
