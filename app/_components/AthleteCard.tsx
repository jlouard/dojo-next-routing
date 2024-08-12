import Link from "next/link";
import { Athlete } from "../_types/Athlete";
import ReactCountryFlag from "react-country-flag";

type Props = {
    athlete: Athlete
}

export const AthleteCard = ({ athlete }: Props) => {
    return (
    <Link 
        href={`/athletes/${athlete.firstName.toLowerCase()}-${athlete.lastName.toLowerCase()}`} 
        className="flex flex-row w-full h-full items-center gap-2"
    >
        <p className="w-40">
            <ReactCountryFlag countryCode={athlete.countryCode} />
            {athlete.country}
        </p>
        <p className="w-40">{athlete.firstName}</p>
        <p className="w-40">{athlete.lastName.toUpperCase()}</p>
        <p className="w-40">{athlete.sport}</p>
    </Link>
    );

}