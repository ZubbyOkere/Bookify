import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <CabinTable />

        <button onClick={() => setShowForm(!showForm)}>Show form </button>
        {showForm ? <CreateCabinForm /> : <h1>Nothing</h1>}
      </Row>
    </>
  );
}

export default Cabins;
