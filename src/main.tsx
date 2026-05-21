import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./i18n";
import { router } from "./router";
import { useThemeStore } from "@/stores/theme.store";

useThemeStore.getState().init();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3200,
            style: {
              background: "var(--color-primary-reverse)",
              color: "#fff",
              borderRadius: "14px",
              padding: "14px 20px",
              fontFamily: "var(--font-main)",
              fontWeight: 600,
              boxShadow: "var(--shadow-modal)",
            },
            success: {
              iconTheme: { primary: "var(--color-primary)", secondary: "#fff" },
            },
          }}
        />
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
);
