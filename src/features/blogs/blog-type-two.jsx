import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../layouts/common/ALink";

export default function BlogTypeTwo(props) {
  const { blog } = props;
  let date = new Date(blog.date);
  let monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <li className="media-with-lazy">
      <figure className="post-media">
        <ALink href={`/pages/blog/${blog.slug}`}>
          {blog.picture ? (
            <>
              <div className="lazy-overlay"></div>

              <LazyLoadImage
                alt="post_image"
                src={
                  process.env.REACT_APP_LOCAL_ASSET_URL + blog.picture[0].url
                }
                threshold={500}
                width="100%"
                height="auto"
                effect="blur"
              />
            </>
          ) : (
            ""
          )}
        </ALink>
      </figure>

      <div className="post-info">
        <ALink href={`/pages/blog/${blog.slug}`}>{blog.title}</ALink>
        <div className="post-meta">
          {` ${monthArray[date.getMonth()]} ${
            date.getUTCDate() < 10
              ? "0" + date.getUTCDate()
              : date.getUTCDate() + 1
          }, ${date.getYear() + 1900}`}
        </div>
      </div>
    </li>
  );
}
