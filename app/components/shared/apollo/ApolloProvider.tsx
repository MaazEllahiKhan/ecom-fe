'use client'
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import client from './lib/apolloClient';

interface ApolloWrapperProps {
  children: ReactNode;
}

const ApolloWrapper: React.FC<ApolloWrapperProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
