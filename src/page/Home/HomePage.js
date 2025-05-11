import Category from "../../component/Category/Category";
import HeroSection from "../../component/HeroSection/HeroSection";
import HomePageProductCard from "../../component/HomePageProductCart/HomePageProductCart";
import Layout from "../../component/Layout/Layout";
import Testimonial from "../../component/TestimonialComponent/Testimonial";
import Track from "../../component/Track/Track";

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard />
            <Track />
            <Testimonial />
        </Layout>
    );
}

export default HomePage;