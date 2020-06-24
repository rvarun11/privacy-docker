function getService(s){
    var url;
    if (s=="se"){
        var txt = document.getElementById("se-txt").value;
        url = "https://duckduckgo.com/?t=lm&q=" + txt;
        document.getElementById("se-txt").value = "";
    }
    else if (s=="mail"){
        url = "https://protonmail.com/";
    }
    else if (s=="msg"){
        url = "https://keybase.io/  ";
    }
    else if (s=="cloud"){
        url = "https://nextcloud.com/";
    }
    else if (s=="docs"){
        url = "https://cryptpad.fr/";
    }
    else if (s=="map"){
        url = "https://www.openstreetmap.org/";
    }
    else if (s=="gallery"){
        url = "https://piwigo.org/";
    }
    else if (s=="cal"){
        url = "https://www.etesync.com/";
    }
    else if (s=="notes"){
        url = "https://standardnotes.org/";
    }
    else if (s=="share"){
        url = "https://send.firefox.com/";
    }
    else if (s=="pass"){
        url = "https://bitwarden.com/";
    }
    else if (s=="vpn"){
        url = "https://protonvpn.com/";
    }

    var win = window.open(url);
    win.focus();
}

function save(){
    
}
