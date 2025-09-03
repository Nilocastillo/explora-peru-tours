import type { ImageMetadata } from "astro";

export type SponsorId =
  | "tripadvisor"
  | "getyourguide"
  | "gercetur"
  | "compromisocalidad"
  | "agenciaregistrada";

export type SponsorName =
  | "Tripadvisor"
  | "Get Your Guide"
  | "Gercetur"
  | "Compromiso Calidad"
  | "Agencia Registrada";

export interface Sponsor {
  id: SponsorId;
  name: SponsorName;
  image: ImageMetadata;
}
