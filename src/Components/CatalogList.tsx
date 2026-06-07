import CatalogItem from "./CatalogItem";

function CatalogList({ objects, onSelect }: any) {
    return (
        <aside className="catalog">
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