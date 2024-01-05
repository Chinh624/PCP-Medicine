import bestseller from "../image/icon/bestseller.png";
import hand from "../image/icon/hand.png";
import mother from "../image/icon/mother.png";
import notes from "../image/icon/notes.png";
import Ellipse44 from "../image/image/Ellipse44.png";
import Ellipse45 from "../image/image/Ellipse45.png";
import Ellipse46 from "../image/image/Ellipse46.png";
import Ellipse47 from "../image/image/Ellipse47.png";
import slide1 from "../image/image/slide1.jpg";
import slide2 from "../image/image/slide2.jpg";
import slide3 from "../image/image/slide3.jpg";
import slide4 from "../image/image/slide4.jpg";
import slide5 from "../image/image/slide5.jpg";
import banner1 from "../image/image/banner1.jpg";
import banner2 from "../image/image/banner2.jpg";
import banner3 from "../image/image/banner3.jpg";
import banner4 from "../image/image/banner4.jpg";

const data = {
  menu: [
    {
      id: "1",
      text: "Home",
      link: "/",
    },
    {
      id: "2",
      text: "Shop",
      link: "/shop",
    },
    {
      id: "3",
      text: "About Us",
      link: "/aboutus",
    },
    {
      id: "4",
      text: "Events",
      link: "/events",
    },
  ],
  information: [
    {
      user: "1",
      img: Ellipse44,
      name: "Warso Setyo",
      service: "Sr Manager, India",
    },
    {
      user: "2",
      img: Ellipse45,
      name: "Retno Hadi",
      service: "Manager, Europe",
    },
    {
      user: "3",
      img: Ellipse46,
      name: "Nursholaha",
      service: "Asst. Manager, India",
    },
    {
      user: "4",
      img: Ellipse47,
      name: "Zubaidah",
      service: "Manager, India",
    },
  ],
  specialties: [
    {
      icon: hand,
      text: "Our Journey",
      slogan:
        "Delivering on our promise toward innovative science and healthcare",
    },
    {
      icon: bestseller,
      text: "Quality",
      slogan:
        "Our vision is to globalize, harmonize and simplify GxP processes to achieve sustainable quality culture",
    },
    {
      icon: mother,
      text: "Beyond Medicines",
      slogan:
        "The Medicine Foundation works in over 4,500 villages to ensure sustainable development",
    },

    {
      icon: notes,
      text: "Perspectives",
      slogan: "Insights from the leading minds in our industry",
    },
  ],
  slides: [
    {
      img: slide1,
    },

    {
      img: slide2,
    },

    {
      img: slide3,
    },
    {
      img: slide4,
    },
    {
      img: slide5,
    },
  ],
  banner: [
    {
      img: banner1,
    },
    {
      img: banner2,
    },
    {
      img: banner3,
    },
    {
      img: banner4,
    },
  ],
};

export default data;
