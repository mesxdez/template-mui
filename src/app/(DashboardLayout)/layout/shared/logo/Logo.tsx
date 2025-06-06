import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logos/Logo-1.png"
        alt="logo"
        height={34}
        width={137}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;
