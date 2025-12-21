"use client";

import { useMemo, useState } from "react";
import type { ScreenshotAsset } from "@/lib/mmhScreenshots";

export interface ScreenshotTab {
  id: string;
  label: string;
  description: string;
  items: ScreenshotAsset[];
}

interface CaseStudyScreenshotTabsProps {
  tabs: ScreenshotTab[];
  defaultTabId?: string;
}

export function CaseStudyScreenshotTabs({ tabs, defaultTabId }: CaseStudyScreenshotTabsProps) {
  const initialTab = defaultTabId ?? tabs[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(initialTab);

  const active = useMemo(() => tabs.find((tab) => tab.id === activeTab) ?? tabs[0], [activeTab, tabs]);

  if (!tabs.length || !active) {
    return null;
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Screenshot categories">
        {tabs.map((tab) => {
          const isActive = tab.id === active.id;
          return (
            <button
              key={tab.id}
              type="button"
              id={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border transition-all text-sm font-semibold tracking-wide uppercase ${
                isActive
                  ? "bg-jamarq-cyan text-jamarq-black border-jamarq-cyan"
                  : "border-slate text-jamarq-gray hover:border-jamarq-cyan hover:text-jamarq-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={active.id}
        className="space-y-6"
      >
        <p className="text-jamarq-gray max-w-3xl">{active.description}</p>
        {active.items.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {active.items.map((item) => (
              <figure
                key={item.id}
                className="bg-jamarq-black/60 border border-slate rounded-xl p-4 flex flex-col gap-4"
              >
                <div className="rounded-md overflow-hidden border border-slate/60 bg-jamarq-black">
                  <picture>
                    {item.webpSrcSet && (
                      <source
                        type="image/webp"
                        srcSet={item.webpSrcSet}
                        sizes="(min-width: 1024px) 45vw, 90vw"
                      />
                    )}
                    {item.pngSrcSet && (
                      <source
                        type="image/png"
                        srcSet={item.pngSrcSet}
                        sizes="(min-width: 1024px) 45vw, 90vw"
                      />
                    )}
                    <img
                      src={item.fallbackSrc}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-auto"
                    />
                  </picture>
                </div>
                <figcaption className="text-sm text-jamarq-gray space-y-3">
                  <p>{item.caption}</p>
                  {item.technicalNote && (
                    <details className="border border-slate/60 rounded-md px-3 py-2 text-xs text-mist">
                      <summary className="cursor-pointer select-none font-semibold text-jamarq-cyan">
                        Technical note
                      </summary>
                      <p className="mt-2 text-jamarq-gray text-sm leading-relaxed">
                        {item.technicalNote}
                      </p>
                    </details>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-sm text-jamarq-gray">No screenshots are available for this view yet.</p>
        )}
      </div>
    </div>
  );
}
