import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  text: string;
};

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <p style={asPath === href ? style : undefined}>{text}</p>
    </Link>
  );
};

export default ActiveLink;
