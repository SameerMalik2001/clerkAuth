import React, { FC } from 'react';

interface DeleteType {
  color: string;
  size: number;
}

const Delete: FC<DeleteType> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      x="0"
      y="0"
      viewBox="0 0 14 14"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          fill={color}
          d="M13.48 2.61H9.92C9.63 1.27 8.43.25 7 .25S4.37 1.27 4.08 2.61H.52v1.5h1.12l.86 7.96c.1.95.9 1.67 1.86 1.67h5.27c.96 0 1.76-.72 1.86-1.67l.86-7.96h1.12v-1.5zM7 1.75c.6 0 1.11.36 1.35.86H5.66c.23-.5.74-.86 1.34-.86z"
        />
      </g>
    </svg>
  );
};

export default Delete;
