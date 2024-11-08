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

const Home = () => {
  return (
    <Layout>
			<main className="">
        <section className="w-full h-60 md:h-[calc(80vh-3.5rem)] relative overflow-hidden">
          <div className="absolute inset-0 aspect-[16/9]">
						<iframe 
							className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none -z-10" 
							src="https://www.youtube.com/embed/h0EZAFagOL8?modestbranding=1&autoplay=1&controls=0&wmode=transparent&hd=1&rel=0&autohide=1&showinfo=0&loop=1&playlist=h0EZAFagOL8&enablejsapi=1&mute=1" 
							frameborder="0" 
							allow="autoplay; fullscreen" 
							allowfullscreen>
    				</iframe>
            <div className="ml-8 mt-8 md:mt-24 lg:mt-40 inset-0 flex flex-col justify-center text-white">
              <h1 className="text-2xl md:text-6xl font-bold">Welcome to Transtar Academy</h1>
              <p className="text-xl md:text-2xl mb-4">Empowering minds, shaping futures</p>
							<div>
              	<Button size="lg" className="bg-primary text-primary-foreground p-8">Apply Now</Button>
							</div>
            </div>
          </div>
        </section>
        <section className="py-8 bg-muted/30 px-8 md:px-24">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Ethos</h2>
            <div className="space-y-12">
              {[
                {
                  title: "Excellence in Education",
                  description: "We strive for academic excellence and holistic development of our students.",
                  image: "https://res.cloudinary.com/dympk8yhv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730975242/students_in_class.jpg",
                },
                {
                  title: "Innovative Learning",
                  description: "Our cutting-edge curriculum and teaching methods prepare students for the future.",
                  image: "https://res.cloudinary.com/dympk8yhv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730975410/kindergarted.jpg",
                },
                {
                  title: "Community Engagement",
                  description: "We foster a strong sense of community and encourage active participation.",
                  image: "https://res.cloudinary.com/dympk8yhv/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1730975421/students_outside.jpg",
                },
              ].map((etho, index) => (
                <div>
                  <hr className=" border-gray-400 mb-4"/>
                  <div key={index} className={`flex flex-col md:flex-row gap-4 items-center`}>
                    <img
                      src={etho.image}
                      alt=""
                      width={200}
                      height={200}
                      className="w-full md:w-1/4 rounded-lg size-40 object-cover"
                    />
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">{etho.title}</h3>
                      <p className="text-muted-foreground">{etho.description}</p>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-8">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alex Johnson",
                  quote: "Transtar Academy has been a transformative experience. The supportive environment and challenging curriculum have helped me grow both academically and personally.",
                },
                {
                  name: "Samantha Lee",
                  quote: "I love the sense of community at Transtar. The teachers are incredibly dedicated and always available to help.",
                },
                {
                  name: "Michael Chen",
                  quote: "The innovative programs at Transtar have opened up so many opportunities for me. I feel well-prepared for my future studies and career.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted px-12">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Open House",
                  date: "June 15, 2024",
                  description: "Explore our campus and meet faculty members.",
                },
                {
                  title: "Science Fair",
                  date: "July 10, 2024",
                  description: "Annual showcase of student research projects.",
                },
                {
                  title: "Alumni Networking Event",
                  date: "August 5, 2024",
                  description: "Connect with Transtar graduates and expand your network.",
                },
              ].map((event, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-2">{event.date}</p>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home;
