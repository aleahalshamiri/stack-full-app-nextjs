import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import { title } from "process";
import StratupCard from "@/components/StratupCard";

interface HomePrpos {
  searchParams: Promise<{ query?: string }>
}
export default async function Home({ searchParams }: HomePrpos) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Aleah"
      },
      _id: 1,
      description: 'This is A description',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: "Reboots",
      title: "We Reboots"
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Aleah"
      },
      _id: 1,
      description: 'This is A description',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: "Reboots",
      title: "We Reboots"
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Aleah"
      },
      _id: 1,
      description: 'This is A description',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: "Reboots",
      title: "We Reboots"
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas , Vote on Pitches , and Get Noticed in Virtual Competitons
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Stratups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StratupCardType, index: number) => (
              <StratupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}

