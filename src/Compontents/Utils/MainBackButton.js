import {hide} from "./animations"

const MainBackButton = ({id, back}) => {
    if (back){
        return (
            <div className="d-flex justify-content-center">
                <button className="btn btn-success mt-3" onClick={
                    function(){
                        hide(id, back);
                    }
                }>الرجوع للخلف</button>
            </div>
        )
    }
    return "";
}

export default MainBackButton;