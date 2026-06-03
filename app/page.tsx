import { Hero } from "@/components/Hero";
import { TheGenius } from "@/components/TheGenius";
import { NoParking } from "@/components/NoParking";
import { JokeFiles } from "@/components/JokeFiles";
import { TheTapes } from "@/components/TheTapes";
import { FieldDispatches } from "@/components/FieldDispatches";
import { ProfessionalNetworking } from "@/components/ProfessionalNetworking";
import { Gallery } from "@/components/Gallery";
import { Fin } from "@/components/Fin";
import { StickerLayer } from "@/components/StickerLayer";
import { StarLayer } from "@/components/StarLayer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <StickerLayer />
      <StarLayer />
      <Hero />
      <TheGenius />
      <NoParking />
      <JokeFiles />
      <TheTapes />
      <FieldDispatches />
      <ProfessionalNetworking />
      <Gallery />
      <Fin />
    </main>
  );
}
