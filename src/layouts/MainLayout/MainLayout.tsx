import { Suspense } from 'react';

import { ClientOnly } from '@/components';
import { Navbar } from '@/components/Header';
import Loader from '@/components/Loader';
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import type { ChildrenProps } from '@/types';

export function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <ClientOnly>
        <Navbar />
        <RegisterModal />
        <LoginModal />
        <ToasterProvider />
      </ClientOnly>
      <Suspense fallback={<Loader />}>
        <div className="pb-20 pt-28">{children}</div>
      </Suspense>
    </>
  );
}
