import Link from "next/link";
import { Athlete } from "../_types/Athlete";
import ReactCountryFlag from "react-country-flag";

type Props = {
    athlete: Athlete
}

export const AthleteInfo = ({ athlete }: Props) => {
    return (
    <div 
        className="flex flex-row w-full h-full justify-between items-center gap-2 p-8 bg-blue-700"
    >
        <p className="w-40">
            <ReactCountryFlag countryCode={athlete.countryCode} />
            {athlete.country}
        </p>
        <p className="w-40">{athlete.firstName}</p>
        <p className="w-40">{athlete.lastName.toUpperCase()}</p>
        <p className="w-40">{athlete.sport}</p>
    </div>
    );

}