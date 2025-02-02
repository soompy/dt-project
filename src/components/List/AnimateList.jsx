import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card ({ id, title, category, theme, isSelected }) {
    return (
        <li className={`card ${theme} ${isSelected ? "selected" : ""}`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img
                            className="card-image"
                            src={`images/${id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link to={id} className={`card-open-link`} />
        </li>
    );
};

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string, 
    category: PropTypes.string,
    theme: PropTypes.oneOf(["primary_1", "primary_2", ""]),
    item:  PropTypes.array, 
};



const AnimateList = ({ selectedId, items }) => {
    return (
        <ul className="card-list">
            {items.map((card) => (
                <Card 
                    key={card.id}
                    {...card}
                    isSelected={card.id === selectedId}
                />
            ))}
        </ul>
    );
};