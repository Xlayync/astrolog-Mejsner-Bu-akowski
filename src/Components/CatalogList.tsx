import CatalogItem from "./CatalogItem";

type CatalogListProps = {
    objects: {
        id: number;
        name: string;
        image: string;
    }[];
};

function CatalogList({ objects }: CatalogListProps) {
    return (
        <aside>
            <h2>Katalog</h2>

            {objects.map((object) => (
                <CatalogItem
                    key={object.id}
                    object={object}
                />
            ))}
        </aside>
    );
}

export default CatalogList;