import styled, { css } from "styled-components";

export type DropdownButtonSCProps = {
  isActive?: boolean;
};

export const DropdownButton = styled.button<DropdownButtonSCProps>`
  ${({ theme, isActive }) => css`
    border: none;
    outline: none;
    width: 100%;
    padding: 0.75rem;
    font-size: 0.875rem;

    color: ${theme.colors.gray};
    background: ${isActive ? theme.colors.lightGray : theme.colors.white};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.lightGray};
    }
  `}
`;
