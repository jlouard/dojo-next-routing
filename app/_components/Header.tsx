import Link from "next/link";

export const Header = () => {
    return (
    <div className="flex justify-between w-full p-2">
        <Link 
            href="/home"
            className="w-40 bg-white text-black text-center p-4 rounded-md"
         >
             Home
         </Link>
         <Link 
            href="/shop"
            className="w-40 bg-white text-black text-center p-4 rounded-md"
         >
             Shop
         </Link>
         <Link 
            href="/athletes"
            className="w-40 bg-white text-black text-center p-4 rounded-md"
         >
             Athletes
         </Link>
    </div>
    );

}