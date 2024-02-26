import Exprience from "./compnent/exprience";
import Header from "./compnent/header";
import Introduction from "./compnent/introduction";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-defaultPink-50 to-defaultBlue-50 pt-8 relative">
      <Header />
      <Introduction />
      {/* <Exprience /> */}
    </main>
  );
}
