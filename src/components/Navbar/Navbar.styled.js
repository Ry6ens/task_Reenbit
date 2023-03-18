import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;

  padding: 24px;

  max-width: 1440px;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const Item = styled.li`
  position: relative;
`;

export const ItemLink = styled.a`
  cursor: pointer;

  &::after {
    content: '';
    left: 0;
    bottom: -6px;
    position: absolute;
    width: 100%;
    height: 3px;
    background: rgb(0, 0, 0);
    border-radius: 5px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    color: #8bc34a;

    &::after {
      background: #8bc34a;
    }
  }
`;
