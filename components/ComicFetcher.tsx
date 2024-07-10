import React, { useState } from "react";
import { ComicData } from "./types";

interface ComicFetcherProps {
  setComicData: React.Dispatch<React.SetStateAction<ComicData | null>>;
}

const ComicFetcher: React.FC<ComicFetcherProps> =  ({ setComicData }) => {
  // const [comicData, setComicData] = useState<ComicData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchIdentifier = async (email: string): Promise<string> => {
    const params = new URLSearchParams({ email });
    const response = await fetch(
      `https://fwd.innopolis.university/api/hw2?${params}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch identifier");
    }
    return response.json();
  };

  const fetchComic = async (comic_id: string): Promise<ComicData> => {
    const response = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${comic_id}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comic");
    }
    return response.json();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const email = event.currentTarget.email.value;

    try {
      const id = await fetchIdentifier(email);
      const comicData = await fetchComic(id);
      setComicData(comicData);
    } catch (error) {
      throw new Error("Failed to identify ID")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>XKCD Comic Fetcher</h1>
      <form id="type-form" onSubmit={handleSubmit}>
        <label>
          Email: <input name="email" type="email" required />
        </label>
        <br />
        <button className="btn" id="getsmthBtn" type="submit">
          Get Comic
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {/* {error && <p id="err">{error}</p>} */}
      {/* {comicData && <ComicDisplay comicData={comicData} />} */}
    </div>
  );
};

export default ComicFetcher;
