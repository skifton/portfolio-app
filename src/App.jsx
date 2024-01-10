import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import RouteWrapper from "./routes/RouteWrapper";
import LanguageProvider from "./providers/LanguageProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./constants/query-client";

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <RouteWrapper />
          <Toaster />
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
