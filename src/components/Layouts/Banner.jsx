import PropTypes from "prop-types";

const Banner = ({
    bannerUrl,
    bannerAlt,
}) => {
    return (
        <span className="banner_container">
            <img src={ bannerUrl } alt={ bannerAlt } />
        </span>
    )
}

Banner.propTypes = {
    bannerUrl: PropTypes.string.isRequired,
    bannerAlt: PropTypes.string,
}

export default Banner;