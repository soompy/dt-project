import PropTypes from "prop-types";

const Wrapper = ({ className, style, children }) => {
  return (
    <section className={className} style={style}>
      { children }
    </section>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Wrapper;
