// Create an array if items to render
const groceries = [
    {
        item: 'Eggs',
        store: 'Cub Foods',
        price: 0.70,
        id: 98
    }, 
    {
        item: 'Milk',
        store: 'Target',
        price: 2.50,
        id: 97
    },
    {
        item: 'Ice Cream',
        store: 'Kroger',
        price: 5.50,
        id: 96
    },
    {
        item: 'Ramen',
        store: 'Walgreen',
        price: 1.08,
        id: 95
    }
];


export const SimpleList = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Store</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </table>
            
            <tbody>
                <tr>
                    <td>{groceries[0].item}</td>
                    <td>{groceries[0].store}</td>
                    <td>{groceries[0].price}</td>
                </tr>
                {/* Since map returns a new array, we cam transform our data into JSX array  */}
                {groceries.map( (grocery, index) => {
                    return(

                        /**
                         * React is expecting the outermost element or the wrapper element (tr) to have a key property
                         * 
                         * React needs this key to keep track of each element in the array
                         * 
                         * Keys should be a unique value across the list and be stable
                         * Stable menas that the value is not computed, it will be same value every time
                         * 
                         * The best choice for a key is the id from the database since that is unique
                         * A good fallback option is if there's a field on the object that is unique or can be paired another field to become unique
                         * 
                         * The last resort should be using the index in the array as the key
                         * This is what React defaults to if you don't provide a key
                         */
                        <tr key={grocery.id}>
                            <td>{grocery.item}</td>
                            <td>{grocery.store}</td>
                            <td>{grocery.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </>
    )
}