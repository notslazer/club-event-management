import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle"; // Assuming you added this earlier!

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Club.
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#events" className="transition-colors hover:text-foreground/80">
            Upcoming Events
          </Link>
          <Link href="/#about" className="transition-colors hover:text-foreground/80">
            About Our Club
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}