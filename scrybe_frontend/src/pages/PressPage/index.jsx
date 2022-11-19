import React from 'react'
import pressCardone from "../myAssets/pressCardone.png"
import pressCardtwo from "../myAssets/pressCardtwo.png"
import pressCardthree from "../myAssets/pressCardthree.png"
import pressSmcardOne from "../myAssets/pressSmcardOne.png"
import pressSmcardTwo from "../myAssets/pressSmcardTwo.png"
import headDot from "../myAssets/headDot.png"

const index = () => {
  return (
    <div>
      <section className="section__one">
        <div className="sect__container">
          <div>
            <h1>
              <span>News</span>room
              <span>
                <img src={headDot} alt="Full stop" />
              </span>
            </h1>
          </div>
          <div>
            <p>Get access to our news, Updates, and Notifications</p>
          </div>
        </div>
      </section>
      <section className="section__two">
        <div className="sect__container"></div>
      </section>
      <section className="section__three">
        <div className="sect__container">
          <div>
            <p>
              An AI powered tool tailored for customers success and satisfaction
            </p>
          </div>
          <div>
            <div>
                <div>
                    <p>2022</p>
                    <p>Founded</p>
                </div>
                <div>
                    <p>20+</p>
                    <p>Active Users</p>
                </div>
            </div>
            <div>
                <div>
                    <p>200+</p>
                    <p>Employees</p>
                </div>
                <div>
                    <p>Headquartered</p>
                    <p>in Abuja Nigeria</p>
                </div>
            </div>
            <div>
                <p>Get in touch</p>
                <p>info@scrybe.co.za</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__four">
        <div className="sect__container">
            <div>
                <h2>Featured</h2>
            </div>
            <div>
                <div>
                    <img src={pressCardone} alt="Icon of press card" />
                </div>
                <div>
                    <img src={pressCardtwo} alt="Icon of press card" />
                </div>
                <div>
                    <img src={pressCardthree} alt="Icon of press card" />
                </div>
                <div>
                    <img src={pressCardone} alt="Icon of press card" />
                </div>
            </div>
        </div>
      </section>
      <section className="section__five">
        <div className="sect__container">
            <div>
                <div>
                    <a href='/'>Latest news</a>
                </div>
                <div>
                    <a href='/'>Brand guideline</a>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src={pressSmcardOne} alt="Icon of Press cards" />
                    </div>
                    <div>
                        <h3>Social Media sentiment analysis using twitter datasets</h3>
                    </div>
                    <div>
                        <p>Several hundreds of thousands of raw data are...</p>
                    </div>
                    <div>
                        <p>Read more</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={pressSmcardTwo} alt="Icon of Press cards" />
                    </div>
                    <div>
                        <h3>Social Media sentiment analysis using twitter datasets</h3>
                    </div>
                    <div>
                        <p>Several hundreds of thousands of raw data are...</p>
                    </div>
                    <div>
                        <p>Read more</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default index
