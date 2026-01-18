import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const links = [
  {
    link: "https://www.instagram.com/chiarabellesia_/",
    icon: faInstagram,
  },
  {
    link: "https://www.linkedin.com/in/chiara-bellesia/",
    icon: faLinkedin,
  },
  {
    link: "mailto:chiara.bellesia@gmail.com?subject=Editing%20Enquiry&body=Hello%20Chiara,%0A%0A%0A",
    icon: faEnvelope,
  },
];

const Socials = () => {
  return (
    <div className="fixed left-0 md:left-auto md:right-10 bottom-0 md:top-1/2 md:-translate-y-1/2 w-full flex justify-evenly md:justify-center z-10 bg-off-white md:w-0 md:flex-col md:items-center md:bg-transparent">
      {links.map((link, i) => (
        <a href={link.link} target="_blank" rel="noreferrer" key={i}>
          <FontAwesomeIcon
            icon={link.icon}
            size="xl"
            className="my-4 text-teal hover:text-persian"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
