"use client";

import { Usermanagement as UsermanagementType } from "@/src/components/usermanagement/usermanagement";
import { Usermanagement } from "@/src/components/usermanagement/usermanagement";

const mockAdminData: UsermanagementType[] = [
  // Sample user data
  { username: "user1", email: "user1@example.com", role: "Admin", status: "Active", moduleAccess: ["Purchasing"] },
  { username: "user2", email: "user2@example.com", role: "Employee", status: "Inactive", moduleAccess: [] },
  // Add more users as needed
];

const handleEdit = (user: UsermanagementType) => {
  console.log("Editing user:", user);
};

const handleDelete = (user: UsermanagementType) => {
  console.log("Deleting user:", user);
};

export default function UserManagement() {
  return (
    <Usermanagement
      admin={mockAdminData}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
