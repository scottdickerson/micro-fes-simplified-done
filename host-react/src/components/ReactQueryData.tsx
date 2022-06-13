import { useQuery } from "react-query";
import React from "react";

const ReactQueryData = () => {
  const { data } = useQuery({
    queryFn: () => Promise.resolve({ response: "mydata" }),
  });
  return <h2>My React Query Data {JSON.stringify(data)}</h2>;
};

export default ReactQueryData;
