import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

export default function Home() {

  return (
    <>


      <HomeSlider />
      <div className="container">

        <HomeFeatures />
        <HomeCategories />
        <HomeDeals />
      </div>
    </>
  )
}
