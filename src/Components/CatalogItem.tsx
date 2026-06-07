type CatalogItemProps = {
    object: {
        id: number;
        name: string;
        image: string;
    };
    onSelect: (object: any) => void;
};

function CatalogItem({ object, onSelect }: CatalogItemProps) {
    return (
        <div
            className="catalog-item"
            onClick={() => onSelect(object)}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #333",
            }}
        >
            <img
                src={object.image}
                alt={object.name}
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
            />

            <span>{object.name}</span>
        </div>
    );
}

export default CatalogItem;