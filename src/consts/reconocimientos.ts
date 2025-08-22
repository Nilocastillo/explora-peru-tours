import type { Sponsor } from "@/types/reconocimientos"; // O desde donde tengas el tipo
import Tripadvisor from "@/assets/reconocimientos/tripadvisor.webp";
import GetYourGuide from "@/assets/reconocimientos/get-your-guide.webp";
import Gercetur from "@/assets/reconocimientos/gercetur.webp";
import Compromiso from "@/assets/reconocimientos/compromiso-calidad.webp";
import AgenciaRegistrada from "@/assets/reconocimientos/agencia-registrada.webp";

export const SPONSORS: Sponsor[] = [
  {
    id: "tripadvisor",
    name: "Tripadvisor",
    alt: "Logo de Tripadvisor",
    image: Tripadvisor,
  },
  {
    id: "getyourguide",
    name: "Get Your Guide",
    alt: "Logo de Get Your Guide",
    image: GetYourGuide,
  },
  {
    id: "gercetur",
    name: "Gercetur",
    alt: "Logo de Gercetur",
    image: Gercetur,
  },
  {
    id: "compromiso-calidad",
    name: "Compromiso Calidad",
    alt: "Logo de Compromiso de Calidad",
    image: Compromiso,
  },
  {
    id: "agencia-registrada",
    name: "Agencia Registrada",
    alt: "Logo de Agencia Registrada",
    image: AgenciaRegistrada,
  },
];
