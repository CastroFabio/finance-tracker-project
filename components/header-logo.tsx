import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="items-center hidden lg:flex">
        <Image src="logo.svg" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
}
