import Card from "./Card";

function List() {
    return (
        <div className="flex flex-col bg-gray-200 rounded m-2 p-2 w-64">
            {selectedBoard.lists.map((list) => (
                <div key={list.id}>
                    <h2>{list.name}</h2>
                    {list.cards.map((card, index) => (
                        <Card key={index} title={card} description={card} />
                    ))}
                </div>
            ))}
            <Card title="Card 1" description="This is card 1" />
            <Card title="Card 2" description="This is card 2" />
           
        </div>
    )
}
export default List;