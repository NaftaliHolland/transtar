import { Link } from "react-router-dom"
import Logo from "@/components/logo"

const Header = () => {
  return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 px-12 py-2">
        <div className="hidden md:flex h-14 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold text-3xl">Trantar Academy</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              Academics
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              Admissions
            </Link>
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
  )
}

export default Header;
