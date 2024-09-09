import { AthletesPage } from "@/app__/_components/AthletesPage";
import { ATHLETES } from "@/app__/_data/athletes";

export default async function Page() {
        return (
            <AthletesPage athletes={ATHLETES} />
        )
    }