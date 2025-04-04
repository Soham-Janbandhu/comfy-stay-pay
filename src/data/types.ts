
export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
  size: number; // in square meters or square feet
  bedType: string;
  featured: boolean;
  available: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  roomName: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string; // ISO date string
  checkOut: string; // ISO date string
  adults: number;
  children: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: string; // ISO date string
}

export interface RoomFilter {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  minPrice: number;
  maxPrice: number;
}
