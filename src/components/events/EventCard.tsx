import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EventProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    club: string;
    description: string;
  };
}

export default function EventCard({ event }: EventProps) {
  return (
    <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.date} • {event.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/80">{event.description}</p>
      </CardContent>
      
      <CardFooter className="flex gap-3">
        <Link href={`/events/${event.id}`} className="w-1/2">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
        
        <Link href={`/register?eventId=${event.id}`} className="w-1/2">
          <Button className="w-full">Register</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}