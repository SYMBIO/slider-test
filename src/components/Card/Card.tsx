import React from "react";
import styles from "./Card.module.scss";

export interface CardProps {
  image: any;
  header: any;
  content: any;
}

const Card = ({ image, header, content }: CardProps) => (
  <div className={`card ${styles.card}`}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img {...image} />
      </figure>
    </div>
    <div className="card-content">
      {header && (
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img {...header.image} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{header.title}</p>
            <p className="subtitle is-6">{header.subtitle}</p>
          </div>
        </div>
      )}

      <div className="content">
        {typeof content === "string" ? (
          content
        ) : (
          <>
            <h2 className="title">{content.title}</h2>
            <h3 className="subtitle">{content.subtitle}</h3>{" "}
          </>
        )}
      </div>
    </div>
  </div>
);

export default Card;
