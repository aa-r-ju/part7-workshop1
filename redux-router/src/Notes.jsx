import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
const Notes = ({notes}) => {

  return (
    <>
    <h2>All notes </h2>
      <Table striped>
          <tbody>
      {notes.map((note) => (
        
          <tr key ={note.id}>
         <td><Link to={`/notes/${note.id}`} key={note.id}> {note.content} </Link> </td>
         <td> <strong>{note.important ? "important" : ""}</strong></td>
          </tr>
       
      ))}
      </tbody>
    </Table>
    </>
  );
};

export default Notes;
