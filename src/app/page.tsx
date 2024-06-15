import Image from "next/image";
import PostList from "./components/postList/PostList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
 
  <div>
  <PostList />
  </div>
  </div>
  );
}
