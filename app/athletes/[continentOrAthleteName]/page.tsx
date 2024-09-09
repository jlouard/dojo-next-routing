import { AthleteInfo } from "@/app__/_components/AthleteInfo";
import { AthletesPage } from "@/app__/_components/AthletesPage";
import { ATHLETES } from "@/app__/_data/athletes";
import { isAthleteNameSlug } from "@/app__/_utils/utils";

export type PageParams = {
    params: { continentOrAthleteName: string };
  };

export default async function Page({ params: { continentOrAthleteName } }: PageParams) {
    if (isAthleteNameSlug(continentOrAthleteName)) {
        const [firstName, lastName] = continentOrAthleteName.split("-")
        const athlete = ATHLETES.find(athlete => 
            athlete.firstName.toLowerCase() === firstName && 
            athlete.lastName.toLowerCase() === lastName 
            );
        return (
            <div className="flex flex-col flex-1 items-center">
                {athlete && <AthleteInfo athlete={athlete} />}
            </div>
        )
    }

    return <AthletesPage
                athletes={ATHLETES} 
                continentCode={continentOrAthleteName} 
            />
}