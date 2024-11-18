import PropTypes from "prop-types";
// import "../../styles/layouts/container.scss";

const ContainerBox = ({ className, children, style }) => {
  return (
    <section className={className} style={style}>
      {children}
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
  style: {},
};

export default ContainerBox;
