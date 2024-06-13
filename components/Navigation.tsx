'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  console.log(path);

  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/middle/basement"}>About Basement</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
