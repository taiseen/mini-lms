import routes from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={routes.root}>
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
