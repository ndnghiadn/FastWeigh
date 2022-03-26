import { Accordion, Button } from 'react-bootstrap'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  quantityText: {
    color: 'red'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  badge: {
    margin: '30px 0'
  },
  accordion: {
    width: 'min(600px, 100%)'
  },
  price: {
    float: 'right',
    color: 'red',
    textDecoration: 'underline'
  }
}

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.badge}>Fastweigh-Admin</h1>
      <Accordion alwaysOpen style={styles.accordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Apple&nbsp;<span style={styles.quantityText}>(8)</span></Accordion.Header>
          <Accordion.Body>
            <div style={styles.buttons}>
              <Button variant="primary">Add</Button>
              <Button variant="primary">Edit</Button>
              <Button variant="danger">Delete</Button>
            </div>
            <span style={styles.price}>Gia tien: 18.200/kg</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
