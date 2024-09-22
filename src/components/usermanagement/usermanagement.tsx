import React, { useState, useEffect, useRef } from "react";
import "./usermanagement.css";

export interface Usermanagement {
  username: string;
  email: string;
  role: string;
  status: string;
  moduleAccess: string[];
}

export interface UsermanagementProps {
  admin: Usermanagement[];
  onEdit: (user: Usermanagement) => void;
  onDelete: (user: Usermanagement) => void;
  className?: string;
}

export const Usermanagement: React.FC<UsermanagementProps> = ({
  admin,
  onEdit,
  onDelete,
  className = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const usersPerPage = 5;

  const totalPages = Math.ceil(admin.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = admin.slice(indexOfFirstUser, indexOfLastUser);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    toggleModal();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${className} supplier-invoices`}>
      <p className="SupplierInvoices_p1 text-xl font-semibold p-4">User Management</p>

      <div className={`p-4 bg-gray-100 ${className} Purchasing_div1 flex justify-end`}>
        <button
          className="bg-[#028020] py-2 px-4 rounded text-white"
          onClick={toggleModal}
        >
          <strong>Create User</strong>
        </button>
      </div>

      {/* Modal for creating a new user */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-60">
            <h2 className="text-xl font-semibold mb-4">Create User</h2>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  {["Admin", "Accountant", "Manager", "Employee", "Auditor"].map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="table-auto">
        <thead className="SupplierInvoices_thead1">
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Module Access</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="SupplierInvoices_tbody1">
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`${
                      user.status === "Active" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <select
                    value={user.moduleAccess[0] || ""}
                    onChange={(e) => {
                      console.log(`Updated module access for ${user.username}: ${e.target.value}`);
                    }}
                    className="border rounded p-1"
                  >
                    <option value="" disabled>
                      Select a module
                    </option>
                    {["Purchasing", "Accounts Payable", "General Ledger"].map((module) => (
                      <option key={module} value={module}>
                        {module}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <DropdownActions user={user} onEdit={onEdit} onDelete={onDelete} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between p-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Dropdown component for actions
const DropdownActions: React.FC<{
  user: Usermanagement;
  onEdit: (user: Usermanagement) => void;
  onDelete: (user: Usermanagement) => void;
}> = ({ user, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative SupplierInvoices_div1" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="bg-gray-200 px-4 py-2 rounded">
        Actions
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg SupplierInvoices_div2">
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            onClick={() => {
              onEdit(user);
              setIsOpen(false);
            }}
          >
            Edit
          </button>
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            onClick={() => {
              onDelete(user);
              setIsOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
