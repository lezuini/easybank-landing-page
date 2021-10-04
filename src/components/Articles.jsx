import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <h2>Latest Articles</h2>
        <div className="posts">
          <div className="post">
            <div className="img">
              <img src={Currency} alt="Currency" />
            </div>
            <div className="text">
              <span>By Claire Robinson</span>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="post">
            <div className="img">
              <img src={Restaurant} alt="Restaurant" />
            </div>
            <div className="text">
              <span>By Wilson Hutton</span>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="post">
            <div className="img">
              <img src={Plane} alt="Plane" />
            </div>
            <div className="text">
              <span>By Wilson Hutton</span>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="post">
            <div className="img">
              <img src={Confetti} alt="Confetti" />
            </div>
            <div className="text">
              <span>By Claire Robinson</span>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
