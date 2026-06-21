import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { siteIdentity } from "@/config/site.identity";

const highlights = [
  { label: "Content model", value: "Multi-format" },
  { label: "Publishing flow", value: "Original posts" },
  { label: "Core priority", value: "Clarity first" },
];

const values = [
  {
    title: "Built for reading and discovery",
    description:
      `${SITE_CONFIG.name} supports articles, listings, classifieds, image posts, profiles, and resources in one consistent experience so users can move between formats without friction.`,
  },
  {
    title: "Original content over placeholders",
    description:
      "We prioritize real published posts and practical metadata so every section reflects live, meaningful content rather than static sample fillers.",
  },
  {
    title: "Clean structure, useful navigation",
    description:
      "From homepage highlights to task pages and search, the site is organized to help readers and customers find information quickly and take action with confidence.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={siteIdentity.description}
      actions={
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Our story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A focused publishing website for high-signal content and business discovery.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} brings together editorial content and structured discovery surfaces in a single platform.
              Whether someone is reading an article, exploring listings, or checking profiles, the goal stays the same:
              make information easier to understand, navigate, and use.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
