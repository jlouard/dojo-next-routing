"use client"

import Link from "next/link";
import { CONTINENTS } from "../_data/continents";
import { Athlete } from "../_types/Athlete";
import { AthleteCard } from "./AthleteCard";
import { COUNTRIES } from "../_data/countries";
import { usePathname } from "next/navigation";
import { SideMenu } from "./SideMenu";

type Props = {
    athletes: Athlete[],
    countryCode?: string,
    continentCode?: string,
}

export const AthletesPage = ({ athletes, countryCode, continentCode }: Props) => {
    let displayedAthletes = athletes;
    if (continentCode) {   
        displayedAthletes = athletes
        .filter((athlete) => athlete.continentCode === continentCode);
    }
    if (countryCode) {   
        displayedAthletes = athletes
        .filter((athlete) => athlete.countryCode === countryCode);
    }
    const currentPath = usePathname();
    return (
        <div className="flex flex-col w-full h-full p-8">
            <div className="flex flex-row gap-2 text-yellow-300 font-bold">
                <p className="w-40">COUNTRY</p>
                <p className="w-40">FIRST NAME</p>
                <p className="w-40">LAST NAME</p>
                <p className="w-40">SPORT</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-wrap justify-between w-full h-full items-center">
                    {displayedAthletes.map((athlete) => 
                        <AthleteCard athlete={athlete} />
                    )}
                </div>
                <SideMenu continentCode={continentCode} countryCode={countryCode} />
            </div>
        </div>
    );

}