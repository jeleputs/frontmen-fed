import React from 'react';
export default function svgLoader() {
  return (
    <svg
      width="50px"
      height="50px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="lds-ellipsis"
      style={{
        background: 'none',
        'shape-rendering': 'auto',
        display: 'block',
        margin: 'auto'
      }}
    >
      <circle cx="84" cy="50" r="0" fill="#3b4368" className="">
        <animate
          attributeName="r"
          values="10;0;0;0;0"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
        <animate
          attributeName="cx"
          values="84;84;84;84;84"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
      </circle>
      <circle cx="84" cy="50" r="0.354948" fill="#5e6fa3" className="">
        <animate
          attributeName="r"
          values="0;10;10;10;0"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          className=""
        />
        <animate
          attributeName="cx"
          values="16;16;50;84;84"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          className=""
        />
      </circle>
      <circle cx="82.7932" cy="50" r="10" fill="#689cc5" className="">
        <animate
          attributeName="r"
          values="0;10;10;10;0"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
          className=""
        />
        <animate
          attributeName="cx"
          values="16;16;50;84;84"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
          className=""
        />
      </circle>
      <circle cx="48.7932" cy="50" r="10" fill="#93dbe9" className="">
        <animate
          attributeName="r"
          values="0;10;10;10;0"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
        <animate
          attributeName="cx"
          values="16;16;50;84;84"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
      </circle>
      <circle cx="16" cy="50" r="9.64505" fill="#3b4368" className="">
        <animate
          attributeName="r"
          values="0;0;10;10;10"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
        <animate
          attributeName="cx"
          values="16;16;16;50;84"
          keyTimes="0;0.25;0.5;0.75;1"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          calcMode="spline"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          className=""
        />
      </circle>
    </svg>
  );
}
