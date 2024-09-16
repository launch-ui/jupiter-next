import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface TestimonialProps {
  name: string;
  username: string;
  text: string;
}

export default function Testimonial({
  name,
  username,
  text,
}: TestimonialProps) {
  return (
    <div className="p-6 border rounded-lg flex flex-col items-center text-center">
      <Avatar className="mb-4">
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">@{username}</p>
      <p className="mt-4">{text}</p>
    </div>
  );
}
