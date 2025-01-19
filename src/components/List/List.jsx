import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const ListCp = ({ titles, items, children }) => {
  return (
    <ul className="list">
      {titles.map((item, i) => (
        <Fragment key={i}>
          <li>
            <article className={item.titleClass}>
              {item.text}
              <figure>
                <LazyImage src={item.imageSrc || ""} alt={item.imageAlt || "Image"} />
                <figcaption>{item.title}</figcaption>
              </figure>
            </article>
            <div className="txt-box">
              <h2 className="tit">{item.title}</h2>
              {item.title2 && <h3 className="tit _sub">{item.title2}</h3>}
              {item.txt2 && <p className="txt">{item.txt2}</p>}
              {/* children에서 해당 slot을 찾거나 기본 값을 렌더링 */}
              {children?.[`item.${item.value}`]
                ? React.cloneElement(children[`item.${item.value}`], { items })
                : items[item.value]}
            </div>
          </li>          
        </Fragment>
      ))}
    </ul>
  );
};

ListCp.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      titleClass: PropTypes.string,
      itemClass: PropTypes.string,
      value: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
    })
  ).isRequired,
  items: PropTypes.object.isRequired,
  // children: PropTypes.object,
  children: PropTypes.object.isRequired,

};

export default ListCp;
