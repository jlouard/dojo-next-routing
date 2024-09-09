import Image from "next/image";

export const Footer = () => {
    return (
    <div className="flex flex-col flex-1 items-center place-items-center">
        <Image
          src="/olympic-rings.webp"
          alt="Paris 2024 JO Logo"
          width={300}
          height={200}
          priority
        />
    </div>
    );

}