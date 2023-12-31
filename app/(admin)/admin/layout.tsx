'use client';

import { Button } from '@/components/Button';
import Card from '@/components/Card';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

const AdminLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { push } = useRouter();

  return (
    <div>
      <div className="bg-[#FFD54F] border-b border-yellow-400 shadow flex justify-center">
        <div className="max-w-[80ch] w-full h-16 flex items-center mx-8">
          <h1 className="flex items-center gap-1 text-lg">
            <Link href="/">Job Board</Link>{' '}
            <ChevronRightIcon className="h-5 w-5" />{' '}
            <Link href="/admin">Admin</Link>
          </h1>
        </div>
      </div>
      <div className="bg-gray-50 flex justify-center border-b border-gray-100 shadow">
        <div className="max-w-[80ch] w-full h-16 flex items-center mx-8 gap-5">
          <Link href="/admin">
            <Button secondary>Dashboard</Button>
          </Link>
          <Link href="/admin/posts/create">
            <Button>New post</Button>
          </Link>
          <Link href="/admin/companies/create">
            <Button>New company</Button>
          </Link>
          <div className="grow" />
          <Link href="/">
            <Button secondary>Back to public site</Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto w-[80ch] my-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
