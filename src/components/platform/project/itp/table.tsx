import { widths } from "@/constant/project/itp/table";
import React from "react";

const Table = (props: { data: string[][] }) => {
  return (
    <table className="table-fixed w-[1239px] border-collapse border border-black text-xs text-center">
      <tbody>
        {props.data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                style={{ width: widths[cellIndex] }}
                className={`border border-black p-1 overflow-hidden text-overflow-ellipsis ${cellIndex === 2 ? 'text-left px-4' : ''}`}
                dangerouslySetInnerHTML={{ __html: cell }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;