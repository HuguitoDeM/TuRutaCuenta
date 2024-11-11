import React from "react";

const Icons = {
  Home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333zM13 19v-4h-2v4z" />
    </svg>
  ),
  Explorador: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="#000000"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" />
        <path d="m12.401 8.298l2.92-.973c.886-.296 1.33-.443 1.564-.21c.233.234.086.677-.21 1.564l-.973 2.92c-.503 1.51-.755 2.265-1.297 2.806c-.541.542-1.296.794-2.806 1.297l-2.92.973c-.887.296-1.33.444-1.564.21s-.086-.678.21-1.564l.973-2.92c.503-1.51.755-2.265 1.297-2.806c.541-.542 1.296-.794 2.806-1.297M12 12l-.006.006" />
      </g>
    </svg>
  ),
  User: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" />
    </svg>
  ),
  logo: (
    <svg xmlns="http://ww.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="M62.3 43.9c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 3.2 3.2 8.8 5.6 12.6H18.6c-1.4 0-2.8-.6-3.8-1.6c-1.3-1.3-1.8-3.1-1.4-5c.5-2.4 2.8-4.2 5.5-4.2h9.9c2.6 0 5.1-1 7-2.9c2.7-2.7 3.6-6.6 2.3-10.3c-1.3-3.9-5.1-6.6-9.5-6.6H15.8c2.4-3.9 5.7-9.8 5.7-13.1c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 4.6 6.7 14.6 8 16.6l.3.3l.1.1c.1.1.2.1.3.2l.1.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1h17c2.4 0 4.5 1.4 5.2 3.5s.2 4.2-1.3 5.7c-1 1-2.3 1.6-3.8 1.6h-9.9c-4.9 0-9 3.3-9.9 7.8c-.7 3.3.3 6.7 2.7 9c1.9 1.9 4.3 2.9 7 2.9h33.8c.2 0 .3 0 .5-.1h.1c.1 0 .2-.1.3-.1s.1-.1.2-.1c.1-.1.2-.1.3-.2l.1-.1c.1-.1.2-.2.2-.3c0 0 .1 0 .1-.1c1.5-1.6 8.2-11.2 8.2-15.9M11.7 7.5c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 7-5.3 11.2c-2.7-4.2-5.4-9.2-5.4-11.2c0-2.9 2.4-5.3 5.4-5.3m40.7 31.1c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 6.8-5.4 10.8c-2.6-4-5.4-8.9-5.4-10.8c.1-2.9 2.5-5.3 5.5-5.3" />
      <path d="M13.9 12.7c0-.6-.2-1.2-.6-1.6c-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.1.3-.2.4s-.1.3-.1.4v.8c0 .1.1.3.1.4s.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.3-.2.6-.8.6-1.4M54 45.9c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2c-.1 0-.3-.1-.4-.1H52c-.1 0-.3.1-.4.1c-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6l.3.3c.1.1.3.1.4.2c.1 0 .3.1.4.1h.4c.6 0 1.2-.2 1.6-.6" />
    </svg>
  ),
  arrow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      />
    </svg>
  ),

  newPost: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M5.161 2H16.34c.527 0 .982 0 1.356.03c.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167c.031.375.031.83.031 1.356V12.5a1 1 0 1 1-2 0V6.2c0-.577 0-.949-.024-1.232c-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C17.25 4 16.877 4 16.3 4H5.2c-.577 0-.949 0-1.232.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C3 5.25 3 5.623 3 6.2V21a1 1 0 1 1-2 0V6.161c0-.527 0-.981.03-1.356c.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C4.18 2 4.635 2 5.161 2"
      />
      <path
        fill="#ffffff"
        d="M6.5 6.5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm5.53 3.5c-.122 0-.255 0-.37.01a1.3 1.3 0 0 0-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.19c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.94c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.246.009-.369v-1.19c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127C14.225 10 14.093 10 13.97 10zM6.5 11a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 6.5 11m0 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m0 2.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6.5 16m0 2.5a.75.75 0 0 1 .75-.75h4.8a.75.75 0 0 1 0 1.5h-4.8a.75.75 0 0 1-.75-.75M20.25 16a.75.75 0 0 0-1.5 0v1.75H17a.75.75 0 0 0 0 1.5h1.75V21a.75.75 0 0 0 1.5 0v-1.75H22a.75.75 0 0 0 0-1.5h-1.75z"
      />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fill="#dc2626"
        fillRule="evenodd"
        d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

interface props {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 24, color = "white" }: props) => {
  const icon = Icons[name as keyof typeof Icons];

  if (!icon) {
    return null;
  }
  return React.cloneElement(icon, {
    width: size,
    height: size,
    fill: color,
  });
};

export default Icon;
