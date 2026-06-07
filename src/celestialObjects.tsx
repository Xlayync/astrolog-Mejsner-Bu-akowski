import mars from "./assets/mars.jpg";
import andromeda from "./assets/andromeda.jpg";
import betelgeza from "./assets/betelgeza.jpg";
import europa from "./assets/europa.jpg";
import messier87 from "./assets/messier87.jpg";
export interface CelestialObject {
    id: number;
    name: string;
    type: string;
    distance: string;
    image: string;
}

const celestialObjects: CelestialObject[] = [
    {
        id: 1,
        name: "Mars",
        type: "Planeta",
        distance: "225 mln km",
        image:
            mars,
    },
    {
        id: 2,
        name: "Andromeda",
        type: "Galaktyka",
        distance: "2.5 mln lat świetlnych",
        image:
            andromeda,
    },
    {
        id: 3,
        name: "Betelgeza",
        type: "Gwiazda",
        distance: "642 lata świetlne",
        image:
            betelgeza,
    },
    {
        id: 4,
        name: "Europa",
        type: "Księżyc",
        distance: "628 mln km",
        image:
            europa,
    },
    {
        id: 5,
        name: "Messier 87",
        type: "Galaktyka",
        distance: "53 mln lat świetlnych",
        image:
            messier87,
    },
];

export default celestialObjects;