import { Accordion, Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1>Fastweigh-Admin</h1>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Apple&nbsp;<span style={{color: 'red' }}>(8)</span></Accordion.Header>
          <Accordion.Body>
            <div>
              <Button variant="primary">Add</Button>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </div>
            <span>Price: 18.200/kg</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
