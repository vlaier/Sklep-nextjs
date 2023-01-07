import Link from "next/link";
import { useRouter } from "next/router";
export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="p-5 flex ">
      <Link href="/" className="link">
        <li className={router.pathname == "/" ? "active" : ""}>Home</li>
      </Link>
      <Link href="/users" className="link">
        <li className={router.pathname == "/users" ? "active" : ""}>Users</li>
      </Link>
      <Link href="/products/page/0" className="link">
        <li className={router.pathname == "/products/page/0" ? "active" : ""}>
          Products
        </li>
      </Link>
      <Link href="/products-csr" className="link">
        <li className={router.pathname == "/products-csr" ? "active" : ""}>
          Products CSR
        </li>
      </Link>
    </nav>
  );
};
