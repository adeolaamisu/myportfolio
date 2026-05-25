import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeola Tosin Amisu — Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Adeola Tosin Amisu — Product Manager and Growth Strategist building web, mobile, and internal tools.",
      },
      { property: "og:title", content: "Adeola Tosin Amisu — Product Manager" },
      {
        property: "og:description",
        content: "Product Manager and Growth Strategist. Selected work, case studies, and projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8FF" }} aria-hidden="true" />
  );
}
