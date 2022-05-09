import './Assets/modal.css';
import image1 from "./Assets/image1.jpeg";
import image2 from "./Assets/image2.jpeg";
import MainBackButton from "../Utils/MainBackButton";

const InfoModal = ({id, back, hide}) => {
    return (
        <section id={id} className="info-modal" style={{display: hide ? "none" : "flex"}}>
            <div className="modal-image">
                <img src={image2}/>
            </div>
            <MainBackButton id={id} back={back}></MainBackButton>
        </section>
    );
}

export default InfoModal;