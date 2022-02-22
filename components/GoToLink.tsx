import Link from "next/link";

type GoToLinkProps = {
  where: string;
  title: string;
  blank?: boolean;
};

export const GoToLink = ({ where, title, blank }: GoToLinkProps) => {
  const aClass =
    "hover:cursor-pointer hover:bg-primary border-b border-b-primary";
  const external = where.includes("http://") || where.includes("https://");

  if (external || blank)
    return (
      <a
        href={where}
        target={"_blank"}
        className={aClass}
        rel="noopener noreferrer"
      >
        {title}
      </a>
    );

  return (
    <Link href={where}>
      <a className={aClass}>{title}</a>
    </Link>
  );
};
