import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <>
      <div>AppHeader</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </>
  );
};

export default AppHeader;
