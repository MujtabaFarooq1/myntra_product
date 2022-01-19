import React from "react";
// import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
// import withApollo from "../server/apollo";
// import { GET_HOME_DATA } from "../server/queries";

// Import Custom Component
import NewsletterModal from "../features/modals/newsletter-modal";
import HomeSection from "../partials/home/home-section";
import InfoSection from "../partials/home/info-section";
import BannerSection from "../partials/home/banner-section";
import FeaturedCollection from "../partials/home/featured-collection";
import NewCollection from "../partials/home/new-collection";
import SaleBanner from "../partials/home/sale-banner";
import ProductWidgetContainer from "../partials/home/product-widget-container";
import CategorySection from "../partials/home/category-section";
import FeatureBoxSection from "../partials/home/feature-box-section";
import PromoSection from "../partials/home/promo-section";
import BrandSection from "../partials/home/brand-section";
import BlogSection from "../partials/home/blog-section";
import fakeData from "../FakeData/fakeData";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomePage() {
  const data = fakeData;
  const loading = false;
  //   const { data, loading, error } = useQuery(GET_HOME_DATA, {
  //     variables: { productsCount: 7, postsCount: 6 },
  //   });
  //   const featured = data?.specialProducts?.featured || [];
  //   const bestSelling = data?.specialProducts?.bestSelling || [];
  //   const latest = data?.specialProducts?.latest || [];
  //   const topRated = data?.specialProducts?.topRated || [];

  const featured = data?.products?.slice(0, 10) || [];
  const bestSelling = data?.products?.slice(3, 10) || [];
  const latest = data?.products?.slice(6, 16) || [];
  const topRated = data?.products?.slice(0, 10) || [];

  const blog = data && data.posts;

  //   if (error) {
  //     return <div>{error.message}</div>;
  //   }

  return (
    <>
      <main
        className={`skeleton-body skel-shop-products ${loading ? "" : "loaded"
          }`}
      >
        <HomeSection />




        <div className="row ml-3 mr-3 mb-2">
          <div className="col-12">
            <LazyLoadImage
              alt={"customBanner1"}
              height={"auto"}
              src={"/images/banners/customBanner1.png"} // use normal <img> attributes as props
              width={"100%"}
            />
          </div>
        </div>




        <div className="row ml-3 mr-3">
          <div className="col-12">
            <LazyLoadImage
              alt={"customBanner1"}
              height={"auto"}
              src={"/images/banners/customBanner2.png"} // use normal <img> attributes as props
              width={"100%"}
              style={{ marginBottom: "1rem" }}
            />
          </div>
        </div>

        <div className="row text-center ml-5 mr-5 mb-5">
          <div className="col-12 mb-2">
            <img src="./images/brand-1.png" alt="" />
          </div>
          <div className="bannerSectionContainer">
            <BannerSection />
          </div>
        </div>

        <div className="container">
          {/* <InfoSection /> */}

          {/* <BannerSection /> */}
        </div>

        <FeaturedCollection product={featured} loading={loading} />

        <NewCollection product={latest} loading={loading} />

        <div className="container">
          <SaleBanner />

          <CategorySection />
        </div>

        <FeatureBoxSection />

        <PromoSection />

        <BlogSection blog={blog} loading={loading} />

        <div className="container">
          <hr className="mt-0 mb-0" />

          <BrandSection />

          <hr className="mt-0 mb-0" />
        </div>

        {/* <ProductWidgetContainer
          featured={featured}
          latest={latest}
          bestSelling={bestSelling}
          topRated={topRated}
          loading={loading}
        /> */}
      </main>

      <NewsletterModal />
    </>
  );
}

// export default withApollo({ ssr: typeof window === "undefined" })(Home);
export default HomePage;
