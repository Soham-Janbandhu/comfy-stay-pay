
import { Room, Booking } from './types';

export const rooms: Room[] = [
  {
    id: "1",
    name: "Deluxe King Room",
    description: "Our Deluxe King Room offers a spacious and elegant retreat with a comfortable king-sized bed, luxury linens, and a stunning view of the city skyline. The modern bathroom features premium amenities, a deep soaking tub, and a separate rain shower. Perfect for couples or business travelers seeking comfort and style.",
    shortDescription: "Spacious room with king-sized bed and city view",
    price: 199,
    capacity: 2,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: ["Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Minibar", "Coffee maker", "Safe", "Bathrobe"],
    size: 35,
    bedType: "King",
    featured: true,
    available: true
  },
  {
    id: "2",
    name: "Premium Ocean Suite",
    description: "Indulge in luxury with our Premium Ocean Suite featuring panoramic ocean views, a separate living area, and a private balcony. The suite includes a king-sized bed with premium linens, a spacious bathroom with a jacuzzi tub, and exclusive access to our executive lounge. Perfect for those seeking a truly memorable stay.",
    shortDescription: "Luxurious suite with ocean view and private balcony",
    price: 349,
    capacity: 2,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: ["Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Private balcony", "Minibar", "Coffee maker", "Safe", "Bathrobe", "Executive lounge access"],
    size: 55,
    bedType: "King",
    featured: true,
    available: true
  },
  {
    id: "3",
    name: "Family Room",
    description: "Our spacious Family Room is designed for comfort and convenience, featuring two queen beds and a pull-out sofa. Perfect for families, the room includes a small kitchenette, a dining area, and a large bathroom with a shower and tub combination. Enjoy quality time together in this homey and welcoming space.",
    shortDescription: "Spacious room ideal for families with two queen beds",
    price: 249,
    capacity: 4,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: ["Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Kitchenette", "Coffee maker", "Safe", "Extra beds available"],
    size: 45,
    bedType: "Two Queens",
    featured: false,
    available: true
  },
  {
    id: "4",
    name: "Standard Twin Room",
    description: "Our comfortable Standard Twin Room features two single beds with quality linens, a work desk, and a modern bathroom with a shower. Designed with both business and leisure travelers in mind, this room offers all the essentials for a pleasant stay at a great value.",
    shortDescription: "Cozy room with twin beds, perfect for friends or colleagues",
    price: 149,
    capacity: 2,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: ["Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Work desk", "Coffee maker", "Safe"],
    size: 25,
    bedType: "Twin",
    featured: false,
    available: true
  },
  {
    id: "5",
    name: "Executive Business Suite",
    description: "Designed for the discerning business traveler, our Executive Business Suite offers a separate living and working area, a comfortable king-sized bed, and a luxurious bathroom. Enjoy premium amenities, a fully-stocked minibar, and access to our business center and executive lounge.",
    shortDescription: "Sophisticated suite with separate working area",
    price: 299,
    capacity: 2,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    amenities: ["Free Wi-Fi", "Flat-screen TV", "Air conditioning", "Work desk", "Minibar", "Coffee maker", "Safe", "Bathrobe", "Business center access", "Executive lounge access"],
    size: 50,
    bedType: "King",
    featured: true,
    available: true
  }
];

export const bookings: Booking[] = [
  {
    id: "1",
    roomId: "1",
    roomName: "Deluxe King Room",
    guestName: "John Smith",
    guestEmail: "john.smith@example.com",
    guestPhone: "555-123-4567",
    checkIn: "2025-04-10T14:00:00Z",
    checkOut: "2025-04-15T11:00:00Z",
    adults: 2,
    children: 0,
    totalPrice: 995,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2025-03-25T09:45:00Z"
  },
  {
    id: "2",
    roomId: "3",
    roomName: "Family Room",
    guestName: "Sarah Johnson",
    guestEmail: "sarah.johnson@example.com",
    guestPhone: "555-987-6543",
    checkIn: "2025-04-12T15:00:00Z",
    checkOut: "2025-04-16T10:00:00Z",
    adults: 2,
    children: 2,
    totalPrice: 996,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2025-03-28T14:30:00Z"
  },
  {
    id: "3",
    roomId: "2",
    roomName: "Premium Ocean Suite",
    guestName: "David Wilson",
    guestEmail: "david.wilson@example.com",
    guestPhone: "555-456-7890",
    checkIn: "2025-04-05T13:00:00Z",
    checkOut: "2025-04-08T12:00:00Z",
    adults: 2,
    children: 0,
    totalPrice: 1047,
    status: "completed",
    paymentStatus: "paid",
    createdAt: "2025-03-15T11:20:00Z"
  },
  {
    id: "4",
    roomId: "4",
    roomName: "Standard Twin Room",
    guestName: "Jennifer Brown",
    guestEmail: "jennifer.brown@example.com",
    guestPhone: "555-789-0123",
    checkIn: "2025-04-20T14:00:00Z",
    checkOut: "2025-04-22T11:00:00Z",
    adults: 2,
    children: 0,
    totalPrice: 298,
    status: "pending",
    paymentStatus: "pending",
    createdAt: "2025-04-01T16:45:00Z"
  }
];
