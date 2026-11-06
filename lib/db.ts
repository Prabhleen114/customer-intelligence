import { OrderStatus, Role } from "./prisma-types";

// In-Memory store replicating Prisma operations for AI Studio environment
interface StoreAddress {
  id: string;
  name: string;
  phone: string;
  city: string;
  state: string;
  isDefault?: boolean;
  createdAt: Date;
}

interface StoreOrder {
  id: string;
  customerId: string;
  total: number; // in paise
  status: OrderStatus;
  dispatchedAt: Date | null;
  createdAt: Date;
}

interface StoreEvent {
  id: string;
  sessionId: string | null;
  userId: string | null;
  eventName: string;
  productId: string | null;
  metadata: any;
  createdAt: Date;
}

interface StoreCustomerFlag {
  userId: string;
  flag: string;
  evidence: string[];
  resolved: boolean;
  firstDetectedAt: Date;
  lastUpdatedAt: Date;
}

interface StoreUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: Date;
  addresses: StoreAddress[];
}

const now = new Date();
const daysAgo = (d: number, hours = 0) =>
  new Date(now.getTime() - (d * 24 * 60 + hours * 60) * 60 * 1000);

// Initialize initial seed data
const initialUsers: StoreUser[] = [
  {
    id: "user_internal_prabhleen",
    name: "Prabhleen Kaur",
    email: "prabhleen.kaur1306@gmail.com",
    role: Role.ADMIN,
    createdAt: daysAgo(120),
    addresses: [
      {
        id: "addr_1",
        name: "Prabhleen Kaur",
        phone: "+91 98765 43210",
        city: "New Delhi",
        state: "Delhi",
        isDefault: true,
        createdAt: daysAgo(120),
      },
    ],
  },
  {
    id: "user_internal_aryan",
    name: "Aryan",
    email: "aryann1217@gmail.com",
    role: Role.ADMIN,
    createdAt: daysAgo(120),
    addresses: [
      {
        id: "addr_2",
        name: "Aryan",
        phone: "+91 98111 22334",
        city: "New Delhi",
        state: "Delhi",
        isDefault: true,
        createdAt: daysAgo(120),
      },
    ],
  },
  {
    id: "user_ananya_01",
    name: "Ananya Sharma",
    email: "ananya.candleworks@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(18),
    addresses: [
      {
        id: "addr_ananya",
        name: "Ananya Sharma",
        phone: "+91 98201 44552",
        city: "Mumbai",
        state: "Maharashtra",
        isDefault: true,
        createdAt: daysAgo(18),
      },
    ],
  },
  {
    id: "user_rohit_02",
    name: "Rohit Mehra",
    email: "rohit.crafts.delhi@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(25),
    addresses: [
      {
        id: "addr_rohit",
        name: "Rohit Mehra",
        phone: "+91 98103 88129",
        city: "Delhi",
        state: "Delhi",
        isDefault: true,
        createdAt: daysAgo(25),
      },
    ],
  },
  {
    id: "user_neha_03",
    name: "Neha Kapoor",
    email: "neha.botanicals@outlook.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(35),
    addresses: [
      {
        id: "addr_neha",
        name: "Neha Kapoor",
        phone: "+91 99802 77119",
        city: "Bengaluru",
        state: "Karnataka",
        isDefault: true,
        createdAt: daysAgo(35),
      },
    ],
  },
  {
    id: "user_vikram_04",
    name: "Vikram Singhania",
    email: "vikram.aroma@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(14),
    addresses: [
      {
        id: "addr_vikram",
        name: "Vikram Singhania",
        phone: "+91 94140 22314",
        city: "Jaipur",
        state: "Rajasthan",
        isDefault: true,
        createdAt: daysAgo(14),
      },
    ],
  },
  {
    id: "user_priya_05",
    name: "Priya Patel",
    email: "priya.organics@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(12),
    addresses: [
      {
        id: "addr_priya",
        name: "Priya Patel",
        phone: "+91 98980 55432",
        city: "Ahmedabad",
        state: "Gujarat",
        isDefault: true,
        createdAt: daysAgo(12),
      },
    ],
  },
  {
    id: "user_siddharth_06",
    name: "Siddharth Verma",
    email: "siddharth.studio@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(65),
    addresses: [
      {
        id: "addr_sid",
        name: "Siddharth Verma",
        phone: "+91 97654 32190",
        city: "Pune",
        state: "Maharashtra",
        isDefault: true,
        createdAt: daysAgo(65),
      },
    ],
  },
  {
    id: "user_tanvi_07",
    name: "Tanvi Deshmukh",
    email: "tanvi.scents@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(20),
    addresses: [
      {
        id: "addr_tanvi",
        name: "Tanvi Deshmukh",
        phone: "+91 99490 88219",
        city: "Hyderabad",
        state: "Telangana",
        isDefault: true,
        createdAt: daysAgo(20),
      },
    ],
  },
  {
    id: "user_kabir_08",
    name: "Kabir Oberoi",
    email: "kabir.creations@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(40),
    addresses: [
      {
        id: "addr_kabir",
        name: "Kabir Oberoi",
        phone: "+91 98310 11990",
        city: "Kolkata",
        state: "West Bengal",
        isDefault: true,
        createdAt: daysAgo(40),
      },
    ],
  },
  {
    id: "user_pooja_09",
    name: "Pooja Hegde",
    email: "pooja.handmade@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(80),
    addresses: [
      {
        id: "addr_pooja",
        name: "Pooja Hegde",
        phone: "+91 94440 99881",
        city: "Chennai",
        state: "Tamil Nadu",
        isDefault: true,
        createdAt: daysAgo(80),
      },
    ],
  },
  {
    id: "user_rajesh_10",
    name: "Rajesh Gupta",
    email: "rajesh.traders@yahoo.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(110),
    addresses: [
      {
        id: "addr_rajesh",
        name: "Rajesh Gupta",
        phone: "+91 98250 33441",
        city: "Surat",
        state: "Gujarat",
        isDefault: true,
        createdAt: daysAgo(110),
      },
    ],
  },
  {
    id: "user_meera_11",
    name: "Meera Nair",
    email: "meera.artisans@gmail.com",
    role: Role.CUSTOMER,
    createdAt: daysAgo(5),
    addresses: [
      {
        id: "addr_meera",
        name: "Meera Nair",
        phone: "+91 94470 66221",
        city: "Kochi",
        state: "Kerala",
        isDefault: true,
        createdAt: daysAgo(5),
      },
    ],
  },
];

const initialOrders: StoreOrder[] = [
  // Siddharth placed an order 32 days ago, none since (reorder due)
  {
    id: "ord_sid_1",
    customerId: "user_siddharth_06",
    total: 1450000, // ₹14,500
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(30),
    createdAt: daysAgo(32),
  },
  // Kabir placed an order 54 hours ago (2.25 days), still in PROCESSING! (supplier dispatch risk)
  {
    id: "ord_kabir_delayed",
    customerId: "user_kabir_08",
    total: 2850000, // ₹28,500
    status: OrderStatus.PROCESSING,
    dispatchedAt: null,
    createdAt: daysAgo(2, 6), // 54 hours ago
  },
  // Pooja has 3 orders (Repeat customer)
  {
    id: "ord_pooja_1",
    customerId: "user_pooja_09",
    total: 920000, // ₹9,200
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(70),
    createdAt: daysAgo(72),
  },
  {
    id: "ord_pooja_2",
    customerId: "user_pooja_09",
    total: 1150000, // ₹11,500
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(42),
    createdAt: daysAgo(44),
  },
  {
    id: "ord_pooja_3",
    customerId: "user_pooja_09",
    total: 840000, // ₹8,400
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(8),
    createdAt: daysAgo(10),
  },
  // Rajesh Gupta has 4 bulk orders (High value)
  {
    id: "ord_rajesh_1",
    customerId: "user_rajesh_10",
    total: 2400000,
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(95),
    createdAt: daysAgo(98),
  },
  {
    id: "ord_rajesh_2",
    customerId: "user_rajesh_10",
    total: 3100000,
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(55),
    createdAt: daysAgo(58),
  },
  {
    id: "ord_rajesh_3",
    customerId: "user_rajesh_10",
    total: 2900000,
    status: OrderStatus.DELIVERED,
    dispatchedAt: daysAgo(15),
    createdAt: daysAgo(18),
  },
];

const initialEvents: StoreEvent[] = [
  // Ananya: high intent PDP & add to cart in last 7 days, 0 orders
  {
    id: "evt_1",
    sessionId: "sess_ananya_01",
    userId: "user_ananya_01",
    eventName: "tier_pricing_view",
    productId: "prod_soy_464",
    metadata: { productName: "Soy Wax Soya 464 (Pure Golden Wax Flakes)", category: "Candle Waxes" },
    createdAt: daysAgo(3),
  },
  {
    id: "evt_2",
    sessionId: "sess_ananya_01",
    userId: "user_ananya_01",
    eventName: "add_to_cart",
    productId: "prod_soy_464",
    metadata: { productName: "Soy Wax Soya 464 (Pure Golden Wax Flakes)", quantity: 25 },
    createdAt: daysAgo(3, 1),
  },
  {
    id: "evt_3",
    sessionId: "sess_ananya_02",
    userId: "user_ananya_01",
    eventName: "tier_pricing_view",
    productId: "prod_lavender_oil",
    metadata: { productName: "French Lavender Essential Oil (IFRA Grade)", category: "Fragrance Oils" },
    createdAt: daysAgo(1),
  },

  // Rohit: trust hesitant (COA clicks in last 14 days)
  {
    id: "evt_4",
    sessionId: "sess_rohit_01",
    userId: "user_rohit_02",
    eventName: "coa_click",
    productId: "prod_lavender_oil",
    metadata: {
      productName: "French Lavender Essential Oil (IFRA Grade)",
      docType: "Certificate of Analysis (COA) / IFRA Batch Test",
      category: "Fragrance Oils",
    },
    createdAt: daysAgo(5),
  },
  {
    id: "evt_5",
    sessionId: "sess_rohit_01",
    userId: "user_rohit_02",
    eventName: "coa_click",
    productId: "prod_vanilla_oil",
    metadata: {
      productName: "Madagascar Vanilla Fragrance Oil (Pure Grade)",
      docType: "IFRA Compliance Lab Certificate",
      category: "Fragrance Oils",
    },
    createdAt: daysAgo(2),
  },

  // Neha: tier confused (multiple quantity steppers adjusting bulk slabs)
  {
    id: "evt_6",
    sessionId: "sess_neha_01",
    userId: "user_neha_03",
    eventName: "quantity_change",
    productId: "prod_soy_464",
    metadata: { previousQty: 5, newQty: 15, slabName: "12-51 units tier", productName: "Soy Wax Soya 464" },
    createdAt: daysAgo(4),
  },
  {
    id: "evt_7",
    sessionId: "sess_neha_01",
    userId: "user_neha_03",
    eventName: "quantity_change",
    productId: "prod_soy_464",
    metadata: { previousQty: 15, newQty: 60, slabName: "52+ bulk units tier", productName: "Soy Wax Soya 464" },
    createdAt: daysAgo(4, 1),
  },
  {
    id: "evt_8",
    sessionId: "sess_neha_01",
    userId: "user_neha_03",
    eventName: "quantity_change",
    productId: "prod_soy_464",
    metadata: { previousQty: 60, newQty: 25, slabName: "12-51 units tier", productName: "Soy Wax Soya 464" },
    createdAt: daysAgo(3),
  },

  // Vikram: shipping friction (< ₹300 to free shipping threshold of ₹2,000)
  {
    id: "evt_9",
    sessionId: "sess_vikram_01",
    userId: "user_vikram_04",
    eventName: "shipping_threshold_view",
    productId: null,
    metadata: {
      cart_value: 1820,
      amount_to_free_shipping: 180,
      threshold: 2000,
      productName: "Beeswax Pellets (Cosmetic / Candle Grade 100% Pure)",
    },
    createdAt: daysAgo(2),
  },

  // Priya: GST checkout block (abandoned at GST field)
  {
    id: "evt_10",
    sessionId: "sess_priya_01",
    userId: "user_priya_05",
    eventName: "gst_field_focus",
    productId: null,
    metadata: { field: "gstin_number", cartValue: 6500 },
    createdAt: daysAgo(4),
  },
  {
    id: "evt_11",
    sessionId: "sess_priya_01",
    userId: "user_priya_05",
    eventName: "gst_field_abandon",
    productId: null,
    metadata: { field: "gstin_number", reason: "tax_invoice_help" },
    createdAt: daysAgo(4, 1),
  },

  // Tanvi: WhatsApp diverted
  {
    id: "evt_12",
    sessionId: "sess_tanvi_01",
    userId: "user_tanvi_07",
    eventName: "whatsapp_click",
    productId: "prod_vanilla_oil",
    metadata: {
      inferred_intent: "bulk_fragrance_quotation",
      product_name: "Madagascar Vanilla Fragrance Oil (Pure Grade)",
      time_on_page_seconds: 145,
      max_scroll_depth_pct: 88,
    },
    createdAt: daysAgo(3),
  },

  // Anonymous visitor sessions for Funnel Drop-off analytics
  {
    id: "evt_anon_1",
    sessionId: "sess_anon_901",
    userId: null,
    eventName: "tier_pricing_view",
    productId: "prod_soy_464",
    metadata: { productName: "Soy Wax Soya 464", tier: "50kg+ Commercial Slab" },
    createdAt: daysAgo(1, 2),
  },
  {
    id: "evt_anon_2",
    sessionId: "sess_anon_901",
    userId: null,
    eventName: "coa_click",
    productId: "prod_soy_464",
    metadata: { productName: "Soy Wax Soya 464", docType: "COA Analysis" },
    createdAt: daysAgo(1, 1),
  },
  {
    id: "evt_anon_3",
    sessionId: "sess_anon_902",
    userId: null,
    eventName: "add_to_cart",
    productId: "prod_jars",
    metadata: { productName: "Amber Glass Candle Jars 200ml (Set of 12)", qty: 2 },
    createdAt: daysAgo(0, 18),
  },
  {
    id: "evt_anon_4",
    sessionId: "sess_anon_902",
    userId: null,
    eventName: "shipping_threshold_view",
    productId: "prod_jars",
    metadata: { cart_value: 1750, amount_to_free_shipping: 250 },
    createdAt: daysAgo(0, 17),
  },
  {
    id: "evt_anon_5",
    sessionId: "sess_anon_903",
    userId: null,
    eventName: "begin_checkout",
    productId: null,
    metadata: { cart_total: 4200, itemsCount: 3, productName: "Cotton Core Braided Candle Wicks" },
    createdAt: daysAgo(0, 10),
  },
  {
    id: "evt_anon_6",
    sessionId: "sess_anon_903",
    userId: null,
    eventName: "checkout_step_abandon",
    productId: null,
    metadata: { step: "payment_method", errorType: "UPI_verification_delayed" },
    createdAt: daysAgo(0, 9),
  },
  {
    id: "evt_anon_7",
    sessionId: "sess_anon_904",
    userId: null,
    eventName: "whatsapp_click",
    productId: "prod_lavender_oil",
    metadata: {
      product_name: "French Lavender Essential Oil (IFRA Grade)",
      inferred_intent: "cosmetic_formulation_advice",
      time_on_page_seconds: 210,
      max_scroll_depth_pct: 95,
    },
    createdAt: daysAgo(0, 4),
  },
];

const initialFlags: StoreCustomerFlag[] = [
  {
    userId: "user_ananya_01",
    flag: "high_intent_no_purchase",
    evidence: [
      "Viewed wholesale tier pricing / added to cart 2 times in the last 7 days",
      "Zero completed orders placed in the last 7 days",
      `Most recent interaction: ${daysAgo(1).toISOString().split("T")[0]}`,
    ],
    resolved: false,
    firstDetectedAt: daysAgo(3),
    lastUpdatedAt: daysAgo(1),
  },
  {
    userId: "user_rohit_02",
    flag: "trust_hesitant",
    evidence: [
      "Inspected COA / IFRA lab compliance documents 2 times in the last 14 days",
      "Zero completed orders placed in the last 14 days",
      "Indicates quality verification interest without purchase commitment",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(5),
    lastUpdatedAt: daysAgo(2),
  },
  {
    userId: "user_neha_03",
    flag: "tier_confused",
    evidence: [
      "Adjusted item quantities 3 times across tier thresholds in the last 7 days",
      "Did not proceed to completed purchase",
      "Buyer likely evaluating custom volume discounts or MOQ pricing slabs",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(4),
    lastUpdatedAt: daysAgo(3),
  },
  {
    userId: "user_vikram_04",
    flag: "shipping_friction",
    evidence: [
      "Viewed Free Shipping threshold with only ₹180 remaining to qualify",
      "Cart total ₹1,820 abandoned without purchase",
      "High probability of conversion with a low-cost add-on recommendation",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(2),
    lastUpdatedAt: daysAgo(2),
  },
  {
    userId: "user_priya_05",
    flag: "gst_checkout_block",
    evidence: [
      "Focused or interacted with the GSTIN / Business Invoicing field in checkout",
      "Abandoned checkout flow without completing payment",
      "Likely needs assistance with GSTIN verification or B2B invoicing credit",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(4),
    lastUpdatedAt: daysAgo(4),
  },
  {
    userId: "user_siddharth_06",
    flag: "reorder_due",
    evidence: [
      "Last order of ₹14,500 placed 32 days ago",
      "Zero reorders placed in the last 14 days",
      "Standard craft maker formulation reorder window is 21–35 days",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(10),
    lastUpdatedAt: daysAgo(2),
  },
  {
    userId: "user_tanvi_07",
    flag: "whatsapp_diverted",
    evidence: [
      "Diverted to WhatsApp with intent: bulk fragrance quotation",
      "Dwell time before clicking: 145s, scroll depth: 88%",
      "Source product/context: Madagascar Vanilla Fragrance Oil (Pure Grade)",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(3),
    lastUpdatedAt: daysAgo(3),
  },
  {
    userId: "user_kabir_08",
    flag: "supplier_dispatch_risk",
    evidence: [
      "Order #ord_kabir delayed in PROCESSING status for 54 hours without dispatch",
      "Exceeds standard 48-hour dispatch SLA window",
      "Customer delivery satisfaction at risk — supplier check required",
    ],
    resolved: false,
    firstDetectedAt: daysAgo(0, 6),
    lastUpdatedAt: daysAgo(0, 1),
  },
];

// Persistent state across requests in current node instance
const store = {
  users: [...initialUsers],
  orders: [...initialOrders],
  events: [...initialEvents],
  flags: [...initialFlags],
};

// Helpers for matching Prisma nested queries
function matchesDate(val: Date, filter: any): boolean {
  if (!filter) return true;
  const time = val.getTime();
  if (filter.gte && time < new Date(filter.gte).getTime()) return false;
  if (filter.lte && time > new Date(filter.lte).getTime()) return false;
  if (filter.gt && time <= new Date(filter.gt).getTime()) return false;
  if (filter.lt && time >= new Date(filter.lt).getTime()) return false;
  return true;
}

export const prisma = {
  user: {
    findMany: async (args: any = {}) => {
      let results = [...store.users];

      if (args.where) {
        const w = args.where;
        if (w.role) results = results.filter((u) => u.role === w.role);
        if (w.id?.notIn) {
          const notInSet = new Set(w.id.notIn);
          results = results.filter((u) => !notInSet.has(u.id));
        }
        if (w.id?.in) {
          const inSet = new Set(w.id.in);
          results = results.filter((u) => inSet.has(u.id));
        }
        if (w.createdAt) {
          results = results.filter((u) => matchesDate(u.createdAt, w.createdAt));
        }

        // OR search
        if (w.OR && Array.isArray(w.OR)) {
          results = results.filter((u) => {
            return w.OR.some((cond: any) => {
              if (cond.email?.equals) {
                return u.email.toLowerCase() === cond.email.equals.toLowerCase();
              }
              if (cond.email?.contains) {
                return u.email.toLowerCase().includes(cond.email.contains.toLowerCase());
              }
              if (cond.name?.contains) {
                return u.name.toLowerCase().includes(cond.name.contains.toLowerCase());
              }
              if (cond.addresses?.some) {
                const sub = cond.addresses.some;
                return u.addresses.some((a) => {
                  if (sub.phone?.contains) return a.phone.includes(sub.phone.contains);
                  if (sub.OR) {
                    return sub.OR.some((orC: any) => {
                      if (orC.name?.contains) {
                        return a.name.toLowerCase().includes(orC.name.contains.toLowerCase());
                      }
                      if (orC.phone?.contains) return a.phone.includes(orC.phone.contains);
                      return false;
                    });
                  }
                  return false;
                });
              }
              return false;
            });
          });
        }

        // Nested events condition (some / none)
        if (w.events?.some) {
          const someCond = w.events.some;
          results = results.filter((u) => {
            const userEvents = store.events.filter((e) => e.userId === u.id);
            return userEvents.some((e) => {
              if (someCond.eventName?.in && !someCond.eventName.in.includes(e.eventName)) return false;
              if (typeof someCond.eventName === "string" && e.eventName !== someCond.eventName) return false;
              if (someCond.createdAt && !matchesDate(e.createdAt, someCond.createdAt)) return false;
              return true;
            });
          });
        }

        // Nested orders condition (some / none)
        if (w.orders?.none) {
          const noneCond = w.orders.none;
          results = results.filter((u) => {
            const userOrders = store.orders.filter((o) => o.customerId === u.id);
            const matchesAny = userOrders.some((o) => {
              if (noneCond.status?.in && !noneCond.status.in.includes(o.status)) return false;
              if (noneCond.createdAt && !matchesDate(o.createdAt, noneCond.createdAt)) return false;
              return true;
            });
            return !matchesAny;
          });
        }

        if (w.orders?.some) {
          const someCond = w.orders.some;
          results = results.filter((u) => {
            const userOrders = store.orders.filter((o) => o.customerId === u.id);
            return userOrders.some((o) => {
              if (someCond.status?.in && !someCond.status.in.includes(o.status)) return false;
              if (someCond.createdAt && !matchesDate(o.createdAt, someCond.createdAt)) return false;
              return true;
            });
          });
        }
      }

      // OrderBy
      if (args.orderBy?.createdAt === "desc") {
        results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      }

      // Pagination
      if (args.skip) {
        results = results.slice(args.skip);
      }
      if (args.take) {
        results = results.slice(0, args.take);
      }

      // Include relations
      return results.map((u) => {
        const item: any = { ...u };
        if (args.include?.addresses) {
          item.addresses = [...u.addresses];
        }
        if (args.include?.orders) {
          const userOrders = store.orders.filter((o) => o.customerId === u.id);
          userOrders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          item.orders = args.include.orders.take ? userOrders.slice(0, args.include.orders.take) : userOrders;
        }
        if (args.include?.events) {
          let userEvts = store.events.filter((e) => e.userId === u.id);
          if (args.include.events.where?.eventName) {
            const en = args.include.events.where.eventName;
            if (en.in) userEvts = userEvts.filter((e) => en.in.includes(e.eventName));
            else if (typeof en === "string") userEvts = userEvts.filter((e) => e.eventName === en);
          }
          if (args.include.events.where?.createdAt) {
            userEvts = userEvts.filter((e) => matchesDate(e.createdAt, args.include.events.where.createdAt));
          }
          userEvts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
          item.events = userEvts;
        }
        return item;
      });
    },

    count: async (args: any = {}) => {
      const list = await prisma.user.findMany({ where: args.where });
      return list.length;
    },

    findFirst: async (args: any = {}) => {
      const list = await prisma.user.findMany(args);
      return list[0] || null;
    },
  },

  event: {
    create: async (args: any) => {
      const newEvt: StoreEvent = {
        id: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        sessionId: args.data.sessionId || null,
        userId: args.data.userId || null,
        eventName: args.data.eventName || args.data.type || "unknown",
        productId: args.data.productId || null,
        metadata: args.data.metadata || {},
        createdAt: new Date(),
      };
      store.events.push(newEvt);
      return newEvt;
    },

    findMany: async (args: any = {}) => {
      let results = [...store.events];

      if (args.where) {
        const w = args.where;
        if (w.eventName?.in) {
          results = results.filter((e) => w.eventName.in.includes(e.eventName));
        } else if (typeof w.eventName === "string") {
          results = results.filter((e) => e.eventName === w.eventName);
        }
        if (w.userId?.not === null) {
          results = results.filter((e) => e.userId !== null && e.userId !== undefined);
        }
        if (w.createdAt) {
          results = results.filter((e) => matchesDate(e.createdAt, w.createdAt));
        }
      }

      if (args.orderBy?.createdAt === "desc") {
        results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      } else if (args.orderBy?.createdAt === "asc") {
        results.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      }

      if (args.take) {
        results = results.slice(0, args.take);
      }

      return results.map((e) => {
        const item: any = { ...e };
        if (args.include?.user && e.userId) {
          item.user = store.users.find((u) => u.id === e.userId) || null;
        }
        return item;
      });
    },
  },

  order: {
    findFirst: async (args: any = {}) => {
      const list = await prisma.order.findMany(args);
      return list[0] || null;
    },

    findMany: async (args: any = {}) => {
      let results = [...store.orders];

      if (args.where) {
        const w = args.where;
        if (w.customerId) results = results.filter((o) => o.customerId === w.customerId);
        if (w.customerId?.notIn) {
          const notIn = new Set(w.customerId.notIn);
          results = results.filter((o) => !notIn.has(o.customerId));
        }
        if (w.status?.in) {
          results = results.filter((o) => w.status.in.includes(o.status));
        }
        if (w.dispatchedAt === null) {
          results = results.filter((o) => o.dispatchedAt === null);
        }
        if (w.createdAt) {
          results = results.filter((o) => matchesDate(o.createdAt, w.createdAt));
        }
      }

      if (args.orderBy?.createdAt === "asc") {
        results.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      } else if (args.orderBy?.createdAt === "desc") {
        results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      }

      if (args.take) {
        results = results.slice(0, args.take);
      }

      return results.map((o) => {
        const item: any = { ...o };
        if (args.include?.customer) {
          item.customer = store.users.find((u) => u.id === o.customerId) || null;
        }
        return item;
      });
    },

    groupBy: async (args: any) => {
      const filtered = await prisma.order.findMany({ where: args.where });
      const map = new Map<string, StoreOrder[]>();

      for (const ord of filtered) {
        const key = ord.customerId;
        if (!map.has(key)) map.set(key, []);
        map.get(key)!.push(ord);
      }

      const results: any[] = [];
      for (const [customerId, orders] of map.entries()) {
        const sumTotal = orders.reduce((s, o) => s + o.total, 0);
        const count = orders.length;
        const minDate = orders.reduce((min, o) => (o.createdAt < min ? o.createdAt : min), orders[0].createdAt);
        const maxDate = orders.reduce((max, o) => (o.createdAt > max ? o.createdAt : max), orders[0].createdAt);

        if (args.having?.id?._count?.gte && count < args.having.id._count.gte) continue;
        if (args.having?.total?._sum?.gt && sumTotal <= args.having.total._sum.gt) continue;

        results.push({
          customerId,
          _count: { id: count },
          _sum: { total: sumTotal },
          _min: { createdAt: minDate },
          _max: { createdAt: maxDate },
        });
      }

      return results;
    },

    aggregate: async (args: any) => {
      const filtered = await prisma.order.findMany({ where: args.where });
      const total = filtered.reduce((s, o) => s + o.total, 0);
      return {
        _sum: { total },
        _count: { id: filtered.length },
      };
    },
  },

  customerFlag: {
    findMany: async (args: any = {}) => {
      let results = [...store.flags];

      if (args.where) {
        const w = args.where;
        if (w.flag) {
          if (w.flag.in) results = results.filter((f) => w.flag.in.includes(f.flag));
          else if (typeof w.flag === "string") results = results.filter((f) => f.flag === w.flag);
        }
        if (typeof w.resolved === "boolean") {
          results = results.filter((f) => f.resolved === w.resolved);
        }
        if (w.userId) {
          results = results.filter((f) => f.userId === w.userId);
        }
        if (w.user?.OR) {
          results = results.filter((f) => {
            const u = store.users.find((user) => user.id === f.userId);
            if (!u) return false;
            return w.user.OR.some((cond: any) => {
              if (cond.email?.contains && u.email.toLowerCase().includes(cond.email.contains.toLowerCase())) return true;
              if (cond.addresses?.some?.OR) {
                return u.addresses.some((a) => {
                  return cond.addresses.some.OR.some((sub: any) => {
                    if (sub.name?.contains && a.name.toLowerCase().includes(sub.name.contains.toLowerCase())) return true;
                    if (sub.phone?.contains && a.phone.includes(sub.phone.contains)) return true;
                    return false;
                  });
                });
              }
              return false;
            });
          });
        }
      }

      if (args.orderBy?.lastUpdatedAt === "desc") {
        results.sort((a, b) => b.lastUpdatedAt.getTime() - a.lastUpdatedAt.getTime());
      }

      if (args.take) {
        results = results.slice(0, args.take);
      }

      return results.map((f) => {
        const item: any = { ...f };
        if (args.include?.user) {
          const u = store.users.find((user) => user.id === f.userId);
          if (u) {
            item.user = {
              id: u.id,
              email: u.email,
              role: u.role,
              addresses: u.addresses.slice(0, 1),
              orders: store.orders
                .filter((o) => o.customerId === u.id)
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .slice(0, 2)
                .map((o) => ({ id: o.id, total: o.total, status: o.status, createdAt: o.createdAt })),
            };
          }
        }
        return item;
      });
    },

    count: async (args: any = {}) => {
      const list = await prisma.customerFlag.findMany({ where: args.where });
      return list.length;
    },

    upsert: async (args: any) => {
      const { userId, flag } = args.where.userId_flag;
      const existingIdx = store.flags.findIndex((f) => f.userId === userId && f.flag === flag);

      if (existingIdx >= 0) {
        store.flags[existingIdx] = {
          ...store.flags[existingIdx],
          evidence: args.update.evidence || store.flags[existingIdx].evidence,
          lastUpdatedAt: args.update.lastUpdatedAt || new Date(),
        };
        return store.flags[existingIdx];
      } else {
        const newFlag: StoreCustomerFlag = {
          userId,
          flag,
          evidence: args.create.evidence,
          resolved: args.create.resolved || false,
          firstDetectedAt: args.create.firstDetectedAt || new Date(),
          lastUpdatedAt: args.create.lastUpdatedAt || new Date(),
        };
        store.flags.push(newFlag);
        return newFlag;
      }
    },

    update: async (args: any) => {
      const { userId, flag } = args.where.userId_flag;
      const idx = store.flags.findIndex((f) => f.userId === userId && f.flag === flag);
      if (idx === -1) {
        throw new Error(`Flag not found for user ${userId} and flag ${flag}`);
      }
      store.flags[idx] = {
        ...store.flags[idx],
        ...args.data,
      };
      return store.flags[idx];
    },
  },
};

export default prisma;
