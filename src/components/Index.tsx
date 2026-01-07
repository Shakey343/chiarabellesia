import axios from "axios";
import { useEffect, useState } from "react";
import type { CloudImgObj } from "../types";
import { NavLink } from "react-router";

type Category = "narrative" | "commercial" | "unscripted";

const Index = () => {
  const [narrative, setNarrative] = useState<CloudImgObj[]>([]);
  const [commercial, setCommercial] = useState<CloudImgObj[]>([]);
  const [unscripted, setUnscripted] = useState<CloudImgObj[]>([]);

  console.log(narrative);
  // projects.map((project) => {
  //   return console.log(project)}
  // )

  useEffect(() => {
    axios
      .get<CloudImgObj[]>(
        `${import.meta.env.VITE_BACKEND_URL}api/images/by-tag?tag=homepage`
      )
      .then((res) => {
        const grouped = res.data.reduce<Record<Category, CloudImgObj[]>>(
          (acc, item) => {
            const category = item.tags.find(
              (tag): tag is Category =>
                tag === "narrative" ||
                tag === "commercial" ||
                tag === "unscripted"
            );

            if (!category) return acc;

            acc[category].push(item);
            return acc;
          },
          {
            narrative: [],
            commercial: [],
            unscripted: [],
          }
        );

        setNarrative(grouped.narrative);
        setCommercial(grouped.commercial);
        setUnscripted(grouped.unscripted);
      })
      .catch((err) => console.error("Error fetching project images:", err));
  }, []);

  return (
    <div>
      <h2 className="text-sm">Narrative</h2>
      <ul className="mb-10 text-xl">
        {narrative.map((img) => (
          <li key={img.asset_id}>
            <NavLink
              to={`/${img.metadata?.text?.replace(/ /g, "_")}`}
              state={{ item: img }}
            >
              {img.metadata?.title || img.metadata?.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <h2 className="text-sm">Unscripted</h2>
      <ul className="mb-10 text-xl">
        {unscripted.map((img) => (
          <li key={img.asset_id}>
            <NavLink
              to={`/${img.metadata?.title?.replace(/ /g, "_")}`}
              state={{ item: img }}
            >
              {img.metadata?.title || img.metadata?.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <h2 className="text-sm">Commercial</h2>
      <ul className="mb-10 text-xl">
        {commercial.map((img) => (
          <li key={img.asset_id}>
            <NavLink
              to={`/${img.metadata?.title?.replace(/ /g, "_")}`}
              state={{ item: img }}
            >
              {img.metadata?.title || img.metadata?.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
