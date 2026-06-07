import { useState } from "react";
import Header from "./Components/Header";
import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";

const initialObjects = [
    {
        id: 1,
        name: "Mars",
        type: "Planeta",
        distance: "225 mln km",
        image: "https://picsum.photos/200?1",
    },
    {
        id: 2,
        name: "Andromeda",
        type: "Galaktyka",
        distance: "2.5 mln lat świetlnych",
        image: "https://picsum.photos/200?2",
    },
    {
        id: 3,
        name: "Betelgeza",
        type: "Gwiazda",
        distance: "642 lata świetlne",
        image: "https://picsum.photos/200?3",
    },
    {
        id: 4,
        name: "Europa",
        type: "Księżyc",
        distance: "628 mln km",
        image: "https://picsum.photos/200?4",
    },
    {
        id: 5,
        name: "Messier 87",
        type: "Galaktyka",
        distance: "53 mln lat świetlnych",
        image: "https://picsum.photos/200?5",
    },
];

function App() {
    const [objects, setObjects] = useState(initialObjects);
    const [selectedObject, setSelectedObject] = useState<any>(null);

    const addObject = (newObject: any) => {
        setObjects((prev) => [
            ...prev,
            {
                ...newObject,
                id: Date.now(),
            },
        ]);
    };

    return (
        <div
            style={{
                fontFamily: "Arial",
                background: "#0d1117",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <Header />

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px",
                }}
            >
                <CatalogList
                    objects={objects}
                    onSelect={setSelectedObject}
                />

                <ObjectDetails
                    selectedObject={selectedObject}
                />
            </div>

            <div style={{ padding: "20px" }}>
                <DiscoveryForm onAddObject={addObject} />
            </div>
        </div>
    );
}

export default App;