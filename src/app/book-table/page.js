import Heading from "@/components/Heading";
import TableBooking from "@/components/TableBooking";
import BookForm from "@/components/BookForm";
import BookTableClient from "@/components/BookTableClient";

async function BookTable() {
  // HUSK At ÆNDRE URL'EN + SKAL HENTE FRA EVENTS I API'ET
  const res = await fetch("http://localhost:4000/events");
  const events = await res.json();

  // const [selectedTable, setSelectTable] = useState(null);

  return (
    <div className="">
      <Heading>Book Table</Heading>

      <main className="p-6 mt-4 mb-10 md:mx-auto md:max-w-360">
        <BookTableClient events={events} />
        {/* <TableBooking selectedTable={selectedTable} onSelectTable={setSelectTable} />
          <BookForm selectedTable={selectedTable} events={events} /> */}
      </main>
    </div>
  );
}

export default BookTable;
