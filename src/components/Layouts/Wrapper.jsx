import PropTypes from "prop-types";
// import { Space } from "antd";

const Wrapper = ({ className, children, style }) => {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};

export default Wrapper;
