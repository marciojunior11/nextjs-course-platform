import Image from "next/image";
import Link from "next/link";

interface ICardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

export const Card = ({ title, description, image, href }: ICardProps) => {
    return (
        <Link href={href} className="hover:no-underline">
            <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
                <Image
                    width={1000}
                    height={0}
                    src={image}
                    alt={title}
                    draggable={false}
                    className="aspect-video object-cover rounded-2xl"
                />
                <h4 className="font-extrabold text-lg">
                    {title}
                </h4>
                <p className="line-clamp-3">
                    {description}
                </p>
            </article>
        </Link>
    );
};