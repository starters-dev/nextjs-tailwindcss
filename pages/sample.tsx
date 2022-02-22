import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container, Content } from "../components/Container";
import { services } from "../services";

const SamplePage = () => {
  const router = useRouter();
  const { api } = services;

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    setLoading(true);

    try {
      setData(await api.global.getGetData());
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  // State
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  // Methods
  const goBack = () => {
    router.back();
  };

  return (
    <Container title="Sample page">
      <Content cardClassName="space-y-4">
        <h1 className="text-xl font-semibold">Sample page</h1>

        {loading && <span>Loading...</span>}
        {!loading && data && <div>{JSON.stringify(data, null, 2)}</div>}

        <div>
          <span
            onClick={goBack}
            className="p-1 px-2 bg-primary rounded-lg hover:cursor-pointer"
          >
            Go back
          </span>
        </div>
      </Content>
    </Container>
  );
};

export default SamplePage;
