import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavLogo } from "@/components/nav/nav-logo";
import { NavCart } from "@/components/nav/nav-cart";
import { NavUser } from "@/components/nav/nav-user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoodHub - Food Delivery Service",
  description: "Order food from your favorite restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b sticky top-0 bg-background z-50">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <NavLogo />
            <div className="flex items-center gap-4">
              <NavCart />
              <NavUser />
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem-12rem)]">{children}</main>
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">FoodHub</h3>
                <p className="text-sm">
                  The best food delivery service in town.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {/* make about us clickable */}
                  <li>About Us</li>
                  <li>Partner With Us</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>Help Center</li>
                  <li>support@foodhub.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
              © {new Date().getFullYear()} FoodHub. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
