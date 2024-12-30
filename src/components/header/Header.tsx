"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const [title, setTitle] = useState("CodarSe");
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title);
    }, [currentPath]);

    return (
        <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
            <button className="sm:hidden">
                <MdMenu size={24}/>
            </button>

            <ul className="flex gap-4 items-center my-2">
                <li>
                    <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
                        CODARSE
                    </Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                        Página inicial
                    </Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                        Cursos
                    </Link>
                </li>
                
                <li className="hidden sm:block">
                    <Link href="https://blog.codarse.com" target="_blank" className="flex gap-1 items-center">
                        Blog
                        <MdOpenInNew />
                    </Link>
                </li>
            </ul>

            <h1 className="sm:hidden">
                {title}
            </h1>
        </nav>
    );
};