function ObjectDetails({ selectedObject }: any) {
    return (
        <section className="details">
            {selectedObject ? (
                <>
                    <h2>{selectedObject.name}</h2>

                    <img
                        src={selectedObject.image}
                        alt={selectedObject.name}
                        width={300}
                        height={300}
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