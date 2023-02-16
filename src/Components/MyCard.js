import { ListGroupItem } from 'react-bootstrap';

function MyCard(items) {
  return (
    <ListGroupItem style={{ borderBottom: '1px solid white' }}>
      <div className="d-flex w-100">
      <small> <strong>{items.items.Date}</strong></small>
        <h5>
          <a href={items.items.Link} style={{ color: 'white' }} target="_blank">{items.items.Name}</a>
        </h5>
      </div>
      <p>{items.items.Description}</p>
    </ListGroupItem>
  );
}

export default MyCard;