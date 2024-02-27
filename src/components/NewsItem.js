import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const NewsItem = ({ title, description, image, url, author, date, source }) => {
  return (
    <>
      <Card>
       <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
       <span className="badge rounded-pill bg-success">
          {source == "[Removed]" ? "Unknown" : source} </span>
       </div>
        <Card.Img variant="top" src={image ? image : "https://ichef.bbci.co.uk/news/1024/branded_news/BDA2/production/_132664584_smokereuters.jpg"} /> {/* Use the 'image' prop for the source */}
        <Card.Body>
          <Card.Title>{title == "[Removed]" ? "Unknown" : title.slice(0, 45)}</Card.Title>
          <Card.Text>{description == "[Removed]" ? "There is No any Description for this:" : description}</Card.Text>
          <div><small className="text-muted">By {author ? author : "Unknown"} <b>on</b> {date}</small></div>


          <a href={url} target='_blank' className='btn btn-sm btn-dark mt-2'>Read more</a>
        </Card.Body>
      </Card>
    </>
  );
};
