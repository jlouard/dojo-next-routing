import Image from "next/image";

export default function Page() {
    return (
    <div className="flex flex-col flex-1 items-center place-items-center">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/paris-2024-jo-logo.webp"
          alt="Paris 2024 JO Logo"
          width={1080}
          height={600}
          priority
        />
    </div>
    )
}