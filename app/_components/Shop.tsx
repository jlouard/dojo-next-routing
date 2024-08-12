type Item = {
    id: number,
    name: string,
    cost: number,
};

export const Shop = () => {
    const items: Item[] = [{id: 1, name: "Keyboard", cost: 100}, {id: 2, name: "Computer", cost: 2000}, {id: 3, name: "Mouse", cost: 100}];
    return (
    <div className="flex justify-between w-full h-full items-center">
        {items.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
    );

}