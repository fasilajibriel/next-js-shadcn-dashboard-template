import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
