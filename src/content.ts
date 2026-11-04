import type { ImageMetadata } from "astro";
import shareImage from "./assets/og.jpg";
import { gallery } from "./lib/gallery";

export const site = {
  name: "Irina Bocancea",
  titleDisplay: "IRINA BOCANCEA",
  description: "Planificare de evenimente și direcție creativă.",
  locale: "ro_RO",
  instagram: "https://www.instagram.com/irinabocancea/",
  facebook: "https://www.facebook.com/irina.bocancea.3/",
  linkedin: "https://ro.linkedin.com/in/irinabocancea",
  shareImage,
} as const;

export const menu = [
  { path: "", label: "ACASĂ" },
  { path: "despre", label: "DESPRE" },
  { path: "servicii", label: "SERVICII", marker: ">" },
  { path: "contact", label: "CONTACT" },
] as const;

const despreImages = gallery("despre");

export const despre = {
  title: "Expertiză & formare profesională",
  lead: "Intuiție creativă susținută de structură și cunoaștere.",
  images: despreImages.slice(0, 2),
  imageAlt: "Irina Bocancea",
  paragraphs: [
    "Cred că excelența în industria evenimentelor se construiește prin experiență, disciplină, curiozitate profesională și dorința continuă de evoluție.",
    "Dețin un MBA în Managementul Afacerilor și am urmat programe de specializare în Event Management și Wedding Planning la Londra, completând experiența practică printr-o perspectivă strategică asupra planificării, bugetării și managementului proiectelor.",
    "Activitatea mea a fost recunoscută și la nivelul industriei, fiind nominalizată în Top 5 Romanian Best Wedding Planners de către Wezoree, platformă internațională dedicată industriei nunților și furnizorilor premium.",
    "Totodată, în cadrul proiectului antreprenorial Iris Orangerie, am obținut, alături de echipa mea, timp de doi ani consecutivi, premiul I la categoria Best Ballroom în cadrul Romanian Hospitality Awards.",
    "În paralel cu activitatea de organizare și direcție creativă, implicarea mea în dezvoltarea unui business din industria ospitalității mi-a extins perspectiva asupra experienței evenimentelor, de la poziționarea unui brand și dezvoltarea unui concept până la managementul și evoluția unui spațiu dedicat evenimentelor.",
    "Continui să explorez noi direcții creative, să urmăresc evoluția industriei și să îmi dezvolt expertiza, cu obiectivul de a oferi fiecărui client nu doar un rezultat bine executat, ci un proces profesionist și o experiență construită cu sens.",
  ],
};

export type Service = {
  slug: string;
  title: string;
  lead?: string;
  paragraphs: string[];
  /** Paragraph count in the first body column (desktop / mobile split). */
  proseSplitAfter?: number;
  images: ImageMetadata[];
  image: ImageMetadata;
  imageAlt: string;
  /** CSS object-position for gallery / listing crops (default: centered). */
  imageObjectPosition?: string;
};

function serviceGallery(folder: string, title: string) {
  const images = gallery(folder).slice(0, 4);
  return {
    images,
    image: images[0],
    imageAlt: title,
  };
}

export const services: Service[] = [
  {
    slug: "event-specialist-creative-director",
    title: "Event specialist & creative director",
    ...serviceGallery("event-specialist-creative-director", "Event specialist & creative director"),
    paragraphs: [
      "Cu o experiență de peste 19 ani în industria evenimentelor și un portofoliu de peste 1.000 de proiecte organizate, activitatea mea se situează la intersecția dintre concept, strategie creativă și management operațional.",
      "Parcursul profesional cuprinde o varietate amplă de proiecte, de la evenimente corporate, lansări de produse, conferințe și concerte, până la celebrări private și evenimente festive, fiecare construit în jurul unui context, al unor obiective și al unei identități proprii.",
      "Cred într-o organizare fundamentată pe rigoare, coerență vizuală și atenție autentică la detalii. Pentru mine, direcția creativă și managementul operațional nu sunt componente independente, ci elemente complementare ale aceluiași proces, care trebuie să funcționeze într-un echilibru firesc.",
      "Experiența acumulată în proiecte de diferite dimensiuni și complexități, atât în România, cât și pe plan internațional, mi-a conturat perspectiva asupra industriei și modul în care abordez fiecare colaborare: cu discernământ estetic, structură, responsabilitate profesională și discreție.",
    ],
  },
  {
    slug: "wedding-planning-event-design",
    title: "Wedding planning & event design",
    lead: "O abordare personalizată. O identitate distinctă pentru fiecare eveniment.",
    ...serviceGallery("wedding-planning-event-design", "Wedding planning & event design"),
    paragraphs: [
      "În ultimii 15 ani, activitatea mea s-a concentrat cu precădere asupra organizării de nunți, dezvoltând o abordare în care povestea, personalitatea și universul fiecărui cuplu reprezintă punctul de plecare al întregului concept.",
      "De la definirea direcției creative și selecția furnizorilor până la designul spațiului, construcția experienței și coordonarea întregului proces, fiecare componentă este integrată într-o viziune unitară.",
      "Estetica, proporțiile, materialele, cromatica, iluminatul și detaliile de execuție sunt privite ca elemente ale aceluiași limbaj vizual. Fiecare alegere contribuie la construirea unei atmosfere și la definirea unei experiențe care să reflecte autentic identitatea celor care o găzduiesc.",
      "Rezultatul urmărit este un eveniment cu personalitate, în care expresia estetică este susținută de o organizare riguroasă și o implementare atent coordonată.",
      "Fiecare proiect este dezvoltat individual, fără formule prestabilite sau soluții repetitive, cu obiectivul de a crea evenimente coerente, relevante și recognoscibile prin propriul lor caracter.",
    ],
  },
  {
    slug: "event-management-creative-production",
    title: "Event management & creative production",
    lead: "Experiență dincolo de convențional. De la evenimente intime la producții de amploare.",
    imageObjectPosition: "50% 96%",
    ...serviceGallery("event-management-creative-production", "Event management & creative production"),
    paragraphs: [
      "Experiența mea acoperă o varietate extinsă de formate și contexte: de la evenimente restrânse, cu 50 de invitați, până la producții de amploare, cu până la 3.000 de participanți.",
      "Am conceput și coordonat evenimente corporate, lansări de produse, inaugurări de locații, evenimente de companie, conferințe, seminarii, concerte, teambuildinguri și evenimente private, desfășurate atât în România, cât și în destinații internaționale.",
      "Această diversitate mi-a oferit capacitatea de a înțelege particularitățile fiecărui tip de eveniment și de a integra viziunea creativă într-un proces complex de planificare, logistică, bugetare, management al echipelor și coordonare operațională.",
      "Indiferent de amploarea proiectului, principiile rămân aceleași: claritate în concept, precizie în organizare și atenție constantă la experiența participanților.",
      "Pentru că un eveniment reușit nu înseamnă doar o succesiune de momente bine organizate, ci o experiență construită coerent, de la prima interacțiune până la ultimul detaliu.",
    ],
  },
  {
    slug: "iris-orangerie",
    title: "Iris Orangerie",
    lead: "A different perspective on events. Architecture, nature & experiences.",
    imageObjectPosition: "50% 96%",
    proseSplitAfter: 3,
    ...serviceGallery("iris-orangerie", "Iris Orangerie"),
    paragraphs: [
      "Iris Orangerie reprezintă una dintre cele mai importante extensii ale parcursului meu profesional și antreprenorial. În calitate de cofondator, Business Developer și Event Director, sunt implicată direct în dezvoltarea și consolidarea unui concept distinct în industria evenimentelor din România: prima sală premium de evenimente din țară.",
      "Concepută ca un spațiu în care arhitectura și natura se completează firesc, Iris Orangerie propune o alternativă la spațiile convenționale pentru evenimente, oferind un cadru cu identitate vizuală proprie și un potențial creativ aparte.",
      "Conceptul locației are la bază ideea unei experiențe în care spațiul devine parte integrantă a evenimentului. Lumina, vegetația, atmosfera și designul interior contribuie la definirea unui ambient care poate fi reinterpretat în funcție de conceptul și personalitatea fiecărei celebrări.",
      "De la nunți și recepții private până la evenimente corporate, lansări și întâlniri speciale, Iris Orangerie oferă cadrul pentru experiențe construite în jurul esteticii, ospitalității și atenției pentru detalii.",
      "Implicarea mea în acest proiect depășește zona organizării de evenimente. Cuprinde dezvoltarea direcției de business, poziționarea și identitatea conceptului, precum și definirea standardelor de experiență și servicii.",
      "Pentru mine, Iris Orangerie reprezintă întâlnirea dintre viziunea creativă, experiența acumulată în organizarea evenimentelor și perspectiva antreprenorială asupra unui business construit în jurul ospitalității.",
      "Un loc în care fiecare eveniment are libertatea de a-și construi propria identitate, iar spațiul devine parte din povestea sa.",
    ],
  },
];

export const contact = {
  phone: "+40 725 360 924",
  phoneHref: "tel:+40725360924",
  email: "contact@irinabocancea.ro",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/irinabocancea/" },
    { label: "Facebook", href: "https://www.facebook.com/irina.bocancea.3/" },
    { label: "LinkedIn", href: "https://ro.linkedin.com/in/irinabocancea" },
  ],
  form: {
    name: "Nume",
    email: "Email",
    eventTypesLabel: "Tip eveniment",
    eventTypes: [
      "Wedding Planning & Design",
      "Event planning & Design",
      "Corporate Event Planning & Design",
      "Other",
    ],
    message: "Mesaj",
    submit: "Trimite",
  },
} as const;
