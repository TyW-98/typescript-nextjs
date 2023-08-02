import fetchWikiData from "../../../lib/fetchWikiData";
import ResultCard from "./components/ResultCard";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = fetchWikiData(searchTerm);
  const data = await wikiData;
  // Replace %20 (space indication) with spaces
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }

  return {
    title: displayTerm,
    description: `Page about ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = fetchWikiData(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages; // Not sure if will get query but if do not sure if will get pages

  return (
    <main className="bg-slate-300 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((item) => {
          return <ResultCard result={item} key={item.pageid} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} not found`}</h2>
      )}
    </main>
  );
}
