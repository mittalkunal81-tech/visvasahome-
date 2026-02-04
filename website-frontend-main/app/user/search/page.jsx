import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="mt-[60px] px-[100px]">Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}
