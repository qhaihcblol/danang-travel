// Central export file for all mock data
// Organize mock data by feature for easy maintenance and scalability

export { hotelsMockData } from "./hotel-summary";
export type { HotelSummary, Hotel } from "@/types/hotel-summary";
export { hotelsDetailMockData, getHotelDetailMockById } from "./hotel-detail";
export type {
  HotelDetail,
  HotelDetailRoom,
  HotelPolicy,
  HotelContact,
} from "@/types/hotel-detail";
export { toursMockData } from "./tour";
export type { Tour } from "@/types/tour";
export { landmarksMockData } from "./landmark";
export type { Landmark } from "@/types/landmark";
export { ticketsMockData } from "./ticket";
export type { Ticket } from "@/types/ticket";
export { carouselImagesMockData } from "./carousel";
export type { CarouselImage } from "@/types/carousel";

// Combined data for convenience
export { getRecentlyViewedMock } from "./recently-viewed";

// Auth mock data and functions
export {
  mockLogin,
  mockRegister,
  mockForgotPassword,
  mockGetCurrentUser,
  mockLogout,
  mockUpdateUserProfile,
} from "./auth";
export type { User, AuthResponse } from "@/types/auth";
