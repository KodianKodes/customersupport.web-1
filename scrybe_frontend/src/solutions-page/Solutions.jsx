import React from "react";
import "./Solutions.scss";

import heroImg from "./assets/hero-img.png";
import durationIcon from "./assets/time-icon.svg";
import transcribeIcon from "./assets/transcribe-icon.svg";
import sentimentsIcon from "./assets/sentiment-icon.svg";
import uploadImg from "./assets/upload-img.png";
import monitor from "./assets/monitor.png";

function Solutions() {
  return (
    <div className="solution-section">
      <div className="content-section">
        <div className="container">
          <div className="flex-items">
            <div className="txt-item">
              <h1>
                Get In-depth Knowledge of Customer Service Engagement with
                Scrybe
              </h1>
              <p>
                With Scrybe, you can convert all recorded calls into readable
                and searchable text and automatically analyze recordings to
                extract sentiment analysis data
              </p>
              <div className="btns">
                <button type="button" className="filled">
                  Try Free
                </button>
                <button type="button" className="transparent">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="img-item">
              <img src={heroImg} alt="group" />
            </div>
          </div>
        </div>
      </div>

      <div className="why-scrybe">
        <div className="container">
          <h1>Why Scribe</h1>
          <p>
            Our product’s-solution cuts across various pain points faced by call
            center/customer support managers. We help you:
          </p>

          <div className="card-container">
            <div className="card">
              <img src={durationIcon} alt="duration" />
              <p>Break your audio files into sections using time frames</p>
            </div>
            <div className="card">
              <img src={transcribeIcon} alt="transcribe" />
              <p>Transcribe your audio files with your personalized options</p>
            </div>
            <div className="card">
              <img src={sentimentsIcon} alt="sentiment" />
              <p>
                Run sentiment anaylsis on audio files to monitor customer calls
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="buss-section">
        <div className="container">
          <div className="buss-flex">
            <div className="buss-txt">
              <h1>
                Businesses with call centers know sentiment analysis data is
                crucial, but finding an accurate service is time-intensive
              </h1>

              <p>
                Scrybe is accurate and available within minutes via a seamless
                upload process, letting you use your time for other tasks!
                Outsourcing customer feedback to Scrybe will save work hours and
                compile reliable data on your customers thinking.
              </p>

              <h4>
                Discover what your customers really think about you as a call
                center.
              </h4>
            </div>
            <div className="buss-img">
              <img src={uploadImg} alt="upload" />
            </div>
          </div>
        </div>
      </div>

      <div className="buss-section">
        <div className="container">
          <div className="buss-flex">
            <div className="buss-img">
              <img src={monitor} alt="upload" />
            </div>
            <div className="buss-txt">
              <h1>
                Monitoring customer service conversations and identifying
                unhappy customers is time-consuming and expensive
              </h1>

              <p>
                Scrybe boosts your call center management efficiency by
                automating the transcription and sentiment analysis process, so
                you can focus more on what needs your attention: reevaluating
                customer concerns. Could it get any easier? Set up a few rules
                to customize and keep tabs on how human-like your bots sound
                with just a few clicks.
              </p>

              <h4>
                Ascertain the efficiency of your customer support with generated
                activity data.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
