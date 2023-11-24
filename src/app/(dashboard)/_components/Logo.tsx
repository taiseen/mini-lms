import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="logo"
        width="200"
        height="200"
        src="/lms.png"
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
