"use client";
import { useState } from "react";
import TableBooking from "@/components/TableBooking";
import BookForm from "@/components/BookForm";

function BookTableClient({ events }) {
  const [selectedTable, setSelectedTable] = useState(null);

  return (
    <div>
      <TableBooking selectedTable={selectedTable} onSelectTable={setSelectedTable} />
      <BookForm selectedTable={selectedTable} events={events} />
    </div>
  );
}

export default BookTableClient;
