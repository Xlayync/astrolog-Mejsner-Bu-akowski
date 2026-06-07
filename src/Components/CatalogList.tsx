import CatalogItem from "./CatalogItem";

function CatalogList({ objects, onSelect }: any) {
    return (
        <aside
            style={{
                width: "250px",
                background: "#111",
                color: "white",
                padding: "10px",
            }}
        >
            <h2>Katalog</h2>

            {objects.map((object: any) => (
                <CatalogItem
                    key={object.id}
                    object={object}
                    onSelect={onSelect}
                />
            ))}
        </aside>
    );
}

export default CatalogList;