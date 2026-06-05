"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Updated Schema specifically for the new requirements
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  registerNumber: z.string().min(5, { message: "Valid Register Number is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

export default function RegistrationForm({ eventName }: { eventName: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      registerNumber: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`Registered for ${eventName}:`, values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary/10 border-primary/20 border p-6 rounded-lg text-center mt-8">
        <h3 className="text-xl font-semibold text-primary mb-2">Registration Complete!</h3>
        <p className="text-muted-foreground">You are officially on the list for {eventName}.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg p-6 shadow-sm mt-8">
      <h3 className="text-2xl font-bold mb-6">Register for this Event</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="registerNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Register Number</FormLabel>
                <FormControl><Input placeholder="e.g. REG2024001" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl><Input placeholder="jane@university.edu" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input placeholder="+1 234 567 8900" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4">Secure My Spot</Button>
        </form>
      </Form>
    </div>
  );
}