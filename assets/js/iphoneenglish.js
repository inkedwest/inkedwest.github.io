/* PARAMÈTRES JS POUR L'IPHONE DANS LA SECTION "CONTACT" */

function responsiveChat(element) {
    $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }
    showLatestMessage();


    $(element + ' input[type="text"]').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $(element + ' input[type="submit"]').click();
        }
    });
    $(element + ' input[type="submit"]').click(function (event) {
        event.preventDefault();
        var message = $(element + ' input[type="text"]').val();
        if ($(element + ' input[type="text"]').val()) {
            var d = new Date();
            var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var currentDate =
                (("" + day).length < 2 ? "0" : "") +
                day +
                "." +
                (("" + month).length < 2 ? "0" : "") +
                month +
                "." +
                d.getFullYear() +
                "&nbsp;&nbsp;" +
                clock;
            $(element + ' div.messages').append(
                '<div class="message"><div class="myMessage"><p>' +
                message +
                "</p><date>" +
                currentDate +
                "</date></div></div>"
            );
            setTimeout(function () {
                $(element + ' > span').addClass("spinner");
            }, 100);
            setTimeout(function () {
                $(element + ' > span').removeClass("spinner");
            }, 2000);
        }
        $(element + ' input[type="text"]').val("");
        showLatestMessage();
    });
}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
responsiveChatPush('.chat', 'Recruteur', 'you', '19.02.2019 14:30', 'Hi Francky! I got an amazing opportunity for you. Can you provide me your eMail please? I would like to send you the job description. If you\'re interested by the position, we could have a call. What do you think about it?');
responsiveChatPush('.chat', 'Francky', 'me', '19.02.2019 14:36', 'Hello! Thanks for this offer!<br> To have my eMail and phone number, <br><strong>SCAN THE ATTACHED QR CODE WITH YOUR SMARTPHONE : <img src="assets/images/qrcode.png" width="150" height="150" /></strong><br> ou will have all the informations you need.');
responsiveChatPush('.chat', 'Recruteur', 'you', '19.02.2019 14:52', 'Indeed! Btw, I just scanned the QR Code, thanks ! I\'ll give you a call in few days :)');
responsiveChatPush('.chat', 'Francky', 'me', '19.02.2019 15:07', 'Great! Keep in touch then. Regards, Francky');
