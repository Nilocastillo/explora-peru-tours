import SpainFlag from "@/assets/flags/Spain.svg";
import UnitedStatesFlag from "@/assets/flags/UnitedStates.svg";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.nosotros": "Nosotros",
    "nav.paquetes": "Paquetes",
    "nav.tours": "Tours",
  },
  en: {
    "nav.nosotros": "About Us",
    "nav.paquetes": "Packages",
    "nav.tours": "Tours",
  },
} as const;

export const routes = {
  es: {
    nosotros: "nosotros",
    paquetes: "paquetes",
    tours: "tours",
    archivo: "archivo",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  en: {
    nosotros: "about-us",
    paquetes: "packages",
    tours: "tours",
    archivo: "archive",
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies",
  },
};
