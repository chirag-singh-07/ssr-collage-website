"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import React from "react";

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Pillars of Strength", href: "/pillars-of-strength" },
      { label: "Principal's Desk", href: "/principals-desk" },
      {
        label: "Available Programmes",
        href: "/available-programmes",
        children: [
          { label: "B. Com.", href: "/bcom" },
          { label: "B. A.", href: "/ba" },
          { label: "B. B. A.", href: "/bba" },
          { label: "B. B. A. (CA)", href: "/bbaca" },
          { label: "B. Sc. (Computer Science)", href: "/bsc-computer-science" },
          { label: "B. Sc.", href: "/bsc" },
          { label: "M. Com.", href: "/mcom" },
          { label: "M. Sc.", href: "/msc" },
        ],
      },
      { label: "Why SSR?", href: "/why-ssr" },
      { label: "News and Events", href: "/news-and-events" },
      { label: "Photo Gallery", href: "/photo-gallery" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Administration", href: "/administration" },
      { label: "Achievements and Awards", href: "/achievements-awards" },
      { label: "College Milestone", href: "/college-milestone" },
      { label: "Student Achievers", href: "/student-achievers" },
      { label: "Sports & Gymkhana", href: "/sports-gymkhana" },
      { label: "Media Coverage", href: "/media-coverage" },
    ],
  },
  {
    label: "Department",
    href: "/department",
    children: [
      { label: "Commerce", href: "/commerce" },
      { label: "Arts", href: "/arts" },
      { label: "Science", href: "/science" },
      { label: "Computer Science", href: "/computer-science" },
    ],
  },
  {
    label: "Admission",
    href: "/admission",
    children: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Eligibility", href: "/eligibility" },
      { label: "Fequently Asked Questions", href: "/faq" },
    ],
  },
  { label: "Co-curricular", href: "/co-curricular", children: [] },
  { label: "Students Corner", href: "/students-corner", children: [] },
  { label: "IQAC", href: "/iqac", children: [] },
  { label: "Research", href: "/research", children: [] },
  { label: "Examination", href: "/examination", children: [] },
  { label: "Feedback", href: "/feedback", children: [] },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar: React.FC = () => {
  return (
    <header className="relative z-50">
      {/* Top banner */}
      <div className="bg-white w-full border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <Image
            src="/images/navbar-banner.png"
            alt="SSR College Banner"
            width={1200}
            height={120}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Primary nav with angled ends (clip-path) */}
      <nav aria-label="Main navigation" className="w-full mt-1">
        <div
          className="bg-[#0b4f81] text-white"
          style={{
            clipPath:
              "polygon(1% 0, 99% 0, 100% 50%, 99% 100%, 1% 100%, 0 50%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <ul className="flex items-center">
                {/* Dynamically render all links using Shadcn Dropdown */}
                {navLinks.map((link, index) => (
                  <NavDropdownItem
                    key={link.label}
                    item={link}
                    isHome={index === 0}
                  />
                ))}
              </ul>

              {/* Right side: search icon */}
              <div className="flex items-center gap-4 pr-4">
                <button
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} className="text-white/90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavDropdownItem: React.FC<{
  item: NavLink;
  isHome?: boolean;
}> = ({ item, isHome = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  // Render simple link if no children
  if (!hasChildren) {
    return (
      <li>
        <a
          href={item.href}
          className={`flex items-center gap-1 transition-colors whitespace-nowrap px-4 py-4 uppercase text-[13px] font-semibold text-white/95 hover:bg-[#0a436f]`}
        >
          {item.label}
        </a>
      </li>
    );
  }

  // Render Shadcn Dropdown for items with children
  return (
    <li
      className="h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <a
            href={item.href}
            className={`flex items-center cursor-pointer gap-2 transition-colors whitespace-nowrap px-4 py-4 uppercase text-[13px] font-semibold text-white/95 outline-none
              ${
                isHome
                  ? "bg-[#ef5b2d] hover:bg-[#d44d21] data-[state=open]:bg-[#d44d21]"
                  : "hover:bg-[#ef5b2d] data-[state=open]:bg-[#ef5b2d]"
              }
            `}
            onClick={(e) => e.preventDefault()}
          >
            {item.label}
            <span className="text-[10px] opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180">
              ▾
            </span>
          </a>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`bg-[#0b4f81] border-none text-white rounded-none p-0 shadow-xl min-w-[240px] mt-0
            ${isHome ? "border-t-2 border-[#ef5b2d]" : ""}
          `}
          sideOffset={0}
        >
          {item.children?.map((child) => (
            <RecursiveDropdownItem key={child.label} item={child} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
};

const RecursiveDropdownItem: React.FC<{ item: NavLink }> = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm text-white hover:bg-[#ef5b2d] hover:text-white focus:bg-[#ef5b2d] focus:text-white rounded-none cursor-pointer data-[state=open]:bg-[#ef5b2d] data-[state=open]:text-white border-b border-white/10 last:border-0">
          {item.label}
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent
          className="bg-[#0b4f81] border-l border-white/10 text-white rounded-none p-0 shadow-xl min-w-[240px] ml-0"
          sideOffset={0}
        >
          {item.children?.map((child) => (
            <RecursiveDropdownItem key={child.label} item={child} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  }

  return (
    <DropdownMenuItem asChild>
      <a
        href={item.href}
        className="block w-full px-4 py-3 text-sm text-white hover:bg-[#ef5b2d] hover:text-white focus:bg-[#ef5b2d] focus:text-white rounded-none cursor-pointer border-b border-white/10 last:border-0"
      >
        {item.label}
      </a>
    </DropdownMenuItem>
  );
};
export default Navbar;
