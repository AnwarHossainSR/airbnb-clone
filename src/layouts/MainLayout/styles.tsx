import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`;

export const Content = styled.main`
  flex: 1;
`;

export const Header = styled.header`
  background-color: '#000';
  color: var(--color);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background-color: '#000';
  color: var(--color);
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  display: flex;
  gap: 0.5em;
  text-decoration: none;
  color: var(--text-color);
  padding: 0.5em 1em;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

  &:hover {
    background-color: var(--background-active);
  }

  &:focus,
  &:active {
    outline: 1px solid #fff;
  }
`;
