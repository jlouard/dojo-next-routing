import Link from "next/link"
import { CONTINENTS } from "../_data/continents"
import { COUNTRIES } from "../_data/countries";

type Props = {
    countryCode?: string,
    continentCode?: string,
}

export const SideMenu = ({ countryCode, continentCode }: Props) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-40">
                <p className="text-yellow-300 font-bold">CONTINENTS</p>
                {CONTINENTS.map((continent) => 
                    <Link
                    href={`/athletes/${continent.continentCode}`}
                    className={continentCode === continent.continentCode
                        ? "text-green-500 font-semibold"
                        : "text-white"
                    }
                    >
                        {continent.name}
                    </Link>
                )}
            </div>
            {continentCode && <div className="flex flex-col w-40">
                <p className="text-yellow-300 font-bold">COUNTRIES</p>
                {COUNTRIES
                    .filter((country) => country.continentCode === continentCode)
                    .map((country) => 
                        <Link 
                    href={`/athletes/${country.continentCode}/${country.countryCode}`}
                    className={countryCode === country.countryCode 
                        ? "text-green-500 font-semibold"
                        : "text-white"
                    }
                    >
                        {country.name}
                    </Link>
                )}
            </div>}
        </div>      
    );
}