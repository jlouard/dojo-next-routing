import { AthletesPage } from "@/app/_components/AthletesPage";
import { ATHLETES } from "@/app/_data/athletes";

export default async function Page() {
        return (
            <AthletesPage athletes={ATHLETES} />
        )
    }