function Header() {
    const UserLogged = {
        lastname: "Emily",
        fistname: "Alexandre",
        job: "web developper",
    };

    const isUserLogged = true;
    const itemsInCart = 12;
  
    return (
      <header>
        <h1>Super ecommerce</h1>
        <nav>
          <ul>
            {isUserLogged ? (
                <li>
                    {isUserLogged.fistname} {userLogged.lastename} - {userLogged.job}
                </li>
            ) :(
                <li>Veuillez vous connecter</li>
            )}

            <li>Home</li>
            <li>Products</li>
  
            {itemsInCart > 0 ? <li>Cart : {itemsInCart}</li> : <li>Pas d'item au panier</li>}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;