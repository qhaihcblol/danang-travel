import type { HotelDetail } from "@/types/hotel-detail";

export const hotelsDetailMockData: Record<string, HotelDetail> = {
  "hotel-1": {
    id: "hotel-1",
    name: "Furama Resort Da Nang",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    location: "Bai bien My Khe",
    stars: 5,
    rating: 4.8,
    reviewCount: 245,
    bookingCount: 1380,
    price: 2500000,
    type: "hotel",
    amenities: ["Pool", "Spa", "Restaurant", "Beach Access"],
    description: "Khu nghi duong 5 sao voi view bien dep va dich vu cao cap.",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&h=800&fit=crop",
    ],
    overview:
      "Khach san huong bien, thich hop cho gia dinh va cap doi voi day du tien ich nghi duong.",
    nearbyPlaces: ["My Khe Beach", "Dragon Bridge", "Han Market"],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Mien phi huy phong truoc 48 gio.",
      childrenAndBeds: "Tre duoi 6 tuoi mien phi khi ngu chung giuong.",
    },
    contact: {
      phone: "+84 236 3847 333",
      email: "booking@furama-danang.test",
      address: "105 Vo Nguyen Giap, Son Tra, Da Nang",
    },
    rooms: [
      {
        id: "room-1",
        name: "Deluxe Ocean View",
        bed: "1 King bed",
        capacity: 2,
        price: 2500000,
        quantity: 8,
        amenities: ["Bathtub", "Balcony", "Breakfast"],
      },
      {
        id: "room-2",
        name: "Family Suite",
        bed: "2 Queen beds",
        capacity: 4,
        price: 3600000,
        quantity: 4,
        amenities: ["Living area", "Sea view", "Mini bar"],
      },
    ],
  },
  "hotel-3": {
    id: "hotel-3",
    name: "Vinpearl Resort & Spa",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    location: "Ngoai dao Hon Mun",
    stars: 5,
    rating: 4.9,
    reviewCount: 312,
    bookingCount: 1725,
    price: 3200000,
    type: "hotel",
    amenities: ["Spa", "Water Sports", "Multiple Restaurants"],
    description:
      "Resort cao cap voi khong gian rieng tu va nhieu hoat dong bien.",
    gallery: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
    ],
    overview:
      "Diem den nghi duong sang trong danh cho khach muon trai nghiem dich vu premium.",
    nearbyPlaces: ["Private Beach", "Son Tra Peninsula", "City Center Ferry"],
    policies: {
      checkIn: "15:00",
      checkOut: "12:00",
      cancellation: "Mien phi huy phong truoc 72 gio.",
      childrenAndBeds: "Tre duoi 12 tuoi phu thu tuy theo loai phong.",
    },
    contact: {
      phone: "+84 236 3988 888",
      email: "reservation@vinpearl-resort.test",
      address: "Hon Mun area, Da Nang",
    },
    rooms: [
      {
        id: "room-3",
        name: "Premier Ocean Room",
        bed: "1 King bed",
        capacity: 2,
        price: 3200000,
        quantity: 10,
        amenities: ["Ocean view", "Smart TV", "Work desk"],
      },
      {
        id: "room-4",
        name: "Two Bedroom Villa",
        bed: "2 King beds",
        capacity: 5,
        price: 6200000,
        quantity: 3,
        amenities: ["Private pool", "Kitchen", "Butler service"],
      },
    ],
  },
};

export function getHotelDetailMockById(id: string): HotelDetail | null {
  return hotelsDetailMockData[id] ?? null;
}
