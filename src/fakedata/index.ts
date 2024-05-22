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
    price: 12_398_000,
    country: "Australia",
    code: "12/15",
  },
  {
    id: 2,
    img: korea,
    title: "6D/4N Exciting Summer in ...",
    price: 10_288_000,
    country: "South Korea",
    code: "14/15",
  },
  {
    id: 3,
    img: japan1,
    title: "8D/6N Wonderful Autum ...",
    price: 28_999_000,
    country: "Japan",
    code: "14/15",
  },
  {
    id: 4,
    img: indo1,
    title: "4D/3N Overland Jakarta B...",
    price: 3_188_000,
    country: "Indonesia",
    code: "10/15",
  },
  {
    id: 5,
    img: indo2,
    title: "4D/3N Labuan Bajo Delight",
    price: 12_398_000,
    country: "Indonesia",
    code: "8/10",
  },
  {
    id: 6,
    img: japan2,
    title: "5D/4N Magic Tokyo Fun",
    price: 11_188_000,
    country: "Japan",
    code: "10/15",
  },
];

export const transactionList = [
  {
    id: 1,
    name: "John Doe",
    trip: "6D/4N Fun Tassie Vaca ...",
    attachment: "bca.jpg",
    status: "Waiting Payment",
  },
  {
    id: 2,
    name: "Haris Rahman",
    trip: "6D/4N Exciting Summer...",
    attachment: "bni.jpg",
    status: "Approve",
  },
  {
    id: 3,
    name: "Amin Subagiyo",
    trip: "6D/4N Fun Tassie Vaca ...",
    attachment: "permata.jpg",
    status: "Waiting Approve",
  },
  {
    id: 4,
    name: "Haris Astina",
    trip: "6D/4N Wonderful Autum ...",
    attachment: "permata.jpg",
    status: "Waiting Approve",
  },
  {
    id: 5,
    name: "Philip Lamp",
    trip: "6D/4N Magic Tokyo ...",
    attachment: "bi.jpg",
    status: "Waiting Payment",
  },
  {
    id: 6,
    name: "Max Stone",
    trip: "6D/4N Labuan Bajo ...",
    attachment: "bni.jpg",
    status: "Approve",
  },
];
