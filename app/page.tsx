"use client";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 mt-10 gap-6">
        <div className="md:w-2/3">
        <PostList />
        </div>
        <Sidebar />
      </main>
    </>
  );
}
