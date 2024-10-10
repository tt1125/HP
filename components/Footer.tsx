import Link from "next/link";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="bg-black">
      <div className="w-auto flex justify-around">
        <div className="w-1/3 flex items-center justify-center">
          <button
            onClick={scrollToTop}
            className=" rounded-full bg-white h-16 flex items-center justify-center w-1/3"
          >
            TOPへ
          </button>
        </div>
        <div className="flex flex-col justify-around items-center w-1/3">
          <Link
            href="/businnes"
            className="mx-3 text-2xl text-white m-4 mt-32 footerLink   "
          >
            Business
          </Link>
          <Link
            href="/requitment"
            className="mx-3 text-2xl text-white m-4 footerLink "
          >
            Requitment
          </Link>
          <Link
            href="/news"
            className="mx-3 text-2xl text-white m-4 footerLink "
          >
            News
          </Link>
          <Link
            href="/about"
            className="mx-3 text-2xl text-white m-4 footerLink "
          >
            About
          </Link>
          <Link
            href="/contact"
            className="mx-3 text-2xl text-white m-4 mb-32 footerLink "
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3">
          <Link href="/" className="mx-3 text-2xl text-white m-4 footerLink ">
            Instagram
          </Link>
          <Link href="/" className="mx-3 text-2xl text-white m-4 footerLink ">
            X (Twitter)
          </Link>
          <Link href="/" className="mx-3 text-2xl text-white m-4 footerLink ">
            FaceBook
          </Link>
        </div>
      </div>
      <p className="text-white pl-24 pb-24">© 2024 xxx</p>
    </div>
  );
}
