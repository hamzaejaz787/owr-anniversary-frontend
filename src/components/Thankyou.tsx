import { ArrowLeft } from "lucide-react";

const Thankyou = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-8xl 2xl:text-9xl font-bold text-center bg-[linear-gradient(90deg,_rgba(0,147,209,0.85)_0%,_#5CE7FF_27.4%,_#B33FFF_64.9%,_#CBB2FF_100%)] bg-clip-text text-transparent">
        Thank You
      </h1>
      <p className="text-center text-white text-lg 2xl:text-2xl">
        Your entry has been submitted <br /> The prize draw will take place on
        28.07.25{" "}
      </p>
      <a
        href="/"
        className="flex items-center gap-1 text-white hover:text-owr-blue hover:underline mx-auto w-fit"
      >
        <ArrowLeft /> Home
      </a>
    </div>
  );
};

export default Thankyou;
