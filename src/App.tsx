import { useState } from "react";
import Header from "./Components/Header";
import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";


const sampleObjects = [
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
    const [selectedObject, setSelectedObject] = useState(null);

    return (
        <>
            <Header />

            <CatalogList
                objects={sampleObjects}
                onSelect={setSelectedObject}
            />

            <ObjectDetails
                selectedObject={selectedObject}
            />

            <DiscoveryForm />
        </>
    );
}

export default App;