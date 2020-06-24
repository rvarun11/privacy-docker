
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('save').addEventListener('click', function() { saveChanges(); });

});

function saveChanges(){
    var se = document.getElementById("search-engine");
    var searchValue = se.options[se.selectedIndex].value;
    
    var mp = document.getElementById("mail-provider");
    var mailValue = mp.options[mp.selectedIndex].value;

    var msg = document.getElementById("messaging");
    var msgValue = msg.options[msg.selectedIndex].value;

    var cl = document.getElementById("cloud-storage");
    var cloudValue = cl.options[cl.selectedIndex].value;

    var os = document.getElementById("office-suite");
    var docsValue = os.options[msg.selectedIndex].value;
    
    var map = document.getElementById("maps");
    var mapsValue = map.options[map.selectedIndex].value;

    var gal = document.getElementById("gallery");
    var galleryValue = gal.options[gal.selectedIndex].value;

    var cal = document.getElementById("calendar");
    var calValue = cal.options[cal.selectedIndex].value;

    var note = document.getElementById("notes");
    var notesValue = note.options[note.selectedIndex].value;

    var fs = document.getElementById("file-sharing");
    var fshareValue = fs.options[fs.selectedIndex].value;

    var pm = document.getElementById("password-manager");
    var passValue = pm.options[pm.selectedIndex].value;

    var vpn = document.getElementById("vpn");
    var vpnValue = vpn.options[vpn.selectedIndex].value;

    
    chrome.storage.sync.set({
        "searchURL": getServiceURL(searchValue),
        "mailURL": getServiceURL(mailValue),
        "msgURL": getServiceURL(msgValue),
        "cloudURL": getServiceURL(cloudValue),
        "docsURL": getServiceURL(docsValue),
        "mapsURL": getServiceURL(mapsValue),
        "galleryURL": getServiceURL(galleryValue),
        "calURL": getServiceURL(calValue),
        "notesURL": getServiceURL(notesValue),
        "fshareURL": getServiceURL(fshareValue),
        "passURL": getServiceURL(passValue),
        "vpnURL": getServiceURL(vpnValue),
    });
    window.open("popup.html","_self")
}

function getServiceURL(x){
    var url;
    switch(x){
        //Search Engines
        case "DuckDuckGo":
            url = "https://duckduckgo.com/?t=lm&q=";
            break;
        case "StartPage":
            url = "https://www.startpage.com/do/dsearch?query=";
            break;
        case "Qwant":
            url = "https://www.qwant.com/?q=";
            break;
        //Mail Providers
        case "ProtonMail":
            url = "https://protonmail.com/";
            break;
        case "Tutanota":
            url = "https://tutanota.com/";
            break;
        case "StartMail":
            url = "https://www.startmail.com/en/";
            break;
            //Messaging
        case "Keybase":
            url = "https://keybase.io/";
            break;
        case "Signal":
            url = "https://signal.org/";
            break;
        //Cloud
        case "Nextcloud":
            url = "https://nextcloud.com/";
            break;
        case "Sync":
            url = "https://www.sync.com/";
            break;
        case "pCloud":
            url = "https://www.pcloud.com/";
            break;
        //Office Suite
        case "CryptPad":
            url = "https://cryptpad.fr/";
            break;
        case "Zoho-Docs":
            url = "https://www.zoho.com/docs/office-suite.html";
            break;
        case "Etherpad":
            url = "https://etherpad.org/";
            break;
        //Maps
        case "OpenStreetMap":
            url = "https://www.openstreetmap.org/";
            break;
        case "MAPS.ME":
            url = "https://maps.me/";
            break;
        case "HereWeGo":
            url = "https://wego.here.com/";
            break;
        //Gallery
        case "Piwigo":
            url = "https://piwigo.org/";
            break;
        case "Lychee":
            url = "https://lychee.electerious.com/"
            break;
        case "Cryptee":
            url = "https://crypt.ee/";
            break;
        //Calendar
        case "EteSync":
            url = "https://www.etesync.com/";
            break;
        case "Lightning-Calendar":
            url = "https://www.thunderbird.net/en-US/calendar/";
            break;
        case "Fruux":
            url = "https://fruux.com/";
            break; 
        //Notes
        case "Standard-Notes":
            url = "https://standardnotes.org/";
            break;
        case "Joplin":
            url = "https://joplinapp.org/";
            break;
        case "QOwnNotes":
            url = "https://www.qownnotes.org/";
            break;
        //Fire Sharing
        case "Firefox-Send":
            url = "https://send.firefox.com/";
            break;
        case "Onion-Share":
            url = "https://onionshare.org/";
            break;
        case "Magic-Wormhole":
            url = "https://github.com/warner/magic-wormhole";
            break;
        //Pasword Manager
        case "Bitwarden":
            url = "https://bitwarden.com/";
            break;
        case "KeePassXC":
            url = "https://keepassxc.org/";
            break;
        case "LessPass":
            url = "https://lesspass.com/";
            break;
        //VPN
        case "ProtonVPN":
            url = "https://protonvpn.com/";
            break;
        case "ExpressVPN":
            url = "https://www.expressvpn.com/";
            break;
        case "NordVPN":
            url = "https://nordvpn.com/";
            break;
    }

    return url;
}
