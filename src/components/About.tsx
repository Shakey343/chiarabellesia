import chiaraImg from "../assets/chiara-about.jpg";
import Socials from "./Socials";

const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 my-10 lg:my-36 gap-20">
      <div className="gap-20 w-full md:flex lg:hidden">
        <img
          src={chiaraImg}
          alt="Profile picture of Chiara Bellesia - Editor"
          className="mb-10"
        />
        <a
          href="mailto:chiarabellesia@gmail.com?subject=Editing%20Enquiry&amp;body=Hi%Chiara,"
          target="_blank"
          title="Email"
          className="hover:opacity-80 hidden md:block lg:hidden"
        >
          chiarabellesia@gmail.com
        </a>
      </div>
      <div className="lg:col-span-7 flex flex-col justify-between gap-20">
        <p className="lg:text-xl">
          Chiara Bellesia is an Italian editor based in London. Over the past
          several years, she has worked in the UK industry across documentary
          and fiction as both an editor and assistant editor, building a strong,
          collaborative, story-led practice that often explores the space
          between the two forms. Her work has been featured on WePresent,
          screened at prestigious festivals including the BFI London Film
          Festival, nominated for a Yugo BAFTA, and recognised with multiple
          awards. As editor, she is now transitioning into feature-length
          projects.
        </p>
        <a
          href="mailto:chiarabellesia@gmail.com?subject=Editing%20Enquiry&amp;body=Hi%Chiara,"
          target="_blank"
          title="Email"
          className="hover:opacity-80 hidden lg:block"
        >
          chiarabellesia@gmail.com
        </a>
        <Socials />
      </div>
      <div className="col-span-5 hidden lg:block mr-10">
        <img
          src={chiaraImg}
          alt="Profile picture of Chiara Bellesia - Editor"
        />
      </div>
    </div>
  );
};

export default About;
