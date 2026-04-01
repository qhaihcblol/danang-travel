import type { TicketSummary } from "./ticket-summary";
// 2. Thêm thông tin vendor/operator
export interface TicketDetail extends TicketSummary {
  gallery: string[];
  bookingCount: number;
  location: string;
  operator?: string; // tên công ty/nhà cung cấp
  highlights: string[];
  packages: TicketPackage[];
  policies?: GeneralPolicy[];
  usageGuide?: string[];
}

// 3. Thêm availability tracking
export interface TicketPackage {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  available: boolean;
  stock?: number;
  maxPerOrder?: number; // giới hạn mua tối đa
  validUntil?: string; // hạn sử dụng
  benefits: string[];
  notIncluded?: string[];
  conditions?: string[];
  policies?: Policy[];
}

export interface Policy {
  type: "refund" | "reschedule" | "usage" | "age" | "other";
  title: string;
  content: string;
}

// ===== General Policy (áp dụng toàn vé)
export interface GeneralPolicy {
  title: string;
  content: string;
}