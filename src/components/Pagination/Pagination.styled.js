import styled from 'styled-components';
import { device } from '@/styles/Media.variables';

export const List = styled.ul`
  margin: 32px 0px;
  padding: 0px 24px;

  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ArrowItem = styled.li`
  cursor: pointer;

  &.disabled {
    pointer-events: none;
  }
`;

export const ArrowLeft = styled.div`
  transform: rotate(-135deg) translate(-50%);

  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-right: 2px solid rgba(0, 0, 0, 0.87);
    border-top: 2px solid rgba(0, 0, 0, 0.87);
  }

  &.disabled {
    &::before {
      border-right: 2px solid rgba(0, 0, 0, 0.43);
      border-top: 2px solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const ArrowRight = styled.div`
  transform: rotate(45deg);

  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-right: 2px solid rgba(0, 0, 0, 0.87);
    border-top: 2px solid rgba(0, 0, 0, 0.87);
  }

  &.disabled {
    &::before {
      border-right: 2px solid rgba(0, 0, 0, 0.43);
      border-top: 2px solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const DotsItem = styled.li`
  &:hover {
    background-color: transparent;
    cursor: default;
  }
`;

export const NumberItem = styled.li`
  cursor: pointer;

  &.selected {
    color: #97b715;
  }
`;
