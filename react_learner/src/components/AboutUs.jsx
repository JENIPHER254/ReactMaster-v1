import "./../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faWandSparkles,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
function AboutSection() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mb-2">
          <div className="col-6 cont-left">
            <h1 className="text-left h1 about-title">About Us</h1>
            <hr className="short-line" />
            <p className="inner-text py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolores, nam quam dolore repellat voluptatibus
              veritatis non rem sed! Alias.
            </p>
          </div>
          <div className="col-6   main-cont d-flex justify-content-end align-items-start">
            <div className="outer-cont   d-flex justify-content-end align-items-start">
              <div className="inner-cont"></div>
            </div>
          </div>
        </div>
        <div className="row px-5 mb-5">
          <div className="col-4">
            <FontAwesomeIcon icon={faThumbsUp} className="FontAwesomeIcon" />
            <h3 className="text-left  card-title pt-4">
              Trusted <br />
              High-Quality service
            </h3>
            <hr className="short-line" />
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis amet voluptate maiores est enim beatae aliquid tenetur nobis?</p>
          </div>
          <div className="col-4">
            <FontAwesomeIcon
              icon={faWandSparkles}
              className="FontAwesomeIcon"
            />
            <h3 className="text-left  card-title pt-4">
              Ent-To-End <br />
              Control.
            </h3>
            <hr className="short-line" />
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ullam dignissimos aperiam reiciendis magnam voluptatibus nemo doloribus fuga.</p>
          </div>
          <div className="col-4">
            <FontAwesomeIcon icon={faGear} className="FontAwesomeIcon" />
            <h3 className="text-left  card-title pt-4">
              Property <br />
              Ownership
            </h3>
            <hr className="short-line" />
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolorum quis corporis dolores impedit hic alias vitae delectus repellendus beatae!</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutSection;
