type CatalogItemProps = {
    object: {
        id: number;
        name: string;
        image: string;
    };
};

function CatalogItem({ object }: CatalogItemProps) {
    return (
        <div className="catalog-item">
            <img
                src={object.image}
                alt={object.name}
                width={60}
            />

            <span>{object.name}</span>
        </div>
    );
}

export default CatalogItem;