import type { Testimonial } from "../types";
import Jhon from "../assets/Jhon.png"
import Sarah from "../assets/Sarah.png"
import Emily from "../assets/Emily.png"

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jhon Lee",
    position: "Creative Director at Innovate Corp",
    image: Jhon,
    quote:
      "Game-changer for our project. They turned it into reality efficiently and proactively.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Tan",
    position: "Product Manager at Finovate",
    image: Sarah,
    quote:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Marketing Head at Tech Solutions",
    image: Emily,
    quote:
      "The collaboration was seamless and exceeded expectations. Their expertise made the project successful.",
    rating: 5,
  },
];
