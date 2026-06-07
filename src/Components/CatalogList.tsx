import CatalogItem from "./CatalogItem";

type CatalogListProps = {
    objects: any[];
    onSelect: (object: any) => void;
};

function CatalogList({
                         objects,
                         onSelect,
                     }: CatalogListProps) {
    return (
        <aside>
            <h2>Katalog</h2>

            {objects.map((object) => (
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