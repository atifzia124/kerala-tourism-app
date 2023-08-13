import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://twitter.com/ATIFZIA124",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://twitter.com/ATIFZIA124",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://twitter.com/ATIFZIA124",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-camera fa-fw",
    title: "sightseeing",
    text: "Kerala is also known as God's own Country. Enjoy the tropical paradise of waving palms and wide, sandy beaches. ",
  },
  {
    id: 2,
    icon: "fas fa-car fa-fw",
    title: "transfer",
    text: "A dedicated vehicle is provided 24/7 so you don't miss any beautiful sight without compromising comfort ",
  },
  {
    id: 3,
    icon: "fas fa-utensils fa-fw",
    title: "food",
    text: "Enjoy the Cuisines of Kerala. Breakfast, Lunch and Dinner will be provided.",
  },
  {
    id: 4,
    icon: "fas fa-hotel fa-fw",
    title: "hotel",
    text: "Grab the best and discounted hotels in Kerala at affordabale prices",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 13th, 2023",
    title: "Munnar Adventure",
    info: "Virgin forests, savannah, rolling hills, scenic valleys, numerous streams, huge splashy waterfalls, sprawling tea plantations and winding walkways are all part of the great holiday experience on offer for a traveler to Munnar.",
    location: "munnar",
    duration: 4,
    price: 6000,
  },
  {
    id: 2,
    image: tour2,
    date: "august 17th, 2023",
    title: "best of kodaikanal",
    info: "Kodaikanal, the famous hill-station of South India, is situated on Palni hills.From honeymoon to family trip to adventure holidays to religious tour, Kodaikanal offers something for each and every one. Often referred as 'Princess of Hill stations', Kodaikanal is one of the most popular tourist destinations. ",
    location: "kodaikanal",
    duration: 2,
    price: 3000,
  },
  {
    id: 3,
    image: tour3,
    date: "august 19th, 2023",
    title: "explore Alappuzha",
    info: "A town with canals, backwaters, beaches, and lagoons, Alappuzha was described by George Curzon, Viceroy of India at the start of the 20th century, as the 'Venice of the East.' Hence, it is known as the 'Venetian Capital' of Kerala. It is an important tourist destination in India.",
    location: "Alleppey",
    duration: 2,
    price: 2000,
  },
  {
    id: 4,
    image: tour4,
    date: "august 21st, 2023",
    title: "Kochi highlights",
    info: "Kochi is the cultural and economic capitals of Kerala. It’s a hub of tourist activity and attracts visitors from all over the world. From Chinese fishing nets to exotic spice cultivations, there’s a lot to feast your eyes upon in Kochi. This city is an amalgamation of various cultures which seek to endure even till date.",
    location: "Kochi",
    duration: 2,
    price: 5000,
  },
];
