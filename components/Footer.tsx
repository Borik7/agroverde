"use client";

import { useState } from "react";
import { Mail, BookOpenCheck, Leaf, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((cur) => (cur === id ? null : id));
  };

  return (
    <footer className="bg-green-100 border-t border-green-300 mt-20 px-6 py-10 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 🔎 О проекте */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" />
            Մեր նախագիծը
          </h3>
          <p className="text-gray-600">
            AgroVerde-ը ուսումնասիրում է Հայաստանի բուսական աշխարհը՝ հիմնվելով
            հուսալի գիտական ու պաշտոնական աղբյուրների վրա։
          </p>
        </div>

        {/* 📚 Источники */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpenCheck className="w-5 h-5 text-green-600" />
            Օգտագործված աղբյուրներ
          </h3>

          {/* Научные / официальные */}
          <div className="mb-4">
            <button
              className="w-full flex justify-between items-center text-green-700 font-medium hover:underline"
              onClick={() => toggle("science")}
            >
              📚 Գիտական և պաշտոնական
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  expanded === "science" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expanded === "science" && (
              <ul className="mt-2 space-y-1 text-green-800">
                <li>
                  <a
                    href="https://www.sei.org/features/armenia-green-transition-progress/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEI – Green Transition in Armenia
                  </a>
                </li>
                <li>
                  <a
                    href="https://rec-caucasus.am/wp-content/uploads/2011/08/Ecosystems-Assessment-Report-Armenia.pdf?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ecosystems Assessment Report (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://biodiversity-armenia.am/en/seea-ea/ongoing-projects/preliminary-data-analysis/maps-for-es/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Biodiversity Armenia – Maps
                  </a>
                </li>
                <li>
                  <a
                    href="https://hy.wikipedia.org/wiki/Հայաստանի_հողային_ռեսուրսներ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Վիքիպեդիա – Հայաստանի հողային ռեսուրսներ
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.soilgrids.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SoilGrids – Global Soil Map
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.afghanaid.org.uk/faqs/the-food-and-agriculture-organization-fao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAO – Food & Agriculture Organization
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Сельскохозяйственные базы */}
          <div className="mb-4">
            <button
              className="w-full flex justify-between items-center text-green-700 font-medium hover:underline"
              onClick={() => toggle("platforms")}
            >
              🌱 Ագրո հարթակներ
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  expanded === "platforms" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expanded === "platforms" && (
              <ul className="mt-2 space-y-1 text-green-800">
                <li>
                  <a
                    href="https://agroatlas.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AgroAtlas – Ռուսաստանի բույսերի ատլաս
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Частные компании */}
          <div>
            <button
              className="w-full flex justify-between items-center text-green-700 font-medium hover:underline"
              onClick={() => toggle("companies")}
            >
              🏢 Սերմերի մատակարարներ
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform ${
                  expanded === "companies" ? "rotate-180" : ""
                }`}
              />
            </button>
            {expanded === "companies" && (
              <ul className="mt-2 space-y-1 text-green-800">
                <li>
                  <a
                    href="https://www.nunhems.com/global/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nunhems (BASF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.syngenta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Syngenta
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vegetables.bayer.com/us/en-us/seminis-products.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seminis (Bayer)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bejo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bejo Seeds
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* 📬 Контакты */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-600" />
            Կապ մեզ հետ
          </h3>
          <p className="text-gray-600 mb-2">
            Եթե ունեք հարցեր կամ առաջարկներ, կարող եք գրել մեզ։
          </p>
          <Link
            href="/contact-us"
            className="inline-block mt-2 text-green-700 font-medium hover:underline"
          >
            Այցելել կապի էջը →
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AgroVerde. Բոլոր իրավունքները պաշտպանված
        են։
      </div>
    </footer>
  );
}
