function Products() {
    const productsFromDb = ["Mocassins à glands", "Charentaise", "Talons aiguilles"];

    return (
        <main>
            {productsFromDb.map((product) =>{
                return (
                    <article>
                        <h2>{product}</h2>
                    </article>
                );
            })}
        </main>
    );
} 

export default Products;