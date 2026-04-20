import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { siteIdentity } from "@/config/site.identity";

const highlights = [
  { label: "Editing standard", value: "Human-led" },
  { label: "Publishing rhythm", value: "Weekly+" },
  { label: "House rule", value: "Clarity first" },
];

const values = [
  {
    title: "Field notes over hot takes",
    description: "We prefer reporting you can follow—and revisit next month—over velocity for its own sake.",
  },
  {
    title: "Sources on the record when it counts",
    description: "When anonymity is necessary, we say why and how we corroborated what we could not name.",
  },
  {
    title: "Reader mail shapes the backlog",
    description: "Replies and corrections land in the same queue as pitches; both can change what we publish next.",
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
              An independent desk for readers who read the footnotes.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} publishes explainers, investigations, and short desk notes—edited for calm pacing and
              honest context. We are not a marketplace and not a growth experiment; we are a small editorial team trying
              to leave the page better than we found it.
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
