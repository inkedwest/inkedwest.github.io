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
responsiveChatPush('.chat', 'Recruteur', 'you', '03.04.2019 2:30pm', 'Hi Francky! There\'s a great job opportunity I\'d like to talk to you. What\'s your email please? I\'d like to send you the job description. If you\'re interested by this job opening maybe we can discuss it live by the end of the week. What do you think?');
responsiveChatPush('.chat', 'Francky', 'me', '03.04.2019 2:36pm', 'Hi! Thanks for this great offer!<br> You\'ll know more about me by scanning the code below with your smartphone : <img src="assets/images/qrcode.png" width="150" height="150" /><br> You\'ll get all necessary info so we can get in touch.');
responsiveChatPush('.chat', 'Recruteur', 'you', '03.04.2019 2:52pm', 'Indeed, that\'s very thorough! As disccused I\'ll call you in few days.');
responsiveChatPush('.chat', 'Francky', 'me', '03.04.2019 3:07pm', 'My pleasure, Talk to you soon. Regards, Francky');
