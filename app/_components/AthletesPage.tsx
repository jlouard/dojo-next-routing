"use client"

import { Athlete } from "../_types/Athlete";
import { AthleteCard } from "./AthleteCard";

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
            </div>
        </div>
    );

}