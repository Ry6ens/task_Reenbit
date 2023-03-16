import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;

  padding: 0px 24px;

  max-width: 1440px;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const Item = styled.li`
  padding: 24px 0px;
`;

export const ItemLink = styled.a`
  cursor: pointer;

  &.active {
    color: #8bc34a;
    text-decoration: underline;
  }
`;
