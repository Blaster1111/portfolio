import React from "react";
import { ACHIEVEMENTS } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <ul className="list-disc ml-6 space-y-2">
        {ACHIEVEMENTS.map((item, idx) => (
          <li key={idx} className="text-base">{item.title}</li>
        ))}
      </ul>
    </section>
  );
}
