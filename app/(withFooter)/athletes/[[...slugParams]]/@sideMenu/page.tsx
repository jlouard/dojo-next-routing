import { SideMenu } from "@/app/_components/SideMenu";
import { isAthleteNameSlug } from "@/app/_utils/utils";

type PageParams = {
    params: { slugParams?: string[] };
  };

export default async function Page({ params: { slugParams } }: PageParams) {
    const [continentCode, countryCode] = slugParams ?? [undefined, undefined];
    if (slugParams && isAthleteNameSlug(slugParams[0] ?? "")) return null;
    return (
           <SideMenu continentCode={continentCode} countryCode={countryCode} />
        )
    }