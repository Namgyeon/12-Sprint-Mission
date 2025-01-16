"use client";

import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return <Provider client={queryClient}>{children}</Provider>;
}
