import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANTS_COLUMNS, JOB_APPLICANTS_DATA } from "@/constants";
import ButtonActionTable from "../ButtonActionTable";
type Props = {};

const Applicants = (props: Props) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANTS_COLUMNS.map((item: string, i: number) => (
              <TableHead key={item + i}>{item}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {JOB_APPLICANTS_DATA.map((item: any, i: number) => (
            <TableRow key={item.name + i}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.appliedDate}</TableCell>
              <TableCell>
                <ButtonActionTable url="" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Applicants;
