import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
    {
        id: "c",
        category: "Pizza",
        title: "5 Food Apps Delivering the Best of Your City",
        pointOfInterest: 80,
        backgroundColor: "#814A0E",
    },
    {
        id: "f",
        category: "How to",
        title: "Arrange Your Apple Devices for the Gram",
        pointOfInterest: 120,
        backgroundColor: "#959684",
    },
    {
        id: "a",
        category: "Pedal Power",
        title: "Map Apps for the Superior Mode of Transport",
        pointOfInterest: 260,
        backgroundColor: "#5DBCD2",
    },
    {
        id: "g",
        category: "Holidays",
        title: "Our Pick of Apps to Help You Escape From Apps",
        pointOfInterest: 200,
        backgroundColor: "#8F986D",
    },
    {
        id: "d",
        category: "Photography",
        title: "The Latest Ultra-Specific Photography Editing Apps",
        pointOfInterest: 150,
        backgroundColor: "#FA6779",
    },
    {
        id: "h",
        category: "They're all the same",
        title: "100 Cupcake Apps for the Cupcake Connoisseur",
        pointOfInterest: 60,
        backgroundColor: "#282F49",
    },
    {
        id: "e",
        category: "Cats",
        title: "Yes, They Are Sociopaths",
        pointOfInterest: 200,
        backgroundColor: "#AC7441",
    },
    {
        id: "b",
        category: "Holidays",
        title: "Seriously the Only Escape is the Stratosphere",
        pointOfInterest: 260,
        backgroundColor: "#CC555B",
    },
];

// const openSpring = { type: "spring", stiffness: 200, damping: 30 };

const AnimateCard = ({ id }) => {
    const { category, title } = items.find((item) => item.id === id);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{ pointerEvents: "auto" }}
                className="overlay"
            >
                <Link to="/" />
            </motion.div>

            <div className="card-content-container open">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${id}`}
                >
                    <motion.span
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img
                            className="card-image"
                            src={`images/${id}.jpg`}
                            alt=""
                        />
                    </motion.span>

                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                    <motion.div className="content-container" animate>
                        sssssss
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

AnimateCard.propTypes = {
    id: PropTypes.string.isRequired,
};

export default AnimateCard;
