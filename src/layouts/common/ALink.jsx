import React from "react";

// import Link from "next/link";
// import { useRouter } from 'next/router';

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ALink({ children, className, style, href, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (typeof href === "object") {
    if (!href?.pathname) {
      href.pathname = location.pathname;
    }

    if (href?.query && href?.query?.grid) {
      href.pathname.replace("[grid]", href.query.grid);
    }
  }

  return (
    <>
      {href !== "#" && typeof href === "object" ? (
        <Link
          className={className}
          style={style}
          to={href.pathname || "/"}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <Link className={className} style={style} to={href} {...props}>
          {children}
        </Link>
      )}
    </>
  );
}
