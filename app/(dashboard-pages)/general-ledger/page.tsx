"use client";

import React from "react";
import { Generalledger, GeneralledgerProps } from "@/src/components/generalledger/generalledger";

// Dummy data for the journal entries
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

export default function GeneralLedger() {
  const handleView = (entry: Generalledger) => {
    console.log("Viewing:", entry);
  };

  const handleEdit = (entry: Generalledger) => {
    console.log("Editing:", entry);
  };

  const handleDelete = (entry: Generalledger) => {
    console.log("Deleting:", entry);
  };

  return (
    <Generalledger
      journal={dummyJournal}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
