import Exprience from "./compnent/exprience";
import Header from "./compnent/header";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-[#ECE3F3] to-[#EAFAFE] pt-8 relative">
      <Header />
      <Exprience />
    </main>
  );
}
