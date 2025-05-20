import React from "react";
import logo from "@/assets/owr-logo.svg";
import AnimatedSection from "@/components/AnimatedSection";
import DrawForm from "@/components/DrawForm";
import Thankyou from "@/components/Thankyou";

const Draw = () => {
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);

  const onSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[url(@/assets/entry_form_bg.png)] min-h-screen bg-no-repeat bg-cover grid gap-16 place-content-center grid-cols-1 p-8">
      {/* <a href="/"> */}
      <img src={logo} alt="" className="mx-auto" />
      {/* </a> */}
      <AnimatedSection key={formSubmitted ? "thankyou" : "form"}>
        {formSubmitted ? <Thankyou /> : <DrawForm onSuccess={onSuccess} />}
      </AnimatedSection>
    </div>
  );
};

export default Draw;
