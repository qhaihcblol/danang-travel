// Central export file for all mock data
// Organize mock data by feature for easy maintenance and scalability

import { hotelsSummaryMock as hotelsSummaryMockVi } from "./hotel-summary";
import { hotelsSummaryMock as hotelsSummaryMockJa } from "./hotel-summary-jp";
import { hotelsDetailMock as hotelsDetailMockVi } from "./hotel-detail";
import { hotelsDetailMock as hotelsDetailMockJa } from "./hotel-detail-jp";

export const getHotelsSummaryMock = (locale?: string) => {
  return locale === "ja" ? hotelsSummaryMockJa : hotelsSummaryMockVi;
};

export const getHotelsDetailMock = (locale?: string) => {
  return locale === "ja" ? hotelsDetailMockJa : hotelsDetailMockVi;
};

export { hotelsSummaryMockVi as hotelsSummaryMock, hotelsSummaryMockJa };
export type { HotelSummary, Hotel } from "@/types/hotel-summary";
export { hotelsDetailMockVi as hotelsDetailMock, hotelsDetailMockJa };
export type {
  HotelDetail,
  HotelPolicies,
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
