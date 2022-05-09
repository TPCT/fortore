import $ from "jquery";

const hide = (hide_id, show_id) => {
    if (!hide_id) return;

    if (hide_id){
        let hide_parent = $(`#${hide_id}`);
        hide_parent.css('opacity', 1);
        hide_parent.show();
        hide_parent.animate({
                opacity: "0",
            }, 500, function (){
                hide_parent.hide();
                show(show_id, null);
            }
        );
    }
}

const show = (show_id, hide_id) => {
    if (!show_id) return;
    if (show_id){
        let show_parent = $(`#${show_id}`);
        show_parent.css('opacity', 0);
        show_parent.show();
        show_parent.animate({
                opacity: "1",
            }, 500, function (){
                hide(hide_id, null);
            }
        );
    }
}

export {show, hide}