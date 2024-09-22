import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Usermanagement, Usermanagement as UsermanagementType } from "../../../components/usermanagement/usermanagement";

const dummyUsers: UsermanagementType[] = [
  {
    username: "john_doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    moduleAccess: ["Purchasing"], // Ensure moduleAccess is included
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Inactive",
    moduleAccess: ["Accounts Payable", "General Ledger"], // Ensure moduleAccess is included
  },
];

export default createBoard({
  name: "Usermanagement",
  Board: () => (
    <Usermanagement
      admin={dummyUsers}
      onEdit={(user) => console.log("Editing user:", user)}
      onDelete={(user) => console.log("Deleting user:", user)}
    />
  ),
  isSnippet: true,
});
