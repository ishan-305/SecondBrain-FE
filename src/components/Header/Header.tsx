"use client"; // Required for using hooks in App Router

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Pricing",
      slug: "/pricing",
    },
    {
      title: "Support",
      slug: "/support",
    },
    {
      title: "About Me",
      slug: "/about-me",
    },
  ];

  // Function to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="flex font-mono text-white justify-between items-center px-[60px] py-[20px] bg-black shadow-md">
        <Link href={"/"}>
          <div className="flex gap-4">
            <Image src="/notes.svg" alt="logo" height={38} width={38} />
            <Image src="/SmartNotes.svg" alt="Name" height={18} width={127} />
          </div>
        </Link>
        <ul className="flex gap-6 font-sans font-medium">
          {navItems.map((item) => (
            <li
              key={item.slug}
              className={
                isActive(item.slug)
                  ? "text-transparent bg-clip-text bg-gradient-to-br from-[#AAD9D1] to-[#017373]"
                  : ""
              }
            >
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <Button
          className="rounded-lg font-sans text-black bg-gradient-to-br from-[#AAD9D1] to-[#017373]"
          onClick={() => router.push("/signup")}
        >
          Get Started
          <ArrowUpRight />
        </Button>
      </header>
    </>
  );
};

export default Header;
