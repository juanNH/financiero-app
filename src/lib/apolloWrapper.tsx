"use client";

import {
  HttpLink,
} from "@apollo/client";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache  } from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
  });
  console.log(httpLink,'ttp1', process.env.NEXT_PUBLIC_API_URL + '/graphql')
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}