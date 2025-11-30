"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationComp2({
  totalPages,
  page,
  setPage,
}: {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}) {


  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  console.log(pages);

  return (
    <Pagination>
      <PaginationContent>

        {/* Previous */}
        <PaginationItem>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <PaginationPrevious href="#" />
          </button>
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((p) => (
          <PaginationItem key={p}>
            <button onClick={() => setPage(p)}>
              <PaginationLink isActive={page === p} href="#">
                {p}
              </PaginationLink>
            </button>
          </PaginationItem>
        ))}

        {/* Ellipsis (only if many pages) */}
        {totalPages >= 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next */}
        <PaginationItem>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <PaginationNext href="#" />
          </button>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}
