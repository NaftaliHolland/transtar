import {Button} from "@/components/ui/button"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
		<footer className="bg-primary text-primary-foreground mt-auto">
			<div className="container py-8 mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<p>1208 Kisumu</p>
						<p>Along Ahero-Miwani road</p>
						<p>Phone: (254) 721153952</p>
						<p>Email: info@trantaracademy.edu</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li><Link to="/" className="hover:underline">About Us</Link></li>
							<li><Link to="/" className="hover:underline">Admissions</Link></li>
							<li><Link to="/" className="hover:underline">Academics</Link></li>
							<li><Link to="/" className="hover:underline">Student Life</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
						<p className="mb-4">Subscribe to our newsletter for updates and news.</p>
						<form  className="flex gap-2">
							{/*<Input
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-primary-foreground text-primary"
							/>*/}
							<Button type="submit" variant="secondary">Subscribe</Button>
						</form>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p>&copy; 2024 Transtar Academy. All rights reserved.</p>
				</div>
			</div>
		</footer>
  )
}

export default Footer;
