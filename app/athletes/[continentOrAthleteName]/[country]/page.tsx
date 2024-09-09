import { AthletesPage } from "@/app__/_components/AthletesPage";
import { ATHLETES } from "@/app__/_data/athletes";

export type PageParams = {
    params: { continentOrAthleteName: string, country: string };
  };

export default async function Page({ params: { continentOrAthleteName, country } }: PageParams) {
    return <AthletesPage
                athletes={ATHLETES} 
                continentCode={continentOrAthleteName} 
                countryCode={country}
            />
}