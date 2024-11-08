import {useState} from "react"
import { Link } from "react-router-dom"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
		<header className="sticky top-0 z-50 w-full border-b bg-primary px-3 md:px-12 py-2">
        <div className="h-14 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-4 w-4"/>
            <span className="hidden lg:block font-bold text-white text-3xl">Trantar Academy</span>
          </Link>
          <nav className="hidden lg:flex ml-auto flex gap-4 sm:gap-6">
            <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
              Academics
            </Link>
            <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
              Admissions
            </Link>
            <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="lg:hidden ml-auto">
            <Button variant="outline" size="icon" onClick={(e) => {setIsOpen(!isOpen)}}>
              {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu size={48} />
                )}
            </Button>
          </div>
        </div>
         {isOpen && (
           <div className="lg:hidden">
            <nav className="flex flex-col gap-4 sm:gap-6 items-end">
              <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
                Academics
              </Link>
              <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
                Admissions
              </Link>
              <Link to="/" className="text-md text-white font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
           </div>
         )}
      </header>
  )
}

export default Header;
