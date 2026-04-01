// Central export file for all mock data
// Organize mock data by feature for easy maintenance and scalability

import { hotelsSummaryMock as hotelsSummaryMockVi } from "./hotel-summary";
import { hotelsSummaryMock as hotelsSummaryMockJa } from "./hotel-summary-jp";
import { hotelsDetailMock as hotelsDetailMockVi } from "./hotel-detail";
import { hotelsDetailMock as hotelsDetailMockJa } from "./hotel-detail-jp";
import { ticketsSummaryMock as ticketsSummaryMockVi } from "./ticket-summary";
import { ticketsSummaryMock as ticketsSummaryMockJa } from "./ticket-summary-jp";
import { ticketsDetailMock as ticketsDetailMockVi } from "./ticket-detail";
import { ticketsDetailMock as ticketsDetailMockJa } from "./ticket-detail-jp";

export const getHotelsSummaryMock = (locale?: string) => {
  return locale === "ja" ? hotelsSummaryMockJa : hotelsSummaryMockVi;
};

export const getHotelsDetailMock = (locale?: string) => {
  return locale === "ja" ? hotelsDetailMockJa : hotelsDetailMockVi;
};

export const getTicketsSummaryMock = (locale?: string) => {
  return locale === "ja" ? ticketsSummaryMockJa : ticketsSummaryMockVi;
};

export const getTicketsDetailMock = (locale?: string) => {
  return locale === "ja" ? ticketsDetailMockJa : ticketsDetailMockVi;
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
export {
  ticketsSummaryMockVi as ticketsSummaryMock,
  ticketsSummaryMockJa,
  ticketsSummaryMockVi as ticketsMockData,
};
export type { TicketSummary } from "@/types/ticket-summary";
export { ticketsDetailMockVi as ticketsDetailMock, ticketsDetailMockJa };
export type {
  TicketDetail,
  TicketPackage,
  Policy,
  GeneralPolicy,
} from "@/types/ticket-detail";
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
