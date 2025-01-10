import PropTypes from "prop-types";

const ProfileArea = ({
    userName,
    profileUrl,
}) => {
    return (
        <>
            <div className="profile_box">
                <span className="photo"><img src={ profileUrl } alt="" /></span>
                <strong className="user_name">{ userName }</strong>
            </div>
        </>
    )
}

ProfileArea.propTypes = {
    userName: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
}

export default ProfileArea;