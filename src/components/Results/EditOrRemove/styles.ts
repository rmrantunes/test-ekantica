import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.rounded.full};
    background: ${theme.colors.lightGray};
    padding: 0.5rem;

    border: none;
    cursor: pointer;

    display: grid;
    place-items: center;

    transition: ${theme.transition.default};

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
