import PropTypes from "prop-types";

const ProfileArea = ({
    userName,
    profileUrl,
    profileAlt,
    userGrade,
}) => {
    return (
        <>
            <div className="profile_box">
                <span className="photo"><img src={ profileUrl } alt={ profileAlt } /></span>
                <div className="user_info">
                    <strong className="user_name">{ userName }</strong>
                    <span className="user_grade">{ userGrade }</span>
                </div>                
            </div>
        </>
    )
}

ProfileArea.propTypes = {
    userName: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    profileAlt: PropTypes.string,
    userGrade: PropTypes.string,
}

export default ProfileArea;