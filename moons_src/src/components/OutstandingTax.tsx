import { getAdmimOutstanding } from "../helpers/Api";
import { ProgressBar } from "react-bootstrap";
import { useQuery } from "react-query";

export const OutstandingTax = () => {
  const { isLoading, isFetching, error, data } = useQuery(
    ["outstanding"],
    () => getAdmimOutstanding(),
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      <ProgressBar
        striped={isFetching}
        variant={error ? "danger" : isFetching ? "info" : "success"}
        now={100}
      />

      <pre>
        {`Mining Taxes:\n`}
        {isLoading ? "Loading..." : ""}
        {data?.map((i: any) => (
          <>{`${i}\n`}</>
        ))}
      </pre>
    </>
  );
};
