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
responsiveChatPush('.chat', 'Recruteur', 'you', '01.04.2019 08:30', 'Bonjour Francky! J\'ai un super job à vous proposer. Auriez-vous une adresse mail svp? J\'aimerais vous envoyer la fiche de poste. Si l\'opportunité vous intéresse, nous pourrions nous appeler cette semaine afin d\'en discuter de vive voix. Qu\'en dites-vous?');
responsiveChatPush('.chat', 'Francky', 'me', '01.04.2019 08:36', 'Bonjour et merci pour cette proposition!<br> Pour avoir mes coordonnées complètes, <br><strong>SCANNEZ LE QR CODE CI-DESSOUS AVEC VOTRE SMARTPHONE : <img src="assets/images/qrcode.png" width="150" height="150" /></strong><br> Vous aurez toutes les informations utiles pour me contacter.');
responsiveChatPush('.chat', 'Recruteur', 'you', '01.04.2019 08:52', 'Effectivement très complet! QR Code scanné, c\'est dans la boîte, merci ! Je vous appelle dans quelques jours comme promis :)');
responsiveChatPush('.chat', 'Francky', 'me', '01.04.2019 09:07', 'Avec plaisir! À bientôt.');
