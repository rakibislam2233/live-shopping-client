'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ destination,title}) => {
  const path = usePathname();
  const active = path === destination
  return (
   <Link href={destination} className="group">
   <li className="font-semibold  border-transparent group-hover:border-[#0d3676]  text-[15px] group-hover:translate-y-0.5   duration-300 transition-all border-t-2">{title}</li>
   </Link>
  );
};
export default ActiveLink;
