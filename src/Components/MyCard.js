import { ListGroupItem } from 'react-bootstrap';

function MyCard({ items }) {
  return (
    <ListGroupItem style={{ borderBottom: '1px solid white' }}>
      <div className="d-flex align-items-start">
        {/* Clickable icon */}
        <a href={items.Link} target="_blank" rel="noopener noreferrer">
          <img
            src={items.Img}
            alt="icon"
            style={{
              width: '50px',
              height: '50px',
              marginRight: '15px'
            }}
          />
        </a>
        {/* Text container: title, date and description */}
        <div style={{ textAlign: 'left' }}>
          <h5 style={{ margin: 0 }}>
            <a
              href={items.Link}
              style={{ color: 'white' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {items.Name}
            </a>
          </h5>
          <small style={{ fontStyle: 'italic' }}>{items.Date}</small>
          <p style={{ marginTop: '5px' }}>{items.Description}</p>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default MyCard;