import Image from "next/image"

export function ProfileImage() {
    return (
        <div className="relative w-60 sm:w-50 md:w-80 lg:w-100 aspect-[3/4] flex items-center justify-center " >
            <Image
                src="/malupiton.jpg"
                alt="my image"
                loading="eager"
                width={500}
                height={500}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-102 rounded-md rotate-2 hover:rotate-0 ease-in animate-pulse  hover:shadow-lg hover:shadow-red-500/50"
            />
        </div>
    );

}