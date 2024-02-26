import Exprience from "./compnent/exprience";
import Header from "./compnent/header";
import Introduction from "./compnent/introduction";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-defaultPink-50 to-defaultBlue-50 pt-8 relative">
      <Header />
      <div className="flex justify-between gap-7 w-[90%] mx-auto">
        <Introduction />
      </div>
      {/* <Exprience /> */}
    </main>
  );
}
