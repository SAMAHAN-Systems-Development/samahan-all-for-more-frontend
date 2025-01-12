/* eslint-disable */

'use client';
import React from 'react';
import { LinkType, navLinks } from '../_constants/nav-links';
import Link from 'next/link';
import SamahanLogo from '/public/images/SamahanLogoWhite.png';
import Image from 'next/image';
import { Button } from '@/components/shadcn-ui/button';
import { createClient } from 'supabase/client';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const renderNavLinks = navLinks.map((link: LinkType) => (
    <Link
      key={link.link}
      href={link.link}
      className="flex gap-2 text-lg items-center"
    >
      <link.icon />
      {link.label}
    </Link>
  ));

  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/login');
    } else {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className="w-60 p-10 border-r-2 shadow-lg bg-primary text-white rounded-r-md font-semibold">
      <div className="flex gap-2 justify-center items-center mb-14">
        <Image src={SamahanLogo} alt="Samahan Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-8">{renderNavLinks}</div>
      <div className="py-8">
        <Button
          onClick={() => handleLogout()}
          variant="outline"
          className="text-primary w-full mt-92"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
