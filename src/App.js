import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div>Hello</div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
