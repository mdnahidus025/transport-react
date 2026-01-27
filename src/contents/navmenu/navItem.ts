import type { MenuItem } from "./navType";

export const homeList: MenuItem[] = [
    { id: 1, text: "Home One", url: "/" },
    { id: 2, text: "Home Two", url: "/home-two" },
    { id: 3, text: "Home Three", url: "/home-three" },
    { id: 4, text: "Home One Single Page", url: "/single-page-home-one" },
    { id: 5, text: "Home Two Single Page", url: "/single-page-home-two" },
    { id: 6, text: "Home Three Single Page", url: "/single-page-home-three" },
]

// Pages Dropdown
export const pagesList: MenuItem[] = [
  { id: 1, text: "Team", url: "/team" },
  { id: 2, text: "Team Details", url: "/team-details" },
  { id: 3, text: "Projects", url: "/projects" },
  { id: 4, text: "Project Details", url: "/project-details" },
  { id: 5, text: "Testimonials", url: "/testimonials" },
  { id: 6, text: "Pricing", url: "/pricing" },
  { id: 7, text: "FAQs", url: "/faqs" },
  { id: 8, text: "404 Error", url: "/404" },
];

// Services Dropdown
export const servicesList: MenuItem[] = [
  { id: 1, text: "Services", url: "/services" },
  { id: 2, text: "International Transport", url: "/international-transport" },
  { id: 3, text: "Local Track Transport", url: "/track-transport" },
  { id: 4, text: "Fast Personal Delivery", url: "/personal-delivery" },
  { id: 5, text: "Safe Ocean Transport", url: "/ocean-transport" },
  { id: 6, text: "Warehouse Facility", url: "/warehouse-facility" },
  { id: 7, text: "Emergency Transport", url: "/emergency-transport" },
];

// Shop Dropdown
export const shopList: MenuItem[] = [
  { id: 1, text: "Products", url: "/products" },
  { id: 2, text: "Product Details", url: "/product-details" },
  { id: 3, text: "Cart", url: "/cart" },
  { id: 4, text: "Checkout", url: "/checkout" },
  { id: 5, text: "Wishlist", url: "/wishlist" },
  { id: 6, text: "Sign Up", url: "/sign-up" },
  { id: 7, text: "Login", url: "/login" },
];

// Blog Dropdown
export const blogList: MenuItem[] = [
  { id: 1, text: "Blog", url: "/blog" },
  { id: 2, text: "Blog Standard", url: "/blog-standard" },
  { id: 3, text: "Blog Left Sidebar", url: "/blog-left-sidebar" },
  { id: 4, text: "Blog Right Sidebar", url: "/blog-right-sidebar" },
  { id: 5, text: "Blog Details", url: "/blog-details" },
];
