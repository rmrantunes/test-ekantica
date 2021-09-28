import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultsPaginationData = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`;
