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
    image: Tripadvisor,
  },
  {
    id: "getyourguide",
    name: "Get Your Guide",
    image: GetYourGuide,
  },
  {
    id: "gercetur",
    name: "Gercetur",
    image: Gercetur,
  },
  {
    id: "compromisocalidad",
    name: "Compromiso Calidad",
    image: Compromiso,
  },
  {
    id: "agenciaregistrada",
    name: "Agencia Registrada",
    image: AgenciaRegistrada,
  },
];
