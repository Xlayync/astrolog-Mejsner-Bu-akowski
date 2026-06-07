type CatalogItemProps = {
    object: {
        id: number;
        name: string;
        image: string;
    };
    onSelect: (object: any) => void;
};

function CatalogItem({
                         object,
                         onSelect,
                     }: CatalogItemProps) {
    return (
        <div onClick={() => onSelect(object)}>
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