import ItemImg6 from "@/assets/images/item-6.jpg";
import ItemImg5 from "@/assets/images/item-5.jpeg";
import ItemImg4 from "@/assets/images/item-4.jpeg";
import ItemImg3 from "@/assets/images/item-3.jpeg";
import ItemImg2 from "@/assets/images/item-2.jpeg";
import ItemImg1 from "@/assets/images/item-1.jpeg";

import ExtinguisherItemImg1 from "@/assets/images/extinguisher-item-1.jpeg";
import ExtinguisherItemImg2 from "@/assets/images/extinguisher-item-2.jpeg";
import ExtinguisherItemImg3 from "@/assets/images/extinguisher-item-3.jpeg";
import ExtinguisherItemImg4 from "@/assets/images/extinguisher-item-4.jpeg";
import ExtinguisherItemImg5 from "@/assets/images/extinguisher-item-5.jpeg";
import ExtinguisherItemImg6 from "@/assets/images/extinguisher-item-6.jpeg";
import ExtinguisherItemImg7 from "@/assets/images/extinguisher-item-7.jpeg";
import ExtinguisherItemImg8 from "@/assets/images/extinguisher-item-8.jpeg";
import ExtinguisherItemImg9 from "@/assets/images/extinguisher-item-9.jpeg";
import ExtinguisherItemImg10 from "@/assets/images/extinguisher-item-10.jpeg";

import fireAlarmItems1 from "@/assets/images/fire-alarm-items-1.jpg";
import fireAlarmItems2 from "@/assets/images/fire-alarm-items-2.jpg";
import fireAlarmItems3 from "@/assets/images/fire-alarm-items-3.jpg";
import fireAlarmItems4 from "@/assets/images/fire-alarm-items-4.jpg";
import fireAlarmItems5 from "@/assets/images/fire-alarm-items-5.jpg";
import fireAlarmItems6 from "@/assets/images/fire-alarm-items-6.jpg";
import fireAlarmItems7 from "@/assets/images/fire-alarm-items-7.jpg";
import fireAlarmItems8 from "@/assets/images/fire-alarm-items-8.jpg";

import fireHydrantItemsImg1 from "@/assets/images/fire-hidrant-items-1.jpg";
import fireHydrantItemsImg2 from "@/assets/images/fire-hidrant-items-2.jpg";
import fireHydrantItemsImg3 from "@/assets/images/fire-hidrant-items-3.jpg";
import fireHydrantItemsImg4 from "@/assets/images/fire-hidrant-items-4.jpg";
import fireHydrantItemsImg5 from "@/assets/images/fire-hidrant-items-5.jpg";
import fireHydrantItemsImg6 from "@/assets/images/fire-hidrant-items-6.jpg";
import fireHydrantItemsImg7 from "@/assets/images/fire-hidrant-items-7.jpg";
import fireHydrantItemsImg8 from "@/assets/images/fire-hidrant-items-8.jpg";
import fireHydrantItemsImg9 from "@/assets/images/fire-hidrant-items-9.jpg";
import fireHydrantItemsImg10 from "@/assets/images/fire-hidrant-items-10.jpg";
import fireHydrantItemsImg11 from "@/assets/images/fire-hidrant-items-11.jpg";

import sparePartItemImg1 from "@/assets/images/spare-parts-item-1.jpg";
import sparePartItemImg2 from "@/assets/images/spare-parts-item-2.jpg";
import sparePartItemImg3 from "@/assets/images/spare-parts-item-3.jpg";
import sparePartItemImg4 from "@/assets/images/spare-parts-item-4.jpg";
import sparePartItemImg5 from "@/assets/images/spare-parts-item-5.jpg";
import sparePartItemImg6 from "@/assets/images/spare-parts-item-6.jpg";
import sparePartItemImg7 from "@/assets/images/spare-parts-item-7.jpg";
import sparePartItemImg8 from "@/assets/images/spare-parts-item-8.jpg";
import sparePartItemImg9 from "@/assets/images/spare-parts-item-9.jpg";
import sparePartItemImg10 from "@/assets/images/spare-parts-item-10.jpg";
import sparePartItemImg11 from "@/assets/images/spare-parts-item-11.jpg";
import sparePartItemImg12 from "@/assets/images/spare-parts-item-12.jpg";
import sparePartItemImg13 from "@/assets/images/spare-parts-item-13.jpg";
import sparePartItemImg14 from "@/assets/images/spare-parts-item-14.jpg";
import sparePartItemImg15 from "@/assets/images/spare-parts-item-15.jpg";
import sparePartItemImg16 from "@/assets/images/spare-parts-item-16.jpg";
import sparePartItemImg17 from "@/assets/images/spare-parts-item-17.jpg";
import sparePartItemImg18 from "@/assets/images/spare-parts-item-18.jpg";
import sparePartItemImg19 from "@/assets/images/spare-parts-item-19.jpg";
import sparePartItemImg20 from "@/assets/images/spare-parts-item-20.jpg";
import sparePartItemImg21 from "@/assets/images/spare-parts-item-21.jpg";
import sparePartItemImg22 from "@/assets/images/spare-parts-item-22.jpg";
import sparePartItemImg23 from "@/assets/images/spare-parts-item-23.jpg";
import sparePartItemImg24 from "@/assets/images/spare-parts-item-24.jpg";
import sparePartItemImg25 from "@/assets/images/spare-parts-item-25.jpg";
import sparePartItemImg26 from "@/assets/images/spare-parts-item-26.jpg";
import sparePartItemImg27 from "@/assets/images/spare-parts-item-27.jpg";
// Generate a set of products for each category
const generateProducts = (categoryName, count = 8) => {
  return Array.from({ length }, (_, i) => ({
    id: `${categoryName.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    name: "ABC Powder Fire Extinguisher",
    image: "/placeholder.svg?height=200&width=200",
  }));
};

export const productCategories = [
  {
    id: "fire-extinguishers",
    name: "Fire Extinguishers",
    products: [
      {
        id: "FireExtinguisher-1",
        name: "ABC Powder Fire Extinguisher",
        image: ExtinguisherItemImg1,
      },
      {
        id: "FireExtinguisher-2",
        name: "CO2 Fire Extinguisher",
        image: ExtinguisherItemImg2,
      },
      {
        id: "FireExtinguisher-3",
        name: "Foam Fire Extinguisher",
        image: ExtinguisherItemImg3,
      },
      {
        id: "FireExtinguisher-4",
        name: "Water Fire Extinguisher",
        image: ExtinguisherItemImg4,
      },
      {
        id: "FireExtinguisher-5",
        name: "Wet Chemical Fire Extinguisher",
        image: ExtinguisherItemImg5,
      },
      {
        id: "FireExtinguisher-6",
        name: "Automatic Fire Extinguisher",
        image: ExtinguisherItemImg6,
      },
      {
        id: "FireExtinguisher-7",
        name: "Portable Fire Extinguisher",
        image: ExtinguisherItemImg7,
      },
      {
        id: "FireExtinguisher-8",
        name: "Lithium-Ion Battery Fire Extinguisher",
        image: ExtinguisherItemImg8,
      },
      {
        id: "FireExtinguisher-9",
        name: "Metal Fire Extinguisher",
        image: ExtinguisherItemImg9,
      },
      {
        id: "FireExtinguisher-10",
        name: "Gas-Based Fire Extinguisher",
        image: ExtinguisherItemImg10,
      },
    ],
  },
  {
    id: "fire-suppression",
    name: "Fire Suppression System",
    products: [
      {
        id: "Suppression-1",
        name: "Kitchen Fire Suppression System",
        image: ItemImg1,
      },
      {
        id: "Suppression-2",
        name: "Server Room Suppression System",
        image: ItemImg2,
      },
      {
        id: "Suppression-3",
        name: "Vehicle Fire Suppression System",
        image: ItemImg3,
      },
      {
        id: "Suppression-4",
        name: "Industrial Fire Suppression System",
        image: ItemImg4,
      },
      {
        id: "Suppression-5",
        name: "Data Center Fire Suppression System",
        image: ItemImg5,
      },
      {
        id: "Suppression-6",
        name: "Aerosol Fire Suppression System",
        image: ItemImg6,
      },
    ],
  },
  {
    id: "hydrant-accessories",
    name: "Fire Hydrant Accessories",
    products: [
      { id: "Hydrant-1", name: "Fire Hose Reel", image: fireHydrantItemsImg1 },
      {
        id: "Hydrant-2",
        name: "Fire Hose Nozzle",
        image: fireHydrantItemsImg2,
      },
      { id: "Hydrant-3", name: "Landing Valve", image: fireHydrantItemsImg3 },
      {
        id: "Hydrant-4",
        name: "Fire Brigade Inlet",
        image: fireHydrantItemsImg4,
      },
      {
        id: "Hydrant-5",
        name: "Hydrant Coupling",
        image: fireHydrantItemsImg5,
      },
      { id: "Hydrant-6", name: "Fire Hose Box", image: fireHydrantItemsImg6 },
      { id: "Hydrant-7", name: "Hose Pipe", image: fireHydrantItemsImg7 },
      {
        id: "Hydrant-8",
        name: "Branch Pipe Nozzle",
        image: fireHydrantItemsImg8,
      },
      {
        id: "Hydrant-9",
        name: "Fire Hydrant Pump",
        image: fireHydrantItemsImg9,
      },
      {
        id: "Hydrant-10",
        name: "Monitor Nozzle",
        image: fireHydrantItemsImg10,
      },
      {
        id: "Hydrant-11",
        name: "Stand Post Hydrant",
        image: fireHydrantItemsImg11,
      },
    ],
  },
  {
    id: "alarm-signage",
    name: "Fire Alarm System / Signage",
    products: [
      { id: "Alarm-1", name: "Smoke Detector", image: fireAlarmItems1 },
      { id: "Alarm-2", name: "Heat Detector", image: fireAlarmItems2 },
      { id: "Alarm-3", name: "Manual Call Point", image: fireAlarmItems3 },
      { id: "Alarm-4", name: "Fire Alarm Bell", image: fireAlarmItems4 },
      { id: "Alarm-5", name: "Fire Alarm Panel", image: fireAlarmItems5 },
      { id: "Alarm-6", name: "Fire Exit Signage", image: fireAlarmItems6 },
      { id: "Alarm-7", name: "Emergency Light", image: fireAlarmItems7 },
      { id: "Alarm-8", name: "Sirens and Strobes", image: fireAlarmItems8 },
    ],
  },
  {
    id: "spare-parts",
    name: "Fire Extinguishers Spare Parts",
    products: [
      {
        id: "SparePart-1",
        name: "Extinguisher Hose",
        image: sparePartItemImg1,
      },
      { id: "SparePart-2", name: "Safety Pin", image: sparePartItemImg2 },
      { id: "SparePart-3", name: "CO2 Valve", image: sparePartItemImg3 },
      { id: "SparePart-4", name: "Fire Extinguisher Ball", image: sparePartItemImg4 },
      { id: "SparePart-5", name: "Discharge Lever", image: sparePartItemImg5 },
      { id: "SparePart-6", name: "O-Ring Seal", image: sparePartItemImg6 },
      {
        id: "SparePart-7",
        name: "Fire Extinguisher Bracket",
        image: sparePartItemImg7,
      },
      {
        id: "SparePart-8",
        name: "Fire Extinguisher Labels",
        image: sparePartItemImg8,
      },
      { id: "SparePart-9", name: "Hose Clips", image: sparePartItemImg9 },
      {
        id: "SparePart-10",
        name: "Fire Extinguisher Wall Hook",
        image: sparePartItemImg10,
      },
      {
        id: "SparePart-11",
        name: "Extinguisher Discharge Nozzle",
        image: sparePartItemImg11,
      },
      {
        id: "SparePart-12",
        name: "Fire Extinguisher Cylinder",
        image: sparePartItemImg12,
      },
    ],
  },
];
