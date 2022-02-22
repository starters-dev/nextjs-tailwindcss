import type { NextPage } from "next";
import { Container, Content } from "../components/Container";
import { GoToLink } from "../components/GoToLink";

const Home: NextPage = () => {
  return (
    <Container title="Index">
      <Content cardClassName="space-y-2">
        <h1 className="text-xl font-semibold">
          Simple starter for NextJS + TailwindCSS.
        </h1>

        <p>
          Comes with pre-ready Docker and Traefik setup. Includes auto
          generation of https certificates. Easy deployable on DigitalOcean and
          similar platforms.
        </p>

        <div>
          <div>
            <GoToLink where="/sample" title="Sample page" />
          </div>

          <div>
            <GoToLink where="/doesnt-exist" title="404 page" />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
