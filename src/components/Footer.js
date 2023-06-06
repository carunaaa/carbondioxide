import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="footer">
    //   <Grid columns={4}>
    //     <Grid.Row>
    //       <Grid.Column mobile={8} tablet={4} computer={4}>
    //         <div>
    //           <h3>Contact Us</h3>
    //         </div>
    //         <ul>
    //           <li>Email: info@corpolatech.com</li>
    //           <li>Phone: 977-9849826321</li>
    //           <li>Address: Kathmandu, Nepal</li>
    //         </ul>
    //       </Grid.Column>
    //       <Grid.Column mobile={8} tablet={4} computer={4}>
    //         <div>
    //           <h3>Main Pages</h3>
    //         </div>
    //         <div>
    //           <Link to="/">Home</Link>
    //         </div>
    //         <div>
    //           <Link to="/dashboard">Dashboard</Link>
    //         </div>
    //         <div>
    //           <Link to="/auth">User Profile</Link>
    //         </div>
    //       </Grid.Column>
    //       <Grid.Column mobile={8} tablet={4} computer={4}>
    //         <div>
    //           <h3>Social Media</h3>
    //         </div>
    //         <div>
    //           <Link target="_blank" to="https://www.facebook.com/">
    //             Facebook ⇱
    //           </Link>
    //         </div>
    //         <div>
    //           <Link target="_blank" to="https://www.instagram.com/">
    //             Instagram ⇱
    //           </Link>
    //         </div>
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    //   <Grid>
    //     <Grid.Row>
    //       <Grid.Column>
    //         <hr />
    //         Copyright © {new Date().getFullYear()} The Living Facts - All rights
    //         reserved.
    //       </Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // </div>
    <footer class="bg-dark text-center text-white">
      <div class="containerr p-4 pb-0">
        <section class="mb-4">
          <div class="style text-decoration-none m-1">
            {/* <Link to="/">MainPage</Link> */}
            <Link to="/dashboard">Home</Link>
            <Link to="/auth">Projects</Link>
          </div>
          <div class="d-flex justify-content-center" id="footer-link">
            <i class="fab fa-facebook-f social-link"></i>
            <i class="fab fa-twitter social-link"></i>
            <i class="fab fa-google social-link"></i>
            <i class="fab fa-github social-link"></i>
          </div>
        </section>
      </div>

      <div class="text-center p-3" id="text">
        © 2023 Copyright: All right preserved.
        <Link class="text-white" to={"https://ecoco2daily.com/"}>
         <h3 className="text-success">ecoCO2 Daily</h3>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
