import logo from "@/assets/owr-logo.svg";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import left from "@/assets/left.svg";
import right from "@/assets/right.svg";
import top from "@/assets/products_top.svg";
import bottom from "@/assets/bottom-tablet.svg";
import { useImagesLoaded } from "@/lib/useImagesLoaded";

const Home = () => {
  const imagesLoaded = useImagesLoaded();

  return (
    <div className="bg-[url(@/assets/main_bg.png)] min-h-screen bg-no-repeat bg-cover ">
      <div className="grid place-content-center relative p-8 min-h-screen">
        <img
          src={top}
          alt=""
          className="block xl:hidden absolute top-0 left-0 w-full"
        />
        <img
          src={left}
          alt=""
          className="hidden xl:block absolute top-0 left-0 h-screen"
        />

        {imagesLoaded && (
          <AnimatedSection className="flex flex-col gap-8 items-center z-10">
            {/* <a href="/"> */}
            <img src={logo} alt="" className="mx-auto" />
            {/* </a> */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-center bg-[linear-gradient(90deg,_rgba(0,147,209,0.85)_0%,_#5CE7FF_27.4%,_#B33FFF_64.9%,_#CBB2FF_100%)] bg-clip-text text-transparent">
              15 Great Prizes{" "}
              <span className="block text-5xl my-4 text-white">
                to celebrate
              </span>{" "}
              15 Great Years
            </h1>

            <div className="flex flex-wrap sm:flex-nowrap w-full justify-center gap-4 max-w-60 mx-auto">
              <Button
                asChild
                className="bg-owr-blue hover:bg-white hover:text-owr-blue rounded-sm text-lg w-full py-6"
              >
                <a href="/draw">Enter Prize Draw</a>
              </Button>
              <Button
                asChild
                className="bg-owr-blue hover:bg-white hover:text-owr-blue rounded-sm text-lg w-full py-6"
              >
                <a href="/prizes">See Prizes</a>
              </Button>
            </div>
          </AnimatedSection>
        )}

        <img
          src={right}
          alt=""
          className="hidden xl:block absolute top-0 right-0 h-screen"
        />
      </div>
      <img
        src={bottom}
        alt=""
        className="block xl:hidden w-full -mt-48 sm:-mt-96"
      />
    </div>
  );
};

export default Home;
