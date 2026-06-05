import Navbar from "@/components/layout/Navbar";
import EventCard from "@/components/events/EventCard";
import { mockEvents } from "@/lib/data"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Discover Upcoming <span className="text-primary"> Events </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            The ultimate platform to manage, discover, and register for exclusive club events.
          </p>
        </section>

        {/* Upcoming Events Section */}
        <section id="events" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {mockEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* About Our Club Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">About Our Club</h2>
            <div className="p-8 border rounded-lg bg-card shadow-sm text-left">
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Founded in 2021, our club started with a small group of passionate students who wanted to bridge the gap between classroom theory and real-world application. What began as informal weekend coding sessions in the library has grown into the university's premier technology and innovation community.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Today, we host weekly workshops, massive annual hackathons, and exclusive networking events with industry leaders. Our mission remains the same: to foster a collaborative environment where creativity meets technical excellence, empowering the next generation of builders and designers.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section - Changed to a striking Secondary Color Block */}
        <section id="contact" className="bg-secondary py-20 text-secondary-foreground">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Get in Touch</h2>
            <p className="opacity-90 mb-8">
              Have questions about an upcoming event or want to learn more about joining the club? Send us a message!
            </p>
            <form className="space-y-4 text-left bg-background p-6 rounded-lg shadow-sm">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input placeholder="Your Name" className="bg-background text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="Your Email Address" className="bg-background text-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="How can we help you?"
                />
              </div>
              <Button className="w-full mt-2">Send Message</Button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}