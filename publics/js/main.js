var socket = io("http://localhost:3000");

socket.on('Server-send-data', function(data) {

    const date = new Date();

    function getTimeChat() {

        const date = new Date();

        const gio = date.getHours();
        const phut = date.getMinutes();

        return `${gio}:${phut}`;
    }

    $('.msg_card_body').append(`
    
    <div class="d-flex justify-content-end mb-4">
    <div class="msg_cotainer_send">
    ${data}
    <span class="msg_time_send"> ${getTimeChat()}, Today</span>
    </div>
    <div class="img_cont_msg">
    <img class="rounded-circle user_img_msg" src="https://detusama.com/wp-content/uploads/2020/03/logo-detusama.png"></div></div>
    
    `);

    $(".msg_card_body").scrollTop($(".msg_card_body")[0].scrollHeight);

    console.log(data);


});











$(document).ready(function() {
    $('#action_menu_btn').click(function() {
        $('.action_menu').toggle();
    });

    $(".send_btn").click(() => {
        console.log('clicked send')
        let dataClient = $('.type_msg').val();
        socket.emit('Client-send-data', dataClient);
    });




});