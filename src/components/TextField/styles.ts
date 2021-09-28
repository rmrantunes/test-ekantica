import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;

    color: ${theme.colors.gray};
    background: ${theme.colors.lightGray};
    border-radius: ${theme.rounded.full};

    transition: ${theme.transition.default};

    &:focus-within {
      box-shadow: inset 0 0 0 2px ${theme.colors.gray};
    }
  `}
`;

export const Icon = styled.span`
  width: 1.125rem;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  max-width: 20rem;
  color: inherit;
`;
