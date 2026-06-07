import { useState } from "react";
import Header from "./Components/Header";
import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";
import celestialObjects, {
    type CelestialObject,
} from "./celestialObjects";

function App() {
    const [objects, setObjects] =
        useState<CelestialObject[]>(celestialObjects);

    const [selectedObject, setSelectedObject] =
        useState<CelestialObject | null>(null);

    const addObject = (
        newObject: Omit<CelestialObject, "id">
    ) => {
        setObjects((prev) => [
            ...prev,
            {
                ...newObject,
                id: Date.now(),
            },
        ]);
    };

    return (
        <div className="app">
            <Header />

            <div className="main-content">
                <CatalogList
                    objects={objects}
                    onSelect={setSelectedObject}
                />

                <ObjectDetails
                    selectedObject={selectedObject}
                />

                <DiscoveryForm
                    onAddObject={addObject}
                />
            </div>
        </div>
    );
}

export default App;