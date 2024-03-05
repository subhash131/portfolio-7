import React from "react";

const MeshSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1440"
      fill="none"
    >
      <mask
        id="c"
        width="1440"
        height="1440"
        x="240"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="url(#a)" d="M0 0h1440v1440H0z" transform="translate(140)" />
      </mask>
      <g stroke="#D0D5DD" clip-path="url(#b)" mask="url(#c)">
        <g clip-path="url(#d)">
          <path d="M288.5 0v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440m96-1440v1440" />
        </g>
        <g clip-path="url(#e)">
          <path d="M0 95.5h1920M0 191.5h1920M0 287.5h1920M0 383.5h1920M0 479.5h1920M0 575.5h1920M0 671.5h1920M0 767.5h1920M0 863.5h1920M0 959.5h1920m-1920 96h1920m-1920 96h1920m-1920 96h1920m-1920 96h1920" />
        </g>
      </g>
      <defs>
        <clipPath id="b">
          <path fill="#1E2121" d="M0 0h1920v1440H0z" />
        </clipPath>
        <clipPath id="d">
          <path fill="#1E2121" d="M0 0h1920v1440H0z" />
        </clipPath>
        <clipPath id="e">
          <path fill="#1E2121" d="M0 0h1920v1440H0z" />
        </clipPath>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 1440 -751.588 0 720 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".953" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default MeshSvg;
