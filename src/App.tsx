import { useState } from "react";
import { MenuAllergies, MenuCategory } from "./types";
import { menuData } from "./menuData";
import { Analytics } from '@vercel/analytics/react';

function Section({ category }: { category: unknown }) {
  // State to track which subsection index is expanded. Default to 0 (first one open).
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  // State for the main category visibility (useful for the Allergens special view)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const menuCategory = category as MenuCategory;
  const menuAllergies = category as MenuAllergies;

  // Render for standard categories with sections (Bar, Drinks, Kitchen)
  if (menuCategory.sections?.length > 0) {
    return (
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-center mb-8">{menuCategory.title}</h2>
        
        {menuCategory.sections.map((sec, i) => {
          const isOpen = expandedIndex === i;
          
          return (
            <div key={i} className="mb-4 border-b border-gray-100 last:border-0">
              {/* Clickable Header */}
              <button 
                onClick={() => setExpandedIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-4 focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  {sec.icon && <sec.icon className="w-5 h-5 text-gray-600" />}
                  <h3 className="text-xl font-semibold uppercase tracking-wide">{sec.title}</h3>
                </div>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Collapsible Content */}
              <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] pb-6' : 'max-h-0'}`}>
                {sec.image && (
                  <div className="w-full flex justify-center mb-4">
                    <img src={sec.image.src} alt={sec.image.alt} className="rounded-lg shadow-sm" width={200}/>
                  </div>
                )}
                
                <div className="space-y-1">
                  {sec.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-start py-3 border-b border-gray-50 last:border-0">
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium">{item.name}</p>
                          {item.allergens && (
                            <span className="text-xs flex gap-0.5">
                              {item.allergens.map((a, idx) => (
                                <span key={idx} title="allergen">{a}</span>
                              ))}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
                        )}
                      </div>
                      <p className="font-bold whitespace-nowrap">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Render for the Allergens List view
  return (
    <div className="mb-12 bg-gray-50 p-4 rounded-xl">
      <button 
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="w-full flex items-center justify-between py-2 focus:outline-none"
      >
        <h2 className="text-2xl font-serif">{menuAllergies.title}</h2>
        <span className={`transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isCategoryOpen ? 'max-h-[1500px] mt-4' : 'max-h-0'}`}>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          {menuAllergies.disclaimer}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {menuAllergies.items.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 p-3 rounded-lg text-sm shadow-sm flex items-start gap-2">
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
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
      <Section category={data.bar} />
      <Section category={data.drinks} />
      <Section category={data.food} />
      {/* <Section category={data.allergens} /> */}
      <Analytics />
    </div>
  );
}