const data = [
    {
        id: "1",
        title: "Tiramisu",
        description:"The best tiramisu in town",
        image: "https://image/200/300",
        price: "$5.00",
    },
    {
        id: "2",
        title: "lemon ice cream",
        description:"mind blowing taste",
        image: "https://image/200/300",
        price: "$4.00",
    },
    {
        id: "3",
        title: "chocolate mousse",
        description:"unexplored flavor",
        image: "https://image/200/300",
        price: "$6.00",
    },   
]

const topDesserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price,
    }
})

export default function App(){
    console.log(topDesserts);
    return <h1>Examine the console output</h1>;
}