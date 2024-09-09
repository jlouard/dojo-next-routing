import { AthletesPage } from "../_components/AthletesPage";
import { ATHLETES } from "../_data/athletes";

export default async function Page() {
        return (
            <AthletesPage athletes={ATHLETES} />
        )
    }