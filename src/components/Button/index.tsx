import styled, { css, DefaultTheme } from "styled-components";

export type ButtonSCProps = {
  variant?: "fill" | "outline";
};

const buttonModifiers = {
  variant: {
    outline: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.purple};
      color: ${theme.colors.purple};
      background: none;
    `,
    fill: (theme: DefaultTheme) => css`
      border: none;
      color: ${theme.colors.white};
      background: ${theme.colors.purple};
    `,
  },
};

export const Button = styled.button<ButtonSCProps>`
  ${({ theme, variant = "outline" }) => css`
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    border-radius: 9999px;
    font-weight: 700;
    cursor: pointer;

    transition: 0.2s;

    ${buttonModifiers.variant[variant](theme)}

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
