import "@/styles/globals.css";
import "@/styles/fonts/pretendard.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary
        state={pageProps.dehydratedState ?? { queries: [], mutations: [] }}
      >
        <Toaster
          containerStyle={{ fontSize: "14px", fontWeight: "600" }}
          toastOptions={{
            style: {
              padding: "8px 10px",
              color: "#242424",
              borderRadius: "999px",
            },
          }}
        />

        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
