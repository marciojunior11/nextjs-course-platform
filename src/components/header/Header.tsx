"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("CodarSe");
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setDrawer(false);
            }
        };

        window.addEventListener("keydown", handle);

        return () => window.removeEventListener("keydown", handle);
    }, []);

    return (
        <>
            <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6 fixed top-0 right-0 left-0">
                <button className="sm:hidden" onClick={() => setDrawer(true)}>
                    <MdMenu size={24} />
                </button>

                <ul className="flex gap-4 items-center my-2" tabIndex={drawer ? -1 : undefined}>
                    <li>
                        <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">
                            CODARSE
                        </Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline outline-offset-4">
                            Página inicial
                        </Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline outline-offset-4">
                            Cursos
                        </Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href="https://blog.codarse.com" target="_blank" className="flex gap-1 items-center outline-offset-4">
                            Blog
                            <MdOpenInNew />
                        </Link>
                    </li>
                </ul>

                <div
                    data-open={drawer}
                    tabIndex={drawer ? undefined : -1}
                    onClick={() => setDrawer(false)}
                    className="sm:hidden fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-background transition-transform data-[open=false]:-translate-x-full"
                >
                    <ul onClick={e => e.stopPropagation()} className="flex flex-col w-60 h-full gap-4 p-4 bg-background">
                        <li className="">
                            <Link href="/" data-active={currentPath === "/"} className="data-[active=true]:underline">
                                Página inicial
                            </Link>
                        </li>

                        <li className="">
                            <Link href="/cursos" data-active={currentPath === "/cursos"} className="data-[active=true]:underline">
                                Cursos
                            </Link>
                        </li>

                        <li className="">
                            <Link href="https://blog.codarse.com" target="_blank" className="flex gap-1 items-center">
                                Blog
                                <MdOpenInNew />
                            </Link>
                        </li>
                    </ul>
                </div>


                <h1 className="sm:hidden line-clamp-1">
                    {title}
                </h1>
            </nav>
            <div className="h-14 sm:h-[72px]"/>
        </>
    );
};