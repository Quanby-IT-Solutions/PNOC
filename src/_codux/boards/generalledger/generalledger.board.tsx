import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Generalledger, GeneralledgerProps } from "../../../components/generalledger/generalledger";

// Dummy data for the board
const dummyJournal: Generalledger[] = [
  {
    entryNumber: "JN-001",
    date: "2023-09-21",
    description: "Purchase of office supplies",
    debitAccount: "Office Supplies",
    creditAccount: "Cash",
    amount: 200.0,
  },
  {
    entryNumber: "JN-002",
    date: "2023-09-22",
    description: "Payment for utilities",
    debitAccount: "Utilities",
    creditAccount: "Bank",
    amount: 450.0,
  },
  {
    entryNumber: "JN-003",
    date: "2023-09-23",
    description: "Service income received",
    debitAccount: "Bank",
    creditAccount: "Service Income",
    amount: 1200.0,
  },
];

export default createBoard({
  name: "Generalledger",
  Board: () => (
    <Generalledger
      journal={dummyJournal}
      onView={(entry) => console.log("Viewing:", entry)}
      onEdit={(entry) => console.log("Editing:", entry)}
      onDelete={(entry) => console.log("Deleting:", entry)}
    />
  ),
  isSnippet: true,
});
