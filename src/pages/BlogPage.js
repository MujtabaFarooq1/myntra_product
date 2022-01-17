// import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";

// Import Apollo Server and Query
// import withApollo from "../../../server/apollo";
// import { GET_POST } from "../../../server/queries";

import { useNavigate } from "react-router-dom";

// Import Custom Component
import ALink from "../layouts/common/ALink";
import OwlCarousel from "../features/owl-carousel";
import BlogSidebar from "../partials/blog/blog-sidebar";
import BlogTypeThree from "../features/blogs/blog-type-three";
import BlogSingle from "../features/blogs/blog-single";

//Import Settings
import { blogSlider } from "../utils/data/slider";
import fakeData from "../FakeData/fakeData";

function BlogPage() {
  //   if (!useRouter().query.slug)
  //     return (
  //       <div className="loading-overlay">
  //         <div className="bounce-loader">
  //           <div className="bounce1"></div>
  //           <div className="bounce2"></div>
  //           <div className="bounce3"></div>
  //         </div>
  //       </div>
  //     );
  //   const slug = useRouter().query.slug;
  //   const { data, loading, error } = useQuery(GET_POST, { variables: { slug } });
  const navigate = useNavigate();

  const error = false;
  const loading = false;

  const blog = fakeData.posts[0];
  const related = fakeData.posts.slice(1, 3);

  if (error) {
    navigate("/404");
  }

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">
                <i className="icon-home"></i>
              </ALink>
            </li>
            <li className="breadcrumb-item">
              <ALink href="/pages/blog">Blog</ALink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {blog && blog.title}
            </li>
          </ol>
        </div>
      </nav>

      <div
        className={`container skeleton-body skel-shop-products ${
          loading ? "" : "loaded"
        }`}
      >
        <div className="row">
          <div className="col-lg-9">
            <BlogSingle blog={blog} loading={loading} />

            {!loading && !related.length ? (
              ""
            ) : (
              <>
                <hr className="mt-2 mb-1" />

                <div className="related-posts">
                  <h4>
                    Related <strong>Posts</strong>
                  </h4>

                  <OwlCarousel
                    adClass="related-posts-carousel"
                    options={blogSlider}
                  >
                    {loading
                      ? new Array(3)
                          .fill(1)
                          .map((item, index) => (
                            <div
                              className="skel-pro skel-pro-grid"
                              key={"Skeleton:" + index}
                            ></div>
                          ))
                      : related.map((blog, index) => (
                          <BlogTypeThree
                            blog={blog}
                            key={"BlogTypeThree" + index}
                          />
                        ))}
                  </OwlCarousel>
                </div>
              </>
            )}
          </div>

          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
// export default withApollo({ ssr: typeof window === "undefined" })(Single);
