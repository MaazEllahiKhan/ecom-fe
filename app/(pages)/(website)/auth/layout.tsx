import type { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="box-border h-[34rem] w-[33rem]  bg-[#eee7e4] rounded-md shadow-md">
            <div className="flex  items-center p-5">
                {children}
            </div>
        </div>
    );
}
