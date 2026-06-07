function ObjectDetails({ selectedObject }: any) {
    return (
        <section style={{ flex: 1, padding: "20px" }}>
            {selectedObject ? (
                <>
                    <h2>{selectedObject.name}</h2>

                    <img
                        src={selectedObject.image}
                        alt={selectedObject.name}
                        width={300}
                    />

                    <p>Typ: {selectedObject.type}</p>
                    <p>Odległość: {selectedObject.distance}</p>
                </>
            ) : (
                <h2>🛰️ Wybierz obiekt</h2>
            )}
        </section>
    );
}

export default ObjectDetails;