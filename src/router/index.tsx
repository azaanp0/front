/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));
const CategoriesIndexPage = lazy(() => import("@/pages/CategoriesIndexPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"));
const OrderSuccessPage = lazy(() => import("@/pages/OrderSuccessPage"));
const OrderTrackingPage = lazy(() => import("@/pages/OrderTrackingPage"));
const BrandPage = lazy(() => import("@/pages/BrandPage"));
const BrandsPage = lazy(() => import("@/pages/BrandsPage"));
const OffersPage = lazy(() => import("@/pages/OffersPage"));
const BestsellersPage = lazy(() => import("@/pages/BestsellersPage"));
const NewArrivalsPage = lazy(() => import("@/pages/NewArrivalsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const MaintenancePage = lazy(() => import("@/pages/MaintenancePage"));
const WishlistPage = lazy(() => import("@/pages/WishlistPage"));
const StaticPage = lazy(() => import("@/pages/StaticPage"));

const AccountPage = lazy(() => import("@/pages/AccountPage"));
const OrdersPage = lazy(() => import("@/pages/account/OrdersPage"));
const OrderDetailPage = lazy(() => import("@/pages/account/OrderDetailPage"));
const AddressesPage = lazy(() => import("@/pages/account/AddressesPage"));
const LoyaltyPage = lazy(() => import("@/pages/account/LoyaltyPage"));

function staticRoute(title: string) {
  return (
    <SuspensePage>
      <StaticPage title={title} />
    </SuspensePage>
  );
}

function PageSpinner() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-primary)] border-t-transparent" />
    </div>
  );
}

function SuspensePage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageSpinner />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/maintenance",
    element: (
      <SuspensePage>
        <MaintenancePage />
      </SuspensePage>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <SuspensePage>
            <HomePage />
          </SuspensePage>
        ),
      },
      {
        path: "search",
        element: (
          <SuspensePage>
            <SearchPage />
          </SuspensePage>
        ),
      },
      {
        path: "checkout",
        element: (
          <SuspensePage>
            <CheckoutPage />
          </SuspensePage>
        ),
      },
      {
        path: "order-success/:orderId",
        element: (
          <SuspensePage>
            <OrderSuccessPage />
          </SuspensePage>
        ),
      },
      {
        path: "order-tracking/:orderId?",
        element: (
          <SuspensePage>
            <OrderTrackingPage />
          </SuspensePage>
        ),
      },
      {
        path: "brand/:slug",
        element: (
          <SuspensePage>
            <BrandPage />
          </SuspensePage>
        ),
      },
      {
        path: "category",
        element: (
          <SuspensePage>
            <CategoriesIndexPage />
          </SuspensePage>
        ),
      },
      {
        path: "category/:slug",
        element: (
          <SuspensePage>
            <CategoryPage />
          </SuspensePage>
        ),
      },
      {
        path: "offers",
        element: (
          <SuspensePage>
            <OffersPage />
          </SuspensePage>
        ),
      },
      {
        path: "brands",
        element: (
          <SuspensePage>
            <BrandsPage />
          </SuspensePage>
        ),
      },
      {
        path: "new",
        element: (
          <SuspensePage>
            <NewArrivalsPage />
          </SuspensePage>
        ),
      },
      {
        path: "bestsellers",
        element: (
          <SuspensePage>
            <BestsellersPage />
          </SuspensePage>
        ),
      },
      {
        path: "blog",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "contact",
        element: (
          <SuspensePage>
            <ContactPage />
          </SuspensePage>
        ),
      },
      {
        path: "about",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "privacy",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "terms",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "returns",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "shipping",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      { path: "track", element: staticRoute("تتبع طلبي") },
      {
        path: "affiliate",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "warranty",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "branches",
        element: (
          <SuspensePage>
            <StaticPage />
          </SuspensePage>
        ),
      },
      {
        path: "wishlist",
        element: (
          <SuspensePage>
            <WishlistPage />
          </SuspensePage>
        ),
      },
      {
        path: "account",
        element: (
          <SuspensePage>
            <AccountPage />
          </SuspensePage>
        ),
      },
      {
        path: "account/orders",
        element: (
          <SuspensePage>
            <OrdersPage />
          </SuspensePage>
        ),
      },
      {
        path: "account/orders/:id",
        element: (
          <SuspensePage>
            <OrderDetailPage />
          </SuspensePage>
        ),
      },
      {
        path: "account/addresses",
        element: (
          <SuspensePage>
            <AddressesPage />
          </SuspensePage>
        ),
      },
      {
        path: "account/loyalty",
        element: (
          <SuspensePage>
            <LoyaltyPage />
          </SuspensePage>
        ),
      },
      {
        path: ":slug/p:productId",
        element: (
          <SuspensePage>
            <ProductPage />
          </SuspensePage>
        ),
      },
      {
        path: "*",
        element: (
          <SuspensePage>
            <NotFoundPage />
          </SuspensePage>
        ),
      },
    ],
  },
]);
