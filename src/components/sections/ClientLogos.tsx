"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CLIENTS, type Client } from "@/data/clients";

function ClientLogoTile({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);
  const showLogo = Boolean(client.logo) && !failed;

  return (
    <div
      title={client.name}
      className="group flex h-24 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-2.5 transition-colors duration-300 hover:border-[var(--color-accent)]/40 sm:h-28 sm:p-3"
    >
      {showLogo ? (
        <div className="relative h-full w-full rounded-xl bg-white p-3">
          <Image
            src={client.logo as string}
            alt={`${client.name} logo`}
            fill
            sizes="140px"
            loading="lazy"
            className="object-contain opacity-60 grayscale transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <span className="px-2 text-center font-mono text-[0.62rem] uppercase leading-snug tracking-[0.04em] text-[var(--color-mist)] transition-colors duration-300 group-hover:text-[var(--color-ink-soft)]">
          {client.name}
        </span>
      )}
    </div>
  );
}

/**
 * Logo grid for the Organizations & Clients section. Reuses Reveal for the
 * viewport entrance stagger — no separate animation system is introduced.
 */
export function ClientLogos() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {CLIENTS.map((client, i) => (
        <Reveal as="li" key={client.name} delayMs={(i % 12) * 40}>
          <ClientLogoTile client={client} />
        </Reveal>
      ))}
    </ul>
  );
}
