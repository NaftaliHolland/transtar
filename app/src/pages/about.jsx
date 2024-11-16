import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AboutPage = () => {
  return (
		<Layout>
			<div className="flex-grow container mx-auto px-4 py-8">
				<h2 className="text-3xl font-bold mb-6">About Us</h2>
				<section className="mb-12">
					<h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
					<p className="text-lg mb-4">
						At Evergreen Academy, we are committed to nurturing curious minds, fostering creativity, and building a
						strong foundation for lifelong learning. Our mission is to provide a supportive and challenging environment
						where students can discover their potential and develop the skills needed to become responsible global
						citizens.
					</p>
					<img
						src="/placeholder.svg?height=300&width=800"
						alt="Students collaborating on a project"
						width={800}
						height={300}
						className="rounded-lg object-cover"
					/>
				</section>
				<section className="mb-12">
					<h3 className="text-2xl font-semibold mb-4">Our History</h3>
					<p className="text-lg mb-4">
						Founded in 1985, Evergreen Academy has a rich history of academic excellence and community engagement. What
						started as a small neighborhood school has grown into a respected institution, known for its innovative
						teaching methods and commitment to student success.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<img
							src="/placeholder.svg?height=200&width=400"
							alt="Evergreen Academy in its early years"
							width={400}
							height={200}
							className="rounded-lg object-cover"
						/>
						<img
							src="/placeholder.svg?height=200&width=400"
							alt="Evergreen Academy today"
							width={400}
							height={200}
							className="rounded-lg object-cover"
						/>
					</div>
				</section>
				<section className="mb-12">
					<h3 className="text-2xl font-semibold mb-6">Why Choose Evergreen Academy?</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<BookOpen className="mr-2" />
									Comprehensive Curriculum
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Our curriculum is designed to challenge and inspire students, covering a wide range of subjects and
									encouraging interdisciplinary learning.
								</CardDescription>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<Users className="mr-2" />
									Small Class Sizes
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									With an average of 15 students per class, we ensure that each student receives personalized attention
									and support.
								</CardDescription>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<GraduationCap className="mr-2" />
									Experienced Faculty
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Our teachers are passionate educators with advanced degrees and a commitment to ongoing professional
									development.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</section>
				<section>
					<h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
					<p className="text-lg mb-6">
						We invite you to become a part of the Evergreen Academy family. Schedule a visit to our campus and see
						firsthand how we're shaping the leaders of tomorrow.
					</p>
					<Button asChild>
						<Link href="/contact">Schedule a Visit</Link>
					</Button>
				</section>
			</div>
	</Layout>
	)
}

export default AboutPage;
