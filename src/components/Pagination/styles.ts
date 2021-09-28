import styled, { css } from "styled-components";

type PaginationButtonSCProps = {
  isActive?: boolean;
};

export const PaginationNav = styled.nav`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 1rem;
  }
`;

export const PaginationButton = styled.button<PaginationButtonSCProps>`
  ${({ theme, isActive }) => css`
    border-radius: ${theme.rounded.full};
    background: ${isActive ? theme.colors.purple : "transparent"};
    color: ${isActive ? theme.colors.white : theme.colors.gray};
    box-shadow: ${isActive ? theme.shadow.default : ""};
    height: 1.75rem;
    min-width: 1.75rem;
    padding: 0 0.25rem;
    border: none;
    cursor: pointer;
  `}
`;

export const PaginationButtons = styled.div`
  display: flex;
`;
