// href is used instead of href
// https://stackoverflow.com/questions/46215614/property-does-not-exist-on-type-detailedhtmlprops-htmldivelement-with-react

import React from "react";

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-4 pt-6 items-center">
      <a
        aria-label="GitHub"
        title="GitHub"
        href="https://github.com/jeffreydyao"
      >
        <svg
          className="w-5 fill-neutral-50 hover:fill-blue-300 transition-all duration-[100]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5.85a6.65 6.65 0 0 0-2.102 12.96c.332.061.454-.144.454-.32 0-.159-.006-.576-.01-1.131-1.849.401-2.24-.892-2.24-.892-.302-.768-.738-.973-.738-.973-.604-.412.046-.404.046-.404.667.047 1.018.685 1.018.685.594 1.017 1.557.723 1.936.553.06-.43.232-.723.422-.889-1.477-.168-3.029-.738-3.029-3.287 0-.726.26-1.319.685-1.784-.069-.168-.297-.844.065-1.76 0 0 .558-.179 1.828.681.53-.147 1.1-.22 1.665-.223a6.394 6.394 0 0 1 1.665.223c1.27-.86 1.827-.68 1.827-.68.363.915.135 1.59.066 1.759.427.465.684 1.058.684 1.784 0 2.555-1.555 3.117-3.036 3.282.238.205.45.611.45 1.232 0 .888-.007 1.605-.007 1.823 0 .178.12.385.457.32A6.652 6.652 0 0 0 7.499.85Z"
          />
        </svg>
      </a>
      <a aria-label="LinkedIn" title="LinkedIn - WIP">
        {" "}
        {/* TODO: Update LinkedIn profile and add link */}
        <svg
          className="w-4 fill-neutral-50 hover:fill-blue-300 transition-all duration-[100]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 13"
        >
          <path d="M12.038 0H.96C.43 0 0 .419 0 .937V12.06c0 .518.43.94.96.94h11.078c.53 0 .962-.421.962-.937V.937A.95.95 0 0 0 12.038 0ZM3.857 11.078h-1.93V4.872h1.93v6.206Zm-.965-7.051a1.118 1.118 0 1 1-.004-2.236 1.118 1.118 0 0 1 .004 2.236Zm8.186 7.05H9.15V8.063c0-.719-.013-1.646-1.003-1.646-1.003 0-1.155.785-1.155 1.595v3.067H5.068V4.872h1.848v.849h.026c.256-.488.886-1.003 1.823-1.003 1.952 0 2.313 1.284 2.313 2.955v3.405Z" />
        </svg>
      </a>
      <a aria-label="Twitter" title="Twitter - WIP">
        {" "}
        {/* TODO: Update LinkedIn profile and add link */}
        <svg
          className="w-5 fill-neutral-50 hover:fill-blue-300 transition-all duration-[100]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127 1.014 0 1.823.479 2.365 1.175a5.246 5.246 0 0 0 1.626-.629 2.634 2.634 0 0 1-1.148 1.45l.002.003a5.26 5.26 0 0 0 1.5-.413l-.001.002c-.337.505-.76.95-1.248 1.313.026.177.04.354.04.53 0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 0 1-4.296-1.26.5.5 0 0 1-.108-.748.45.45 0 0 1 .438-.215c.916.108 1.83-.004 2.637-.356a3.086 3.086 0 0 1-1.69-1.876.45.45 0 0 1 .103-.448 3.07 3.07 0 0 1-1.045-2.31v-.034a.45.45 0 0 1 .365-.442 3.068 3.068 0 0 1-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 0 1 .323-.208.5.5 0 0 1 .538.161 6.964 6.964 0 0 0 4.46 2.507v-.044Zm-1.712 7.279a6.936 6.936 0 0 1-2.249-.373 5.318 5.318 0 0 0 2.39-1.042.45.45 0 0 0-.27-.804 2.174 2.174 0 0 1-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 0 0-.028-.876 2.18 2.18 0 0 1-1.644-1.474c.2.048.409.077.623.084a.45.45 0 0 0 .265-.824A2.177 2.177 0 0 1 2.48 3.87c0-.168.003-.317.013-.453a7.95 7.95 0 0 0 5.282 2.376.5.5 0 0 0 .513-.61 2.127 2.127 0 0 1 2.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974Z"
          />
        </svg>
      </a>
      <a aria-label="Email" title="Email" href="mailto:hello@jyao.me">
        <svg
          className="w-5 fill-neutral-50 hover:fill-blue-300 transition-all duration-[100]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H1Zm0 1h13v.925a.448.448 0 0 0-.241.07L7.5 7.967 1.241 3.995A.448.448 0 0 0 1 3.925V3Zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0L1 4.908Z"
          />
        </svg>
      </a>
    </div>
  );
}
