import React, { PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});
const ReactQueryProvider = ({ children }: PropsWithChildren<{}>) => {
  console.warn("rendering React Query Provider from growlers");
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
