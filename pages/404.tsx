import { useEffect, useState } from "react";

import { Container, Content } from "../components/Container";

const Page404 = () => {
  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    setLoading(true);

    setLoading(false);
  };

  // State
  const [loading, setLoading] = useState(true);

  return (
    <Container title="404 Not Found">
      <Content>
        <h1 className="text-xl font-semibold">Page is not found</h1>
      </Content>
    </Container>
  );
};

export default Page404;
