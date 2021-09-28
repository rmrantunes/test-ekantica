import styled, { css, keyframes } from "styled-components";

export type AppNavigationButtonSCProps = {
  isActive?: boolean;
};

const selectedButtonKeyframe = keyframes`
  from {
    left: -100%;
  } to {
    left: 0;
  }
`;

export const Button = styled.a<AppNavigationButtonSCProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    padding: 0.5rem;
    cursor: pointer;

    transition: ${theme.transition.default};

    & svg {
      color: ${theme.colors.gray};
    }

    &:hover {
      filter: brightness(0.9);
    }

    ${isActive &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        display: block;
        height: 100%;
        width: 110%;
        background: ${theme.colors.purple};

        border-bottom-right-radius: ${theme.rounded.full};
        border-top-right-radius: ${theme.rounded.full};

        box-shadow: ${theme.shadow.default};
        z-index: -10;

        animation: ${selectedButtonKeyframe} ${theme.transition.halfSecond};
      }

      & svg {
        color: ${theme.colors.white};
      }
    `}
  `}
`;
