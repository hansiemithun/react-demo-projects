import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

export const Vis: React.FC = () => {


  let visJsRef = useRef<HTMLDivElement>(null);


  /* */
  useEffect(() => {
    const nodes = [
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" },
    ];

    const edges = [
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ];

    visJsRef.current &&
      new Network(
        visJsRef.current,
        { nodes, edges },
        {
          autoResize: true,
          edges: {
            color: "#411811"
          }
        }
      );
  }, [visJsRef]);
  /* */

  return (
    <div ref={visJsRef}
      style={{
        width: "80vw",
        height: "75vh",
        border: "solid 1px"
      }} />
  );
};
