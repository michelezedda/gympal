import litePic from "/media/lite.jpg";
import proPic from "/media/pro.jpg";
import elitePic from "/media/elite.jpg";

const plans = [
  {
    id: 0,
    title: "Lite",
    perks: "Gym access only",
    price: 44.98,
    img: litePic,
    best: false,
  },
  {
    id: 1,
    title: "Pro",
    perks: ["Gym access", "Sauna"],
    price: 64.98,
    img: proPic,
    best: true,
  },
  {
    id: 2,
    title: "Elite",
    perks: ["Gym access", "Sauna", "Personal Trainer"],
    price: 99.98,
    img: elitePic,
    best: false,
  },
];

export default plans;
