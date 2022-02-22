import { useEffect, useState } from "react";

import { Container, Content } from "../components/Container";

const SamplePage = () => {
  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    setLoading(true);

    setLoading(false);
  };

  // State
  const [loading, setLoading] = useState(true);

  // Methods

  return (
    <Container title="Sample page">
      <Content className="text-center">
        <h1 className="text-xl font-semibold">Sample page</h1>
      </Content>
    </Container>
  );
};

export default SamplePage;
