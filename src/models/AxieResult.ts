export interface AxieResultType {
  class: string;
  id: string;
  image: string;
  parts: any;
}

interface PartType {
  class: string;
  id: string;
  name: string;
  specialGenes: string | null;
  type: string;
}

const getClassIcon = (axieClass: string): string => {
  const classesIcon = [
    { class: "Aquatic", icon: "aquatic.svg" },
    { class: "Bird", icon: "bird.svg" },
    { class: "Dawn", icon: "dawn.svg" },
    { class: "Plant", icon: "plant.svg" },
    { class: "Reptile", icon: "reptile.svg" },
    { class: "Dusk", icon: "dusk.svg" },
    { class: "Beast", icon: "beast.svg" },
    { class: "Mech", icon: "mech.svg" },
    { class: "Bug", icon: "bug.svg" },
  ];
  let classIconUrl: string = "";

  classesIcon.map((item) => {
    if (axieClass === item.class) {
      classIconUrl =
        "https://axie.zone/assets/images/icons/svg/class_" + item.icon;
    }
    return null;
  });
  return classIconUrl;
};

export default class AxieResult {
  axieId: string;
  axieClass: string;
  axieImage: string;
  axieClassIcon: string;
  axiePrice: number;

  constructor(res: AxieResultType) {
    this.axieId = res.id;
    this.axieClass = res.class;
    this.axieImage = res.image;
    this.axieClassIcon = getClassIcon(res.class);
    this.axiePrice = 0;
    
    const hasSpecialGenes = res.parts.map((part: PartType) => {
      if (part.specialGenes) {
        return true;
      }
      return null;
    }).filter(Boolean);
    if (!hasSpecialGenes.length) {
      this.axiePrice = 350;
    } else {
      this.axiePrice = 500;
    }
  }
}
