"use client";

import { Table } from "flowbite-react";

export function ContentTable() {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>MID</Table.HeadCell>
          <Table.HeadCell>Desc</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="pr-0 font-medium text-gray-900 dark:text-white">
              {"80540"}
            </Table.Cell>
            <Table.Cell className="truncate overflow-hidden max-w-[25vw] pr-0">
              SOKLIN LIQUID DET PERFUME SCT 22ML R12
            </Table.Cell>
            <Table.Cell className="pr-0">2</Table.Cell>
            <Table.Cell className="pl-0">
              <a href="#" className="font-medium text-blue hover:underline ">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="pr-0 font-medium text-gray-900 dark:text-white">
              {"80540"}
            </Table.Cell>
            <Table.Cell className="truncate overflow-hidden max-w-[25vw] pr-0">
              SOKLIN LIQUID DET PERFUME SCT 22ML R12
            </Table.Cell>
            <Table.Cell className="pr-0">2</Table.Cell>
            <Table.Cell className="pl-0">
              <a href="#" className="font-medium text-blue hover:underline ">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="pr-0 font-medium text-gray-900 dark:text-white">
              {"80540"}
            </Table.Cell>
            <Table.Cell className="truncate overflow-hidden max-w-[25vw] pr-0">
              SOKLIN LIQUID DET PERFUME SCT 22ML R12
            </Table.Cell>
            <Table.Cell className="pr-0">2</Table.Cell>
            <Table.Cell className="pl-0">
              <a href="#" className="font-medium text-blue hover:underline ">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="pr-0 font-medium text-gray-900 dark:text-white">
              {"17005522"}
            </Table.Cell>
            <Table.Cell className="truncate overflow-hidden max-w-[25vw] pr-0">
              SOKLIN LIQUID DET PERFUME SCT 22ML R12
            </Table.Cell>
            <Table.Cell className="pr-0">2</Table.Cell>
            <Table.Cell className="pl-0">
              <a href="#" className="font-medium text-blue hover:underline ">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
