import Link from "next/link";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Login",
    href: "/login",
  },
];

const Nav = (props: { current: string }) => {
  return (
    <nav className="bg-gray-800 text-white my-4">
      <ul className="flex flex-row justify-between p-4">
        {links.map((link) => (
          <li
            key={link.title}
            className={link.title === props.current ? "font-bold" : undefined}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
