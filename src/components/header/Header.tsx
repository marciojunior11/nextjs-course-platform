import Link from "next/link";

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Página inicial</Link>
                </li>
                <li>
                    <Link href="/cursos">Página inicial</Link>
                </li>
                <li>
                    <Link href="https://blog.codarse.com" target="_blank">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};