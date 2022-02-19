import Container from "../../components/common/Container";
import Search from "./Search";
function Home() {
  return (
    <>
      <section className="flex p-2 items-center h-16"></section>
      <section className="flex items-center justify-center mb-4">
        <h1 className="text-8xl font-bold">Wiki Search</h1>
      </section>
      <Container className="p-5 max-h-36">
        <Search />
      </Container>
    </>
  );
}

export default Home;
