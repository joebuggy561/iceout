import { useEffect, useState } from "react";

const RSS_URL =
  "https://news.google.com/rss/search?q=ICE+immigration+arrest+when:30d&hl=en-US&gl=US&ceid=US:en";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const url =
      "https://api.rss2json.com/v1/api.json?rss_url=" +
      encodeURIComponent(RSS_URL);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-card text-card-foreground shadow-sm border border-primary/30 rounded-lg mb-16">
      {/* Disclaimer */}
      <div className="mx-6 mt-6 rounded-md bg-muted p-3 text-xs text-muted-foreground">
        <strong>Content notice:</strong> We intentionally display links only.
        Images related to immigration enforcement can be misleading, harmful, or
        retraumatizing, and are not shown to protect the dignity and rights of
        affected individuals.
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && (
          <p className="text-sm text-muted-foreground">Loading reports…</p>
        )}

        {error && (
          <p className="text-sm text-destructive">
            Unable to load news at this time.
          </p>
        )}

        {!loading &&
          !error &&
          news.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-primary/30 rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold line-clamp-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.title}
                </a>
              </h4>

              <p className="text-xs text-muted-foreground">
                {new Date(item.pubDate).toLocaleDateString()}
              </p>

              <p className="text-sm text-foreground/80 line-clamp-3">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Read source →
              </a>
            </div>
          ))}
      </div>
    </section>
  );
};

export default News;
