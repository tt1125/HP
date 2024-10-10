import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className=" w-full flex aling-center justify-between bg-opacity-0 fixed">
      <Link href="/" className="text-6xl m-5 mx-14 hoverLine">
        Name
      </Link>
      <div className="flex items-center">
        <Link href="/businnes" className="mx-3 text-2xl hoverLine">
          Business
        </Link>
        <Link
          href="https://www.saga-u.ac.jp/"
          className="mx-3 text-2xl hoverLine"
        >
          Requitment
        </Link>
        <Link href="/news" className="mx-3 text-2xl hoverLine">
          News
        </Link>
        <Link href="/about" className="mx-3 text-2xl hoverLine">
          About
        </Link>
        <Link href="/contact" className="mx-3 text-2xl hoverLine">
          Contact
        </Link>
        <div className="w-6"></div>
        {/* <Menu /> */}
      </div>
    </div>
  );
}
