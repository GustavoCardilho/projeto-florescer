"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { Button } from "@/components/ui/button";
import { HeaderComponent } from "@/components/global/Header";
import { AuroraBackground } from "@/components/global/AuroraBackground";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/global/CardHoverEffect";

export const projects = [
  {
    title: "Como surgiu?",
    description:
      "Criado no final de 2021 pela fundadora e terapeuta Renata Magalhães e co-fundado pelo jovem do Ensino médio Murilo Slomka, o projeto surgiu após ambos se conhecerem no curso de Libras da cidade com sede de trabalhar em um mesmo propósito: o florescimento da saúde mental da sua comunidade.",
    link: "https://stripe.com",
  },
  {
    title: "A nossa missão:",
    description:
      "Buscamos quebrar o estigma enraizado no subconsciente da sociedade sobre o cuidado com a saúde mental conscientizando a população sobre a sua importância e trabalhando ativamente para sua melhora. Queremos colocar esse assunto em pauta nas diferentes camadas da sociedade. É sobre prevenir, e não remediar.      ",
    link: "https://netflix.com",
  },
  {
    title: "A nossa visão: ",
    description: `Nossa visão é de que podemos impactar a Educação e a Saúde pública do Brasil fortalecendo ativamente os 6 pilares para uma boa saúde mental: 

      Atividade física
      Higiene do sono
      Equilíbrio e a boa convivência 
      Autoconhecimento (administração das emoções.. 
      Acolhimento (escuta ativa e validação)
      Atividades para tempo ocioso (Ludoterapia, arte, desenhos, atividades para tempo ocioso, escrita, leitura)
      `,
    link: "https://google.com",
  },
];

export default function Home() {
  return (
    <main className="  bg-white">
      <HeaderComponent />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-full h-full max-w-[500px] max-h-[500px]"
          />
          <motion.div
            initial={{ opacity: 0.0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <Button className="bg-primary font-montserrat font-bold p-6 text-lg hover:bg-primary">
              Explorar!!
            </Button>
          </motion.div>
        </motion.div>
      </AuroraBackground>{" "}
      <div className="w-full flex min-h-[500px] items-center justify-center flex-col gap-4 p-4">
        <motion.h1
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-montserrat text-4xl text-center font-bold"
        >
          O que é o{" "}
          <span className="underline text-primary"> Projeto Florescer?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-montserrat font-mediu max-w-[800px] text-center"
        >
          Com o intuito de democratizar o acesso à saúde mental e conscientizar
          sobre a sua importância, o projeto Florescer atua com palestras e
          atividades presenciais gratuitas para alunos de Escola pública,
          particular e empresas parceiras desde 2022. No ano de 2024 a ONG deu
          um passo à frente e criou um programa de voluntariado, no qual treina
          voluntários do Brasil todo para aplicar o "Pacote Florescer", conjunto
          de pilares essenciais para o fortalecimento da saúde mental de uma
          comunidade, nas escolas das suas cidades.
        </motion.p>
      </div>
      <div className="w-full flex items-center justify-center p-24">
        <HoverEffect items={projects} />
      </div>
    </main>
  );
}
