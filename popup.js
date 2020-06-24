// URLs for all services
var se_url,mail_url, msg,_url,cloud_url,docs_url,maps_url, gallery_url, cal_url, notes_url, fshare_url, pass_url, vpn_url;

// Get all services ready when DOM is loaded.
document.addEventListener('DOMContentLoaded', function() { getService() });

function getService(){
    // Get URLs of services 
    chrome.storage.sync.get(["searchURL","mailURL","msgURL","cloudURL","docsURL","mapsURL","galleryURL",
    "calURL","notesURL","fshareURL","passURL","vpnURL"], function (obj) { 
    
        // Get service URL from storage, if not available, use default.
        se_url = obj.searchURL;
        mail_url = obj.mailURL;
        msg_url = obj.msgURL;
        cloud_url = obj.cloudURL;
        docs_url = obj.docsURL;
        maps_url = obj.mapsURL;
        gallery_url = obj.galleryURL;
        cal_url = obj.calURL;
        notes_url = obj.notesURL;
        fshare_url = obj.fshareURL;
        pass_url = obj.passURL;
        vpn_url = obj.vpnURL;

        // use defaults (if no changes were made in settings.html)
        if(!se_url)
            se_url = "https://duckduckgo.com/?t=lm&q=";
        if (!mail_url)
            mail_url = "https://protonmail.com/" 
        if (!msg_url)
            msg_url = "https://keybase.io/";
        if (!cloud_url)
            cloud_url = "https://nextcloud.com/";
        if (!docs_url)
            docs_url = "https://cryptpad.fr/";
        if (!maps_url)
            maps_url = "https://www.openstreetmap.org/";
        if (!gallery_url)
            gallery_url = "https://piwigo.org/";
        if (!cal_url)
            cal_url = "https://www.etesync.com/";
        if (!notes_url)
            notes_url = "https://standardnotes.org/";
        if (!fshare_url)
            fshare_url = "https://send.firefox.com/";
        if (!pass_url)
            pass_url = "https://bitwarden.com/";
        if (!vpn_url)
            vpn_url = "https://protonvpn.com/";
    }); 

    document.getElementById('se-btn').addEventListener('click', function() { goSearch(se_url); });
    document.getElementById('mail-btn').addEventListener('click', function() { chrome.tabs.create({'url':mail_url}); });
    document.getElementById('msg-btn').addEventListener('click', function() { chrome.tabs.create({'url':msg_url}); });
    document.getElementById('cloud-btn').addEventListener('click', function() { chrome.tabs.create({'url':cloud_url}); });
    document.getElementById('docs-btn').addEventListener('click', function() { chrome.tabs.create({'url':docs_url}); });
    document.getElementById('maps-btn').addEventListener('click', function() { chrome.tabs.create({'url':maps_url}); });
    document.getElementById('gallery-btn').addEventListener('click', function() { chrome.tabs.create({'url':gallery_url}); });
    document.getElementById('cal-btn').addEventListener('click', function() { chrome.tabs.create({'url':cal_url}); });
    document.getElementById('notes-btn').addEventListener('click', function() { chrome.tabs.create({'url':notes_url}); });
    document.getElementById('fshare-btn').addEventListener('click', function() { chrome.tabs.create({'url':fshare_url}); });
    document.getElementById('pass-btn').addEventListener('click', function() { chrome.tabs.create({'url':pass_url}); });
    document.getElementById('vpn-btn').addEventListener('click', function() { chrome.tabs.create({'url':vpn_url}); });

}

function goSearch(url){
    var txt = document.getElementById("se-txt").value;
    var x = url + txt;
    document.getElementById("se-txt").value = "";
    chrome.tabs.create({'url':x});
}
