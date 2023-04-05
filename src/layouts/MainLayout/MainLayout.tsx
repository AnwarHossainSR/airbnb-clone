import MainFooter from '@/components/Footer';
import { Navbar } from '@/components/Header';
import type { ChildrenProps } from '@/types';

import { Content, Wrapper } from './styles';

export function MainLayout({ children }: ChildrenProps) {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <MainFooter />
    </Wrapper>
  );
}
