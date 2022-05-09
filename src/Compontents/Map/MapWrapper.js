import $ from 'jquery'

const MapWrapper = (id)=>{
    // let header_canvas = $(`#${id} .canvas`);
    // let context = header_canvas[0].getContext('2d');
    //
    // function drawLine(x1, y1, x2, y2, width='1', color='#DAA520'){
    //     context.beginPath();
    //     context.lineWidth=width;
    //     context.strokeStyle=color;
    //     context.moveTo(x1, y1);
    //     context.lineTo(x2, y2);
    //     context.stroke();
    // }
    //
    // function connectNodes(selector, canvas){
    //     context.clearRect(0, 0, canvas.width(), canvas.height());
    //     let points = [];
    //     $(selector).each(function(index, item){
    //         let item_position = $(this).position();
    //         item_position.left += $(this).width()/2;
    //         item_position.top += $(this).height()/2;
    //         points.push(item_position);
    //     });
    //
    //     for(let i = 0; i < points.length; i++){
    //         for (let j=0; j < points.length; j++){
    //             drawLine(points[i].left, points[i].top, points[j].left, points[j].top)
    //         }
    //     }
    // }
    //
    // connectNodes(`#${id} .map-item`);

    // $(function (){
    //
    //
    //
    //     $(window).resize(function(){connectNodes('.map-item', header_canvas);})
    //     connectNodes('.map-item', header_canvas);
    // })
}

export default MapWrapper;