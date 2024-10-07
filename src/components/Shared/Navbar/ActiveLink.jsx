'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ destination,title}) => {
  const path = usePathname();
  const active = path === destination
  return (
   <Link href={destination} className="group">
   <div className="w-full h-[3px] bg-[#0d3676] rounded-b-2xl opacity-0 group-hover:opacity-100 duration-300 transition-all"></div>
   <li className="font-semibold  border-white text-[15px] group-hover:translate-y-0.5   duration-300 transition-all">{title}</li>
   </Link>
  );
};
export default ActiveLink;
