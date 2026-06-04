import React from "react";

const decodeHTMLEntities = (text) => {
  if (!text) return "";
  return text
    .replace(/&rsquo;|rsquo;/g, "'")
    .replace(/&lsquo;|lsquo;/g, "'")
    .replace(/&ldquo;|ldquo;/g, '"')
    .replace(/&rdquo;|rdquo;/g, '"')
    .replace(/&#39;|#39;/g, "'")
    .replace(/&#x27;|#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;|quot;/g, '"')
    .replace(/&amp;|amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;|ndash;/g, "-")
    .replace(/&mdash;|mdash;/g, "-");
};

export const renderMarkdownContent = (content) => {
  if (!content) return null;
  const normalized = decodeHTMLEntities(content.replace(/\u00A0/g, " "));

  // If content has HTML tags, render it directly as HTML (for backward compatibility)
  if (/<[a-z][\s\S]*>/i.test(normalized)) {
    return <div dangerouslySetInnerHTML={{ __html: normalized }} />;
  }

  // Parse Markdown blocks
  const blocks = normalized.split(/\n\s*\n/);

  return blocks.map((block, index) => {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) return null;

    // Heading 2: starting with '## '
    if (trimmedBlock.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-base sm:text-lg font-semibold text-slate-800 mt-8 mb-4"
        >
          {trimmedBlock.replace("## ", "")}
        </h2>
      );
    }

    // Heading 3: starting with '### '
    if (trimmedBlock.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-sm sm:text-base font-semibold text-slate-800 mt-6 mb-3"
        >
          {trimmedBlock.replace("### ", "")}
        </h3>
      );
    }

    // Unordered list: block where lines start with '- ' or '* '
    if (trimmedBlock.startsWith("- ") || trimmedBlock.startsWith("* ")) {
      const items = trimmedBlock
        .split("\n")
        .map((line) => line.trim().replace(/^[-*]\s+/, ""))
        .filter(Boolean);
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
          {items.map((item, idx) => {
            const parts = item.split(/\*\*([\s\S]*?)\*\*/g);
            return (
              <li
                key={idx}
                className="text-slate-600 text-sm sm:text-base leading-relaxed"
              >
                {parts.map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="font-extrabold text-slate-800">
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </li>
            );
          })}
        </ul>
      );
    }

    // Ordered list: block where lines start with numbers e.g. '1. '
    if (/^\d+\.\s+/.test(trimmedBlock)) {
      const items = trimmedBlock
        .split("\n")
        .map((line) => line.trim().replace(/^\d+\.\s+/, ""))
        .filter(Boolean);
      return (
        <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
          {items.map((item, idx) => {
            const parts = item.split(/\*\*([\s\S]*?)\*\*/g);
            return (
              <li
                key={idx}
                className="text-slate-600 text-sm sm:text-base leading-relaxed"
              >
                {parts.map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="font-extrabold text-slate-800">
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </li>
            );
          })}
        </ol>
      );
    }

    // Markdown Table: block where lines contain '|'
    if (trimmedBlock.includes("|")) {
      const rows = trimmedBlock
        .split("\n")
        .map((r) => r.trim())
        .filter(Boolean);
      if (rows.length >= 2) {
        const parsedRows = rows
          .filter((r) => !/^[|:\s-]*$/.test(r))
          .map((row) => {
            return row
              .split("|")
              .map((cell) => cell.trim())
              .filter((_, i, arr) => i > 0 && i < arr.length - 1);
          })
          .filter((row) => row.length > 0);

        if (parsedRows.length > 0) {
          const headers = parsedRows[0];
          const bodyRows = parsedRows.slice(1);
          return (
            <div
              key={index}
              className="overflow-x-auto my-6 border border-slate-200"
            >
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    {headers.map((h, i) => (
                      <th
                        key={i}
                        className="p-3 text-left font-bold border-r border-slate-200 last:border-0"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="p-3 border-r border-slate-200 last:border-0 text-slate-600 font-semibold"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
    }

    // Default: Paragraph
    const parts = trimmedBlock.split(/\*\*([\s\S]*?)\*\*/g);
    return (
      <p
        key={index}
        className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6"
      >
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-extrabold text-slate-800">
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </p>
    );
  });
};
