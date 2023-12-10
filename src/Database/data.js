import bestseller from "../img-icon/bestseller.png";
import hand from "../img-icon/hand.png";
import mother from "../img-icon/mother.png";
import notes from "../img-icon/notes.png";
import Ellipse44 from "../img/Ellipse44.png";
import Ellipse45 from "../img/Ellipse45.png";
import Ellipse46 from "../img/Ellipse46.png";
import Ellipse47 from "../img/Ellipse47.png";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpg";
import slide5 from "../img/slide5.jpg";

const data = {
  menu: [
    {
      number: "1",
      text: "Home",
      link: "/",
    },
    {
      number: "2",
      text: "Shop",
      link: "/shop",
    },
    {
      number: "3",
      text: "About Us",
      link: "/aboutus",
    },
    {
      number: "4",
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
  explore: [],
  ourtherapies: [
    { id: 1, name: "Therapy 1", description: "Description of Therapy 1." },
    { id: 2, name: "Therapy 2", description: "Description of Therapy 2." },
    { id: 3, name: "Therapy 3", description: "Description of Therapy 3." },
  ],
  medicineData: [
    {
      id: 1,
      name: "picture medicine",
      image: "medicine1.jpg",
      description: "Description ",
    },
    {
      id: 2,
      name: "picture medicine",
      image: "medicine2.jpg",
      description: "Description ",
    },
    {
      id: 3,
      name: "picture medicine",
      image: "medicine3.jpg",
      description: "Description ",
    },
  ],
};

export default data;
