import { useState } from "react";

function DiscoveryForm({ onAddObject }: any) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!name || !type || !distance || !image) return;

        onAddObject({
            name,
            type,
            distance,
            image,
        });

        setName("");
        setType("");
        setDistance("");
        setImage("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                marginTop: "20px",
                padding: "10px",
                background: "#111",
                color: "white",
            }}
        >
            <h2>Zgłoś odkrycie</h2>

            <input
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Typ"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <input
                placeholder="Odległość"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />

            <input
                placeholder="URL zdjęcia"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button type="submit">Dodaj</button>
        </form>
    );
}

export default DiscoveryForm;