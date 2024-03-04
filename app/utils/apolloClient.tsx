"use server";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";

const { getClient } = registerApolloClient(() => {
  const cookieStore = cookies();

  return new ApolloClient({
    cache: new InMemoryCache(),

    link: new HttpLink({
      fetch: async (uri, options) => {
        const myOptions: RequestInit = { ...options };
        const accessToken = cookieStore.get("token")?.value;

        const headers = new Headers(myOptions.headers ?? {});

        headers.set("Authorization", String(accessToken));
        headers.set("cache", "no-cache");
        headers.set("Cache-Control", "no-cache no-store");

        return await fetch(uri, { ...myOptions, headers });
      },

      uri: String(process.env.NEXT_PUBLIC_API),
    }),
  });
});

export { getClient };
