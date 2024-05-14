import guarantee from "../modules/shared/images/guarantee.svg";
import heart from "../modules/shared/images/heart.svg";
import agent from "../modules/shared/images/agent.svg";
import support from "../modules/shared/images/support.svg";
import indo1 from "../modules/shared/images/indo1.png";
import indo2 from "../modules/shared/images/indo2.png";
import japan1 from "../modules/shared/images/japan1.png";
import japan2 from "../modules/shared/images/japan2.png";
import korea from "../modules/shared/images/korea.png";
import sydney from "../modules/shared/images/sydney.png";

const contentField =
  "A small river named Duren flows by their place and supplies";

export const priorities = [
  {
    id: 1,
    img: guarantee,
    title: "Best Price Guarantee",
    content: contentField,
  },
  {
    id: 2,
    img: heart,
    title: "Travellers Love Us",
    content: contentField,
  },
  {
    id: 3,
    img: agent,
    title: "Best Travel Agent",
    content: contentField,
  },
  {
    id: 4,
    img: support,
    title: "Our Dedicated Support",
    content: contentField,
  },
];

export const tripList = [
  {
    id: 1,
    img: sydney,
    title: "6D/4N Fun Tassie Vacation ...",
    price: "IDR. 12,398,000",
    country: "Australia",
    code: "12/15",
  },
  {
    id: 2,
    img: korea,
    title: "6D/4N Exciting Summer in ...",
    price: "IDR. 10,288,000",
    country: "South Korea",
    code: "14/15",
  },
  {
    id: 3,
    img: japan1,
    title: "8D/6N Wonderful Autum ...",
    price: "IDR. 28,999,000",
    country: "Japan",
    code: "14/15",
  },
  {
    id: 4,
    img: indo1,
    title: "4D/3N Overland Jakarta B...",
    price: "IDR. 3,188,000",
    country: "Indonesia",
    code: "10/15",
  },
  {
    id: 5,
    img: indo2,
    title: "4D/3N Labuan Bajo Delight",
    price: "IDR. 12,398,000",
    country: "Indonesia",
    code: "8/10",
  },
  {
    id: 6,
    img: japan2,
    title: "5D/4N Magic Tokyo Fun",
    price: "IDR. 11,188,000",
    country: "Japan",
    code: "10/15",
  },
];
