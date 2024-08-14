import type { ReactNode } from "react";

import "./../../styles/globals.css";
import styles from "./../../styles/layout.module.css";
import Header from "../../components/shared/header/header";
import ApolloWrapper from "../../components/shared/apollo/ApolloProvider";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap" rel="stylesheet" />
        </head>
        <body>
          <Header />
          <section className={styles.container}>
            <ApolloWrapper>
              <main className={styles.main}>{children}</main>
            </ApolloWrapper>
          </section>
        </body>
      </html>
  );
}
