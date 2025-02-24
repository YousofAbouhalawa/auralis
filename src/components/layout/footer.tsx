import { FC } from "react";
import Logo from "../icons/logo";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-accent-light text-center py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Navigation</h3>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li>
                <Link href="/shop" className="hover:text-accent transition">Shop</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition">About</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Need Help?</h3>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li>
                <Link href="/support" className="hover:text-accent transition">Support</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition">FAQ</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-accent transition">Returns</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-accent transition">Shipping Info</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Policies</h3>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-accent transition">Refund Policy</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-accent transition">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li>
                <Link href="https://www.facebook.com" className="hover:text-accent transition" target="_blank">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com" className="hover:text-accent transition" target="_blank">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com" className="hover:text-accent transition" target="_blank">Twitter</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com" className="hover:text-accent transition" target="_blank">YouTube</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
          <Logo size={120} /> 
          <span>&copy; {new Date().getFullYear()} Auralis. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;