import React, { useState, useRef, useEffect } from "react";
import "./generalledger.css";

// Interface for journal entries
export interface Generalledger {
  entryNumber: string;
  date: string;
  description: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
}

// Props for the Generalledger component
export interface GeneralledgerProps {
  journal: Generalledger[];
  onView: (journal: Generalledger) => void;
  onEdit: (journal: Generalledger) => void;
  onDelete: (journal: Generalledger) => void;
  className?: string;
}

// Dropdown component for actions
const DropdownActions: React.FC<{
  journal: Generalledger;
  onView: (journal: Generalledger) => void;
  onEdit: (journal: Generalledger) => void;
  onDelete: (journal: Generalledger) => void;
}> = ({ journal, onView, onEdit, onDelete }) => {
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
    <div className="relative journal_div1" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="bg-gray-200 px-4 py-2 rounded">Actions</button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg journal_div2">
          <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => { onView(journal); setIsOpen(false); }}>View</button>
          <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => { onEdit(journal); setIsOpen(false); }}>Edit</button>
          <button className="block px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => { onDelete(journal); setIsOpen(false); }}>Delete</button>
        </div>
      )}
    </div>
  );
};

export const Generalledger: React.FC<GeneralledgerProps> = ({
  journal = [],
  onView,
  onEdit,
  onDelete,
  className = "",
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5; // Set number of entries per page

  // Calculate total pages
  const totalPages = Math.ceil(journal.length / entriesPerPage);

  // Get current entries for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = journal.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div className={`${className} journal`}>
      <p className="journal_p1 text-xl font-semibold p-4">Journal Entries</p>

      <div className={`p-4 bg-gray-100 ${className} Purchasing_div1 flex justify-end`}>
        <button
          className="bg-[#028020] py-2 px-4 rounded text-white mr-2"
          onClick={toggleModal}
        >
          <strong>Create Journal Entry</strong>
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full z-60">
              <h2 className="text-xl font-semibold mb-4">Create Journal Entry</h2>
              <form onSubmit={handleFormSubmit}>
                {/* Form fields here */}
                <div className="flex justify-end space-x-2">
                  <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={toggleModal}>Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Post Entry</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <table className="table-auto">
        <thead className="journal_thead1">
          <tr>
            <th>Entry Number</th>
            <th>Date</th>
            <th>Description</th>
            <th>Debit Account</th>
            <th>Credit Account</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="journal_tbody1">
          {currentEntries.length > 0 ? (
            currentEntries.map((entry) => (
              <tr key={entry.entryNumber}>
                <td>{entry.entryNumber}</td>
                <td>{entry.date}</td>
                <td>{entry.description}</td>
                <td>{entry.debitAccount}</td>
                <td>{entry.creditAccount}</td>
                <td>${entry.amount.toFixed(2)}</td>
                <td>
                  <DropdownActions
                    journal={entry}
                    onView={onView}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center">
                No journal entries found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between p-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main component to render Generalledger with dummy data
const GeneralledgerComponent: React.FC = () => {
  // Handler functions
  const handleView = (journal: Generalledger) => {
    console.log("Viewing journal entry:", journal);
  };

  const handleEdit = (journal: Generalledger) => {
    console.log("Editing journal entry:", journal);
  };

  const handleDelete = (journal: Generalledger) => {
    console.log("Deleting journal entry:", journal);
  };

  // Dummy data
  const dummyjournal: Generalledger[] = [
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
    // Add more entries as needed...
  ];

  return (
    <Generalledger
      journal={dummyjournal}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default GeneralledgerComponent;
