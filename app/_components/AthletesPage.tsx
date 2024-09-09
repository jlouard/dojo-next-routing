"use client"

import { Athlete } from "../_types/Athlete";
import { AthleteCard } from "./AthleteCard";

type Props = {
    athletes: Athlete[],
}

export const AthletesPage = ({ athletes }: Props) => {
    let displayedAthletes = athletes;
    return (
        <div className="flex flex-col w-full h-full">
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