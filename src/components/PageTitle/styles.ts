import styled from "styled-components";

export const Wrapper = styled.h1`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 400;
  gap: 1rem;
`;

export const Icon = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  height: 2rem;
  width: 2rem;
`;
