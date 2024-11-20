import PropTypes from "prop-types";
// import "../../styles/layouts/container.scss";

const ContainerBox = ({ className, children, style }) => {
  return (
    <section className={className} style={style}>
      {children}
      <div className="inner">
        <article className="img-box">
          <figure>
            <img src="" alt="" />
            <figcaption></figcaption>
          </figure>
        </article>
        <div className="txt-box">
          <h2 className="tit"></h2>
          <h3 className="tit _sub"></h3>
          <p className="txt"></p>
        </div>
      </div>
    </section>
  );
};

ContainerBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

ContainerBox.defaultProps = {
  className: "",
  style: {
    
  },
};

export default ContainerBox;
