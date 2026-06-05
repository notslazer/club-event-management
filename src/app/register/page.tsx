"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";

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

// 1. Define the exact 4 fields requested
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  registerNumber: z.string().min(5, { message: "Valid Register Number is required." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      registerNumber: "",
      phone: "",
      email: "",
    },
  });

  // 3. Handle Form Submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Registered via Standalone Page:", values);
    setIsSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Event Registration</h1>
        <p className="text-muted-foreground">Please fill out your details below.</p>
      </div>

      {isSubmitted ? (
        <div className="bg-primary/10 border-primary/20 border p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Registration Complete!</h2>
          <p className="text-muted-foreground mb-4">We have safely received your details.</p>
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </div>
      ) : (
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Harshadh" {...field} />
                    </FormControl>
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
                    <FormControl>
                      <Input placeholder="e.g. 24BCE1600" {...field} />
                    </FormControl>
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
                    <FormControl>
                      <Input placeholder="+91 92345 67890" {...field} />
                    </FormControl>
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
                    <FormControl>
                      <Input placeholder="harshadh@vitstudent.ac.in" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit Registration</Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}