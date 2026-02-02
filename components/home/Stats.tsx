const stats = [
  {
    value: "5000+",
    label: "SEOs formés",
    description: "depuis 2020",
  },
  {
    value: "150+",
    label: "Articles",
    description: "mis à jour régulièrement",
  },
  {
    value: "40h",
    label: "De formation",
    description: "vidéo et écrite",
  },
  {
    value: "4.9/5",
    label: "Note moyenne",
    description: "247 avis vérifiés",
  },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
