import React from "react";

const Sign = props => {
  return (
    <svg

      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="296"
      height="650.174"
      viewBox="0 0 296 650.174"
    >
      <g id="signpost">
        <path
          id="pole"
          fill="#3D7E9E"
          d="M137.449,72.372v541.826v35.658c11.732,13.647,21.092,0,21.092,0v-35.658V72.372H137.449z"
        />
        <g id="top" fill="#3D7E9E">
          <rect x="140.186" y="31.542" width="15.619" height="9.806" />
          <path d="M140.172,41.347h15.617c1.023,7.027,7.654,9.927,8.201,12.385c0.539,2.385-5.398,4.76-5.398,4.76h-21.094 c0,0-5.533-2.395-5.533-4.841C131.965,51.201,137.498,49.522,140.172,41.347z" />
          <path d="M135.631,26.709c1.646-2.352,8.912-9.869,11.145-25.788c0-1.229,2.232-1.229,2.232,0 c2.23,15.919,9.229,22.99,11.369,26.098c2.084,3.03-4.676,4.522-4.676,4.522h-15.619C140.082,31.542,133.527,29.72,135.631,26.709 z" />
          <rect x="137.498" y="58.492" width="21.094" height="15.716" />
        </g>
        <a href="/action-plan" target="_top" className="sign-six">
          <polygon
            fill="#3D7E9E"
            points="137.449,299.237 137.449,344.237 282.789,344.237 296,321.737 282.789,299.237"
          />
          <polygon
            fill="#FFF"
            points="137.449,343.118 282.443,343.118 294.988,321.743 282.572,300.358 137.449,300.358 137.449,302.61 282.018,302.61 293.127,321.737 281.896,340.864 137.449,340.864"
          />
          <text
            className="sign-text"
            x="55%"
            y="50.5%"
            fill="white"

            style={{
              textAnchor: "start",
              fontWeight: "bold",
              fontSize: "1.2em"
            }}
          >
            Start planning
          </text>
          <polygon

            className="sign-surface-selector"
            fill="none"
            points="282.789,299.237 137.449,299.237 137.449,300.358 137.449,302.61 137.449,340.864 137.449,343.118 137.449,344.237 282.789,344.237 296,321.737"

          />
        </a>

        <polygon

          fill="#3D7E9E"
          points="158.541,254.227 158.541,299.227 13.213,299.227 0,276.723 13.213,254.227"
        />
        <polygon
          fill="#FFF"
          points="158.541,298.096 13.559,298.096 1.008,276.723 13.436,255.348 158.541,255.348 158.541,257.598 13.984,257.598 2.873,276.719 14.107,295.848 158.541,295.848"
        />
        <text
          className="sign-text"
          x="45%"
          y="43.5%"
          fill="white"

          style={{
            textAnchor: "end"
          }}
        >
          Learn about LSx
        </text>
        <polygon

          onClick={props.visibility}
          target="_top"
          className="sign-surface-selector"
          fill="#3D7E9E"
          opacity="0"
          style={{ cursor: "pointer" }}
          points="13.213,254.227 0,276.723 13.213,299.227 158.541,299.227 158.541,298.096 158.541,295.848 158.541,257.598 158.541,255.348 158.541,254.227"
        />

        <a href="https://www.google.com" target="_top" id="sign-four">
          <polygon
            fill="#3D7E9E"
            points="137.449,209.227 137.449,254.227 282.789,254.227 296,231.727 282.789,209.227"
          />
          <polygon
            fill="#FFF"
            points="137.449,253.108 282.443,253.108 294.988,231.733 282.572,210.348 137.449,210.348 137.449,212.6 282.018,212.6 293.127,231.727 281.896,250.854 137.449,250.854"
          />
          <text
            className="sign-text"
            x="55%"
            y="36.5%"
            fill="white"
            style={{
              textAnchor: "start"
            }}
          >
            Spread the word
          </text>
          <polygon
            className="sign-surface-selector"
            fill="none"
            points="282.789,209.227 137.449,209.227 137.449,210.348 137.449,212.6 137.449,250.854 137.449,253.108 137.449,254.227 282.789,254.227 296,231.727"
          />
        </a>
        <a href="/dive-deeper" target="_top" id="sign-three">
          <polygon
            fill="#3D7E9E"
            points="158.541,164.217 158.541,209.217 13.213,209.217 0,186.713 13.213,164.217"
          />
          <polygon
            fill="#FFF"
            points="159.541,208.086 14.559,208.086 2.008,186.713 14.436,165.338 159.541,165.338 159.541,167.588 14.984,167.588 3.873,186.709 15.107,205.838 159.541,205.838"
          />
          <text
            className="sign-text"
            x="45%"
            y="29.6%"
            fill="white"

            style={{
              textAnchor: "end"
            }}
          >
            Dive into the data
          </text>
          <polygon

            className="sign-surface-selector"
            fill="none"
            points="13.213,164.217 0,186.713 13.213,209.217 158.541,209.217 158.541,208.086 158.541,205.838 158.541,167.588 158.541,165.338 158.541,164.217"
          />
        </a>
        <a href="/experiments" target="_top" id="sign-two">
          <polygon
            fill="#3D7E9E"
            points="137.449,119.217 137.449,164.217 282.789,164.217 296,141.718 282.789,119.217"
          />
          <polygon
            fill="#FFF"
            points="137.449,163.099 282.443,163.099 294.988,141.723 282.572,120.339 137.449,120.339 137.449,122.59 282.018,122.59 293.127,141.718 281.896,160.845 137.449,160.845"
          />
          <text
            className="sign-text"
            x="55%"
            y="22.6%"
            fill="white"

            style={{
              textAnchor: "start"
            }}
          >
            Collect some data
          </text>
          <polygon

            className="sign-surface-selector"
            fill="none"
            points="282.789,119.217 137.449,119.217 137.449,120.339 137.449,122.59 137.449,160.845 137.449,163.099 137.449,164.217 282.789,164.217 296,141.718"
          />
        </a>
        <a href="/success-stories" target="_top" id="sign-one">
          <polygon
            fill="#3D7E9E"
            points="158.541,74.208 158.541,119.208 13.213,119.208 0,96.705 13.213,74.208"
          />
          <polygon
            fill="#FFF"
            points="158.541,118.078 13.559,118.078 1.008,96.705 13.436,75.329 158.541,75.329 158.541,77.579 13.984,77.579 2.873,96.7 14.107,115.829 158.541,115.829"
          />
          <text
            className="sign-text"
            x="45%"
            y="15.8%"
            fill="white"

            style={{
              textAnchor: "end"
            }}
          >
            Success stories
          </text>
          <polygon

            className="sign-surface-selector"
            fill="none"
            points="13.213,74.208 0,96.705 13.213,119.208 158.541,119.208 158.541,118.078 158.541,115.829 158.541,77.579 158.541,75.329 158.541,74.208"

          />
        </a>
      </g>
    </svg>
  );
};

export default Sign;
