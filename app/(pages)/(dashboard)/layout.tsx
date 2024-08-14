import type { ReactNode } from "react";
import { StoreProvider } from "../../StoreProvider";

import "@/app/styles/globals.css";
import styles from "@/app/styles/layout.module.css";
import Header from "@/app/components/shared/header/header";
import ApolloWrapper from "@/app/components/shared/apollo/ApolloProvider";
import Sidebar from "@/app/components/shared/sidebar/sidebar";

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <StoreProvider>
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap" rel="stylesheet" />
                </head>
                <body>

                    <section className="h-dvh">
                        <ApolloWrapper>
                            <div className="flex w-[100%]">
                                <Sidebar />
                                <main className="flex-auto h-screen bg-[#F4F1E8]">
                                    <div className="h-10 bg-slate-700"></div>
                                    {children}
                                </main>
                            </div>

                        </ApolloWrapper>
                    </section>
                </body>
            </html>
        </StoreProvider>
    );
}
