import { useState } from "react";
import "./Contact.css";
import img1 from "../../assets/images/vector.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function Contact() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      <div className="contact">
        <img className="vector-img" src={img1} alt="image" />
        <h1>
          Let's Connect and <span>Discuss</span>
        </h1>
        <h3 className="contact-heading">Contact Us Now</h3>

        <div className="contact-box">
          <div className="contact-left">
            <h3>What makes us different?</h3>

            {/* <div className="left-cols">
              <p>Consistency</p>
              <p>Solution Approach</p>
              <p>Partnerships</p>
              <p>Regional Language Expertise</p>
            </div> */}

            {/* Accordian */}

            <div className="left-cols">
              <div className="accordian">
                {data.map((item, i) => (
                  <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <p>
                        {item.question}{" "}
                        <span>
                          {selected === i ? (
                            <IoIosArrowUp className="arrowIcons" />
                          ) : (
                            <IoIosArrowDown className="arrowIcons" />
                          )}
                        </span>
                      </p>
                    </div>
                    <div
                      className={selected === i ? "content show" : "content"}
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accordian */}

          <div className="contact-right">
            <h2 className="heading-right">
              Discover how we can help your business grow
            </h2>
            <form>
              <div className="input-row1">
                <div className="input-group">
                  <input type="text" id="txtbox" placeholder="Full name" />
                </div>
                <div className="input-group">
                  <input type="text" id="txtbox" placeholder="Company name" />
                </div>
              </div>

              <div className="input-row2">
                <div className="input-group">
                  <input type="text" id="txtbox" placeholder="Business Email" />
                </div>
                <div className="input-group">
                  <input type="text" id="txtbox" placeholder="Contact Number" />
                </div>
              </div>

              <div className="input-group-message">
                {/* <input
                  type="text"
                  id="message-txtbox"
                  placeholder="Your Message"
                /> */}
                <textarea
                  placeholder="Your Message"
                  id="message-txtbox"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </form>

            <div className="container">
              <label className="container">
                <input type="checkbox" /> I agree to receive other
                communications from Techidol Solutions.
                <span className="checkmark"></span>
              </label>
            </div>

            <div className="button">
              <button type="button">Consult with our Experts</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    question: "Consistency",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
  },
  {
    question: "Solution Approach",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
  },
  {
    question: "Partnerships",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
  },
  {
    question: "Regional Language Expertise",
    answer:
      "We talk and understand almost every regional language in India. With our hybrid model of Work from the office and work from anywhere, we help our clients build scale",
  },
];

export default Contact;
