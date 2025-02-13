import React, { Suspense } from "react";

const TerminalComponent = React.lazy(
  () => import("~/terminal/terminal")
);

const TerminalPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<div>Loading...</div>}>
        <TerminalComponent />
      </Suspense>
    </div>
  );
};

export default TerminalPage;
