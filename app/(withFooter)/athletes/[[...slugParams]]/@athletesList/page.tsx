import { AthleteInfo } from "@/app/_components/AthleteInfo";
import { AthletesPage } from "@/app/_components/AthletesPage";
import { ATHLETES } from "@/app/_data/athletes";
import { isAthleteNameSlug } from "@/app/_utils/utils";

type PageParams = {
    params: { slugParams?: string[] };
  };

export default async function Page({ params: { slugParams } }: PageParams) {
    if (!slugParams) {
        return (
            <AthletesPage athletes={ATHLETES} />
        )
    }

    if (isAthleteNameSlug(slugParams[0])) {
        const [firstName, lastName] = slugParams[0].split("-")
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

    const [continentCode, countryCode] = slugParams;
    return <AthletesPage
                athletes={ATHLETES} 
                continentCode={continentCode} 
                countryCode={countryCode} 
            />
}