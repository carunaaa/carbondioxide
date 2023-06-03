import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    // <Menu className="fixed-top ">
    //   <Link to="/">
    //     <Menu.Item header className="header-name text-success">
    //       EcoCO2
    //       <span className="text-warning">Daily</span>
    //     </Menu.Item>
    //   </Link>
    //   <Menu.Menu position="right">
    //     <Link to="/" className="active item header-link">
    //       <Menu.Item link secondary>
    //         Home
    //       </Menu.Item>
    //     </Link>
    //     <Link to="/dashboard" className="item header-link">
    //       <Menu.Item link secondary>
    //         Dashboard
    //       </Menu.Item>
    //     </Link>
    //     <Link to="/auth" className="item header-link">
    //       <Menu.Item link secondary>
    //         Login
    //       </Menu.Item>
    //     </Link>
    //   </Menu.Menu>
    // </Menu>

    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <Link to={"/"} className="header-name">
                <h1>ecoCO2 Daily</h1>
              </Link>
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-light fs-5" href="#">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light fs-5" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/auth"}>
                      <button type="button" class="btn btn-success px-3 me-5">
                       Login
                      </button>
                    </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
