import { useState } from "react";
import { MenuCategory } from "./types";
import { menuData } from "./menuData";
import { Analytics } from '@vercel/analytics/react'

function Section({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-serif text-center mb-8">{category.title}</h2>
      {category.sections.map((sec, i) => (
        <div key={i} className="mb-6 mt-12">
          <div className="flex items-center gap-2 mb-2">
            {sec.icon && <sec.icon className="w-5 h-5" />}
            <h3 className="text-xl font-semibold">{sec.title}</h3>
          </div>
          {sec.image && <div className="w-full justify-items-end"><img src={sec.image.src} alt={sec.image.alt} width={200}/></div>}
          <div>
            {sec.items.map((item, j) => (
              <div key={j} className="flex justify-between border-b py-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <p className="font-medium">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<"it" | "en">("it");
  const data = menuData[lang];

  return (
    <div className="p-[10px] bg-[#01050b] text-white">
      
      <header className="flex justify-end mb-6 gap-2">
        {(["it", "en"] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 border ${lang === l ? "bg-black text-white" : ""}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </header>
      <div className="w-full justify-items-center"><img src="/images/copertina.png" width={600}/></div>
      <Section category={data.food} />
      <Section category={data.drinks} />
      <Analytics />
    </div>
  );
}