/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'dribbble': '&#xe900;',
            'yelp': '&#xe901;',
            'foursquare': '&#xe902;',
            'flattr': '&#xe903;',
            'xing': '&#xe904;',
            'xing1': '&#xe905;',
            'pinterest': '&#xe906;',
            'pinterest1': '&#xe907;',
            'stackoverflow': '&#xe908;',
            'stumbleupon': '&#xe909;',
            'stumbleupon1': '&#xe90a;',
            'delicious': '&#xe90b;',
            'lastfm': '&#xe90c;',
            'lastfm1': '&#xe90d;',
            'linkedin': '&#xe90e;',
            'linkedin1': '&#xe90f;',
            'hackernews': '&#xe910;',
            'reddit': '&#xe911;',
            'skype': '&#xe912;',
            'soundcloud': '&#xe913;',
            'soundcloud1': '&#xe914;',
            'yahoo': '&#xe915;',
            'tumblr': '&#xe916;',
            'tumblr1': '&#xe917;',
            'blogger': '&#xe918;',
            'blogger1': '&#xe919;',
            'ello': '&#xe91a;',
            'wordpress': '&#xe91b;',
            'github': '&#xe91c;',
            'steam': '&#xe91d;',
            'steam1': '&#xe91e;',
            '500px': '&#xe91f;',
            'deviantart': '&#xe920;',
            'behance': '&#xe921;',
            'behance1': '&#xe922;',
            'dribbble1': '&#xe923;',
            'flickr': '&#xe924;',
            'flickr1': '&#xe925;',
            'flickr2': '&#xe926;',
            'flickr3': '&#xe927;',
            'vimeo': '&#xe928;',
            'vimeo1': '&#xe929;',
            'twitch': '&#xe92a;',
            'youtube': '&#xe92b;',
            'feed': '&#xe92c;',
            'rss': '&#xe92c;',
            'feed1': '&#xe92d;',
            'rss1': '&#xe92d;',
            'sina-weibo': '&#xe92e;',
            'renren': '&#xe92f;',
            'vk': '&#xe930;',
            'vine': '&#xe931;',
            'twitter': '&#xe932;',
            'telegram': '&#xe933;',
            'spotify': '&#xe934;',
            'whatsapp': '&#xe935;',
            'instagram': '&#xe936;',
            'facebook': '&#xe937;',
            'facebook1': '&#xe938;',
            'hangouts': '&#xe939;',
            'google-plus': '&#xe93a;',
            'google-plus1': '&#xe93b;',
            'google-plus2': '&#xe93c;',
            'mail': '&#xe93d;',
            'mail1': '&#xe93e;',
            'mail2': '&#xe93f;',
            'mail3': '&#xe940;',
            'share': '&#xe96c;',
            'social': '&#xe96c;',
            'category': '&#xe96d;',
            'page': '&#xe984;',
            'navigation-2': '&#xe985;',
            'hero': '&#xe986;',
            'blogger2': '&#xe987;',
            'bn': '&#xe988;',
            'en': '&#xe989;',
            'remit': '&#xe98a;',
            'arrow-down': '&#xe941;',
            'arrow-left': '&#xe942;',
            'arrow-right': '&#xe943;',
            'arrow-up': '&#xe944;',
            'arrow-bar-down': '&#xe945;',
            'arrow-bar-left': '&#xe946;',
            'arrow-bar-right': '&#xe947;',
            'arrow-bar-up': '&#xe948;',
            'arrow-round': '&#xe949;',
            'arrow-round2': '&#xe94a;',
            'down': '&#xe94b;',
            'down2': '&#xe94c;',
            'down-left': '&#xe94d;',
            'down-left2': '&#xe94e;',
            'down-left3': '&#xe94f;',
            'down-left4': '&#xe950;',
            'down-left5': '&#xe951;',
            'down-right': '&#xe952;',
            'down-right2': '&#xe953;',
            'down-right3': '&#xe954;',
            'down-right4': '&#xe955;',
            'down-right5': '&#xe956;',
            'down3': '&#xe957;',
            'down4': '&#xe958;',
            'down5': '&#xe959;',
            'down-up': '&#xe95a;',
            'down6': '&#xe95b;',
            'left': '&#xe95c;',
            'left2': '&#xe95d;',
            'left-right': '&#xe95e;',
            'left3': '&#xe95f;',
            'left4': '&#xe960;',
            'left5': '&#xe961;',
            'left6': '&#xe962;',
            'repeat': '&#xe963;',
            'return-left': '&#xe964;',
            'down-ri': '&#xe965;',
            'right': '&#xe966;',
            'right2': '&#xe967;',
            'right3': '&#xe968;',
            'right4': '&#xe969;',
            'right5': '&#xe96a;',
            'right6': '&#xe96b;',
            'up': '&#xe96e;',
            'up1': '&#xe96f;',
            'up-left': '&#xe970;',
            'up-left2': '&#xe971;',
            'up-left3': '&#xe972;',
            'up-left4': '&#xe973;',
            'up-left5': '&#xe974;',
            'up-right': '&#xe975;',
            'up-right2': '&#xe976;',
            'up-right3': '&#xe977;',
            'up-right4': '&#xe978;',
            'up-right5': '&#xe979;',
            'up2': '&#xe97a;',
            'up3': '&#xe97b;',
            'up4': '&#xe97c;',
            'up5': '&#xe97d;',
            'arrow-center': '&#xe97e;',
            'arrow-outer': '&#xe97f;',
            'collapse': '&#xe980;',
            'expand': '&#xe981;',
            'fullscreen': '&#xe982;',
            'move': '&#xe983;',
            'box-left-bottom-out': '&#xea00;',
            'box-right-bottom-out': '&#xea01;',
            'box-bottom-out': '&#xea02;',
            'box-top-right-in': '&#xea03;',
            'box-top-left-in': '&#xea04;',
            'box-top-in': '&#xea05;',
            'box-right-in': '&#xea06;',
            'box-left-in': '&#xea07;',
            'box-right-bottom-in': '&#xea08;',
            'box-left-bottom-in': '&#xea09;',
            'box-bottom-in': '&#xea0a;',
            'box-left-out': '&#xea0b;',
            'box-right-out': '&#xea0c;',
            'box-top-left-out': '&#xea0d;',
            'box-top-right-out': '&#xea0e;',
            'box-top-out': '&#xea0f;',
            'boxes': '&#xea18;',
            'buildings': '&#xea48;',
            'clipboard-check2': '&#xeb16;',
            'clipboard2': '&#xeb23;',
            'clipboard4': '&#xeb33;',
            'cloud-down': '&#xeb37;',
            'cloud-down2': '&#xeb38;',
            'cloud-up': '&#xeb39;',
            'cloud-up2': '&#xeb3a;',
            'cursor2': '&#xeb90;',
            'file-arrow-down': '&#xec41;',
            'file-arrow-down2': '&#xec42;',
            'file-arrow-up': '&#xec43;',
            'file-arrow-up2': '&#xec44;',
            'file-arrow-down3': '&#xec51;',
            'file-arrow-down4': '&#xec52;',
            'file-arrow-up3': '&#xec53;',
            'file-arrow-up4': '&#xec54;',
            'file-bar-graph4': '&#xec56;',
            'file-font2': '&#xec67;',
            'file-post': '&#xec7c;',
            'file-post2': '&#xec7d;',
            'file-post4': '&#xecad;',
            'filetype-css': '&#xecc7;',
            'filetype-html': '&#xecce;',
            'globe': '&#xed2e;',
            'graph-down-arrow': '&#xed33;',
            'graph-up-arrow': '&#xed35;',
            'house': '&#xed81;',
            'house2': '&#xed8e;',
            'info5': '&#xeda3;',
            'journal-down': '&#xedaa;',
            'journal-up': '&#xedab;',
            'sidebar-right': '&#xedcc;',
            'text-window-right': '&#xedd3;',
            'text-window-left': '&#xedd4;',
            'menu-button2': '&#xee03;',
            'postcard2': '&#xeebf;',
            'rewind': '&#xeef5;',
            'rewind2': '&#xeef6;',
            'rewind3': '&#xeef7;',
            'rewind4': '&#xeef8;',
            'rewind5': '&#xeef9;',
            'rewind6': '&#xeefa;',
            'search': '&#xef14;',
            'share2': '&#xef26;',
            'shop': '&#xef3a;',
            'signpost6': '&#xef69;',
            'tag2': '&#xefdc;',
            'wind': '&#xf081;',
            'window-dash': '&#xf082;',
            'window-desktop': '&#xf083;',
            'window-dock': '&#xf084;',
            'window-fullscreen': '&#xf085;',
            'window-plus': '&#xf086;',
            'window-split': '&#xf088;',
            'window-stack': '&#xf089;',
            'window-x': '&#xf08a;',
            'window': '&#xf08b;',
            'copyright': '&#xe98b;',
            'menu': '&#xe98c;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/i/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
