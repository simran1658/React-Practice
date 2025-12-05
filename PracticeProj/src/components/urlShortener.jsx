import React, { useState } from "react";

const URLshortener = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [keyword, setKeyword] = useState("");
  const [expiry, setExpiry] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShortenedURL("");

    try {
      // TinyURL API (supports GET, no CORS issues)
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalURL)}`
      );

      if (!res.ok) {
        throw new Error("Failed to shorten URL");
      }

      const shortUrl = await res.text();
      setShortenedURL(shortUrl);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Original URL"
          value={originalURL}
          onChange={(e) => setOriginalURL(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Custom Keyword (Optional)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input
          type="date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />

        <button type="submit">Shorten</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortenedURL && (
        <p>
          Shortened URL:{" "}
          <a href={shortenedURL} target="_blank" rel="noreferrer">
            {shortenedURL}
          </a>
        </p>
      )}
    </div>
  );
};

export default URLshortener;
