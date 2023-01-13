import React, { ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote";
import { MarkdownResult } from "../utils";
import Link from "next/link";
export const Markdown = ({ content }: { content: MarkdownResult }) => {
  return (
    <MDXRemote
      {...content}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          if (!isInternalLink(href)) {
            return (
              <a
                href={href}
                {...props}
                rel="noopener noreferrer"
                target="_blank"
              ></a>
            );
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    ></MDXRemote>
  );
};
const isInternalLink = (link: string) => {
  return link.startsWith("/") ? true : false;
};
