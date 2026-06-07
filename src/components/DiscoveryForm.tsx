import { useState, type FormEvent } from "react";
import type {CelestialObject} from "../celestialObjects";

interface DiscoveryFormProps {
    onAddObject: (object: CelestialObject) => void;
}

function DiscoveryForm({ onAddObject }: DiscoveryFormProps) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            !name.trim() ||
            !type.trim() ||
            !distance.trim() ||
            !image.trim()
        ) {
            alert("Wypełnij wszystkie pola!");
            return;
        }

        const newObject: CelestialObject = {
            id: Date.now(),
            name,
            type,
            distance,
            image,
        };

        onAddObject(newObject);

        setName("");
        setType("");
        setDistance("");
        setImage("");
    };

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <h2>Zgłoś nowy obiekt</h2>

            <input
                type="text"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Typ"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <input
                type="text"
                placeholder="Odległość"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />

            <input
                type="text"
                placeholder="Link do zdjęcia"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button type="submit">
                Dodaj obiekt
            </button>
        </form>
    );
}

export default DiscoveryForm;