import React, { HTMLAttributes, ReactNode } from "react";
import "./Pagination.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  pages: number;
  currentPage: number;
  baseUrl: string;
}

export const Pagination = ({ children, ...props }: Props) => {
  const defaultClass = "w-8 h-8 flex items-center justify-center m-2";
  const linkClass =
    defaultClass + " rounded border-gray-dark border-2 bg-pink hover:bg-gray-dark hover:text-white";
  return (
    <div className="pagination">
      {props.currentPage >= 3 ? (
        <a href={props.baseUrl}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      ) : null}
      {props.currentPage === 2 ? (
        <a href={props.baseUrl}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      ) : null}
      {props.currentPage > 2 ? (
        <a href={props.baseUrl + (props.currentPage - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      ) : null}
      {props.currentPage === 2 ? <a href={props.baseUrl}>{props.currentPage - 1}</a> : null}
      {props.currentPage > 3 ? (
        <a href={props.baseUrl + (props.currentPage - 2)}>{props.currentPage - 2}</a>
      ) : null}
      {props.currentPage > 2 ? (
        <a href={props.baseUrl + (props.currentPage - 1)}>{props.currentPage - 1}</a>
      ) : null}
      <div>{props.currentPage}</div>
      {props.pages > props.currentPage ? (
        <a href={props.baseUrl + (props.currentPage + 1)}>{props.currentPage + 1}</a>
      ) : null}
      {props.pages > props.currentPage + 1 ? (
        <a href={props.baseUrl + (props.currentPage + 2)}>{props.currentPage + 2}</a>
      ) : null}
      {props.pages > props.currentPage ? (
        <a href={props.baseUrl + (props.currentPage + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      ) : null}
    </div>
  );
};
