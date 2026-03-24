import { hotelsMockData } from "./hotel-summary";
import { toursMockData } from "./tour";
import { ticketsMockData } from "./ticket";

// Get a mix of hotels, tours, and tickets for recently viewed section
export function getRecentlyViewedMock() {
  return [
    hotelsMockData[0], // Furama Resort
    toursMockData[3], // Tour Bà Nà Hills
    ticketsMockData[0], // Vé Bà Nà Hills
  ];
}
