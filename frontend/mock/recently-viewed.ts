import { hotelsSummaryMock } from "./hotel-summary";
import { toursMockData } from "./tour";
import { ticketsMockData } from "./ticket-summary";

// Get a mix of hotels, tours, and tickets for recently viewed section
export function getRecentlyViewedMock() {
  const featuredTicket = ticketsMockData[0];

  return [
    hotelsSummaryMock[0],
    toursMockData[3], // Tour Bà Nà Hills
    {
      id: featuredTicket.id,
      name: featuredTicket.title,
      image: featuredTicket.thumbnail,
      type: "ticket" as const,
      rating: featuredTicket.rating,
      reviewCount: featuredTicket.reviewCount,
      price: featuredTicket.priceFrom,
    }, // Vé Bà Nà Hills
  ];
}
