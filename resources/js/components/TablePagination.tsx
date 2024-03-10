import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationLink as PLink } from "@/lib/schemas";
import { Link } from "@inertiajs/react";
import { link } from "fs";

const TablePagination = ({ links, prev_url, next_url }: { links: PLink[], prev_url: string, next_url:string }) => {
   links.pop()
   links.shift()
    return (
        <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Link href={prev_url} disabled={!prev_url}>
                    <PaginationPrevious />
                </Link>
              </PaginationItem>
                {
                    links.map((link, index) => {
                        if (link.active) {
                            return (
                                <PaginationItem key={index}>
                                    <Link href={link.url}>
                                        <PaginationLink isActive>
                                            {link.label}
                                        </PaginationLink>
                                    </Link>
                                </PaginationItem>
                            );
                        }
                        if (link.url) {
                            return (
                                <PaginationItem key={index}>
                                    <Link href={link.url}>
                                        <PaginationLink href={link.url}>
                                            {`${link.label}`}
                                        </PaginationLink>
                                    </Link>
                                </PaginationItem>
                            );
                        }
                        return (
                            <PaginationEllipsis key={index} />
                        );
                    })}
                <PaginationItem>
                  <Link href={next_url} disabled={!next_url}>
                    <PaginationNext/>
                  </Link>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TablePagination;
