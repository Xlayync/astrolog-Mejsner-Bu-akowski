type ObjectDetailsProps = {
    selectedObject: any;
};

function ObjectDetails({
                           selectedObject,
                       }: ObjectDetailsProps) {
    return (
        <section>
            {selectedObject ? (
                <>
                    <h2>{selectedObject.name}</h2>

                    <img
                        src={selectedObject.image}
                        alt={selectedObject.name}
                        width={300}
                    />

                    <p>
                        <strong>Typ:</strong>{" "}
                        {selectedObject.type}
                    </p>

                    <p>
                        <strong>Odległość:</strong>{" "}
                        {selectedObject.distance}
                    </p>
                </>
            ) : (
                <h2>🛰️ Wybierz obiekt z katalogu</h2>
            )}
        </section>
    );
}

export default ObjectDetails;