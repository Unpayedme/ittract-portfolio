import Image from "next/image"

export function ProfileImage() {
    return (
        <div className="mt-4 items-center ">
            {/* <div>
                <div className="absolute border-3 border-red-500 rotate-5 inset-0 rounded-lg"> 
                
                </div>
            </div>
             */}
                <Image 
                    src="/malupiton.jpg" 
                    alt="my image" 
                    width={350} 
                    height={350} 
                    className="grayscale hover:grayscale-0 transition-transform duration-500 hover:scale-102 rounded-md aspect-[3/4] rotate-2 hover:rotate-0 infinite ease-in" 
                />
        </div>
    );

}