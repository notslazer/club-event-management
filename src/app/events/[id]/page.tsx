import { mockEvents } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import RegistrationForm from "@/components/events/RegistrationForm";

interface PageProps {
  params: { id: string };
}

export default function EventDetailsPage({ params }: PageProps) {
  const event = mockEvents.find((e) => e.id === params.id);

  if (!event) notFound();

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link href="/#events" className="text-sm text-muted-foreground hover:underline">
          &larr; Back to Events
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Event Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-8">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              {event.club}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight mb-6">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y mb-6">
              <div>
                <h3 className="font-semibold mb-1 text-muted-foreground">Date & Time</h3>
                <p className="text-lg">{event.date}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-muted-foreground">Location</h3>
                <p className="text-lg">{event.location}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">About this Event</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <RegistrationForm eventName={event.title} />
          </div>
        </div>
      </div>
    </div>
  );
}