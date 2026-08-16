import services from "../../../src/data/services";

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: createSlug(service.title),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => createSlug(item.title) === slug
  );

  if (!service) {
    return {
      title: "Service | Tcongs Infotech",
      description:
        "Explore technology services from Tcongs Infotech.",
    };
  }

  return {
    title: `${service.title} | Tcongs Infotech`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Tcongs Infotech`,
      description: service.description,
      type: "website",
      siteName: "Tcongs Infotech",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Tcongs Infotech`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => createSlug(item.title) === slug
  );

  if (!service) {
    return (
      <main>
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
      </main>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Tcongs Infotech",
    },
    serviceType: service.title,
  };

  return (
    <>
      <main>
        <section>
          <p>{service.category}</p>

          <h1>{service.title}</h1>

          <p>{service.description}</p>

          <a href="/#services">
            Explore All Services
          </a>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}