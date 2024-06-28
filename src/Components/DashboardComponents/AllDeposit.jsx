import React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Span } from "next/dist/trace";

const AllDeposit = () => {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableHeadCell className="p-4">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell>SL</TableHeadCell>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>User Detils</TableHeadCell>
          <TableHeadCell>Payment Detils</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Stats</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="p-4">
              <Checkbox />
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {"1"}
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">Date:</span> 04 Apr 24
                </p>
                <p>
                  <span className="font-bold">Time:</span> 08 04am
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">Name:</span> Fahad
                </p>
                <p>
                  <span className="font-bold">Phone:</span> 0123456789
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">Methode:</span> Nagad
                </p>
                <p>
                  <span className="font-bold">Payment Address:</span> 0123456
                </p>
                <p>
                  <span className="font-bold">Tranjection:</span> tranjexxxxx
                </p>
              </div>
            </TableCell>
            <TableCell>
                <p>$ 500</p>
            </TableCell>
            <TableCell>
                <p>Succecs</p>
            </TableCell>
            <TableCell>
                <div className='flex gap-3'>
                    <button className='bg-green-600 text-white p-1 px-3 rounded-md'>Aprove</button>
                    <button className='bg-red-500 text-white p-1 px-3 rounded-md'>Delet</button>
                </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllDeposit;
