import Link from "next/link";
import { useRouter } from "next/router";
import { CartBar } from "./Cart/CartBar";
import { SearchBar } from "./SearchBar";
export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="px-8 py-6 flex bg-blue-600 items-center justify-between shadow-md sticky top-0 gap-8">
      <div className="flex gap-6">
        <h2 className="text-yellow-500 text-xl">LOGO</h2>
        <Link href="/" className="link">
          <li className={router.pathname === "/" ? "active" : ""}>Home</li>
        </Link>
        <Link href="/products/page/0" className="link">
          <li
            className={router.pathname.startsWith("/products") ? "active" : ""}
          >
            Products
          </li>
        </Link>
      </div>
      <SearchBar />
      <CartBar />
    </nav>
  );
};
