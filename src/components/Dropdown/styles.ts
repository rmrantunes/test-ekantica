import styled, { css, keyframes } from "styled-components";

const openDropdownKeyframe = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  } to {
    max-height: 40rem;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 15rem;
  max-width: 15rem;

  position: relative;
`;

export const Label = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;

    color: ${theme.colors.gray};
    background: transparent;
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.rounded.full};

    cursor: pointer;
  `}
`;

export const Dropdown = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.rounded.lg};
    overflow: hidden;

    margin-top: 0.5rem;
    width: 100%;
    display: grid;

    animation: ${openDropdownKeyframe} ${theme.transition.halfSecond};
  `}
`;
