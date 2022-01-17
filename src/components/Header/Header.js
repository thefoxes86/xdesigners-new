import { Link, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./header.scss";
import { useEffect, useState } from "react";
import { useActions, overmind, useAppState } from "../../context/overmind";
import Loading from "../Loading";
const GET_MENU = gql`
  query GetContatti {
    menuItems {
      nodes {
        menuItemId
        label
        title
        url
        path
      }
    }
  }
`;

const Header = () => {
  const { data, loading, error } = useQuery(GET_MENU);
  const [openMenu, setOpenMenu] = useState(false);
  const [hoveredCaption, setHoveredCaption] = useState(false);
  const [toggleLoader, setToggleLoader] = useState(false);
  let navClass = "nav";
  const actions = useActions();
  const state = useAppState();
  var menu = [];
  let navigate = useNavigate();

  const toggleMenu = (e) => {
    e.preventDefault();
    actions.loadingState(true);
    actions.changePage(e.target.outerText);
    setToggleLoader(e.target.pathname);
    setTimeout(() => {
      setOpenMenu(false);
      navigate(e.target.pathname);
    }, 2000);
  };

  useEffect(() => {
    data &&
      data.menuItems.nodes.map(({ title, path }) => {
        menu.push(title);
      });
    actions.pushPages(menu);
  });

  overmind.eventHub.on("action:end", (execution) => {
    if (state.activeHoveredMouse.hovered === true) {
      setHoveredCaption(true);
    } else {
      setHoveredCaption(false);
    }
  });

  return (
    <>
      <div className={openMenu ? "nav-active" : ""}>
        <div
          className={hoveredCaption ? "menu removeMenu" : "menu"}
          onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
        >
          <div className="containerLine menu-icon">
            <span className="line_top"></span>
            <span className="line_bottom"></span>
          </div>
          <div className="containerText">
            <span className="text text-left">menu</span>
          </div>
        </div>
        <div className="nav">
          <div className="nav__content">
            <ul className="nav__list">
              {data &&
                data.menuItems.nodes.map(({ label, menuItemId, path }) => (
                  <li key={menuItemId} className="menu-item ">
                    <Link to={path} onClick={toggleMenu}>
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {state.loading ? <Loading load={toggleLoader} /> : ""}
    </>
  );
};

export default Header;
