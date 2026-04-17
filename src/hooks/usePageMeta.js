import { useEffect } from "react";

const SITE_TITLE = "Shirley Lau | Creative Technologist & AI Builder";
const DEFAULT_DESCRIPTION =
  "Personal portfolio featuring vibe coding projects, AI workflows, and creative technology experiments.";

export default function usePageMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} | Shirley Lau` : SITE_TITLE;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [title, description]);
}
