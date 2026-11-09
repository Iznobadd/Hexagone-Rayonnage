import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexagone Rayonnage — Rayonnages et aménagements industriels",
  description: "Rayonnages, cantilevers, mezzanines et cloisons industrielles. Hexagone Rayonnage vous accompagne de l’étude à l’installation, depuis Bonnée, près d’Orléans.",
  icons: { icon: "/assets/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#142b3e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
