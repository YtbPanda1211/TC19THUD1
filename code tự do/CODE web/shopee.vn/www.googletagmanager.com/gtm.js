// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "280",

            "macros": [{
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.targetType"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "environment"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.action"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.hostname"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageType"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.userid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.userid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a;", ["escape", ["macro", 9], 8, 16], "?a=", ["escape", ["macro", 9], 8, 16], ":", ["escape", ["macro", 10], 8, 16], "?a=", ["escape", ["macro", 10], 8, 16], ":", ["escape", ["macro", 11], 8, 16], "\u0026\u0026(a=", ["escape", ["macro", 11], 8, 16], ");if(a)return a=a.toString(),a=sha256(a)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.href"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.is_seller"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.gclid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(b,a){var c=b.split(\"?\");if(2\u003C=c.length){b=encodeURIComponent(a)+\"\\x3d\";a=c[1].split(\/[\u0026;]\/g);for(var d=a.length;0\u003Cd--;)-1!==a[d].lastIndexOf(b,0)\u0026\u0026a.splice(d,1);b=c[0]+\"?\"+a.join(\"\\x26\")}return b}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.dclid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 13], 8, 16], "||", ["escape", ["macro", 14], 8, 16], ";\"true\"==", ["escape", ["macro", 15], 8, 16], "\u0026\u0026", ["escape", ["macro", 16], 8, 16], "\u0026\u0026(a=", ["escape", ["macro", 17], 8, 16], "(a,\"gclid\"));\"true\"==", ["escape", ["macro", 15], 8, 16], "\u0026\u0026", ["escape", ["macro", 18], 8, 16], "\u0026\u0026(a=", ["escape", ["macro", 17], 8, 16], "(a,\"dclid\"));return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var e=[\"email\",\"loginKey\"],a=", ["escape", ["macro", 19], 8, 16], ";-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));var b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";b.search=a}return b.href})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.pathname"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.href"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.origin"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 22], 8, 16], ",b=", ["escape", ["macro", 23], 8, 16], "+", ["escape", ["macro", 21], 8, 16], ";return a=a.split(b)[1]||\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 21], 8, 16], "||", ["escape", ["macro", 7], 8, 16], ";a+=", ["escape", ["macro", 24], 8, 16], ";\"true\"==", ["escape", ["macro", 15], 8, 16], "\u0026\u0026", ["escape", ["macro", 16], 8, 16], "\u0026\u0026(a=", ["escape", ["macro", 17], 8, 16], "(a,\"gclid\"));\"true\"==", ["escape", ["macro", 15], 8, 16], "\u0026\u0026", ["escape", ["macro", 18], 8, 16], "\u0026\u0026(a=", ["escape", ["macro", 17], 8, 16], "(a,\"dclid\"));return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var c=[\"email\",\"loginKey\"],a=", ["escape", ["macro", 25], 8, 16], ";if(a){-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));a=a.replace(\"?\",\"\\x26\");var b;for(b=0;b\u003Cc.length;b++){var d=c[b];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";a=a.replace(\"\\x26\",\"?\")}return c=a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "userGroup"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.gbraid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.wbraid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(", ["escape", ["macro", 16], 8, 16], ")return ", ["escape", ["macro", 16], 8, 16], ";if(", ["escape", ["macro", 18], 8, 16], ")return ", ["escape", ["macro", 18], 8, 16], ";if(", ["escape", ["macro", 28], 8, 16], ")return ", ["escape", ["macro", 28], 8, 16], ";if(", ["escape", ["macro", 29], 8, 16], ")return ", ["escape", ["macro", 29], 8, 16], "})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(", ["escape", ["macro", 16], 8, 16], ")return\"gclid\";if(", ["escape", ["macro", 18], 8, 16], ")return\"dclid\";if(", ["escape", ["macro", 28], 8, 16], ")return\"gbraid\";if(", ["escape", ["macro", 29], 8, 16], ")return\"wbraid\"})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "UA-61904553-8"],
                    ["map", "key", "shopee.sg", "value", "UA-61921742-7"],
                    ["map", "key", "shopee.com.my", "value", "UA-61915055-6"],
                    ["map", "key", "shopee.tw", "value", "UA-61915057-6"],
                    ["map", "key", "shopee.co.th", "value", "UA-61914165-6"],
                    ["map", "key", "shopee.vn", "value", "UA-61914164-6"],
                    ["map", "key", "shopee.ph", "value", "UA-61918643-6"],
                    ["map", "key", "shopee.com.br", "value", "UA-149843394-1"],
                    ["map", "key", "shopee.com.mx", "value", "UA-188791374-1"],
                    ["map", "key", "shopee.com.co", "value", "UA-197472871-1"],
                    ["map", "key", "shopee.cl", "value", "UA-197488217-1"],
                    ["map", "key", "shopee.pl", "value", "UA-205013480-1"]
                ]
            }, {
                "function": "__gas",
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]]],
                "vtp_decorateFormsAutoLink": false,
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "useAmpClientId", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_trackerName": "",
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "2", "dimension", ["macro", 27]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 32],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "false",
                "vtp_name": "info.initial"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "country"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.tw", "value", "34651"],
                    ["map", "key", "shopee.vn", "value", "34657"],
                    ["map", "key", "shopee.co.id", "value", "34652"],
                    ["map", "key", "shopee.com.my", "value", "32773"],
                    ["map", "key", "shopee.ph", "value", "34655"],
                    ["map", "key", "shopee.co.th", "value", "34654"],
                    ["map", "key", "shopee.sg", "value", "32772"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "info.impressions.0.targetData.accountInfo.email"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return 767\u003E=window.innerWidth?\"m\":980\u003C=window.innerWidth?\"d\":\"t\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.cart.items"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 39], 8, 16], "||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[];a=", ["escape", ["macro", 41], 8, 16], "||[];return a=a.map(function(a){return a.targetData.item.itemid})})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.item.itemid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.response.checkoutid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.orders"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity});return d})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.sg", "value", "SGD"],
                    ["map", "key", "shopee.com.my", "value", "MYR"],
                    ["map", "key", "shopee.co.th", "value", "THB"],
                    ["map", "key", "shopee.tw", "value", "TWD"],
                    ["map", "key", "shopee.co.id", "value", "IDR"],
                    ["map", "key", "shopee.vn", "value", "VND"],
                    ["map", "key", "shopee.ph", "value", "PHP"],
                    ["map", "key", "shopee.com.br", "value", "BRL"],
                    ["map", "key", "shopee.com.mx", "value", "MXN"],
                    ["map", "key", "shopee.com.co", "value", "COP"],
                    ["map", "key", "shopee.cl", "value", "CLP"],
                    ["map", "key", "shopee.pl", "value", "PLN"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.itemId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.price"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.quantity"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 50], 8, 16], "*", ["escape", ["macro", 51], 8, 16], "\/1E5;return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.catId"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.modelId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a={ecommerce:{currencyCode:\"", ["escape", ["macro", 47], 7], "\",add:{products:[{name:\"", ["escape", ["macro", 48], 7], "\",id:\"", ["escape", ["macro", 49], 7], "\",price:\"", ["escape", ["macro", 52], 7], "\",category:\"", ["escape", ["macro", 53], 7], "\",variant:\"", ["escape", ["macro", 54], 7], "\",quantity:", ["escape", ["macro", 51], 8, 16], "}]}}};return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.operation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.register_channel"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",c=0,a=0;a\u003Cb.length;a++)c+=b[a].total_without_shipping;return c\/1E5})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 45], 8, 16], ",d=0,e=[],b=0;b\u003Ca.length;b++){for(var c=0;c\u003Ca[b].items.length;c++)try{e.push({id:a[b].items[c].itemid,price:a[b].items[c].price\/1E5,name:a[b].items[c].name,quantity:a[b].items[c].quantity,category:a[b].items[c].categories[0].catids.join(\".\")})}catch(f){console.warn(f)}d+=a[b].shipping_fee}a={ecommerce:{purchase:{actionField:{id:\"", ["escape", ["macro", 44], 7], "\",revenue:\"", ["escape", ["macro", 58], 7], "\",shipping:d\/1E5},products:e}}};str=JSON.stringify(a);return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.response.orderids"
            }, {
                "function": "__j",
                "vtp_name": "document.title"
            }, {
                "function": "__k",
                "vtp_decodeCookie": true,
                "vtp_name": "_med"
            }, {
                "function": "__gas",
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]]],
                "vtp_decorateFormsAutoLink": false,
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": true,
                "vtp_setTrackerName": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "useAmpClientId", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 11]],
                    ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "2", "dimension", ["macro", 27]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-125099498-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "UA-61904553-8"],
                    ["map", "key", "shopee.sg", "value", "UA-61921742-7"],
                    ["map", "key", "shopee.com.my", "value", "UA-61915055-6"],
                    ["map", "key", "shopee.tw", "value", "UA-61915057-6"],
                    ["map", "key", "shopee.co.th", "value", "UA-61914165-6"],
                    ["map", "key", "shopee.vn", "value", "UA-61914164-6"],
                    ["map", "key", "shopee.ph", "value", "UA-61918643-6"],
                    ["map", "key", "shopee.com.co", "value", "UA-197472871-1"],
                    ["map", "key", "shopee.com.br", "value", "UA-149843394-1"],
                    ["map", "key", "shopee.com.mx", "value", "UA-188791374-1"],
                    ["map", "key", "shopee.com", "value", "UA-132684032-1"],
                    ["map", "key", "shopee.cl", "value", "UA-197488217-1"],
                    ["map", "key", "shopee.pl", "value", "UA-205013480-1"]
                ]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": true,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "useAmpClientId", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_trackerName": "",
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "2", "dimension", ["macro", 27]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 64],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.itemid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.price"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.quantity"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 68], 8, 16], "*", ["escape", ["macro", 69], 8, 16], "\/1E5;return a})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.catid_be"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.modelId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a={ecommerce:{remove:{products:[{name:\"", ["escape", ["macro", 66], 7], "\",id:\"", ["escape", ["macro", 67], 7], "\",price:", ["escape", ["macro", 70], 8, 16], ",category:\"", ["escape", ["macro", 71], 7], "\",variant:\"", ["escape", ["macro", 72], 7], "\",quantity:", ["escape", ["macro", 69], 8, 16], "}]}}};return a})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.historyChangeSource",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.login_option"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "UA-61904553-9"],
                    ["map", "key", "shopee.sg", "value", "UA-61921742-12"],
                    ["map", "key", "shopee.com.my", "value", "UA-61915055-10"],
                    ["map", "key", "shopee.tw", "value", "UA-61915057-10"],
                    ["map", "key", "shopee.co.th", "value", "UA-61914165-10"],
                    ["map", "key", "(giaitri|nhasach).shopee.vn", "value", "UA-61914164-10"],
                    ["map", "key", "shopee.ph", "value", "UA-61918643-10"]
                ]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": true,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "useAmpClientId", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_trackerName": "",
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "2", "dimension", ["macro", 27]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 77],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__r"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "keyword",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 41], 8, 16], ";return a.map(function(a){return a.targetData.item.itemid})})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var e=[\"email\",\"loginKey\"],a=location.pathname+location.search,b=document.createElement(\"a\"),d;b.href=a;if(b.search){a=\"\\x26\"+b.search.replace(\"?\",\"\")+\"\\x26\";for(d=0;d\u003Ce.length;d++){var c=e[d];c=a.indexOf(\"\\x26\"+c+\"\\x3d\");if(-1\u003Cc){var f=a.indexOf(\"\\x26\",c+1);a=a.slice(0,c)+a.slice(f,a.length)}}b.search=a.slice(1,a.length-1)}return b.href.replace(location.origin,\"\")})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "UA-61904553-14"],
                    ["map", "key", "shopee.sg", "value", "UA-61921742-14"],
                    ["map", "key", "shopee.com.my", "value", "UA-61915055-12"],
                    ["map", "key", "shopee.tw", "value", "UA-61915057-13"],
                    ["map", "key", "shopee.co.th", "value", "UA-61914165-12"],
                    ["map", "key", "shopee.vn", "value", "UA-61914164-12"],
                    ["map", "key", "shopee.ph", "value", "UA-61918643-12"],
                    ["map", "key", "shopee.com.br", "value", "UA-149843394-3"]
                ]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": true,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_trackerName": "",
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 87],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "G-SW6D8G0HXK"],
                    ["map", "key", "shopee.sg", "value", "G-4572B3WZ33"],
                    ["map", "key", "shopee.com.my", "value", "G-H06K3499BD"],
                    ["map", "key", "shopee.tw", "value", "G-RPSBE3TQZZ"],
                    ["map", "key", "shopee.co.th", "value", "G-L4QXS6R7YG"],
                    ["map", "key", "shopee.vn", "value", "G-M32T05RVZT"],
                    ["map", "key", "shopee.ph", "value", "G-CB0044GVTM"],
                    ["map", "key", "shopee.com.br", "value", "G-0GS478VKB8"],
                    ["map", "key", "shopee.com.mx", "value", "G-FYC06KL06Z"],
                    ["map", "key", "shopee.com.co", "value", ""],
                    ["map", "key", "shopee.cl", "value", ""],
                    ["map", "key", "shopee.pl", "value", ""]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 14],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "https:\/\/seller.shopee.co.id\/edu\/", "value", "UA-61904553-16"],
                    ["map", "key", "https:\/\/seller.shopee.sg\/edu\/", "value", "UA-61921742-15"],
                    ["map", "key", "https:\/\/seller.shopee.com.my\/edu\/", "value", "UA-61915055-13"],
                    ["map", "key", "https:\/\/seller.shopee.tw\/edu\/", "value", "UA-61915057-14"],
                    ["map", "key", "https:\/\/seller.shopee.co.th\/edu\/", "value", "UA-61914165-13"],
                    ["map", "key", "https:\/\/banhang.shopee.vn\/edu\/", "value", "UA-61914164-13"],
                    ["map", "key", "https:\/\/seller.shopee.ph\/edu\/", "value", "UA-61918643-13"],
                    ["map", "key", "https:\/\/seller.shopee.com.br\/edu\/", "value", "UA-149843394-4"]
                ]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": true,
                "vtp_setTrackerName": true,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "allowLinker", "value", "true"],
                    ["map", "fieldName", "userId", "value", ["macro", 12]],
                    ["map", "fieldName", "location", "value", ["macro", 20]],
                    ["map", "fieldName", "page", "value", ["macro", 26]]
                ],
                "vtp_trackerName": "",
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": true,
                "vtp_dimension": ["list", ["map", "index", "3", "dimension", ["macro", 12]],
                    ["map", "index", "4", "dimension", ["macro", 30]],
                    ["map", "index", "6", "dimension", ["macro", 31]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 92],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){if(\"pc\"===", ["escape", ["macro", 2], 8, 16], ")return\"pc\";if(\"rweb\"===", ["escape", ["macro", 2], 8, 16], "||\"rweb_android\"===", ["escape", ["macro", 2], 8, 16], "||\"mweb\"===", ["escape", ["macro", 2], 8, 16], ")return\"mobile\"})();"]
            }, {
                "function": "__cid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return google_tag_manager[", ["escape", ["macro", 95], 8, 16], "].dataLayer})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.item.catid"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.subcategory"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return void 0===", ["escape", ["macro", 98], 8, 16], "?\"cat1\":\"cat2\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.categoryId"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 50], 8, 16], "\/1E5;return a})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.sg", "value", "139835196351422"],
                    ["map", "key", "shopee.com.my", "value", "757894527666013"],
                    ["map", "key", "shopee.co.th", "value", "905703166183408"],
                    ["map", "key", "shopee.tw", "value", "503280033161781"],
                    ["map", "key", "shopee.co.id", "value", "466924370133774"],
                    ["map", "key", "shopee.vn", "value", "1457130904612161"],
                    ["map", "key", "shopee.ph", "value", "1478059392491608"],
                    ["map", "key", "shopee.com.br", "value", "703307166810792"],
                    ["map", "key", "shopee.com.mx", "value", "850328915514180"],
                    ["map", "key", "shopee.com.co", "value", "248175970416870"],
                    ["map", "key", "shopee.cl", "value", "471906773873929"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.item.price"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 103], 8, 16], "\/1E5;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d.join(\",\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.categoryName"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a={cookieName:\"_med\",cookieTime:30,keyToGet:\"utm_medium\",keyToSearch:{gclid:\"cpc\"},shopee_refer:\"^((http(s?):\/\/)(([a-z0-9_]+.)?)(shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\/))\",path:\"\/\",domain:\".\"+location.hostname.replace(\/^www\\.\/i,\"\")};return a})();"]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.vn", "value", "ICay2JfBmbeRc1R5Enp1"],
                    ["map", "key", "shopee.co.id", "value", "IfdkwXB0UU0fVf5tq0DM"],
                    ["map", "key", "shopee.com.my", "value", "zlDYA9jJjHq1nyHyCLaU"],
                    ["map", "key", "shopee.ph", "value", "l7fVkOg4vYLmM3fayfyy"],
                    ["map", "key", "shopee.co.th", "value", "zXiY0VQ8H0VLkoIzoC80"],
                    ["map", "key", "shopee.sg", "value", "bQSfrGqH6d5VMoTaldIA"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 39], 8, 16], "||[],b=[],c;for(c in a)b.push(a[c].itemid);return b.join(\",\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",c,a=0;a\u003Cb.length;a++)c=b[a].shop.shopid;return c})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 112],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "58418206|16621457", "value", "AW-692053728"],
                    ["map", "key", "40867978", "value", "AW-608738266"],
                    ["map", "key", "119485441", "value", "AW-611398152"],
                    ["map", "key", "75422406", "value", "AW-573532228"],
                    ["map", "key", "53892420", "value", "AW-671893767"],
                    ["map", "key", "37251933", "value", "AW-627492082"],
                    ["map", "key", "29668384", "value", "AW-620288715"],
                    ["map", "key", "29667634", "value", "AW-603702153"],
                    ["map", "key", "29668843", "value", "AW-408024625"],
                    ["map", "key", "91799978", "value", "AW-443061445"],
                    ["map", "key", "39401693", "value", "AW-389061488"],
                    ["map", "key", "55027948", "value", "AW-388991082"],
                    ["map", "key", "51678844", "value", "AW-389059076"],
                    ["map", "key", "59860978", "value", "AW-618568444"],
                    ["map", "key", "83276818", "value", "AW-415164151"],
                    ["map", "key", "43416591", "value", "AW-388561066"],
                    ["map", "key", "26947756|111138057", "value", "AW-679064000"],
                    ["map", "key", "269296276", "value", "AW-611139237"],
                    ["map", "key", "40492624", "value", "AW-608737966"],
                    ["map", "key", "45237836", "value", "AW-561149564"],
                    ["map", "key", "29990515", "value", "AW-585668020"],
                    ["map", "key", "241142788", "value", "AW-393240317"],
                    ["map", "key", "76176908", "value", "AW-602187227"],
                    ["map", "key", "327041081", "value", "AW-368278428"],
                    ["map", "key", "254644909", "value", "AW-674528537"],
                    ["map", "key", "272467617", "value", "AW-440337508"],
                    ["map", "key", "176534566", "value", "AW-610652310"],
                    ["map", "key", "98316282", "value", "AW-626542429"],
                    ["map", "key", "55788683", "value", "AW-643752044"],
                    ["map", "key", "62579622", "value", "AW-610719491"],
                    ["map", "key", "109598751", "value", "AW-623301224"],
                    ["map", "key", "35357809", "value", "AW-376335887"],
                    ["map", "key", "277411443", "value", "AW-407528078"],
                    ["map", "key", "32467552", "value", "AW-599274589"],
                    ["map", "key", "57205325", "value", "AW-644348490"],
                    ["map", "key", "164729718|164729277|28265861", "value", "AW-561158251"],
                    ["map", "key", "56542501|121205602|56540396", "value", "AW-635093888"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 112],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "58418206|16621457", "value", "XI9KCPjfkPkBEODN_8kC"],
                    ["map", "key", "40867978", "value", "BwtQCLqckfkBENq3oqIC"],
                    ["map", "key", "119485441", "value", "m4CJCMqGtPkBEIjkxKMC"],
                    ["map", "key", "75422406", "value", "0bLqCO30pvkBEMTQvZEC"],
                    ["map", "key", "53892420", "value", "In_dCJy6kfkBEIeSscAC"],
                    ["map", "key", "37251933", "value", "Gx6hCOKHp_kBEPKJm6sC"],
                    ["map", "key", "29668384", "value", "TIaVCPektPkBEMu146cC"],
                    ["map", "key", "29667634", "value", "nJPNCPqqtPkBEImH758C"],
                    ["map", "key", "29668843", "value", "16QSCNPh3PoBELHsx8IB"],
                    ["map", "key", "91799978", "value", "mgeuCN-2kfEBEMWpotMB"],
                    ["map", "key", "39401693", "value", "u7dMCOOO-P8BEPC2wrkB"],
                    ["map", "key", "55027948", "value", "_tejCJGN4f8BEOqQvrkB"],
                    ["map", "key", "51678844", "value", "txW6COeO__8BEISkwrkB"],
                    ["map", "key", "59860978", "value", "_xy2CPWd-P8BEPy1-qYC"],
                    ["map", "key", "83276818", "value", "LTjOCJ6j-P8BEPfN-8UB"],
                    ["map", "key", "43416591", "value", "OxrmCIHx8v8BEKrxo7kB"],
                    ["map", "key", "26947756|111138057", "value", "FCQxCLSVj90CEMDj5sMC"],
                    ["map", "key", "269296276", "value", "YwAgCL2mkd0CEKX9tKMC"],
                    ["map", "key", "40492624", "value", "cSrkCKvEkd0CEK61oqIC"],
                    ["map", "key", "45237836", "value", "Yms8CO_-6NwCEPzsyYsC"],
                    ["map", "key", "29990515", "value", "nbs3CPO-6dwCELSropcC"],
                    ["map", "key", "241142788", "value", "silSCNLH6dwCEP29wbsB"],
                    ["map", "key", "76176908", "value", "C3xXCNDPkt0CENvLkp8C"],
                    ["map", "key", "327041081", "value", "_WL1CKnFjN0CEJz3za8B"],
                    ["map", "key", "254644909", "value", "VUuQCOz86dwCEJn60cEC"],
                    ["map", "key", "272467617", "value", "wBPTCIuT6twCEOSI_NEB"],
                    ["map", "key", "176534566", "value", "2tXYCIGZk90CEJahl6MC"],
                    ["map", "key", "98316282", "value", "wZloCM6g9N4CEN2O4aoC"],
                    ["map", "key", "55788683", "value", "lURpCPWOjd0CEOzA-7IC"],
                    ["map", "key", "62579622", "value", "QAw7CPfwh90CEIOum6MC"],
                    ["map", "key", "109598751", "value", "Pa3OCPeVnd0CEOikm6kC"],
                    ["map", "key", "35357809", "value", "-lLoCMDl9dwCEI_cubMB"],
                    ["map", "key", "277411443", "value", "RWI_CJDgnt0CEI7FqcIB"],
                    ["map", "key", "32467552", "value", "qxCICNaW9twCEN3o4J0C"],
                    ["map", "key", "57205325", "value", "WYK4CPPvmd0CEMr0n7MC"],
                    ["map", "key", "164729718|164729277|28265861", "value", "MvFHCO-48d0CEOuwyosC"],
                    ["map", "key", "56542501|121205602|56540396", "value", "xdotCJ6q99wCEICH664C"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.shopId"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 115],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "58418206|16621457", "value", "AW-692053728"],
                    ["map", "key", "40867978", "value", "AW-608738266"],
                    ["map", "key", "119485441", "value", "AW-611398152"],
                    ["map", "key", "75422406", "value", "AW-573532228"],
                    ["map", "key", "53892420", "value", "AW-671893767"],
                    ["map", "key", "37251933", "value", "AW-627492082"],
                    ["map", "key", "29668384", "value", "AW-620288715"],
                    ["map", "key", "29667634", "value", "AW-603702153"],
                    ["map", "key", "29668843", "value", "AW-408024625"],
                    ["map", "key", "91799978", "value", "AW-443061445"],
                    ["map", "key", "39401693", "value", "AW-389061488"],
                    ["map", "key", "55027948", "value", "AW-388991082"],
                    ["map", "key", "51678844", "value", "AW-389059076"],
                    ["map", "key", "59860978", "value", "AW-618568444"],
                    ["map", "key", "83276818", "value", "AW-415164151"],
                    ["map", "key", "43416591", "value", "AW-388561066"],
                    ["map", "key", "26947756|111138057", "value", "AW-679064000"],
                    ["map", "key", "269296276", "value", "AW-611139237"],
                    ["map", "key", "40492624", "value", "AW-608737966"],
                    ["map", "key", "45237836", "value", "AW-561149564"],
                    ["map", "key", "29990515", "value", "AW-585668020"],
                    ["map", "key", "241142788", "value", "AW-393240317"],
                    ["map", "key", "76176908", "value", "AW-602187227"],
                    ["map", "key", "327041081", "value", "AW-368278428"],
                    ["map", "key", "254644909", "value", "AW-674528537"],
                    ["map", "key", "272467617", "value", "AW-440337508"],
                    ["map", "key", "176534566", "value", "AW-610652310"],
                    ["map", "key", "98316282", "value", "AW-626542429"],
                    ["map", "key", "55788683", "value", "AW-643752044"],
                    ["map", "key", "62579622", "value", "AW-610719491"],
                    ["map", "key", "109598751", "value", "AW-623301224"],
                    ["map", "key", "35357809", "value", "AW-376335887"],
                    ["map", "key", "277411443", "value", "AW-407528078"],
                    ["map", "key", "32467552", "value", "AW-599274589"],
                    ["map", "key", "57205325", "value", "AW-644348490"],
                    ["map", "key", "164729718|164729277|28265861", "value", "AW-561158251"],
                    ["map", "key", "56542501|121205602|56540396", "value", "AW-635093888"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.shopId"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 115],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "58418206|16621457", "value", "Bua5CJ-spvkBEODN_8kC"],
                    ["map", "key", "40867978", "value", "_qDFCLyhkfkBENq3oqIC"],
                    ["map", "key", "119485441", "value", "bTY-CNrtpvkBEIjkxKMC"],
                    ["map", "key", "75422406", "value", "9LuNCPmukfkBEMTQvZEC"],
                    ["map", "key", "53892420", "value", "s6R2CPCgtPkBEIeSscAC"],
                    ["map", "key", "37251933", "value", "e_jFCJyjtPkBEPKJm6sC"],
                    ["map", "key", "29668384", "value", "Smq9COWqtPkBEMu146cC"],
                    ["map", "key", "29667634", "value", "Fdt5CNvSkfkBEImH758C"],
                    ["map", "key", "29668843", "value", "4-T1COzz8voBELHsx8IB"],
                    ["map", "key", "91799978", "value", "2LF0CJjX8fABEMWpotMB"],
                    ["map", "key", "39401693", "value", "xRfRCMuI-P8BEPC2wrkB"],
                    ["map", "key", "55027948", "value", "i_bpCIKN4f8BEOqQvrkB"],
                    ["map", "key", "51678844", "value", "Q0iTCMKH__8BEISkwrkB"],
                    ["map", "key", "59860978", "value", "kmcsCNKb-P8BEPy1-qYC"],
                    ["map", "key", "83276818", "value", "ytDmCI6f-P8BEPfN-8UB"],
                    ["map", "key", "43416591", "value", "NUqBCOzt8v8BEKrxo7kB"],
                    ["map", "key", "26947756|111138057", "value", "iDYcCOmZid0CEMDj5sMC"],
                    ["map", "key", "269296276", "value", "U7nsCNuskd0CEKX9tKMC"],
                    ["map", "key", "40492624", "value", "OOS3CM3Ikd0CEK61oqIC"],
                    ["map", "key", "45237836", "value", "Is0ZCMrskd0CEPzsyYsC"],
                    ["map", "key", "29990515", "value", "b6gxCPjD6dwCELSropcC"],
                    ["map", "key", "241142788", "value", "_MaFCLSpjN0CEP29wbsB"],
                    ["map", "key", "76176908", "value", "TX0uCK3n6dwCENvLkp8C"],
                    ["map", "key", "327041081", "value", "tPaQCL_t6dwCEJz3za8B"],
                    ["map", "key", "254644909", "value", "-3cICJL3kt0CEJn60cEC"],
                    ["map", "key", "272467617", "value", "J_A3CPKDk90CEOSI_NEB"],
                    ["map", "key", "176534566", "value", "iRDZCPqdk90CEJahl6MC"],
                    ["map", "key", "98316282", "value", "7S9QCPel9N4CEN2O4aoC"],
                    ["map", "key", "55788683", "value", "PqpFCKSnk90CEOzA-7IC"],
                    ["map", "key", "62579622", "value", "4-ZHCOucj90CEIOum6MC"],
                    ["map", "key", "109598751", "value", "3ETICLeJnt0CEOikm6kC"],
                    ["map", "key", "35357809", "value", "LKZcCNPOmN0CEI_cubMB"],
                    ["map", "key", "277411443", "value", "LbfvCI_cnt0CEI7FqcIB"],
                    ["map", "key", "32467552", "value", "IMKCCPSQ9twCEN3o4J0C"],
                    ["map", "key", "57205325", "value", "P2n8CJ3w9twCEMr0n7MC"],
                    ["map", "key", "164729718|164729277|28265861", "value", "2LowCJa28d0CEOuwyosC"],
                    ["map", "key", "56542501|121205602|56540396", "value", "xOo0CM2MoN0CEICH664C"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.item.name"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 35], 8, 16], "})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.isOfficialShopTheme"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.pageParams.keyword"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.sg", "value", "11"],
                    ["map", "key", "shopee.com.my", "value", "8"],
                    ["map", "key", "shopee.co.id", "value", "14"],
                    ["map", "key", "shopee.vn", "value", "9"],
                    ["map", "key", "shopee.ph", "value", "15"],
                    ["map", "key", "shopee.tw", "value", "13"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.price"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "100188"],
                    ["map", "key", "shopee.com.my", "value", "100126"],
                    ["map", "key", "shopee.co.th", "value", "100245"],
                    ["map", "key", "shopee.sg", "value", "100376"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "ICM-39-1334"],
                    ["map", "key", "shopee.com.my", "value", "ICM-11-1270"],
                    ["map", "key", "shopee.co.th", "value", "ICM-49-1393"]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "crto.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 128], 8, 16], ",c=[],a=0;a\u003Cb.length\u0026\u00263\u003Ea;a++)\"object\"==typeof b[a]?b[a].hasOwnProperty(\"id\")\u0026\u0026c.push(b[a].id):(\"number\"==typeof b[a]||\"number\"==typeof b[a])\u0026\u0026c.push(b[a]);return c})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.item.itemid"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 39], 8, 16], "||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.impressions.0.targetData.cart.totalPrice"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 133], 8, 16], "\/1E5;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 45], 8, 16], ",d=[];a=a.filter(function(a){return a.hasOwnProperty(\"items\")});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].itemid);return d.join(\"|\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var c=", ["escape", ["macro", 45], 8, 16], ",d=[],e=c.filter(function(a){return a.hasOwnProperty(\"items\")}),a=0;a\u003Ce.length;a++)for(var b=0;b\u003Ce[a].items.length;b++)d.push(c[a].items[b].price\/1E5*c[a].items[b].quantity);return d.join(\"|\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}];return a.map(function(a){return a.items.map(function(a){return a.itemid}).join(\"|\")}).join(\"|\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/\n1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.price"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 125], 8, 16], ",b=a.shipping_subtotal\/1E5,c=a.tax_payable\/1E5;return a=a.total_payable\/1E5-b-c})();"]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 14],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "https:\/\/shopee.vn\/m\/99", "value", "1005975"],
                    ["map", "key", "https:\/\/shopee.co.id\/m\/super-shopping-day-129", "value", "1005969"],
                    ["map", "key", "https:\/\/shopee.co.th\/m\/99", "value", "1005972"],
                    ["map", "key", "https:\/\/shopee.com.my\/m\/99", "value", "1005973"],
                    ["map", "key", "https:\/\/shopee.ph\/m\/99", "value", "953969"],
                    ["map", "key", "https:\/\/shopee.sg\/m\/99", "value", "1005974"],
                    ["map", "key", "https:\/\/shopee.tw\/m\/99", "value", "1005971"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.sg", "value", "1011l628"],
                    ["map", "key", "shopee.co.th", "value", "1100l551"],
                    ["map", "key", "shopee.vn", "value", "1100l682"],
                    ["map", "key", "shopee.ph", "value", "1100l720"],
                    ["map", "key", "shopee.com.my", "value", "1100l721"],
                    ["map", "key", "shopee.tw", "value", "1011l795"],
                    ["map", "key", "shopee.co.id", "value", "1101l712"],
                    ["map", "key", "shopee.com.br", "value", "1011l971"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 143], 8, 16], ",n=", ["escape", ["macro", 44], 8, 16], ",p=", ["escape", ["macro", 60], 8, 16], ",c=", ["escape", ["macro", 45], 8, 16], ";b=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+n+\"\/country:\"+", ["escape", ["macro", 35], 8, 16], "+\"\/currency:\"+", ["escape", ["macro", 47], 8, 16], "+\"\/\";var f=[];(c||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity,e=a.shopid;a=a.categories[0].catids[0];f.push({itemId:b,itemPrice:c,quantity:d,shopId:e,categoryL1:a})})});var d,e,g,h,k,l=[];\n(Object.values(f)||[]).forEach(function(a){d=a.itemId;e=a.itemPrice;g=a.quantity;h=a.categoryL1;k=a.shopId;l.push(\"[category:\"+h+\"\/sku:\"+d+\"\/value:\"+e+\"\/quantity:\"+g+\"\/shop_id:\"+k+\"\/order_id:\"+p+\"\/]\")});var m=\"\";(Object.values(l)||[]).forEach(function(a){m+=a});return c=b+m})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.pathname.split(\"\/\");return a[1].toLowerCase()})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.shopid"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "2599"]]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var g=", ["escape", ["macro", 150], 8, 16], ",h=", ["escape", ["macro", 44], 8, 16], ",a=", ["escape", ["macro", 45], 8, 16], ",k=", ["escape", ["macro", 58], 8, 16], ",l=", ["escape", ["macro", 60], 8, 16], ",d=[],e=[],f=[];(a||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){})});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].shopid),e.push(a[b].items[c].itemid),f.push(a[b].items[c].categories[0].catids[0]);d=d.join(\"|\");e=e.join(\"|\");f=f.join(\"|\");a=[];a=l.join(\"|\");return g=\"https:\/\/shopback.go2cloud.org\/aff_l?offer_id\\x3d\"+\ng+\"\\x26adv_sub\\x3d\"+h+\"\\x26adv_sub2\\x3d\"+d+\"\\x26adv_sub3\\x3d\"+e+\"\\x26adv_sub4\\x3d\"+a+\"\\x26adv_sub5\\x3d\"+f+\"\\x26amount\\x3d\"+k})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "info.data.response"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 143], 8, 16], ",e=", ["escape", ["macro", 44], 8, 16], ",f=", ["escape", ["macro", 60], 8, 16], ",g=", ["escape", ["macro", 45], 8, 16], ",c=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+e+\"\/country:\"+", ["escape", ["macro", 35], 8, 16], "+\"\/currency:\"+", ["escape", ["macro", 47], 8, 16], "+\"\/\";b=g.filter(function(d){return d.hasOwnProperty(\"items\")});console.log(\"check \"+b);b.forEach(function(d,h){d.items.forEach(function(a){var k=a.itemid,l=a.price\/1E5,m=a.quantity,n=a.shopid;a=a.categories[0].catids[0];c+=\"[category:\"+a+\"\/sku:\"+k+\"\/value:\"+l+\n\"\/quantity:\"+m+\"\/shop_id:\"+n+\"\/order_id:\"+f[h]+\"\/]\"})});console.log(\"::: \"+c);return c})();"]
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "gclid",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 4],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "shopee.co.id", "value", "G-SW6D8G0HXK"],
                    ["map", "key", "shopee.sg", "value", ""],
                    ["map", "key", "shopee.com.my", "value", ""],
                    ["map", "key", "shopee.tw", "value", ""],
                    ["map", "key", "shopee.co.th", "value", ""],
                    ["map", "key", "shopee.vn", "value", ""],
                    ["map", "key", "shopee.ph", "value", ""],
                    ["map", "key", "shopee.com.br", "value", ""],
                    ["map", "key", "shopee.com.mx", "value", ""],
                    ["map", "key", "shopee.com.co", "value", ""],
                    ["map", "key", "shopee.cl", "value", ""]
                ]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.hash"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.host"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.protocol"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.search.utm_campaign"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.search.utm_content"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.search.utm_medium"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.search.utm_source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.current.title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.hash"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.host"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.hostname"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.origin"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.pathname"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.protocol"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.utm_source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.utm_campaign"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.utm_content"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.utm_medium"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.hash"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.gclsrc"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.first.search.utm_term"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.href"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.host"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.hostname"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.origin"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.pathname"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "data.prev.title"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 156], 8, 16], ";if(0\u003Ca.length)return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 175], 8, 16], ";if(0\u003Ca.length)return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var b=", ["escape", ["macro", 45], 8, 16], ",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)try{\"undefined\"===typeof d[b[a].items[c].shopid]?d[b[a].items[c].shopid]={shopId:b[a].items[c].shopid,conversionId:\"", ["escape", ["macro", 116], 7], "\",conversionLabel:\"", ["escape", ["macro", 114], 7], "\",quantity:b[a].items[c].quantity,totalValue:b[a].items[c].price\/1E5*b[a].items[c].quantity}:(d[b[a].items[c].shopid].quantity+=b[a].items[c].quantity,d[b[a].items[c].shopid].totalValue+=b[a].items[c].price\/1E5*b[a].items[c].quantity)}catch(e){console.warn(e)}console.log(\"*****\"+\nObject.values(d));return Object.values(d)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "session_id"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 21],
                "vtp_fullMatch": true,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", "(\/unilever_householdcare)|(\/unilever_beautyhotpro)", "value", "AW-692053728"],
                    ["map", "key", "\/unilever_personalcare", "value", "AW-608738266"],
                    ["map", "key", "\/realmeofficialstore", "value", "AW-611398152"],
                    ["map", "key", "\/nutrilonofficialstore", "value", "AW-573532228"],
                    ["map", "key", "\/oppo_official_store", "value", "AW-671893767"],
                    ["map", "key", "\/lorealparis_officialstore", "value", "AW-627492082"],
                    ["map", "key", "\/garnier_thailand", "value", "AW-620288715"],
                    ["map", "key", "\/lorealparis", "value", "AW-603702153"],
                    ["map", "key", "\/maybelline_thailand", "value", "AW-408024625"],
                    ["map", "key", "\/smartsg", "value", "AW-443061445"],
                    ["map", "key", "\/mobilehubsg", "value", "AW-389061488"],
                    ["map", "key", "\/absolutepiano", "value", "AW-388991082"],
                    ["map", "key", "\/atrixofficial", "value", "AW-389059076"],
                    ["map", "key", "\/foremost_official_shop", "value", "AW-618568444"],
                    ["map", "key", "\/samsung_thailand", "value", "AW-415164151"],
                    ["map", "key", "\/movingpeach.sg", "value", "AW-388561066"]
                ]
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldUrlFragment",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.newHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.oldHistoryState",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__ua",
                "priority": 50,
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": false,
                "vtp_ecommerceMacroData": ["macro", 59],
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": "purchase",
                "vtp_eventLabel": ["macro", 60],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 68
            }, {
                "function": "__html",
                "priority": 2,
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar p=", ["escape", ["macro", 108], 8, 16], ";document.cookie=p.cookieName+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\"+p.path+\";domain\\x3d\"+p.domain;\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 79
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 2
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 3
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 4
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 5
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 6
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 8
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 15
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 21
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 28
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 29
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 30
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "868286",
                "tag_id": 32
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 33
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 34
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 35
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 36
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 37
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 38
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 36],
                "vtp_hashedEmail": ["macro", 37],
                "vtp_tagType": "BASKET_TAG",
                "vtp_siteType": ["macro", 38],
                "vtp_basketArray": ["macro", 40],
                "tag_id": 50
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 36],
                "vtp_hashedEmail": ["macro", 37],
                "vtp_tagType": "HOME_TAG",
                "vtp_siteType": ["macro", 38],
                "tag_id": 51
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 36],
                "vtp_hashedEmail": ["macro", 37],
                "vtp_tagType": "LISTING_TAG",
                "vtp_listingID": ["macro", 42],
                "vtp_siteType": ["macro", 38],
                "tag_id": 52
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 36],
                "vtp_hashedEmail": ["macro", 37],
                "vtp_productID": ["macro", 43],
                "vtp_tagType": "PRODUCT_TAG",
                "vtp_siteType": ["macro", 38],
                "tag_id": 53
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_accountId": ["macro", 36],
                "vtp_hashedEmail": ["macro", 37],
                "vtp_tagType": "TRANSACTION_TAG",
                "vtp_siteType": ["macro", 38],
                "vtp_TransactionID": ["macro", 44],
                "vtp_TransactionArray": ["macro", 46],
                "tag_id": 54
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 57
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "955851",
                "tag_id": 63
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 64
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 65
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": false,
                "vtp_ecommerceMacroData": ["macro", 55],
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": "add_to_cart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 66
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "register",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": ["macro", 57],
                "vtp_eventLabel": ["macro", 12],
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 12]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 67
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 69
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 71
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "title", "value", ["macro", 61]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 33],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 72
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 73
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 74
            }, {
                "function": "__paused",
                "vtp_originalTagType": "hjtc",
                "tag_id": 75
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 76
            }, {
                "function": "__paused",
                "vtp_originalTagType": "img",
                "tag_id": 77
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": false,
                "vtp_ecommerceMacroData": ["macro", 55],
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 63],
                "vtp_eventAction": "add_to_cart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 81
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 82
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "title", "value", ["macro", 61]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 63],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 83
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 63],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 84
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": false,
                "vtp_ecommerceMacroData": ["macro", 59],
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 63],
                "vtp_eventAction": "purchase",
                "vtp_eventLabel": ["macro", 60],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 85
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 86
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "register",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 63],
                "vtp_eventAction": ["macro", 57],
                "vtp_eventLabel": ["macro", 12],
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 12]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 87
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 88
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 89
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 90
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 91
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 92
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 65],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 96
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 97
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 98
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": false,
                "vtp_ecommerceMacroData": ["macro", 73],
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": "remove_from_cart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 100
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 101
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 102
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 103
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 104
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 65],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 106
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "login",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": ["macro", 75],
                "vtp_eventLabel": ["macro", 12],
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 12]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 107
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "login",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": ["macro", 76],
                "vtp_eventLabel": ["macro", 12],
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 12]]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 108
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 109
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 110
            }, {
                "function": "__paused",
                "vtp_originalTagType": "img",
                "tag_id": 118
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 78],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 120
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 121
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 123
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 124
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 125
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 126
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 127
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 128
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 129
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "id-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9469210",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 130
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 131
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 134
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 135
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 136
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 137
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 138
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 139
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 140
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "my-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526848",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 141
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 142
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 143
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 144
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 145
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 146
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 147
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 148
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 149
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "ph-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9554009",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 150
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 151
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 152
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 153
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 154
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 155
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 156
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 157
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 158
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "sg-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9555544",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 159
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 160
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 161
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 163
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 164
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 165
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 166
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 167
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 168
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "th-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9527148",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 169
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 170
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 171
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 172
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 173
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 174
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 175
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 176
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 177
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "vn-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9526557",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 178
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "allowLinker", "value", "true"],
                    ["map", "name", "useAmpClientId", "value", "true"],
                    ["map", "name", "userId", "value", ["macro", 12]],
                    ["map", "name", "location", "value", ["macro", 20]]
                ],
                "vtp_sendPageView": true,
                "vtp_measurementId": "G-KK6LLGGZNQ",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 179
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "allowLinker", "value", "true"],
                    ["map", "name", "useAmpClientId", "value", "true"],
                    ["map", "name", "userId", "value", ["macro", 12]],
                    ["map", "name", "location", "value", ["macro", 20]],
                    ["map", "name", "page", "value", ["macro", 26]]
                ],
                "vtp_sendPageView": true,
                "vtp_measurementId": "G-KK6LLGGZNQ",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 180
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 181
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 182
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 183
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "title", "value", ["macro", 61]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 78],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 184
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 63],
                "vtp_eventAction": "purchase",
                "vtp_eventLabel": ["macro", 86],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 185
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 186
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 187
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 188
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 189
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 190
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 191
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 192
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_7691473_357",
                "tag_id": 193
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "tracking",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 33],
                "vtp_eventAction": "purchase",
                "vtp_eventLabel": ["macro", 86],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 194
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "title", "value", ["macro", 61]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 88],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 195
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 88],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 196
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "myads-link-clicked",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 88],
                "vtp_eventAction": ["macro", 14],
                "vtp_eventLabel": ["macro", 90],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 197
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "allowLinker", "value", "true"],
                    ["map", "name", "useAmpClientId", "value", "true"],
                    ["map", "name", "userId", "value", ["macro", 12]],
                    ["map", "name", "location", "value", ["macro", 20]],
                    ["map", "name", "page", "value", ["macro", 26]]
                ],
                "vtp_sendPageView": true,
                "vtp_measurementId": ["macro", 91],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 392
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "allowLinker", "value", "true"],
                    ["map", "name", "useAmpClientId", "value", "true"],
                    ["map", "name", "userId", "value", ["macro", 12]],
                    ["map", "name", "location", "value", ["macro", 20]]
                ],
                "vtp_sendPageView": true,
                "vtp_measurementId": ["macro", 91],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettings": true,
                "vtp_enableEuid": false,
                "tag_id": 393
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 480
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 510
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 511
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "s-conv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 512
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 513
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 514
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 515
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 516
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "s-conv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 517
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "br-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "9895457",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 518
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_overrideGaSettings": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 93],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 522
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "unlimited": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "title", "value", ["macro", 61]]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 93],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": false,
                "tag_id": 525
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 534
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u34", "value", ["macro", 48]],
                    ["map", "key", "u35", "value", ["macro", 49]],
                    ["map", "key", "u36", "value", ["macro", 52]],
                    ["map", "key", "u37", "value", ["macro", 53]],
                    ["map", "key", "u38", "value", ["macro", 54]],
                    ["map", "key", "u39", "value", ["macro", 51]]
                ],
                "vtp_revenue": ["macro", 52],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 49],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-ac",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 559
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u40", "value", ["macro", 66]],
                    ["map", "key", "u41", "value", ["macro", 67]],
                    ["map", "key", "u42", "value", ["macro", 70]],
                    ["map", "key", "u43", "value", ["macro", 71]],
                    ["map", "key", "u44", "value", ["macro", 72]],
                    ["map", "key", "u45", "value", ["macro", 69]]
                ],
                "vtp_revenue": ["macro", 70],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 67],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "sconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-rc",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 560
            }, {
                "function": "__fls",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u46", "value", ["macro", 60]],
                    ["map", "key", "u47", "value", ["macro", 44]],
                    ["map", "key", "u48", "value", ["macro", 58]]
                ],
                "vtp_revenue": ["macro", 58],
                "vtp_enableConversionLinker": true,
                "vtp_countingMethod": "TRANSACTIONS",
                "vtp_orderId": ["macro", 60],
                "vtp_enableProductReporting": false,
                "vtp_groupTag": "fconv",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-po",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_countingMethodIsTransactions": true,
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 561
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u49", "value", ["macro", 81]],
                    ["map", "key", "u50", "value", ["macro", 82]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-sit",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 562
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u28", "value", ["macro", 83]],
                    ["map", "key", "u29", "value", ["macro", 61]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-pg",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 563
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-pv",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 564
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u30", "value", ["macro", 57]],
                    ["map", "key", "u31", "value", ["macro", 12]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-ss",
                "vtp_ordinalType": "UNIQUE",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalUnique": "1",
                "vtp_number": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 565
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u32", "value", ["macro", 76]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-ld",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 566
            }, {
                "function": "__flc",
                "metadata": ["map"],
                "vtp_customVariable": ["list", ["map", "key", "u31", "value", ["macro", 12]],
                    ["map", "key", "u33", "value", ["macro", 75]]
                ],
                "vtp_enableConversionLinker": true,
                "vtp_groupTag": "eng",
                "vtp_useImageTag": false,
                "vtp_activityTag": "mx-w-lm",
                "vtp_ordinalType": "STANDARD",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_advertiserId": "11057481",
                "vtp_ordinalStandard": ["macro", 79],
                "vtp_url": ["macro", 80],
                "vtp_enableGoogleAttributionOptions": false,
                "vtp_showConversionLinkingControls": true,
                "vtp_enableEnhancedConversions": false,
                "tag_id": 567
            }, {
                "function": "__hl",
                "tag_id": 568
            }, {
                "function": "__tl",
                "vtp_eventName": "pageState",
                "vtp_interval": "3000",
                "vtp_uniqueTriggerId": "7691473_172",
                "tag_id": 569
            }, {
                "function": "__hl",
                "tag_id": 570
            }, {
                "function": "__hl",
                "tag_id": 571
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_uniqueTriggerId": "7691473_360",
                "tag_id": 572
            }, {
                "function": "__hl",
                "tag_id": 573
            }, {
                "function": "__hl",
                "tag_id": 574
            }, {
                "function": "__hl",
                "tag_id": 575
            }, {
                "function": "__cl",
                "tag_id": 576
            }, {
                "function": "__hl",
                "tag_id": 577
            }, {
                "function": "__hl",
                "tag_id": 578
            }, {
                "function": "__hl",
                "tag_id": 579
            }, {
                "function": "__hl",
                "tag_id": 580
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"item_m\":\"item\",data=", ["escape", ["macro", 96], 8, 16], ";(window._bwtm=window._bwtm||[]).push({ch:", ["escape", ["macro", 97], 8, 16], ",iid:", ["escape", ["macro", 43], 8, 16], ",uid:", ["escape", ["macro", 11], 8, 16], ",pid:pid,mid:422});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 1
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 7
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"home_m\":\"home\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,uid:", ["escape", ["macro", 11], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 9
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"cat2\"===", ["escape", ["macro", 99], 8, 16], "?(pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"cat2_m\":\"cat2\",ch=", ["escape", ["macro", 98], 8, 16], "):(pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"cat1_m\":\"cat1\",ch=", ["escape", ["macro", 100], 8, 16], ");(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,ch:ch,uid:", ["escape", ["macro", 11], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 10
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"cart_m\":\"cart\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,carts:[{itemid:", ["escape", ["macro", 49], 8, 16], ",price:", ["escape", ["macro", 101], 8, 16], ",count:", ["escape", ["macro", 51], 8, 16], "}],uid:", ["escape", ["macro", 11], 8, 16], "});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 11
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pid=\"mobile\"===", ["escape", ["macro", 94], 8, 16], "?\"buy_m\":\"buy\",orders=", ["escape", ["macro", 45], 8, 16], ",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push({itemid:orders[i].items[j].itemid,price:orders[i].items[j].price\/1E5,count:orders[i].items[j].quantity});(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,bitem:orderItems,uid:", ["escape", ["macro", 11], 8, 16], ",order:", ["escape", ["macro", 44], 8, 16], "});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 12
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efor(var orderItems=", ["escape", ["macro", 45], 8, 16], ",totalPrice=0,i=0;i\u003CorderItems.length;i++)ga(\"gtm.ec:addProduct\",{id:orderItems[i].itemid,quantity:orderItems[i].quantity}),totalPrice+=orderItems[i].price\/1E5;ga(\"gtm.ec:setAction\",\"purchase\",{id:", ["escape", ["macro", 44], 8, 16], "+\"\",revenue:totalPrice});ga(\"gtm.send\",\"event\",\"tracking\",\"purchase\");\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 13
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"ios\"===", ["escape", ["macro", 94], 8, 16], "||\"android\"===", ["escape", ["macro", 94], 8, 16], "?\"search_m\":\"search\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,kw:", ["escape", ["macro", 81], 8, 16], ",uid:", ["escape", ["macro", 11], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 14
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",", ["escape", ["macro", 102], 8, 16], ");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=", ["escape", ["macro", 102], 12], "\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 39
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"", ["escape", ["macro", 81], 7], "\",content_ids:\"", ["escape", ["macro", 82], 7], "\",content_type:\"product\",content_category:\"Internal Site Search\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 40
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:", ["escape", ["macro", 104], 8, 16], ",currency:\"", ["escape", ["macro", 47], 7], "\",content_ids:\"", ["escape", ["macro", 43], 7], "\",content_type:\"product\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 41
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:", ["escape", ["macro", 52], 8, 16], ",currency:\"", ["escape", ["macro", 47], 7], "\",content_ids:\"", ["escape", ["macro", 49], 7], "\",content_type:\"product\",contents:[{id:\"", ["escape", ["macro", 49], 7], "\",quantity:", ["escape", ["macro", 51], 8, 16], ",item_price:", ["escape", ["macro", 101], 8, 16], "}]});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 42
            }, {
                "function": "__html",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:1*", ["escape", ["macro", 58], 8, 16], ",currency:\"", ["escape", ["macro", 47], 7], "\",content_ids:\"", ["escape", ["macro", 105], 7], "\",content_type:\"product\",contents:", ["escape", ["macro", 106], 8, 16], "});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 43
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:\"", ["escape", ["macro", 107], 7], "\",content_category:\"", ["escape", ["macro", 100], 7], "\",content_ids:\"", ["escape", ["macro", 42], 7], "\",content_type:\"product\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 44
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 58
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 59
            }, {
                "function": "__html",
                "setup_tags": ["list", ["tag", 184, 1]],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 60
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(window._bwtm=window._bwtm||[]).push({mid:422,uid:", ["escape", ["macro", 11], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 70
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Efunction track_keyToGet(){try{var a=get_key(p.keyToGet);null!==a?setCookie(p.cookieName,a):track_keyToSearch()}catch(b){console.warn(\"[medium_cookie_create][track_keyToGet]\",b)}}function track_keyToSearch(){try{var a=Object.entries(p.keyToSearch),b=!0;for(i=0;i\u003Ca.length;i++){var c=a[i],d=get_key(c[0]);if(null!==d){setCookie(p.cookieName,c[1]);b=!1;break}}b\u0026\u0026get_refer()}catch(e){console.warn(\"[medium_cookie_create][track_keyToSearch]\",e)}}\nfunction get_refer(){try{refer\u0026\u0026!shopee_refer_check.test(refer)\u0026\u0026setCookie(p.cookieName,\"refer\")}catch(a){console.warn(\"[medium_cookie_create][get_refer]\",a)}}function get_key(a){try{var b=window.location.href;a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(b);return null==a?null:a[1]}catch(c){return console.warn(\"[medium_cookie_create][get_key]\",c),null}}\nfunction setCookie(a,b){try{var c=new Date;c.setTime(c.getTime()+864E5*p.cookieTime);var d=\";expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+d+\";path\\x3d\"+p.path+\";domain\\x3d\"+p.domain}catch(e){return console.warn(\"[medium_cookie_create][setCookie]\",e),null}}try{var p=", ["escape", ["macro", 108], 8, 16], ",refer=", ["escape", ["macro", 109], 8, 16], ",shopee_refer_check=new RegExp(p.shopee_refer,\"i\");track_keyToGet()}catch(a){console.warn(\"[medium_cookie_create]\",a)};\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 78
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function k(a,b){b?(l[0]=l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,this.blocks=l):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=\nthis.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function x(a,b,c){var f=typeof a;if(\"string\"===f){var e,m=[],d=a.length,g=0;for(f=0;f\u003Cd;++f)128\u003E(e=a.charCodeAt(f))?m[g++]=e:2048\u003Ee?(m[g++]=192|e\u003E\u003E6,m[g++]=128|63\u0026e):55296\u003Ee||57344\u003C=e?(m[g++]=224|e\u003E\u003E12,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e):(e=65536+((1023\u0026e)\u003C\u003C10|1023\u0026a.charCodeAt(++f)),m[g++]=240|e\u003E\u003E18,m[g++]=128|e\u003E\u003E12\u002663,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e);a=m}else{if(\"object\"!==f)throw Error(u);if(null===\na)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);}64\u003Ca.length\u0026\u0026(a=(new k(b,!0)).update(a).array());e=[];m=[];for(f=0;64\u003Ef;++f)d=a[f]||0,e[f]=92^d,m[f]=54^d;k.call(this,b,c);this.update(m);this.oKeyPad=e;this.inner=!0;this.sharedMemory=c}var u=\"input is invalid type\",v=\"object\"==typeof window,p=v?window:{};p.JS_SHA256_NO_WINDOW\u0026\u0026(v=!1);v=!v\u0026\u0026\"object\"==typeof self;var A=!p.JS_SHA256_NO_NODE_JS\u0026\u0026\"object\"==typeof process\u0026\u0026\nprocess.versions\u0026\u0026process.versions.node;A?p=global:v\u0026\u0026(p=self);v=!p.JS_SHA256_NO_COMMON_JS\u0026\u0026\"object\"==typeof module\u0026\u0026module.exports;var F=\"function\"==typeof define\u0026\u0026define.amd,w=!p.JS_SHA256_NO_ARRAY_BUFFER\u0026\u0026\"undefined\"!=typeof ArrayBuffer,c=\"0123456789abcdef\".split(\"\"),G=[-2147483648,8388608,32768,128],n=[24,16,8,0],y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,\n4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],\nz=[\"hex\",\"array\",\"digest\",\"arrayBuffer\"],l=[];!p.JS_SHA256_NO_NODE_JS\u0026\u0026Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});!w||!p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW\u0026\u0026ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return\"object\"==typeof a\u0026\u0026a.buffer\u0026\u0026a.buffer.constructor===ArrayBuffer});var B=function(a,b){return function(m){return(new k(b,!0)).update(m)[a]()}},C=function(a){var b=B(\"hex\",a);A\u0026\u0026(b=H(b,a));b.create=function(){return new k(a)};b.update=\nfunction(a){return b.create().update(a)};for(var m=0;m\u003Cz.length;++m){var c=z[m];b[c]=B(c,a)}return b},H=function(a,b){var c=eval(\"require('crypto')\"),f=eval(\"require('buffer').Buffer\"),e=b?\"sha224\":\"sha256\",h=function(b){if(\"string\"==typeof b)return c.createHash(e).update(b,\"utf8\").digest(\"hex\");if(null===b||void 0===b)throw Error(u);return b.constructor===ArrayBuffer\u0026\u0026(b=new Uint8Array(b)),Array.isArray(b)||ArrayBuffer.isView(b)||b.constructor===f?c.createHash(e).update(new f(b)).digest(\"hex\"):a(b)};\nreturn h},D=function(a,b){return function(c,f){return(new x(c,b,!0)).update(f)[a]()}},E=function(a){var b=D(\"hex\",a);b.create=function(b){return new x(b,a)};b.update=function(a,c){return b.create(a).update(c)};for(var c=0;c\u003Cz.length;++c){var f=z[c];b[f]=D(f,a)}return b};k.prototype.update=function(a){if(!this.finalized){var b=typeof a;if(\"string\"!==b){if(\"object\"!==b)throw Error(u);if(null===a)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);\nvar c=!0}for(var f,e=0,h=a.length,d=this.blocks;e\u003Ch;){if(this.hashed\u0026\u0026(this.hashed=!1,d[0]=this.block,d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),c)for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)d[b\u003E\u003E2]|=a[e]\u003C\u003Cn[3\u0026b++];else for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)128\u003E(f=a.charCodeAt(e))?d[b\u003E\u003E2]|=f\u003C\u003Cn[3\u0026b++]:2048\u003Ef?(d[b\u003E\u003E2]|=(192|f\u003E\u003E6)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]):55296\u003Ef||57344\u003C=f?(d[b\u003E\u003E2]|=(224|f\u003E\u003E12)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003C\nn[3\u0026b++]):(f=65536+((1023\u0026f)\u003C\u003C10|1023\u0026a.charCodeAt(++e)),d[b\u003E\u003E2]|=(240|f\u003E\u003E18)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E12\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]);this.lastByteIndex=b;this.bytes+=b-this.start;64\u003C=b?(this.block=d[16],this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return 4294967295\u003Cthis.bytes\u0026\u0026(this.hBytes+=this.bytes\/4294967296\u003C\u003C0,this.bytes%=4294967296),this}};k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,\nb=this.lastByteIndex;a[16]=this.block;a[b\u003E\u003E2]|=G[3\u0026b];this.block=a[16];56\u003C=b\u0026\u0026(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes\u003C\u003C3|this.bytes\u003E\u003E\u003E29;a[15]=this.bytes\u003C\u003C3;this.hash()}};k.prototype.hash=function(){var a,b,c,f,e=this.h0,h=this.h1,d=this.h2,g=this.h3,k=this.h4,l=this.h5,r=this.h6,q=this.h7,n=this.blocks;for(a=16;64\u003Ea;++a){var p=((c=n[a-15])\u003E\u003E\u003E7|c\u003C\u003C25)^(c\u003E\u003E\u003E18|c\u003C\u003C14)^c\u003E\u003E\u003E3;var t=((c=n[a-2])\u003E\u003E\u003E\n17|c\u003C\u003C15)^(c\u003E\u003E\u003E19|c\u003C\u003C13)^c\u003E\u003E\u003E10;n[a]=n[a-16]+p+n[a-7]+t\u003C\u003C0}var u=h\u0026d;for(a=0;64\u003Ea;a+=4)this.first?(this.is224?(f=300032,q=(c=n[0]-1413257819)-150054599\u003C\u003C0,g=c+24177077\u003C\u003C0):(f=704751109,q=(c=n[0]-210244248)-1521486534\u003C\u003C0,g=c+143694565\u003C\u003C0),this.first=!1):(p=(e\u003E\u003E\u003E2|e\u003C\u003C30)^(e\u003E\u003E\u003E13|e\u003C\u003C19)^(e\u003E\u003E\u003E22|e\u003C\u003C10),b=(f=e\u0026h)^e\u0026d^u,q=g+(c=q+((k\u003E\u003E\u003E6|k\u003C\u003C26)^(k\u003E\u003E\u003E11|k\u003C\u003C21)^(k\u003E\u003E\u003E25|k\u003C\u003C7))+(k\u0026l^~k\u0026r)+y[a]+n[a])\u003C\u003C0,g=c+(p+b)\u003C\u003C0),p=(g\u003E\u003E\u003E2|g\u003C\u003C30)^(g\u003E\u003E\u003E13|g\u003C\u003C19)^(g\u003E\u003E\u003E22|g\u003C\u003C10),b=(u=g\u0026e)^g\u0026h^f,r=d+(c=r+((q\u003E\u003E\u003E6|q\u003C\u003C26)^(q\u003E\u003E\u003E11|\nq\u003C\u003C21)^(q\u003E\u003E\u003E25|q\u003C\u003C7))+(q\u0026k^~q\u0026l)+y[a+1]+n[a+1])\u003C\u003C0,p=((d=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|d\u003C\u003C30)^(d\u003E\u003E\u003E13|d\u003C\u003C19)^(d\u003E\u003E\u003E22|d\u003C\u003C10),b=(t=d\u0026g)^d\u0026e^u,l=h+(c=l+((r\u003E\u003E\u003E6|r\u003C\u003C26)^(r\u003E\u003E\u003E11|r\u003C\u003C21)^(r\u003E\u003E\u003E25|r\u003C\u003C7))+(r\u0026q^~r\u0026k)+y[a+2]+n[a+2])\u003C\u003C0,p=((h=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|h\u003C\u003C30)^(h\u003E\u003E\u003E13|h\u003C\u003C19)^(h\u003E\u003E\u003E22|h\u003C\u003C10),b=(u=h\u0026d)^h\u0026g^t,k=e+(c=k+((l\u003E\u003E\u003E6|l\u003C\u003C26)^(l\u003E\u003E\u003E11|l\u003C\u003C21)^(l\u003E\u003E\u003E25|l\u003C\u003C7))+(l\u0026r^~l\u0026q)+y[a+3]+n[a+3])\u003C\u003C0,e=c+(p+b)\u003C\u003C0;this.h0=this.h0+e\u003C\u003C0;this.h1=this.h1+h\u003C\u003C0;this.h2=this.h2+d\u003C\u003C0;this.h3=this.h3+g\u003C\u003C0;this.h4=this.h4+k\u003C\u003C0;this.h5=this.h5+\nl\u003C\u003C0;this.h6=this.h6+r\u003C\u003C0;this.h7=this.h7+q\u003C\u003C0};k.prototype.hex=function(){this.finalize();var a=this.h0,b=this.h1,m=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=c[a\u003E\u003E28\u002615]+c[a\u003E\u003E24\u002615]+c[a\u003E\u003E20\u002615]+c[a\u003E\u003E16\u002615]+c[a\u003E\u003E12\u002615]+c[a\u003E\u003E8\u002615]+c[a\u003E\u003E4\u002615]+c[15\u0026a]+c[b\u003E\u003E28\u002615]+c[b\u003E\u003E24\u002615]+c[b\u003E\u003E20\u002615]+c[b\u003E\u003E16\u002615]+c[b\u003E\u003E12\u002615]+c[b\u003E\u003E8\u002615]+c[b\u003E\u003E4\u002615]+c[15\u0026b]+c[m\u003E\u003E28\u002615]+c[m\u003E\u003E24\u002615]+c[m\u003E\u003E20\u002615]+c[m\u003E\u003E16\u002615]+c[m\u003E\u003E12\u002615]+c[m\u003E\u003E8\u002615]+c[m\u003E\u003E4\u002615]+c[15\u0026m]+c[f\u003E\u003E28\u002615]+c[f\u003E\u003E24\u002615]+c[f\u003E\u003E20\u002615]+c[f\u003E\u003E16\u002615]+c[f\u003E\u003E12\u0026\n15]+c[f\u003E\u003E8\u002615]+c[f\u003E\u003E4\u002615]+c[15\u0026f]+c[e\u003E\u003E28\u002615]+c[e\u003E\u003E24\u002615]+c[e\u003E\u003E20\u002615]+c[e\u003E\u003E16\u002615]+c[e\u003E\u003E12\u002615]+c[e\u003E\u003E8\u002615]+c[e\u003E\u003E4\u002615]+c[15\u0026e]+c[h\u003E\u003E28\u002615]+c[h\u003E\u003E24\u002615]+c[h\u003E\u003E20\u002615]+c[h\u003E\u003E16\u002615]+c[h\u003E\u003E12\u002615]+c[h\u003E\u003E8\u002615]+c[h\u003E\u003E4\u002615]+c[15\u0026h]+c[d\u003E\u003E28\u002615]+c[d\u003E\u003E24\u002615]+c[d\u003E\u003E20\u002615]+c[d\u003E\u003E16\u002615]+c[d\u003E\u003E12\u002615]+c[d\u003E\u003E8\u002615]+c[d\u003E\u003E4\u002615]+c[15\u0026d];return this.is224||(a+=c[g\u003E\u003E28\u002615]+c[g\u003E\u003E24\u002615]+c[g\u003E\u003E20\u002615]+c[g\u003E\u003E16\u002615]+c[g\u003E\u003E12\u002615]+c[g\u003E\u003E8\u002615]+c[g\u003E\u003E4\u002615]+c[15\u0026g]),a};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();\nvar a=this.h0,b=this.h1,c=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=[a\u003E\u003E24\u0026255,a\u003E\u003E16\u0026255,a\u003E\u003E8\u0026255,255\u0026a,b\u003E\u003E24\u0026255,b\u003E\u003E16\u0026255,b\u003E\u003E8\u0026255,255\u0026b,c\u003E\u003E24\u0026255,c\u003E\u003E16\u0026255,c\u003E\u003E8\u0026255,255\u0026c,f\u003E\u003E24\u0026255,f\u003E\u003E16\u0026255,f\u003E\u003E8\u0026255,255\u0026f,e\u003E\u003E24\u0026255,e\u003E\u003E16\u0026255,e\u003E\u003E8\u0026255,255\u0026e,h\u003E\u003E24\u0026255,h\u003E\u003E16\u0026255,h\u003E\u003E8\u0026255,255\u0026h,d\u003E\u003E24\u0026255,d\u003E\u003E16\u0026255,d\u003E\u003E8\u0026255,255\u0026d];return this.is224||a.push(g\u003E\u003E24\u0026255,g\u003E\u003E16\u0026255,g\u003E\u003E8\u0026255,255\u0026g),a};k.prototype.array=k.prototype.digest;k.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?\n28:32),b=new DataView(a);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),a};x.prototype=new k;x.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var a=this.array();k.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);k.prototype.finalize.call(this)}};var t=C();t.sha256=\nt;t.sha224=C(!0);t.sha256.hmac=E();t.sha224.hmac=E(!0);v?module.exports=t:(p.sha256=t.sha256,p.sha224=t.sha224,F\u0026\u0026define(function(){return t}))}();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 105
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_home\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 381
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_category2_", ["escape", ["macro", 100], 12], "\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 382
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_offer_", ["escape", ["macro", 43], 12], "\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 383
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_listing_", ["escape", ["macro", 82], 12], "\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 384
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_basketstatus_", ["escape", ["macro", 111], 12], "\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 385
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_startorder\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 386
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "\u0026amp;ncm=1\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 387
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_", ["escape", ["macro", 110], 12], "_orderstatus2_", ["escape", ["macro", 58], 12], "_", ["escape", ["macro", 44], 12], "_", ["escape", ["macro", 105], 12], "\u0026amp;cd=default\u0026amp;id=pr_", ["escape", ["macro", 110], 12], "_uid_", ["escape", ["macro", 12], 12], "\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 388
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=", ["escape", ["macro", 113], 12], "\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);\nfor(var transactionId=", ["escape", ["macro", 44], 8, 16], ",transactionCurrency=\"", ["escape", ["macro", 47], 7], "\",orders=", ["escape", ["macro", 45], 8, 16], ",purchaseInfo=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)try{\"undefined\"===typeof purchaseInfo[orders[i].items[j].shopid]?purchaseInfo[orders[i].items[j].shopid]={shopId:orders[i].items[j].shopid,conversionId:\"", ["escape", ["macro", 113], 7], "\",conversionLabel:\"", ["escape", ["macro", 114], 7], "\",quantity:orders[i].items[j].quantity,totalValue:orders[i].items[j].price\/1E5*orders[i].items[j].quantity}:\n(purchaseInfo[orders[i].items[j].shopid].quantity+=orders[i].items[j].quantity,purchaseInfo[orders[i].items[j].shopid].totalValue+=orders[i].items[j].price\/1E5*orders[i].items[j].quantity)}catch(a){console.warn(a)}var shopPurchases=Object.values(purchaseInfo);\nfor(i=0;i\u003CshopPurchases.length;i++){var shopPurchase=shopPurchases[i],shopId=shopPurchase.shopId,conversionId=shopPurchase.conversionId,conversionLabel=shopPurchase.conversionLabel,conversionValue=shopPurchase.totalValue;gtag(\"config\",conversionId,{allow_ad_personalization_signals:!1});gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:conversionValue,currency:transactionCurrency,transaction_id:transactionId+\"_\"+shopId})};\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 479
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=", ["escape", ["macro", 116], 12], "\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",", ["escape", ["macro", 116], 8, 16], ",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 485
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=", ["escape", ["macro", 116], 12], "\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",", ["escape", ["macro", 116], 8, 16], ",{allow_ad_personalization_signals:!1});var conversionId=\"", ["escape", ["macro", 116], 7], "\",conversionLabel=\"", ["escape", ["macro", 118], 7], "\",addToCartCurrency=\"", ["escape", ["macro", 47], 7], "\";gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:.0555*", ["escape", ["macro", 52], 8, 16], ",currency:addToCartCurrency});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 492
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ProductPage.Self"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "impression"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "pc"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": ".*"
            }, {
                "function": "_eq",
                "arg0": ["macro", 3],
                "arg1": "test"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "test.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 3],
                "arg1": "uat"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "uat.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.load"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "ItemCard",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "ItemCard"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "addToCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "action"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "mweb"
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/produk-digital\/"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "\/scp\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "HomePage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 34],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "pageState"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "CategoryPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "buyNow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "ShopPage.Self"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "OfficialShopLandingPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "CollectionPage"
            }, {
                "function": "_cn",
                "arg0": ["macro", 8],
                "arg1": "FlashSale"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "PageMicroSite"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "MallPage.Self"
            }, {
                "function": "_re",
                "arg0": ["macro", 21],
                "arg1": "\/search",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "tw"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "sg"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "ph"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "vn"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "co"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "cl"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "placeOrder"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "my"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "id"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "th"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "br"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "mx"
            }, {
                "function": "_re",
                "arg0": ["macro", 8],
                "arg1": "Search(Result|)Page"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "CartPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 8],
                "arg1": "CheckoutPage"
            }, {
                "function": "_eq",
                "arg0": ["macro", 56],
                "arg1": "action_sign_up_success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "v3"
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "(uat|test|live-test|staging|lite).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "produk-digital"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl.pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 22],
                "arg1": "(http|https):\/\/shopee.(vn|co.th|com.my|ph|sg|tw)\/m\/99",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 22],
                "arg1": "(http|https):\/\/shopee.co.id\/m\/super-shopping-day-129",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 62],
                "arg1": "(affiliate|affiliates)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 3],
                "arg1": "live"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "^shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
                "ignore_case": true
            }, {
                "function": "_cn",
                "arg0": ["macro", 21],
                "arg1": "produk-digital"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 7],
                "arg1": "\/web$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "shopee.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "action_delete_shopping_cart_item"
            }, {
                "function": "_eq",
                "arg0": ["macro", 74],
                "arg1": "popstate"
            }, {
                "function": "_re",
                "arg0": ["macro", 6],
                "arg1": "(event|doitac).shopee.*",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "login_success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 56],
                "arg1": "action_login_success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 4],
                "arg1": "localhost"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(giaitri|nhasach).shopee.vn",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "pl"
            }, {
                "function": "_eq",
                "arg0": ["macro", 35],
                "arg1": "xx"
            }, {
                "function": "_eq",
                "arg0": ["macro", 5],
                "arg1": "registration"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "nhasach.shopee.vn",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 84],
                "arg1": "purchase"
            }, {
                "function": "_re",
                "arg0": ["macro", 85],
                "arg1": "^(undefined|null|NaN|0|false)?$",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "purchase"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(myads|iklanku|muatukhoa|ads).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 89],
                "arg1": "btn"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_re",
                "arg0": ["macro", 14],
                "arg1": "(seller|banhang).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl)\\\/edu\\\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 14],
                "arg1": "(seller|banhang).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx|com.co|cl|pl)\\\/edu\\\/",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 22],
                "arg1": "\\\/(smartsg|unilever_householdcare|unilever_beautyhotpro|unilever_personalcare|realmeofficialstore|nutrilonofficialstore|oppo_official_store|lorealparis_officialstore|garnier_thailand|lorealparis|maybelline_thailand)",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 22],
                "arg1": "\\\/(mobilehubsg|absolutepiano|atrixofficial|samsung_thailand|movingpeach.sg|foremost_official_shop)",
                "ignore_case": true
            }, {
                "function": "_eq",
                "arg0": ["macro", 84],
                "arg1": "pageState"
            }, {
                "function": "_eq",
                "arg0": ["macro", 84],
                "arg1": "impressions"
            }, {
                "function": "_re",
                "arg0": ["macro", 115],
                "arg1": "91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 115],
                "arg1": "39401693|55027948|51678844|59860978|83276818|43416591",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 115],
                "arg1": "26947756|111138057|269296276|40492624|45237836|29990515|241142788|76176908|327041081|254644909|272467617|176534566|98316282|55788683|62579622|109598751|35357809|277411443|32467552|57205325|164729718|164729277|28265861|56542501|121205602|56540396",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 117],
                "arg1": "91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 117],
                "arg1": "39401693|55027948|51678844|59860978|83276818|43416591",
                "ignore_case": true
            }, {
                "function": "_re",
                "arg0": ["macro", 117],
                "arg1": "26947756|111138057|269296276|40492624|45237836|29990515|241142788|76176908|327041081|254644909|272467617|176534566|98316282|55788683|62579622|109598751|35357809|277411443|32467552|57205325|164729718|164729277|28265861|56542501|121205602|56540396",
                "ignore_case": true
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 2, 9, 11, 13, 14, 23, 26, 32, 34, 55, 62, 129, 176, 186, 198]
                ],
                [
                    ["if", 9],
                    ["unless", 10],
                    ["add", 3, 177],
                    ["block", 9]
                ],
                [
                    ["if", 12],
                    ["unless", 11],
                    ["add", 4]
                ],
                [
                    ["if", 13],
                    ["unless", 10],
                    ["add", 4]
                ],
                [
                    ["if", 1, 14],
                    ["add", 5, 31, 40]
                ],
                [
                    ["if", 15, 16],
                    ["add", 6, 28, 44]
                ],
                [
                    ["if", 17, 18],
                    ["add", 7, 9, 11, 14, 29, 32, 34, 39, 55, 62, 73, 77, 91, 93, 108, 116, 149, 154, 180, 187]
                ],
                [
                    ["if", 3, 19],
                    ["unless", 20],
                    ["add", 8, 71, 75, 90, 96, 107, 117, 140, 147, 159]
                ],
                [
                    ["if", 9, 21],
                    ["add", 8, 42, 140]
                ],
                [
                    ["if", 9, 22],
                    ["add", 8, 42, 140]
                ],
                [
                    ["if", 9, 23],
                    ["add", 8]
                ],
                [
                    ["if", 24, 25, 26],
                    ["add", 9, 11, 13, 14, 21, 26, 32, 34, 55, 62, 127, 178, 196]
                ],
                [
                    ["if", 25, 26, 27],
                    ["add", 9, 11, 13, 14, 22, 26, 32, 34, 55, 62, 128, 179, 189, 197]
                ],
                [
                    ["if", 18, 28],
                    ["add", 9, 11, 32, 34, 55, 62, 180]
                ],
                [
                    ["if", 1, 29],
                    ["add", 9, 11, 13, 14, 26, 32, 34, 55, 62, 134, 202]
                ],
                [
                    ["if", 26, 30],
                    ["add", 9, 11, 13, 14, 26, 32, 34, 55, 62]
                ],
                [
                    ["if", 26, 31],
                    ["add", 9, 11, 13, 14, 22, 26, 32, 34, 55, 62, 134, 202]
                ],
                [
                    ["if", 26, 32],
                    ["add", 9, 11, 13, 14, 26, 32, 34, 55, 62, 134, 202]
                ],
                [
                    ["if", 26, 33],
                    ["add", 9, 11, 13, 14, 26, 32, 34, 55, 62, 134, 193, 202]
                ],
                [
                    ["if", 1, 34],
                    ["add", 9, 11, 13, 14, 26, 32, 34, 55, 62]
                ],
                [
                    ["if", 25, 35, 36],
                    ["add", 9, 11, 13, 22, 26, 32, 34, 55, 62, 69, 79, 89, 94, 106, 113, 130, 150, 157, 183, 185, 199]
                ],
                [
                    ["if", 18, 44],
                    ["add", 10, 12, 15, 16, 17, 18, 19, 24, 27, 0, 35, 37, 43, 46, 47, 48, 49, 50, 56, 63, 74, 81, 88, 100, 103, 112, 133, 141, 145, 156, 181, 182, 188, 1, 203, 204],
                    ["block", 147, 159]
                ],
                [
                    ["if", 25, 26, 50],
                    ["add", 14]
                ],
                [
                    ["if", 26, 51],
                    ["add", 20, 131, 192, 200]
                ],
                [
                    ["if", 9],
                    ["add", 25, 124, 184, 194, 195, 163, 165, 166, 168, 169, 170, 171, 172, 173, 174, 175]
                ],
                [
                    ["if", 26, 52],
                    ["add", 26, 132, 191, 201]
                ],
                [
                    ["if", 53, 54],
                    ["add", 30, 45, 67, 80, 85, 97, 104, 114, 143, 160, 190]
                ],
                [
                    ["if", 26, 55],
                    ["unless", 56],
                    ["add", 33, 70, 82, 84, 101, 109, 115, 139, 142, 158, 184]
                ],
                [
                    ["if", 12, 57],
                    ["unless", 58],
                    ["add", 33, 139]
                ],
                [
                    ["if", 12, 22],
                    ["unless", 59],
                    ["add", 33, 139]
                ],
                [
                    ["if", 9, 60],
                    ["add", 36]
                ],
                [
                    ["if", 9, 61],
                    ["add", 36]
                ],
                [
                    ["if", 18, 44, 62],
                    ["add", 38, 53, 58, 64, 122]
                ],
                [
                    ["if", 26, 66],
                    ["add", 41, 121]
                ],
                [
                    ["if", 12, 66, 67],
                    ["add", 41, 121]
                ],
                [
                    ["if", 8, 12],
                    ["add", 41, 121]
                ],
                [
                    ["if", 12, 68],
                    ["add", 41, 121]
                ],
                [
                    ["if", 3, 19, 65],
                    ["add", 42, 120]
                ],
                [
                    ["if", 9, 69],
                    ["add", 42, 51, 120]
                ],
                [
                    ["if", 8, 9],
                    ["add", 42, 120],
                    ["block", 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 18, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 0, 31, 32, 33, 34, 35, 36, 38, 46, 47, 48, 51, 53, 54, 55, 56, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 9, 70],
                    ["add", 51]
                ],
                [
                    ["if", 3, 4, 5],
                    ["add", 52],
                    ["block", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 0, 31, 32, 33, 34, 35, 36, 38, 46, 47, 48, 51, 53, 54, 55, 56, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 184, 185, 186, 187, 188, 189, 190, 191, 192, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 6, 7],
                    ["add", 52],
                    ["block", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 27, 28, 29, 30, 0, 31, 32, 33, 34, 35, 38, 46, 47, 48, 51, 53, 54, 55, 56, 58, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 184, 185, 186, 187, 188, 189, 190, 191, 192, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 18, 71],
                    ["add", 54, 57, 72, 83, 92, 95, 105, 119, 144, 155]
                ],
                [
                    ["if", 12, 72, 73],
                    ["add", 59]
                ],
                [
                    ["if", 9, 73],
                    ["add", 59]
                ],
                [
                    ["if", 18, 74],
                    ["add", 60, 66, 78, 87, 99, 102, 111, 148, 162]
                ],
                [
                    ["if", 54, 75],
                    ["add", 61, 68, 76, 86, 98, 110, 118, 146, 161]
                ],
                [
                    ["if", 9, 77],
                    ["add", 65],
                    ["block", 124, 177]
                ],
                [
                    ["if", 18, 62, 80],
                    ["add", 123]
                ],
                [
                    ["if", 12, 81],
                    ["unless", 66],
                    ["add", 125, 184]
                ],
                [
                    ["if", 82, 84],
                    ["unless", 83],
                    ["add", 126, 135]
                ],
                [
                    ["if", 12, 85],
                    ["add", 136]
                ],
                [
                    ["if", 9, 85],
                    ["add", 137]
                ],
                [
                    ["if", 86, 87],
                    ["add", 138]
                ],
                [
                    ["if", 9, 88],
                    ["add", 151]
                ],
                [
                    ["if", 12, 89],
                    ["add", 152]
                ],
                [
                    ["if", 26, 90],
                    ["add", 153]
                ],
                [
                    ["if", 26, 91],
                    ["add", 153]
                ],
                [
                    ["if", 9, 92],
                    ["add", 164]
                ],
                [
                    ["if", 9, 93],
                    ["add", 167]
                ],
                [
                    ["if", 26, 94],
                    ["add", 205]
                ],
                [
                    ["if", 26, 95],
                    ["add", 205]
                ],
                [
                    ["if", 26, 96],
                    ["add", 205]
                ],
                [
                    ["if", 17, 18, 97],
                    ["add", 206]
                ],
                [
                    ["if", 17, 18, 98],
                    ["add", 206]
                ],
                [
                    ["if", 17, 18, 99],
                    ["add", 206]
                ],
                [
                    ["if", 2, 3],
                    ["block", 2, 3, 4, 5, 6, 7, 18, 182]
                ],
                [
                    ["if", 3, 37],
                    ["block", 9, 10, 11, 13, 14, 15, 16, 17, 19, 26, 27, 32, 34, 35, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 127, 128, 129, 130, 131, 132, 133, 134, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 182, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 38],
                    ["block", 9, 10, 11, 12, 13, 14, 16, 17, 26, 27, 32, 34, 35, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 3, 39],
                    ["block", 9, 10, 11, 12, 13, 14, 15, 16, 17, 26, 27, 32, 34, 35, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 3, 40],
                    ["block", 9, 14, 15, 26, 27, 32, 55, 56, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 41],
                    ["block", 9]
                ],
                [
                    ["if", 3, 42],
                    ["block", 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27, 32, 34, 35, 38, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 127, 128, 129, 130, 131, 132, 133, 134, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 43],
                    ["block", 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27, 32, 34, 35, 38, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 127, 128, 129, 130, 131, 132, 133, 134, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 45],
                    ["block", 10, 11, 13, 14, 16, 17, 19, 26, 27, 32, 34, 35, 53, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 3, 46],
                    ["block", 10, 11, 13, 16, 17, 19, 27, 32, 34, 35, 53, 55, 56, 58, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 3, 47],
                    ["block", 10, 11, 13, 14, 16, 17, 19, 26, 34, 35, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 182, 183, 193]
                ],
                [
                    ["if", 3, 48],
                    ["block", 10, 11, 13, 15, 17, 20, 21, 22, 23, 24, 26, 27, 32, 34, 35, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 127, 128, 129, 130, 131, 132, 133, 134, 154, 155, 156, 157, 158, 159, 160, 161, 162, 176, 177, 178, 179, 180, 181, 183, 193, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 49],
                    ["block", 13, 15, 17, 20, 21, 22, 23, 24, 26, 34, 35, 38, 53, 55, 56, 58, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 142, 143, 144, 145, 146, 147, 148, 149, 150, 176, 177, 178, 179, 180, 181, 183, 193, 196, 197, 198, 199, 200, 201, 202, 203]
                ],
                [
                    ["if", 3, 63, 64],
                    ["block", 39, 40, 41, 42, 43, 44, 45, 49, 50, 57, 92, 120, 121, 126]
                ],
                [
                    ["if", 9],
                    ["unless", 65],
                    ["block", 39, 40, 41, 42, 43, 44, 45, 49, 50, 57, 120, 121, 126]
                ],
                [
                    ["if", 3, 76],
                    ["block", 62]
                ],
                [
                    ["if", 3, 78],
                    ["block", 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162]
                ],
                [
                    ["if", 3, 79],
                    ["block", 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 142, 143, 144, 145, 146, 147, 148, 149, 150, 154, 155, 156, 157, 158, 159, 160, 161, 162]
                ]
            ]
        },
        "runtime": [
            [50, "__crto", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "injectScript"]],
                [52, "d", "https://static.criteo.net/js/ld/ld.js"],
                [52, "e", ["b", "criteo_q"]],
                [41, "f"],
                [3, "f", [8, "event", "viewHome"]],
                [38, [17, [15, "a"], "tagType"],
                    [46, "LISTING_TAG", "PRODUCT_TAG", "BASKET_TAG", "TRANSACTION_TAG"],
                    [46, [5, [46, [3, "f", [8, "event", "viewList", "item", [17, [15, "a"], "listingID"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "viewItem", "item", [17, [15, "a"], "productID"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "viewBasket", "item", [17, [15, "a"], "basketArray"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "trackTransaction", "id", [30, [17, [15, "a"], "TransactionID"], ""], "item", [17, [15, "a"], "TransactionArray"]]],
                            [4]
                        ]]
                    ]
                ],
                ["e", [8, "event", "setAccount", "account", [17, [15, "a"], "accountId"]],
                    [8, "event", "setHashedEmail", "email", [30, [17, [15, "a"], "hashedEmail"], ""]],
                    [8, "event", "setSiteType", "type", [30, [17, [15, "a"], "siteType"], "d"]],
                    [15, "f"]
                ],
                ["c", [15, "d"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "criteoStatic"
                ]
            ],
            [50, "__hjtc", [46, "a"],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "setInWindow"]],
                ["b", "hj", "hj.q"],
                [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv\u003d7"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"]
                ]
            ]
        ],
        "permissions": {
            "__crto": {
                "access_globals": {
                    "keys": [{
                        "key": "criteo_q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.criteo.net\/js\/ld\/ld.js"]
                }
            },
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            }
        }

        ,
        "security_groups": {
            "nonGoogleScripts": ["__crto", "__hjtc"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, da = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: da(a)
            }
        },
        ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var ma = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = ma;
                la = na.a;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var oa = ka,
        pa = function(a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ck = b.prototype
        },
        ra = this || self,
        sa = function(a) {
            return a
        };
    var ta = function(a, b) {
        this.g = a;
        this.s = b
    };
    var ua = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        va = function() {
            this.F = {};
            this.B = !1;
            this.H = {}
        },
        wa = function(a, b) {
            var c = [],
                d;
            for (d in a.F)
                if (a.F.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    va.prototype.get = function(a) {
        return this.F["dust." + a]
    };
    va.prototype.set = function(a, b) {
        this.B || (a = "dust." + a, this.H.hasOwnProperty(a) || (this.F[a] = b))
    };
    va.prototype.has = function(a) {
        return this.F.hasOwnProperty("dust." + a)
    };
    var xa = function(a, b) {
        b = "dust." + b;
        a.B || a.H.hasOwnProperty(b) || delete a.F[b]
    };
    va.prototype.ub = function() {
        this.B = !0
    };
    var k = function(a) {
        this.s = new va;
        this.g = [];
        this.B = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ua(b) ? this.g[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    ba = k.prototype;
    ba.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof k ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    ba.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!ua(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else ua(a) ? this.g[Number(a)] = b : this.s.set(a, b)
    };
    ba.get = function(a) {
        return "length" === a ? this.length() : ua(a) ? this.g[Number(a)] : this.s.get(a)
    };
    ba.length = function() {
        return this.g.length
    };
    ba.tb = function() {
        for (var a = wa(this.s, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new k(a)
    };
    var za = function(a, b) {
        ua(b) ? delete a.g[Number(b)] : xa(a.s, b)
    };
    ba = k.prototype;
    ba.pop = function() {
        return this.g.pop()
    };
    ba.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    ba.shift = function() {
        return this.g.shift()
    };
    ba.splice = function(a, b, c) {
        return new k(this.g.splice.apply(this.g, arguments))
    };
    ba.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    ba.has = function(a) {
        return ua(a) && this.g.hasOwnProperty(a) || this.s.has(a)
    };
    ba.ub = function() {
        this.B = !0;
        Object.freeze(this.g);
        this.s.ub()
    };
    var Aa = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Bd + g > b[f].max) throw Error("Quota exceeded");
                b[f].Bd += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                qj: function(f) {
                    c = f
                },
                Dg: function() {
                    c && a(c, 1)
                },
                sj: function(f) {
                    d = f
                },
                vb: function(f) {
                    d && a(d, f)
                },
                Hj: function(f, g) {
                    b[f] = b[f] || {
                        Bd: 0
                    };
                    b[f].max = g
                },
                Wi: function(f) {
                    return b[f] && b[f].Bd || 0
                },
                reset: function() {
                    b = {}
                },
                Ki: a
            };
        e.onFnConsume = e.qj;
        e.consumeFn = e.Dg;
        e.onStorageConsume = e.sj;
        e.consumeStorage = e.vb;
        e.setMax = e.Hj;
        e.getConsumed = e.Wi;
        e.reset = e.reset;
        e.consume = e.Ki;
        return e
    };
    var Ca = function(a, b) {
        this.B = a;
        this.P = function(c, d, e) {
            return c.apply(d, e)
        };
        this.F = b;
        this.s = new va;
        this.g = this.H = void 0
    };
    Ca.prototype.add = function(a, b) {
        Da(this, a, b, !1)
    };
    var Da = function(a, b, c, d) {
        if (!a.s.B)
            if (a.B.vb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.s;
                e.set(b, c);
                e.H["dust." + b] = !0
            } else a.s.set(b, c)
    };
    Ca.prototype.set = function(a, b) {
        this.s.B || (!this.s.has(a) && this.F && this.F.has(a) ? this.F.set(a, b) : (this.B.vb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.s.set(a, b)))
    };
    Ca.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.F ? this.F.get(a) : void 0
    };
    Ca.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.F || !this.F.has(a))
    };
    var Ea = function(a) {
        var b = new Ca(a.B, a);
        a.H && (b.H = a.H);
        b.P = a.P;
        b.g = a.g;
        return b
    };
    var Ga = function() {},
        Ha = function(a) {
            return "function" == typeof a
        },
        m = function(a) {
            return "string" == typeof a
        },
        Ia = function(a) {
            return "number" == typeof a && !isNaN(a)
        },
        Ja = Array.isArray,
        La = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        Ma = function(a, b) {
            if (a && Ja(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Oa = function(a, b) {
            if (!Ia(a) || !Ia(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b -
                a + 1) + a)
        },
        Ra = function(a, b) {
            for (var c = new Qa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Sa = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ua = function(a) {
            return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Va = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ya = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        Za = function(a) {
            var b = [];
            if (Ja(a))
                for (var c =
                        0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        $a = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        ab = function() {
            return new Date(Date.now())
        },
        bb = function() {
            return ab().getTime()
        },
        Qa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Qa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Qa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var cb = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        db = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        eb = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        gb = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        hb = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        jb = function(a, b) {
            var c = A;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    La(b, d)) return
            }
            return d
        },
        kb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        lb = /^\w{1,9}$/,
        mb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Sa(a, function(d, e) {
                lb.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        nb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var ob = function(a, b) {
        va.call(this);
        this.P = a;
        this.Na = b
    };
    pa(ob, va);
    ob.prototype.toString = function() {
        return this.P
    };
    ob.prototype.tb = function() {
        return new k(wa(this, 1))
    };
    ob.prototype.g = function(a, b) {
        a.B.Dg();
        return this.Na.apply(new pb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    ob.prototype.s = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var rb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = qb(a, b[d]), c instanceof ta); d++);
            return c
        },
        qb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof ob)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.H;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        pb = function(a, b) {
            this.s = a;
            this.g = b
        },
        G = function(a, b) {
            return Ja(b) ? qb(a.g, b) : b
        },
        H = function(a) {
            return a.s.P
        };
    var tb = function() {
        va.call(this)
    };
    pa(tb, va);
    tb.prototype.tb = function() {
        return new k(wa(this, 1))
    };
    var ub = {
        control: function(a, b) {
            return new ta(a, G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof k)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.B.vb(a.length + f.length);
            return new ob(a, function() {
                return function(g) {
                    var h = Ea(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = G(this, l[n]), l[n] instanceof ta) return l[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new k(l));
                    var r = rb(h, f);
                    if (r instanceof ta) return "return" === r.g ? r.s : r
                }
            }())
        },
        list: function(a) {
            var b = this.g.B;
            b.vb(arguments.length);
            for (var c = new k, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.vb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.B, c = new tb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.vb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var vb = function() {
            this.B = Aa();
            this.g = new Ca(this.B)
        },
        wb = function(a, b, c) {
            var d = new ob(b, c);
            d.ub();
            a.g.set(b, d)
        },
        xb = function(a, b, c) {
            ub.hasOwnProperty(b) && wb(a, c || b, ub[b])
        };
    vb.prototype.Ub = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    };
    vb.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = qb(this.g, arguments[c]);
        return b
    };
    vb.prototype.F = function(a, b) {
        var c = Ea(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = qb(c, arguments[e]);
        return d
    };
    var yb, zb = function() {
        if (void 0 === yb) {
            var a = null,
                b = ra.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: sa,
                        createScript: sa,
                        createScriptURL: sa
                    })
                } catch (c) {
                    ra.console && ra.console.error(c.message)
                }
                yb = a
            } else yb = a
        }
        return yb
    };
    var Db = function(a, b) {
        this.B = b === Cb ? a : ""
    };
    Db.prototype.s = !0;
    Db.prototype.g = function() {
        return this.B.toString()
    };
    Db.prototype.toString = function() {
        return this.B + ""
    };
    var Cb = {},
        Eb = function(a) {
            var b = zb(),
                c = b ? b.createScriptURL(a) : a;
            return new Db(c, Cb)
        };
    var Gb = function(a, b) {
        this.B = b === Fb ? a : ""
    };
    Gb.prototype.s = !0;
    Gb.prototype.g = function() {
        return this.B.toString()
    };
    Gb.prototype.toString = function() {
        return this.B.toString()
    };
    var Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Fb = {};
    var Ib;
    a: {
        var Jb = ra.navigator;
        if (Jb) {
            var Nb = Jb.userAgent;
            if (Nb) {
                Ib = Nb;
                break a
            }
        }
        Ib = ""
    }
    var Ob = function(a) {
        return -1 != Ib.indexOf(a)
    };
    var Pb = {},
        Qb = function(a, b, c) {
            this.B = c === Pb ? a : "";
            this.s = !0
        };
    Qb.prototype.g = function() {
        return this.B.toString()
    };
    Qb.prototype.toString = function() {
        return this.B.toString()
    };
    var Rb = function(a) {
            return a instanceof Qb && a.constructor === Qb ? a.B : "type_error:SafeHtml"
        },
        Sb = function(a) {
            var b = zb(),
                c = b ? b.createHTML(a) : a;
            return new Qb(c, null, Pb)
        },
        Tb = new Qb(ra.trustedTypes && ra.trustedTypes.emptyHTML || "", 0, Pb);

    function Ub(a, b) {
        a.src = b instanceof Db && b.constructor === Db ? b.B : "type_error:TrustedResourceUrl";
        var c, d, e = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            f = null === (d = e.querySelector) || void 0 === d ? void 0 : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Vb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Wb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Xb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = Rb(Tb);
            return !c.parentElement
        }),
        Yb = function(a, b) {
            if (Xb())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = Rb(b)
        };
    var A = window,
        I = document,
        Zb = navigator,
        $b = I.currentScript && I.currentScript.src,
        cc = function(a, b) {
            var c = A[a];
            A[a] = void 0 === c ? b : c;
            return A[a]
        },
        dc = function(a) {
            var b = I.getElementsByTagName("script")[0] || I.body || I.head;
            b.parentNode.insertBefore(a, b)
        },
        ec = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        fc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        gc = function(a, b, c, d) {
            var e = I.createElement("script");
            d && Sa(d, function(f, g) {
                f = f.toLowerCase();
                fc.hasOwnProperty(f) || e.setAttribute(f, g)
            });
            e.type = "text/javascript";
            e.async = !0;
            Ub(e, Eb(a));
            ec(e, b);
            c && (e.onerror = c);
            dc(e);
            return e
        },
        hc = function() {
            if ($b) {
                var a = $b.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        ic = function(a, b) {
            var c = I.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = I.body && I.body.lastChild || I.body || I.head;
            d.parentNode.insertBefore(c,
                d);
            ec(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        jc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        kc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        lc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            A.setTimeout(a, 0)
        },
        mc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value :
                null
        },
        nc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        oc = function(a) {
            var b = I.createElement("div"),
                c = Sb("A<div>" + a + "</div>");
            Yb(b, c);
            b = b.lastChild;
            for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d
        },
        rc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        sc = function(a) {
            Zb.sendBeacon && Zb.sendBeacon(a) || jc(a)
        },
        tc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        uc = function(a) {
            var b = I.featurePolicy;
            return b && Ha(b.features) ? -1 !== b.features().indexOf(a) : !1
        };
    var vc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        wc = function(a, b) {
            return G(this, a) === G(this, b)
        },
        xc = function(a, b) {
            return G(this, a) || G(this, b)
        },
        yc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        zc = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        },
        Ac = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = A.location.href;
                    b instanceof tb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var Cc = function() {
        this.g = new vb;
        Bc(this)
    };
    Cc.prototype.Ub = function(a) {
        return this.g.s(a)
    };
    var Bc = function(a) {
        xb(a.g, "map");
        var b = function(c, d) {
            wb(a.g, c, d)
        };
        b("and", vc);
        b("contains", yc);
        b("equals", wc);
        b("or", xc);
        b("startsWith", zc);
        b("variable", Ac)
    };
    var Dc = function(a) {
        if (a instanceof Dc) return a;
        this.Ua = a
    };
    Dc.prototype.toString = function() {
        return String(this.Ua)
    };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Gc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Hc = function(a) {
            if (null == a) return String(a);
            var b = Gc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ic = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Jc = function(a) {
            if (!a || "object" != Hc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ic(a, "constructor") && !Ic(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ic(a, b)
        },
        P = function(a, b) {
            var c = b || ("array" == Hc(a) ? [] : {}),
                d;
            for (d in a)
                if (Ic(a, d)) {
                    var e = a[d];
                    "array" == Hc(e) ? ("array" != Hc(c[d]) && (c[d] = []), c[d] = P(e, c[d])) : Jc(e) ? (Jc(c[d]) || (c[d] = {}), c[d] = P(e, c[d])) : c[d] = e
                }
            return c
        };
    var Lc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n = wa(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var l = La(d, h);
                    if (-1 < l) return e[l];
                    if (h instanceof k) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.tb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof tb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof ob) {
                        var u = function() {
                            for (var t = Array.prototype.slice.call(arguments, 0), v = 0; v < t.length; v++) t[v] = Kc(t[v], b, !!c);
                            var w = b ? b.B : Aa(),
                                z = new Ca(w);
                            b && (z.g = b.g);
                            return g(h.g.apply(h, [z].concat(t)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        Kc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
                },
                g = function(h) {
                    var l = La(d,
                        h);
                    if (-1 < l) return e[l];
                    if (Ja(h) || Ua(h)) {
                        var n = new k([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Jc(h)) {
                        var q = new tb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new ob("", function(t) {
                            for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Lc(G(this, v[w]), b, !!c);
                            return g((0, this.g.P)(h, h, v))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var u = typeof h;
                    if (null === h || "string" === u || "number" === u || "boolean" === u) return h;
                };
            return g(a)
        };
    var Mc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Nc = function(a) {
            if (void 0 === a || Ja(a) || Jc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Oc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof k)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new k(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new k(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new k(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Mc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : za(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new k(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Mc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : za(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Pc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Qc = new ta("break"),
        Rc = new ta("continue"),
        Sc = function(a, b) {
            return G(this, a) + G(this, b)
        },
        Tc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        Uc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof k)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            if ("boolean" === typeof a || "number" === typeof a) {
                if ("toString" === b) return a.toString();
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= La(Pc, b)) {
                    var d = Lc(c);
                    return Kc(a[b].apply(a, d), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof k) {
                if (a.has(b)) {
                    var e = a.get(b);
                    if (e instanceof ob) {
                        var f = Mc(c);
                        f.unshift(this.g);
                        return e.g.apply(e, f)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if (0 <= La(Oc.supportedMethods, b)) {
                    var g =
                        Mc(c);
                    g.unshift(this.g);
                    return Oc[b].apply(a, g)
                }
            }
            if (a instanceof ob || a instanceof tb) {
                if (a.has(b)) {
                    var h = a.get(b);
                    if (h instanceof ob) {
                        var l = Mc(c);
                        l.unshift(this.g);
                        return h.g.apply(h, l)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof ob ? a.P : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Mc(c))
            }
            if (a instanceof Dc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" + b + "' property.");
        },
        Vc = function(a, b) {
            a = G(this, a);
            if ("string" !==
                typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        ad = function(a) {
            var b = Ea(this.g),
                c = rb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ta) return c
        },
        bd = function() {
            return Qc
        },
        cd = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof ta) return d
            }
        },
        dd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    Da(b, d, e, !0)
                }
            }
        },
        ed = function() {
            return Rc
        },
        fd = function(a, b, c) {
            var d = new k;
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        },
        gd = function(a, b) {
            return G(this, a) / G(this, b)
        },
        hd = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof Dc,
                d = b instanceof Dc;
            return c || d ? c && d ? a.Ua == b.Ua : !1 : a == b
        },
        id = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b =
                G(this, arguments[c]);
            return b
        };

    function jd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = rb(f, d);
            if (g instanceof ta) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function kd(a, b, c) {
        if ("string" === typeof b) return jd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof tb || b instanceof k || b instanceof ob) {
            var d = b.tb(),
                e = d.length();
            return jd(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var ld = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return kd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        md = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return kd(function(e) {
                var f = Ea(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        nd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return kd(function(e) {
                var f = Ea(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        pd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return od(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        qd =
        function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return od(function(e) {
                var f = Ea(d);
                Da(f, a, e, !0);
                return f
            }, b, c)
        },
        rd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return od(function(e) {
                var f = Ea(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function od(a, b, c) {
        if ("string" === typeof b) return jd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof k) return jd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var sd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var u = f.get(r);
                    q.add(u, p.get(u))
                }
            }
            var f = G(this, a);
            if (!(f instanceof k)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = Ea(g);
            for (e(g, h); qb(h, b);) {
                var l = rb(h, d);
                if (l instanceof ta) {
                    if ("break" === l.g) break;
                    if ("return" === l.g) return l
                }
                var n = Ea(g);
                e(h, n);
                qb(n, c);
                h = n
            }
        },
        td = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        ud = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof tb || a instanceof k || a instanceof ob) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : ua(b) && (c = a[b]);
            else if (a instanceof Dc) return;
            return c
        },
        vd = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        wd = function(a, b) {
            return G(this, a) >= G(this, b)
        },
        xd = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof Dc && (a = a.Ua);
            b instanceof Dc && (b = b.Ua);
            return a === b
        },
        yd = function(a, b) {
            return !xd.call(this, a, b)
        },
        zd = function(a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = rb(this.g, d);
            if (e instanceof ta) return e
        },
        Ad = function(a, b) {
            return G(this, a) < G(this, b)
        },
        Bd = function(a, b) {
            return G(this, a) <= G(this, b)
        },
        Jd = function(a, b) {
            return G(this, a) % G(this, b)
        },
        Kd = function(a, b) {
            return G(this, a) * G(this, b)
        },
        Ld = function(a) {
            return -G(this,
                a)
        },
        Md = function(a) {
            return !G(this, a)
        },
        Nd = function(a, b) {
            return !hd.call(this, a, b)
        },
        Od = function() {
            return null
        },
        Pd = function(a, b) {
            return G(this, a) || G(this, b)
        },
        Qd = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        },
        Rd = function(a) {
            return G(this, a)
        },
        Sd = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Td = function(a) {
            return new ta("return", G(this, a))
        },
        Ud = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof ob || a instanceof k || a instanceof tb) && a.set(b, c);
            return c
        },
        Vd = function(a, b) {
            return G(this, a) - G(this, b)
        },
        Wd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ja(d) || !Ja(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof ta) {
                        var l = f.g;
                        if ("break" === l) return;
                        if ("return" === l || "continue" === l) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof ta && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        Xd = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        },
        Yd = function(a) {
            a = G(this, a);
            return a instanceof ob ? "function" : typeof a
        },
        Zd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        $d = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = rb(this.g, e);
                if (f instanceof ta) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; G(this, a);) {
                var g = rb(this.g, e);
                if (g instanceof ta) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                G(this,
                    b)
            }
        },
        ae = function(a) {
            return ~Number(G(this, a))
        },
        be = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        },
        ce = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        },
        de = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        },
        ee = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        },
        fe = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        },
        ge = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
    var ie = function() {
        this.g = new vb;
        he(this)
    };
    ie.prototype.Ub = function(a) {
        return je(this.g.s(a))
    };
    var le = function(a, b) {
            return je(ke.g.F(a, b))
        },
        he = function(a) {
            var b = function(d, e) {
                xb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                wb(a.g, String(d), e)
            };
            c(0, Sc);
            c(1, Tc);
            c(2, Uc);
            c(3, Vc);
            c(53, ad);
            c(4, bd);
            c(5, cd);
            c(52, dd);
            c(6, ed);
            c(9, cd);
            c(50, fd);
            c(10, gd);
            c(12, hd);
            c(13, id);
            c(47, ld);
            c(54, md);
            c(55, nd);
            c(63, sd);
            c(64, pd);
            c(65, qd);
            c(66, rd);
            c(15, td);
            c(16, ud);
            c(17, ud);
            c(18, vd);
            c(19, wd);
            c(20, xd);
            c(21, yd);
            c(22, zd);
            c(23, Ad);
            c(24, Bd);
            c(25, Jd);
            c(26, Kd);
            c(27,
                Ld);
            c(28, Md);
            c(29, Nd);
            c(45, Od);
            c(30, Pd);
            c(32, Qd);
            c(33, Qd);
            c(34, Rd);
            c(35, Rd);
            c(46, Sd);
            c(36, Td);
            c(43, Ud);
            c(37, Vd);
            c(38, Wd);
            c(39, Xd);
            c(40, Yd);
            c(41, Zd);
            c(42, $d);
            c(58, ae);
            c(57, be);
            c(60, ce);
            c(61, de);
            c(56, ee);
            c(62, fe);
            c(59, ge)
        },
        ne = function() {
            var a = ke,
                b = me();
            wb(a.g, "require", b)
        },
        oe = function(a, b) {
            a.g.g.P = b
        };

    function je(a) {
        if (a instanceof ta || a instanceof ob || a instanceof k || a instanceof tb || a instanceof Dc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var pe = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            sh: a("consent"),
            Yd: a("consent_always_fire"),
            Gf: a("convert_case_to"),
            Hf: a("convert_false_to"),
            If: a("convert_null_to"),
            Jf: a("convert_true_to"),
            Kf: a("convert_undefined_to"),
            Pj: a("debug_mode_metadata"),
            Rj: a("event_data_overrides"),
            sb: a("function"),
            li: a("instance_name"),
            ni: a("live_only"),
            oi: a("malware_disabled"),
            ri: a("metadata"),
            Sj: a("original_activity_id"),
            Tj: a("original_vendor_template_id"),
            ui: a("once_per_event"),
            ig: a("once_per_load"),
            Vj: a("priority_override"),
            Wj: a("respected_consent_types"),
            mg: a("setup_tags"),
            og: a("tag_id"),
            pg: a("teardown_tags")
        }
    }();
    var ze = [],
        Ae = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Be = function(a) {
            return Ae[a]
        },
        Ce = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Ge = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        He = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        Ie = function(a) {
            return He[a]
        };
    ze[7] = function(a) {
        return String(a).replace(Ge, Ie)
    };
    ze[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ge, Ie) + "'"
        }
    };
    var Oe = /['()]/g,
        Pe = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    ze[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        Oe.lastIndex = 0;
        return Oe.test(b) ? b.replace(Oe, Pe) : b
    };
    var Qe = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Re = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Se = function(a) {
            return Re[a]
        };
    ze[16] = function(a) {
        return a
    };
    var Ue;
    var Ve = [],
        We = [],
        Xe = [],
        Ye = [],
        Ze = [],
        $e = {},
        af, bf, cf, df = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        ef = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = $e[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_")) d && b && b.Cg && b.Cg(a[f]), e[void 0 !== d ? f : f.substr(4)] = a[f];
                    else if (f === pe.Yd.toString() && a[f]) {}
            d && b && b.Bg && (e.vtp_gtmCachedValues = b.Bg);
            return void 0 !== d ? d(e) : Ue(c, e, b)
        },
        gf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = ff(a[e], b, c));
            return d
        },
        ff = function(a, b, c) {
            if (Ja(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(ff(a[e], b, c));
                        return d;
                    case "macro":
                        var f =
                            a[1];
                        if (c[f]) return;
                        var g = Ve[f];
                        if (!g || b.ff(g)) return;
                        c[f] = !0;
                        try {
                            var h = gf(g, b, c);
                            h.vtp_gtmEventId = b.id;
                            d = ef(h, b);
                            cf && (d = cf.Li(d, h))
                        } catch (z) {
                            b.Ug && b.Ug(z, Number(f)), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[ff(a[l], b, c)] = ff(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = ff(a[p], b, c);
                            bf && (n = n || q === bf.sd);
                            d.push(q)
                        }
                        return bf && n ? bf.Oi(d) : d.join("");
                    case "escape":
                        d = ff(a[1], b, c);
                        if (bf && Ja(a[1]) && "macro" === a[1][0] && bf.cj(a)) return bf.vj(d);
                        d =
                            String(d);
                        for (var r = 2; r < a.length; r++) ze[a[r]] && (d = ze[a[r]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Ye[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Kg: a[2],
                            index: u
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t["function"] = a[1];
                        var v = hf(t, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        hf = function(a, b, c) {
            try {
                return af(gf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var jf = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.s = a;
        this.g = c
    };
    pa(jf, Error);

    function kf(a, b) {
        if (Ja(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) kf(a[c], b[c])
        }
    };
    var lf = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.B = a;
        this.s = b;
        this.g = []
    };
    pa(lf, Error);
    var nf = function() {
        return function(a, b) {
            a instanceof lf || (a = new lf(a, mf));
            b && a.g.push(b);
            throw a;
        }
    };

    function mf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ia(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var qf = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0
            }
            for (var c = [], d = [], e = of (a), f = 0; f < We.length; f++) {
                var g = We[f],
                    h = pf(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < Ye.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        pf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        of = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = hf(Xe[c], a));
                return b[c]
            }
        };
    var rf = {
        Li: function(a, b) {
            b[pe.Gf] && "string" === typeof a && (a = 1 == b[pe.Gf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(pe.If) && null === a && (a = b[pe.If]);
            b.hasOwnProperty(pe.Kf) && void 0 === a && (a = b[pe.Kf]);
            b.hasOwnProperty(pe.Jf) && !0 === a && (a = b[pe.Jf]);
            b.hasOwnProperty(pe.Hf) && !1 === a && (a = b[pe.Hf]);
            return a
        }
    };
    var sf = function() {
        this.g = {}
    };

    function tf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new jf(c, d, g);
            }
    }

    function uf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    tf(e, b, d, g);
                    tf(f, b, d, g)
                }
            }
        }
    };
    var Af = function(a) {
            var b = vf.N,
                c = this;
            this.s = new sf;
            this.g = {};
            var d = {},
                e = uf(this.s, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            Sa(a, function(f, g) {
                var h = {};
                Sa(g, function(l, n) {
                    var p = wf(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.W)
                });
                c.g[f] = function(l, n) {
                    var p = h[l];
                    if (!p) throw zf(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        Cf = function(a) {
            return Bf.g[a] ||
                function() {}
        };

    function wf(a, b) {
        var c = df(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = zf;
        try {
            return ef(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new jf(e, {}, "Permission " + e + " is unknown.");
                },
                W: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function zf(a, b, c) {
        return new jf(a, b, c)
    };
    var Df = !1;
    var Ef = {};
    Ef.Oj = Ya('');
    Ef.Ri = Ya('');
    var Ff = Df,
        Gf = Ef.Ri,
        Hf = Ef.Oj;
    var Wf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        Xf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            Wf(b, "/*") && (b = b.slice(0, -2));
            Wf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        Yf = /^[a-z0-9-]+$/i,
        Zf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        ag = function(a, b) {
            var c;
            if (!(c = !$f(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!Yf.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                    n = b[g];
                if (!Zf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var u = l.hostname,
                    t = q;
                if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase();
                else {
                    t = t.slice(2);
                    var v = u.toLowerCase().indexOf(t.toLowerCase());
                    r = -1 === v ? !1 : u.length === t.length ?
                        !0 : u.length !== t.length + v ? !1 : "." === u[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    h = Xf(l.pathname + l.search, w) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        $f = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var bg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        cg = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        Q = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = bg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d],
                    n = typeof l;
                if (null === l || "undefined" === n) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var p = typeof l;
                    l instanceof ob ? p = "Fn" : l instanceof k ? p = "List" : l instanceof tb ? p = "DustMap" :
                        l instanceof Dc && (p = "OpaqueValue");
                    if (p != h) throw Error("Error in " + a + ". Argument " + f + " has type " + p + ", which does not match required type " + (cg[h] || h) + ".");
                }
            }
        };

    function dg(a) {
        return "" + a
    }

    function eg(a, b) {
        var c = [];
        return c
    };
    var fg = function(a, b) {
            var c = new ob(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]);
                return b.apply(this, d)
            });
            c.ub();
            return c
        },
        gg = function(a, b) {
            var c = new tb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ha(e) ? c.set(d, fg(a + "_" + d, e)) : (Ia(e) || m(e) || "boolean" == typeof e) && c.set(d, e)
                }
            c.ub();
            return c
        };
    var hg = function(a, b) {
        Q(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new tb;
        return d = gg("AssertApiSubject", c)
    };
    var ig = function(a, b) {
        Q(H(this), ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new tb;
        return d = gg("AssertThatSubject", c)
    };

    function jg(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Lc(arguments[d], c));
            return Kc(a.apply(null, b))
        }
    }
    var lg = function() {
        for (var a = Math, b = kg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = jg(a[e].bind(a)))
        }
        return c
    };
    var mg = function(a) {
        var b;
        return b
    };
    var ng = function(a) {
        var b;
        return b
    };
    var og = function(a) {
        Q(H(this), ["uri:!string"], arguments);
        return encodeURI(a)
    };
    var pg = function(a) {
        Q(H(this), ["uri:!string"], arguments);
        return encodeURIComponent(a)
    };
    var qg = function(a) {
        Q(H(this), ["message:?string"], arguments);
    };
    var rg = function(a, b) {
        Q(H(this), ["min:!number", "max:!number"], arguments);
        return Oa(a, b)
    };
    var sg = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.Ei.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var tg = function() {
        sg(this, "read_container_data");
        var a = new tb;
        a.set("containerId", 'GTM-WJZQSJF');
        a.set("version", '280');
        a.set("environmentName", '');
        a.set("debugMode", Ff);
        a.set("previewMode", Hf);
        a.set("environmentMode", Gf);
        a.ub();
        return a
    };
    var ug = function() {
        return (new Date).getTime()
    };
    var vg = function(a) {
        if (null === a) return "null";
        if (a instanceof k) return "array";
        if (a instanceof ob) return "function";
        if (a instanceof Dc) {
            a = a.Ua;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var wg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Ff || Hf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Kc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Lc(c))
            })
        }
    };
    var xg = function(a) {
        return Va(Lc(a, this.g))
    };
    var yg = function(a) {
        return Number(Lc(a, this.g))
    };
    var zg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Ag = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var kg = "floor ceil round max min abs pow sqrt".split(" ");
    var Bg = function() {
            var a = {};
            return {
                Xi: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Ij: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Cg = function(a, b) {
            Q(H(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Dg = {};
    Dg.keys = function(a) {
        return new k
    };
    Dg.values = function(a) {
        return new k
    };
    Dg.entries = function(a) {
        return new k
    };
    Dg.freeze = function(a) {
        return a
    };
    Dg.delete = function(a, b) {
        return !1
    };
    var Fg = function() {
        this.g = {};
        this.s = {};
    };
    Fg.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Fg.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ha(b) ? fg(a, b) : gg(a, b)
    };
    var Hg = function(a, b, c) {
        if (a.s.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.s[b] = Ha(c) ? fg(b, c) : gg(b, c)
    };

    function Gg(a, b) {
        var c = void 0;
        return c
    };

    function Ig() {
        var a = {};
        return a
    };
    var R = {
        uc: "_ee",
        xd: "_syn_or_mod",
        Yj: "_uei",
        Ae: "_eu",
        Uj: "_pci",
        Kb: "event_callback",
        gd: "event_timeout",
        Ga: "gtag.config",
        Pa: "gtag.get",
        za: "purchase",
        Ib: "refund",
        mb: "begin_checkout",
        Fb: "add_to_cart",
        Gb: "remove_from_cart",
        Bh: "view_cart",
        Mf: "add_to_wishlist",
        Oa: "view_item",
        cc: "view_promotion",
        bd: "select_promotion",
        ae: "select_item",
        Hb: "view_item_list",
        Lf: "add_payment_info",
        Ah: "add_shipping_info",
        Sa: "value_key",
        ab: "value_callback",
        Ha: "allow_ad_personalization_signals",
        mc: "restricted_data_processing",
        hc: "allow_google_signals",
        Ka: "cookie_expires",
        ic: "cookie_update",
        oc: "session_duration",
        ld: "session_engaged_time",
        Ta: "user_properties",
        sa: "transport_url",
        T: "ads_data_redaction",
        Aa: "user_data",
        jc: "first_party_collection",
        D: "ad_storage",
        J: "analytics_storage",
        Zd: "region",
        Ff: "wait_for_update",
        Ja: "conversion_linker",
        Ia: "conversion_cookie_prefix",
        ia: "value",
        fa: "currency",
        cg: "trip_type",
        aa: "items",
        Wf: "passengers",
        de: "allow_custom_scripts",
        qc: "session_id",
        ag: "quantity",
        rb: "transaction_id",
        pb: "language",
        ed: "country",
        cd: "allow_enhanced_conversions",
        je: "aw_merchant_id",
        he: "aw_feed_country",
        ie: "aw_feed_language",
        fe: "discount",
        qa: "developer_id",
        md: "delivery_postal_code",
        qe: "estimated_delivery_date",
        oe: "shipping",
        we: "new_customer",
        ke: "customer_lifetime_value",
        pe: "enhanced_conversions",
        fc: "page_view",
        ra: "linker",
        R: "domains",
        Nb: "decorate_forms",
        Tf: "enhanced_conversions_automatic_settings",
        Kh: "auto_detection_enabled",
        Uf: "ga_temp_client_id"
    };
    R.fg = [R.za, R.Ib, R.mb, R.Fb, R.Gb, R.Bh, R.Mf, R.Oa, R.cc, R.bd, R.Hb, R.ae, R.Lf, R.Ah];
    R.eg = [R.Ha, R.hc, R.ic];
    R.gg = [R.Ka, R.gd, R.oc, R.ld];
    var Kg = {},
        Lg = function(a, b) {
            Kg[a] = Kg[a] || [];
            Kg[a][b] = !0
        },
        Mg = function(a) {
            for (var b = [], c = Kg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var Ng = function(a) {
        Lg("GTM", a)
    };
    var Og = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Qg = function() {
        var a = Pg;
        if (a.df && a.hasOwnProperty("df")) return a.df;
        var b = new a;
        return a.df = b
    };
    var Pg = function() {
        var a = {};
        this.g = function() {
            var b = Og.g,
                c = Og.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[Og.g] = !0
        }
    };
    var Rg = [];

    function Sg() {
        var a = cc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Tg,
            update: Ug,
            addListener: Vg,
            notifyListeners: Wg,
            active: !1,
            usedDefault: !1
        });
        return a.ics
    }

    function Tg(a, b, c, d, e, f) {
        var g = Sg();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial) h[a] = r;
                q && A.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, Xg(a), Wg(), Lg("TAGGING", 2))
                }, f)
            }
        }
    }

    function Ug(a, b) {
        var c = Sg();
        c.active = !0;
        if (void 0 != b) {
            var d = Yg(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Yg(a);
            f.quiet ? (f.quiet = !1, Xg(a)) : g !== d && Xg(a)
        }
    }

    function Vg(a, b) {
        Rg.push({
            Se: a,
            Ti: b
        })
    }

    function Xg(a) {
        for (var b = 0; b < Rg.length; ++b) {
            var c = Rg[b];
            Ja(c.Se) && -1 !== c.Se.indexOf(a) && (c.Xg = !0)
        }
    }

    function Wg(a) {
        for (var b = 0; b < Rg.length; ++b) {
            var c = Rg[b];
            if (c.Xg) {
                c.Xg = !1;
                try {
                    c.Ti({
                        Ji: a
                    })
                } catch (d) {}
            }
        }
    }
    var Yg = function(a) {
            var b = Sg().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial
        },
        Zg = function(a) {
            return (Sg().entries[a] || {}).initial
        },
        $g = function(a) {
            return !(Sg().entries[a] || {}).quiet
        },
        ah = function() {
            return Qg().g() ? Sg().active : !1
        },
        bh = function() {
            return Sg().usedDefault
        },
        ch = function(a, b) {
            Sg().addListener(a, b)
        },
        dh = function(a) {
            Sg().notifyListeners(a)
        },
        eh = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!$g(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                ch(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        fh = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Yg(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && ch(d, function(f) {
                var g = c();
                0 < g.length && (f.Se = g, a(f))
            })
        };

    function gh(a) {
        for (var b = [], c = 0; c < hh.length; c++) {
            var d = a(hh[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var hh = [R.D, R.J],
        ih = function(a) {
            var b = a[R.Zd];
            b && Ng(40);
            var c = a[R.Ff];
            c && Ng(41);
            for (var d = Ja(b) ? b : [b], e = {
                    Yb: 0
                }; e.Yb < d.length; e = {
                    Yb: e.Yb
                }, ++e.Yb) Sa(a, function(f) {
                return function(g, h) {
                    if (g !== R.Zd && g !== R.Ff) {
                        var l = d[f.Yb];
                        Sg().set(g, h, l, "VN", "VN-SG", c)
                    }
                }
            }(e))
        },
        jh = 0,
        kh = function(a, b) {
            Sa(a, function(e, f) {
                Sg().update(e, f)
            });
            dh(b);
            var c = bb(),
                d = c - jh;
            jh && 0 <= d && 1E3 > d && Ng(66);
            jh = c
        },
        lh = function(a) {
            var b = Yg(a);
            return void 0 != b ? b : !0
        },
        mh = function() {
            return "G1" + gh(Yg)
        },
        nh = function() {
            return "G1" +
                gh(Zg)
        },
        oh = function(a, b) {
            ch(a, b)
        },
        ph = function(a, b) {
            fh(a, b)
        },
        qh = function(a, b) {
            eh(a, b)
        };
    var wh = function(a) {
            return vh ? I.querySelectorAll(a) : null
        },
        xh = function(a, b) {
            if (!vh) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        yh = !1;
    if (I.querySelectorAll) try {
        var zh = I.querySelectorAll(":root");
        zh && 1 == zh.length && zh[0] == I.documentElement && (yh = !0)
    } catch (a) {}
    var vh = yh;
    var Ah, Bh = !1;

    function Ch() {
        Bh = !0;
        Ah = Ah || {}
    }
    var Dh = function(a) {
        Bh || Ch();
        return Ah[a]
    };
    var Eh = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0;
        var c = A.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = A.getComputedStyle(d,
                null))
        }
        return !1
    };
    var Nh = /:[0-9]+$/,
        Oh = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        Rh = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ph(a.protocol) || Ph(A.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                A.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(Nh, "").toLowerCase());
            return Qh(a, b, c, d, e)
        },
        Qh = function(a, b, c, d, e) {
            var f, g = Ph(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Sh(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Nh, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Lg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= La(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Oh(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ph = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        Sh = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Th = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Lg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Nh, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Uh = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Th(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var Vh = {},
        Wh = !0,
        Xh = !1;
    Vh.qh = "true";
    var Yh = function(a) {
        if ("false" === Vh.qh || !Wh) return !1;
        if (Xh) return !0;
        var b = Dh("AW-" + a);
        return !!b && !!b.preAutoPii
    };
    var Zh = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        $h = new RegExp(/@(gmail|googlemail)\./i),
        ai = new RegExp(/support|noreply/i),
        bi = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        ci = ["BR"],
        di = {};

    function ei(a) {
        var b;
        if (a === I.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else e = 1
                    }
                    d = ei(a.parentElement) + ">:nth-child(" + e + ")"
                } else d = "";
                c = d
            }
            b = c
        }
        return b
    }

    function fi(a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }

    function gi(a) {
        if (0 == a.length) return null;
        var b;
        b = fi(a, function(c) {
            return !ai.test(c.ma)
        });
        b = fi(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase()
        });
        b = fi(b, function(c) {
            return !Eh(c.element)
        });
        return b[0]
    }
    var hi = function(a) {
            a = a || {
                Nd: !0,
                Od: !0
            };
            a.kb = a.kb || {
                email: !0,
                phone: !0,
                yg: !0
            };
            var b, c = a,
                d = !!c.Nd + "." + !!c.Od;
            c && c.Dc && c.Dc.length && (d += "." + c.Dc.join("."));
            c && c.kb && (d += "." + c.kb.email + "." + c.kb.phone + "." + c.kb.yg);
            b = d;
            var e = di[b];
            if (e && 200 > bb() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= bi.indexOf(p.tagName.toUpperCase()))) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= ci.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                t = u.status,
                v;
            if (a.kb && a.kb.email) {
                for (var w = u.elements, z = [], x = 0; x < w.length; x++) {
                    var y = w[x],
                        B = y.textContent;
                    y.value && (B = y.value);
                    if (B) {
                        var D = B.match(Zh);
                        if (D) {
                            var C = D[0],
                                E;
                            if (A.location) {
                                var F = Qh(A.location, "host", !0);
                                E = 0 <= C.toLowerCase().indexOf(F)
                            } else E = !1;
                            E || z.push({
                                element: y,
                                ma: C
                            })
                        }
                    }
                }
                var O;
                var L = a && a.Dc;
                if (L && 0 !== L.length) {
                    for (var M = [], ca = 0; ca < z.length; ca++) {
                        for (var N = !0, K = 0; K < L.length; K++) {
                            var S =
                                L[K];
                            if (S && xh(z[ca].element, S)) {
                                N = !1;
                                break
                            }
                        }
                        N && M.push(z[ca])
                    }
                    O = M
                } else O = z;
                v = gi(O);
                10 < z.length && (t = "3")
            }
            var ia = [];
            if (v) {
                var qa = v.element,
                    T = {
                        ma: v.ma,
                        tagName: qa.tagName,
                        type: 1
                    };
                a.Nd && (T.querySelector = ei(qa));
                a.Od && (T.isVisible = !Eh(qa));
                ia.push(T)
            }
            var aa = {
                elements: ia,
                status: t
            };
            di[b] = {
                timestamp: bb(),
                result: aa
            };
            return aa
        },
        ii = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.ma.length + ":" + $h.test(a.ma)
        };
    var ji = function(a) {
            return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a)
        },
        ki = function(a) {
            return void 0 === a || null === a ? "" : m(a) ? $a(String(a)) : "e0"
        },
        mi = function(a) {
            return a.replace(li, "")
        },
        oi = function(a) {
            return ni(a.replace(/\s/g, ""))
        },
        ni = function(a) {
            return $a(a.replace(pi, "").toLowerCase())
        },
        ri = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return qi.test(a) ? a : "e0"
        },
        ti = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c =
                    c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (si.test(c)) return c
            }
            return "e0"
        },
        wi = function(a, b, c) {
            window.Promise || c([], []);
            Promise.all(a.map(function(d) {
                return d.value && ui(d.name) ? vi(d.value).then(function(e) {
                    d.value = e
                }) : Promise.resolve()
            })).then(function() {
                c(a, b)
            }).catch(function() {
                c([], [])
            })
        },
        vi = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (A.crypto && A.crypto.subtle) try {
                var b = xi(a);
                return A.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return A.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        xi = function(a) {
            var b;
            if (A.TextEncoder) b = (new A.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        pi = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        si = /^\S+@\S+\.\S+$/,
        qi = /^\+\d{11,15}$/,
        li = /[.~]/g,
        yi = {},
        zi = (yi.email = "em", yi.phone_number = "pn", yi.first_name = "fn", yi.last_name = "ln", yi.street = "sa", yi.city = "ct", yi.region = "rg", yi.country = "co", yi.postal_code = "pc", yi.error_code = "ec", yi),
        Ai = function(a, b, c) {
            function d(t, v, w) {
                var z = t[v];
                Ja(z) || (z = [z]);
                for (var x = 0; x < z.length; ++x) {
                    var y = ki(z[x]);
                    "" !== y && g.push({
                        name: v,
                        value: w(y),
                        index: void 0
                    })
                }
            }

            function e(t, v, w, z) {
                var x =
                    ki(t[v]);
                "" !== x && g.push({
                    name: v,
                    value: w(x),
                    index: z
                })
            }

            function f(t) {
                return function(v) {
                    Ng(64);
                    return t(v)
                }
            }
            var g = [],
                h = [];
            if ("https:" === A.location.protocol) {
                var l = function(t, v) {
                    var w = t[v];
                    Ja(w) || (w = [w]);
                    for (var z = 0; z < w.length; ++z) {
                        var x = ki(w[z]);
                        if ("" !== x) return x
                    }
                    return null
                };
                d(a, "email", ti);
                var n = l(a, "email");
                if (n)
                    for (var p =
                            0; p < b.length; p++) h.push(b[p].ma.toLowerCase() === n.toLowerCase());
                d(a, "phone_number", ri);
                d(a, "first_name", f(oi));
                d(a, "last_name", f(oi));
                var q = a.home_address || {};
                d(q, "street", f(ni));
                d(q, "city", f(ni));
                d(q, "postal_code", f(mi));
                d(q, "region", f(ni));
                d(q, "country", f(mi));
                var r = a.address || {};
                Ja(r) || (r = [r]);
                for (var u = 0; u < r.length; u++) e(r[u], "first_name", oi, u), e(r[u], "last_name", oi, u), e(r[u], "street", ni, u), e(r[u], "city", ni, u), e(r[u], "postal_code", mi,
                    u), e(r[u], "region", ni, u), e(r[u], "country", mi, u);
                wi(g, h, c)
            } else g.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), c(g, h)
        },
        Bi = function(a, b) {
            Ai(a, [], function(c, d) {
                for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = zi[g];
                    n && h && (!ui(g) || ji(h)) && (void 0 !== l && (n += l), e.push(n + "." + h))
                }
                b(encodeURIComponent(e.join("~")), d)
            })
        },
        Ci = function(a, b) {
            if (A.Promise) try {
                return new Promise(function(c) {
                    Ai(a, b, function(d, e) {
                        for (var f = ["tv.1"], g = 0; g < d.length; ++g) {
                            var h = d[g].name,
                                l = d[g].value,
                                n = d[g].index,
                                p = zi[h];
                            p && l && (!ui(h) || ji(l)) && (void 0 !== n && (p += n), f.push(p + "." + l))
                        }
                        c({
                            Nc: encodeURIComponent(f.join("~")),
                            Bc: e
                        })
                    })
                })
            } catch (c) {}
        },
        ui = function(a) {
            return -1 !== ["email", "phone_number", "first_name", "last_name", "street"].indexOf(a)
        };
    var Di = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.remoteConfig = {};
            this.globalConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Ei = function(a) {
            var b = new Di;
            b.eventModel = a;
            return b
        },
        Fi = function(a, b) {
            a.targetConfig = b;
            return a
        },
        Gi = function(a, b) {
            a.containerConfig = b;
            return a
        },
        Hi = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        Ii = function(a,
            b) {
            a.globalConfig = b;
            return a
        },
        Ji = function(a, b) {
            a.onSuccess = b;
            return a
        },
        Ki = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Li = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Mi = function(a, b) {
            a.onFailure = b;
            return a
        };
    Di.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
    };
    var Ni = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Oi = function(a, b, c) {
            function d(g) {
                Jc(g) && Sa(g, function(h, l) {
                    f = !0;
                    e[h] = l
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.globalConfig[b]), d(a.remoteConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        };
    var vf = {},
        U = null,
        Pi = Math.random();
    vf.N = "GTM-WJZQSJF";
    vf.wd = "910";
    vf.uh = "ChAI8PjWiQYQtOTexNPIg7BLEiQAV5q5EN4u/FWqvylonSJ+REGbIcBD50Ll8Z+X9rLHN0iMgfQaAq7E";
    var Qi = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        Ri = {
            __paused: !0,
            __tg: !0
        },
        Si;
    for (Si in Qi) Qi.hasOwnProperty(Si) && (Ri[Si] = !0);
    var Ti = "www.googletagmanager.com/gtm.js";
    var Ui = Ti,
        Vi = Ya(""),
        Wi = null,
        Xi = null,
        Yi = "https://www.googletagmanager.com/a?id=" + vf.N + "&cv=280",
        Zi = {},
        $i = {},
        aj = function() {
            var a = U.sequence || 1;
            U.sequence = a + 1;
            return a
        };
    vf.th = "";
    var bj = "";
    vf.Xj = bj;
    var cj = {},
        dj = new Qa,
        ej = {},
        fj = {},
        ij = {
            name: "dataLayer",
            set: function(a, b) {
                P(kb(a, b), ej);
                gj()
            },
            get: function(a) {
                return hj(a, 2)
            },
            reset: function() {
                dj = new Qa;
                ej = {};
                gj()
            }
        },
        hj = function(a, b) {
            return 2 != b ? dj.get(a) : jj(a)
        },
        jj = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = ej, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== La(b, d)) return
            }
            return d
        },
        kj = function(a, b) {
            fj.hasOwnProperty(a) || (dj.set(a, b), P(kb(a, b), ej), gj())
        },
        lj = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist",
                    "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = hj(c, 1);
                if (Ja(d) || Jc(d)) d = P(d);
                fj[c] = d
            }
        },
        gj = function(a) {
            Sa(fj, function(b, c) {
                dj.set(b, c);
                P(kb(b, void 0), ej);
                P(kb(b, c), ej);
                a && delete fj[b]
            })
        },
        nj = function(a, b, c) {
            cj[a] = cj[a] || {};
            cj[a][b] = mj(b, c)
        },
        mj = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? jj(a) : dj.get(a);
            "array" === Hc(d) || "object" === Hc(d) ? c = P(d) : c = d;
            return c
        },
        oj = function(a, b) {
            if (cj[a]) return cj[a][b]
        },
        pj = function(a, b) {
            cj[a] && delete cj[a][b]
        };
    var qj = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var l = g[h].trim();
                        if (l) {
                            if (0 === l.indexOf("dataLayer.")) f = hj(l.substring(10));
                            else {
                                var n = l.split(".");
                                f = A[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && vh) {
                    var q = wh(e);
                    q && 0 < q.length && (f = nc(q[0]) || $a(q[0].value))
                }
                f && (a[b] = f)
            }
        },
        rj = function(a) {
            if (a) {
                var b = {};
                qj(b, "email",
                    a.email);
                qj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    qj(e, "first_name", c[d].first_name);
                    qj(e, "last_name", c[d].last_name);
                    qj(e, "street", c[d].street);
                    qj(e, "city", c[d].city);
                    qj(e, "region", c[d].region);
                    qj(e, "country", c[d].country);
                    qj(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        sj = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return rj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = hi({
                                Nd: !1,
                                Od: !1,
                                Dc: c.exclude_element_selectors,
                                kb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    yg: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.ma;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        tj = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : A.enhanced_conversion_data;
                case "automatic":
                    return rj(a[R.Tf])
            }
        };
    var uj = {},
        vj = function(a, b) {
            if (A._gtmexpgrp && A._gtmexpgrp.hasOwnProperty(a)) return A._gtmexpgrp[a];
            void 0 === uj[a] && (uj[a] = Math.floor(Math.random() * b));
            return uj[a]
        };

    function wj(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };

    function xj(a) {
        return "null" !== a.origin
    };
    var Aj = function(a, b, c, d) {
            return yj(d) ? wj(a, String(b || zj()), c) : []
        },
        Dj = function(a, b, c, d, e) {
            if (yj(e)) {
                var f = Bj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Cj(f, function(g) {
                        return g.Fd
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Cj(f, function(g) {
                        return g.Oc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ej(a, b, c, d) {
        var e = zj(),
            f = window;
        xj(f) && (f.document.cookie = a);
        var g = zj();
        return e != g || void 0 != c && 0 <= Aj(b, g, !1, d).indexOf(c)
    }
    var Ij = function(a, b, c, d) {
            function e(w, z, x) {
                if (null == x) return delete h[z], w;
                h[z] = x;
                return w + "; " + z + "=" + x
            }

            function f(w, z) {
                if (null == z) return delete h[z], w;
                h[z] = !0;
                return w + "; " + z
            }
            if (!yj(c.Ya)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Fj(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.nj);
            g = e(g, "samesite",
                c.Dj);
            c.Fj && (g = f(g, "secure"));
            var n = c.domain;
            if ("auto" === n) {
                for (var p = Gj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                    var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Hj(t, c.path) && Ej(v, a, b, c.Ya)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Hj(n, c.path) ? 1 : Ej(g, a, b, c.Ya) ? 0 : 1
        },
        Jj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Ij(a, b, c)
        };

    function Cj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Bj(a, b, c) {
        for (var d = [], e = Aj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    Fd: 1 * l[0] || 1,
                    Oc: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Fj = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Kj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Lj = /(^|\.)doubleclick\.net$/i,
        Hj = function(a, b) {
            return Lj.test(window.document.location.hostname) || "/" === b && Kj.test(a)
        },
        zj = function() {
            return xj(window) ? window.document.cookie : ""
        },
        Gj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Lj.test(e) || Kj.test(e) || a.push("none");
            return a
        },
        yj = function(a) {
            if (!Qg().g() || !a || !ah()) return !0;
            if (!$g(a)) return !1;
            var b = Yg(a);
            return null == b ? !0 : !!b
        };
    var Mj = function() {
            return [Math.round(2147483647 * Math.random()), Math.round(bb() / 1E3)].join(".")
        },
        Pj = function(a, b, c, d, e) {
            var f = Nj(b);
            return Dj(a, f, Oj(c), d, e)
        },
        Qj = function(a, b, c, d) {
            var e = "" + Nj(c),
                f = Oj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Nj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Oj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };

    function Rj(a, b, c) {
        var d, e = Number(null != a.yb ? a.yb : void 0);
        0 !== e && (d = new Date((b || bb()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var Sj = ["1"],
        Tj = {},
        Xj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Uj(a.prefix);
            if (!Tj[c] && !Vj(c, a.path, a.domain) && b) {
                var d = Uj(a.prefix),
                    e = Mj();
                if (0 === Wj(d, e, a)) {
                    var f = cc("google_tag_data", {});
                    f._gcl_au ? Lg("GTM", 57) : f._gcl_au = e
                }
                Vj(c, a.path, a.domain)
            }
        };

    function Wj(a, b, c) {
        var d = Qj(b, "1", c.domain, c.path),
            e = Rj(c);
        e.Ya = "ad_storage";
        return Jj(a, d, e)
    }

    function Vj(a, b, c) {
        var d = Pj(a, b, c, Sj, "ad_storage");
        d && (Tj[a] = d);
        return d
    }

    function Uj(a) {
        return (a || "_gcl") + "_au"
    };
    var Yj = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Bf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function Zj(a, b) {
        var c = Yj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Bf] || (d[c[e].Bf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    wa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Bf].push(g)
            }
        }
        return d
    };

    function ak() {
        for (var a = bk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function ck() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var bk, dk;

    function ek(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = dk[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        bk = bk || ck();
        dk = dk || ak();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var fk;
    var jk = function() {
            var a = gk,
                b = hk,
                c = ik(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                kc(I, "mousedown", d);
                kc(I, "keyup", d);
                kc(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        kk = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            ik().decorators.push(f)
        },
        lk = function(a, b, c) {
            for (var d = ik().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== I.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && eb(e, g.callback())
                }
            }
            return e
        },
        ik = function() {
            var a = cc("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var mk = /(.*?)\*(.*?)\*(.*)/,
        nk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ok = /^(?:www\.|m\.|amp\.)+/,
        pk = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function qk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var sk = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                        b.push(c);
                        var e = b,
                            f = e.push,
                            g, h = String(d);
                        bk = bk || ck();
                        dk = dk || ak();
                        for (var l = [], n = 0; n < h.length; n += 3) {
                            var p = n + 1 < h.length,
                                q = n + 2 < h.length,
                                r = h.charCodeAt(n),
                                u = p ? h.charCodeAt(n + 1) : 0,
                                t = q ? h.charCodeAt(n + 2) : 0,
                                v = r >> 2,
                                w = (r & 3) << 4 | u >> 4,
                                z = (u & 15) << 2 | t >> 6,
                                x = t & 63;
                            q || (x = 64, p || (z = 64));
                            l.push(bk[v], bk[w], bk[z], bk[x])
                        }
                        g = l.join("");
                        f.call(e, g)
                    }
                }
            var y = b.join("*");
            return ["1", rk(y),
                y
            ].join("*")
        },
        rk = function(a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = fk)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                    e[f] = g
                }
                d = e
            }
            fk = d;
            for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ fk[(l ^ c.charCodeAt(n)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        uk = function() {
            return function(a) {
                var b = Th(A.location.href),
                    c = b.search.replace("?", ""),
                    d = Oh(c, "_gl", !1, !0) || "";
                a.query = tk(d) || {};
                var e = Rh(b, "fragment").match(qk("_gl"));
                a.fragment = tk(e && e[3] || "") || {}
            }
        },
        vk = function(a) {
            var b = uk(),
                c = ik();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (eb(d, e.query), a && eb(d, e.fragment));
            return d
        },
        tk = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = mk.exec(d);
                            if (f) {
                                c = f;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var h = g[3],
                            l;
                        a: {
                            for (var n = g[2], p =
                                    0; p < b; ++p)
                                if (n === rk(h, p)) {
                                    l = !0;
                                    break a
                                }
                            l = !1
                        }
                        if (l) {
                            for (var q = {}, r = h ? h.split("*") : [], u = 0; u < r.length; u += 2) q[r[u]] = ek(r[u + 1]);
                            return q
                        }
                    }
                }
            } catch (t) {}
        };

    function wk(a, b, c, d) {
        function e(p) {
            var q = p,
                r = qk(a).exec(q),
                u = q;
            if (r) {
                var t = r[2],
                    v = r[4];
                u = r[1];
                v && (u = u + t + v)
            }
            p = u;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = pk.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function xk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = lk(b, 1, c),
            e = lk(b, 2, c),
            f = lk(b, 3, c);
        if (gb(d)) {
            var g = sk(d);
            c ? yk("_gl", g, a) : zk("_gl", g, a, !1)
        }
        if (!c && gb(e)) {
            var h = sk(e);
            zk("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        zk(n, p, q, void 0);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        yk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && wk(n, p, q, void 0)
            }
    }

    function zk(a, b, c, d) {
        if (c.href) {
            var e = wk(a, b, c.href, void 0 === d ? !1 : d);
            Hb.test(e) && (c.href = e)
        }
    }

    function yk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = wk(a, b, c.action);
                Hb.test(n) && (c.action = n)
            }
        }
    }
    var gk = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    "http:" !== f && "https:" !== f || xk(e, e.hostname)
                }
            } catch (g) {}
        },
        hk = function(a) {
            try {
                if (a.action) {
                    var b = Rh(Th(a.action), "host");
                    xk(a, b)
                }
            } catch (c) {}
        },
        Ak = function(a, b, c, d) {
            jk();
            kk(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Bk = function(a, b) {
            jk();
            kk(a, [Qh(A.location, "host", !0)], b, !0, !0)
        },
        Ck = function() {
            var a = I.location.hostname,
                b = nk.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(ok, ""),
                l = e.replace(ok, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length, h.length) === p
            }
            return n
        },
        Gk = function(a, b) {
            return !1 === a ? !1 : a || b || Ck()
        };
    var Hk = {};
    var Ik = /^\w+$/,
        Jk = /^[\w-]+$/,
        Kk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Lk = function() {
            if (!Qg().g() || !ah()) return !0;
            var a = Yg("ad_storage");
            return null == a ? !0 : !!a
        },
        Mk = function(a, b) {
            $g("ad_storage") ? Lk() ? a() : fh(a, "ad_storage") : b ? Lg("TAGGING", 3) : eh(function() {
                Mk(a, !0)
            }, ["ad_storage"])
        },
        Ok = function(a) {
            return Nk(a).map(function(b) {
                return b.wa
            })
        },
        Nk = function(a) {
            var b = [];
            if (!xj(A) || !I.cookie) return b;
            var c = Aj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Yc: d.Yc
                }, e++) {
                var f = Pk(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Yc = g.wa;
                    var l = g.timestamp,
                        n = g.labels,
                        p = Ma(b, function(q) {
                            return function(r) {
                                return r.wa === q.Yc
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = Qk(p.labels, n || [])) : b.push({
                        version: h,
                        wa: d.Yc,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Rk(b)
        };

    function Qk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Sk(a) {
        return a && "string" == typeof a && a.match(Ik) ? a : "_gcl"
    }
    var Uk = function() {
            var a = Th(A.location.href),
                b = Rh(a, "query", !1, void 0, "gclid"),
                c = Rh(a, "query", !1, void 0, "gclsrc"),
                d = Rh(a, "query", !1, void 0, "wbraid"),
                e = Rh(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Oh(f, "gclid", !1, void 0);
                c = c || Oh(f, "gclsrc", !1, void 0);
                d = d || Oh(f, "wbraid", !1, void 0)
            }
            return Tk(b, c, e, d)
        },
        Tk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Jk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(Jk)) switch (b) {
                case void 0:
                    f(a, "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Wk = function(a) {
            var b = Uk();
            Mk(function() {
                Vk(b, !1, a)
            })
        };

    function Vk(a, b, c, d, e) {
        function f(w, z) {
            var x = Xk(w, g);
            x && (Jj(x, z, h), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Sk(c.prefix);
        d = d || bb();
        var h = Rj(c, d, !0);
        h.Ya = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var z = ["GCL", n, w];
                0 < e.length && z.push(e.join("."));
                return z.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Hk.enable_gbraid_cookie_write ? 0 : Hk.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0],
                r = Xk("gb",
                    g),
                u = !1;
            if (!b)
                for (var t = Nk(r), v = 0; v < t.length; v++) t[v].wa === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Zk = function(a, b) {
            var c = vk(!0);
            Mk(function() {
                for (var d = Sk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Kk[f]) {
                        var g = Xk(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(Yk(h), bb()),
                                n;
                            b: {
                                var p = l;
                                if (xj(A))
                                    for (var q = Aj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (Yk(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Rj(b, l, !0);
                                u.Ya = "ad_storage";
                                Jj(g, h, u)
                            }
                        }
                    }
                }
                Vk(Tk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Xk = function(a, b) {
            var c = Kk[a];
            if (void 0 !== c) return b + c
        },
        Yk = function(a) {
            return 0 !== $k(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Pk(a) {
        var b = $k(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            wa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function $k(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Jk.test(a[2]) ? [] : a
    }
    var al = function(a, b, c, d, e) {
            if (Ja(b) && xj(A)) {
                var f = Sk(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = Xk(a[l], f);
                            if (n) {
                                var p = Aj(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Mk(function() {
                    Ak(g, b, c, d)
                })
            }
        },
        Rk = function(a) {
            return a.filter(function(b) {
                return Jk.test(b.wa)
            })
        },
        bl = function(a, b) {
            if (xj(A)) {
                for (var c = Sk(b.prefix), d = {}, e = 0; e < a.length; e++) Kk[a[e]] && (d[a[e]] = Kk[a[e]]);
                Mk(function() {
                    Sa(d, function(f, g) {
                        var h = Aj(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            t) {
                            return Yk(t) - Yk(u)
                        });
                        if (h.length) {
                            var l = h[0],
                                n = Yk(l),
                                p = 0 !== $k(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== $k(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            Vk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function cl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var dl = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (ah()) {
            var c = Uk();
            if (cl(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Bk(function() {
                    return d
                }, 3);
                Bk(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function el(a, b) {
        var c = Sk(b),
            d = Xk(a, c);
        if (!d) return 0;
        for (var e = Nk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function fl(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var gl = /^\d+\.fls\.doubleclick\.net$/;

    function hl(a, b) {
        $g(R.D) ? lh(R.D) ? a() : fh(a, R.D) : b ? Ng(42) : qh(function() {
            hl(a, !0)
        }, [R.D])
    }

    function il(a) {
        var b = Th(A.location.href),
            c = Rh(b, "host", !1);
        if (c && c.match(gl)) {
            var d = Rh(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function jl(a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
            var d = il("gcl" + a);
            if (d) return d.split(".")
        }
        var e = Sk(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !lh(R.D) && c,
                g;
            g = Uk()[a] || [];
            if (0 < g.length) return f ? ["0"] : g
        }
        var h = Xk(a, e);
        return h ? Ok(h) : []
    }
    var kl = function(a, b) {
            return jl("aw", a, b)
        },
        ll = function(a, b) {
            return jl("dc", a, b)
        };

    function ml(a) {
        var b = [];
        Sa(a, function(c, d) {
            d = Rk(d);
            for (var e = [], f = 0; f < d.length; f++) e.push(d[f].wa);
            e.length && b.push(c + ":" + e.join(","))
        });
        return b.join(";")
    }
    var nl = function(a) {
            var b = il("gac");
            return b ? !lh(R.D) && a ? "0" : decodeURIComponent(b) : ml(Lk() ? Zj() : {})
        },
        ol = function(a) {
            var b = il("gacgb");
            return b ? !lh(R.D) && a ? "0" : decodeURIComponent(b) : ml(Lk() ? Zj("_gac_gb", !0) : {})
        },
        pl = function(a, b) {
            var c = Uk(),
                d = [],
                e = c.gclid,
                f = c.dclid,
                g = c.gclsrc || "aw";
            !e || "aw.ds" !== g && "aw" !== g && "ds" !== g || d.push({
                wa: e,
                Ze: g
            });
            f && d.push({
                wa: f,
                Ze: "ds"
            });
            hl(function() {
                Xj(b);
                var h = Tj[Uj(b.prefix)],
                    l = !1;
                if (h && 0 < d.length)
                    for (var n = U.joined_auid = U.joined_auid || {}, p = 0; p < d.length; p++) {
                        var q = d[p],
                            r = q.wa,
                            u = q.Ze,
                            t = (b.prefix || "_gcl") + "." + u + "." + r;
                        if (!n[t]) {
                            var v = "https://adservice.google.com/pagead/regclk";
                            v = "gb" === u ? v + "?gbraid=" + r + "&auid=" + h : v + "?gclid=" + r + "&auid=" + h + "&gclsrc=" + u;
                            sc(v);
                            l = n[t] = !0
                        }
                    }
                null == a && (a = l);
                var w = !0;
                w = !1;
                if (w && a && h) {
                    var z = Uj(b.prefix),
                        x = Tj[z];
                    x && Wj(z, x, b)
                }
            })
        },
        ql = function(a) {
            var b;
            if (il("gclaw") || il("gac") || 0 < (Uk().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (Uk().gb || []).length) c = !0;
                else {
                    var d = Math.max(el("aw", a), fl(Lk() ? Zj() : {}));
                    c = Math.max(el("gb", a), fl(Lk() ? Zj("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };

    function rl(a) {
        var b = Zb && Zb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var sl = /[A-Z]+/,
        tl = /\s/,
        ul = function(a) {
            if (m(a) && (a = $a(a), !tl.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (sl.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            O: d
                        }
                    }
                }
            }
        },
        wl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = ul(a[c]);
                d && (b[d.id] = d)
            }
            vl(b);
            var e = [];
            Sa(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function vl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var xl = function() {
        var a = !1;
        return a
    };
    var zl = function(a, b, c, d) {
            return (2 === yl() || d || "http:" != A.location.protocol ? a : b) + c
        },
        yl = function() {
            var a = hc(),
                b;
            if (1 === a) a: {
                var c = Ui;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var l = g[h].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Ll = function(a, b) {
        var c = a ? tj(a) : A.enhanced_conversion_data,
            d = (a || {}).enhanced_conversions_mode;
        if (A.Promise) try {
            return c ? Ci(c, b).then(function(e) {
                e.Qe = d;
                return e
            }) : Promise.resolve({
                Nc: "",
                Bc: [],
                Qe: d
            })
        } catch (e) {}
    };

    function Ml(a) {
        if (lh(R.D)) return a;
        a = a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = Uh(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        a = a.replace(/&ref=([^&#]+)/, function(b, c) {
            var d = Uh(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        });
        return a
    }

    function Nl() {
        if (Vi || !0 !== A._gtmdgs && !rl("11")) return -1;
        var a = Va('1');
        return vj(1, 100) < a ? vj(2, 2) : -1
    }

    function Ol(a) {
        var b;
        if (!a || !a.length) return;
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && e.estimated_delivery_date ? c.push("" + e.estimated_delivery_date) : c.push("")
        }
        b = c.join(",");
        return b
    }

    function Pl() {
        var a = !1;
        return a
    }
    var Ql = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Rl = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Sl = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Tl = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Ul = function() {
            var a = !1;
            return a
        },
        Wl = function(a) {
            var b = hj("gtm.allowlist") || hj("gtm.whitelist");
            b && Ng(9);
            Ul() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && hb(Za(b), Rl),
                d = hj("gtm.blocklist") ||
                hj("gtm.blacklist");
            d || (d = hj("tagTypeBlacklist")) && Ng(3);
            d ? Ng(8) : d = [];
            Vl() && (d = Za(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= La(Za(d), "google") && Ng(2);
            var e = d && hb(Za(d), Sl),
                f = {};
            return function(g) {
                var h = g && g[pe.sb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = $i[h] || [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p =
                        n) a: {
                        if (0 > La(c, h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > La(c, l[q])) {
                                        Ng(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= La(e, h);
                    if (u) r = u;
                    else {
                        var t = Ra(e, l || []);
                        t && Ng(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= La(l, "sandboxedScripts")) || c && -1 !== La(c, "sandboxedScripts") || (v = Ra(e, Tl));
                return f[h] = v
            }
        },
        Vl = function() {
            return Ql.test(A.location && A.location.hostname)
        };
    var Xl = !1,
        Yl = 0,
        Zl = [];

    function $l(a) {
        if (!Xl) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Xl = !0;
                for (var e = 0; e < Zl.length; e++) J(Zl[e])
            }
            Zl.push = function() {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function am() {
        if (!Xl && 140 > Yl) {
            Yl++;
            try {
                I.documentElement.doScroll("left"), $l()
            } catch (a) {
                A.setTimeout(am, 50)
            }
        }
    }
    var bm = function(a) {
        Xl ? a() : Zl.push(a)
    };
    var dm = function(a, b) {
            this.g = !1;
            this.F = [];
            this.H = {
                tags: []
            };
            this.P = !1;
            this.s = this.B = 0;
            cm(this, a, b)
        },
        em = function(a, b, c, d) {
            if (Ri.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Jc(d) && (e = P(d, e));
            e.id = c;
            e.status = "timeout";
            return a.H.tags.push(e) - 1
        },
        fm = function(a, b, c, d) {
            var e = a.H.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        gm = function(a) {
            if (!a.g) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.F.length = 0
            }
        },
        cm = function(a, b, c) {
            Ha(b) && a.yc(b);
            c && A.setTimeout(function() {
                return gm(a)
            }, Number(c))
        };
    dm.prototype.yc = function(a) {
        var b = this,
            c = db(function() {
                return J(function() {
                    a(vf.N, b.H)
                })
            });
        this.g ? c() : this.F.push(c)
    };
    var hm = function(a) {
        a.B++;
        return db(function() {
            a.s++;
            a.P && a.s >= a.B && gm(a)
        })
    };
    var im = function() {
            function a(d) {
                return !Ia(d) || 0 > d ? 0 : d
            }
            if (!U._li && A.performance && A.performance.timing) {
                var b = A.performance.timing.navigationStart,
                    c = Ia(ij.get("gtm.start")) ? ij.get("gtm.start") : 0;
                U._li = {
                    cst: a(c - b),
                    cbt: a(Xi - b)
                }
            }
        },
        jm = function(a) {
            A.performance && A.performance.mark(vf.N + "_" + a + "_start")
        },
        km = function(a) {
            if (A.performance) {
                var b = vf.N + "_" + a + "_start",
                    c = vf.N + "_" + a + "_duration";
                A.performance.measure(c, b);
                var d = A.performance.getEntriesByName(c)[0];
                A.performance.clearMarks(b);
                A.performance.clearMeasures(c);
                var e = U._p || {};
                void 0 === e[a] && (e[a] = d.duration, U._p = e);
                return d.duration
            }
        },
        lm = function() {
            if (A.performance && A.performance.now) {
                var a = U._p || {};
                a.PAGEVIEW = A.performance.now();
                U._p = a
            }
        };
    var mm = {},
        nm = function() {
            return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
        },
        om = !1;
    var pm = function(a) {
            A.GoogleAnalyticsObject || (A.GoogleAnalyticsObject = a || "ga");
            var b = A.GoogleAnalyticsObject;
            if (A[b]) A.hasOwnProperty(b) || Ng(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(ab());
                A[b] = c
            }
            im();
            return A[b]
        },
        qm = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = nm();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        },
        rm = function(a) {
            if (!ah()) return;
            var b = nm();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function sm() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var tm = function(a) {},
        um = function(a, b) {
            return function() {
                var c = nm(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Bm = function(a) {},
        Fm = function(a) {},
        Gm =
        function() {
            return "&tc=" + Ye.filter(function(a) {
                return a
            }).length
        },
        Jm = function() {
            2022 <= Hm().length && Im()
        },
        Km = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Mm = function() {
            Lm || (Lm = A.setTimeout(Im, 500))
        },
        Im = function() {
            Lm && (A.clearTimeout(Lm), Lm = void 0);
            void 0 === Nm || Om[Nm] && !Pm && !Qm || (Rm[Nm] || Sm.dj() || 0 >= Tm-- ? (Ng(1), Rm[Nm] = !0) : (Sm.zj(), jc(Hm(!0)), Om[Nm] = !0, Um = Vm = Wm = Qm = Pm = ""))
        },
        Hm = function(a) {
            var b = Nm;
            if (void 0 === b) return "";
            var c = Mg("GTM"),
                d = Mg("TAGGING");
            return [Xm, Om[b] ? "" : "&es=1",
                Ym[b], Bm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", Gm(), Pm, Qm, Wm, Vm, Fm(a), Um, "&z=0"
            ].join("")
        },
        $m = function() {
            Xm = Zm()
        },
        Zm = function() {
            return [Yi, "&v=3&t=t", "&pid=" + Oa(), "&rv=" + vf.wd].join("")
        },
        Em = ["L", "S", "Y"],
        Am = ["S", "E"],
        an = {
            sampleRate: "0.005000",
            mh: "",
            lh: Number("5")
        },
        bn = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        cn;
    if (!(cn = bn)) {
        var dn = Math.random(),
            en = an.sampleRate;
        cn = dn < en
    }
    var fn = cn,
        gn = {
            label: vf.N + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Xm = Zm(),
        Om = {},
        Pm = "",
        Qm = "",
        Um = "",
        Vm = "",
        Dm = {},
        Cm = !1,
        zm = {},
        hn = {},
        Wm = "",
        Nm = void 0,
        Ym = {},
        Rm = {},
        Lm = void 0,
        jn = 5;
    0 < an.lh && (jn = an.lh);
    var Sm = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                dj: function() {
                    return c < a ? !1 : bb() - d[c % a] < b
                },
                zj: function() {
                    var f = c++ % a;
                    d[f] = bb()
                }
            }
        }(jn, 1E3),
        Tm = 1E3,
        ln = function(a, b) {
            if (fn && !Rm[a] && Nm !==
                a) {
                Im();
                Nm = a;
                Um = Pm = "";
                Ym[a] = "&e=" + Km(b) + "&eid=" + a;
                Mm();
            }
        },
        mn = function(a, b, c, d) {
            if (fn && b) {
                var e, f = String(b[pe.sb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Rm[a]) {
                    a !== Nm && (Im(), Nm = a);
                    Pm = Pm ? Pm + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var l = ($e[h] ? "1" : "2") + e;
                    Um = Um ? Um + "." + l : "&ti=" + l;
                    Mm();
                    Jm()
                }
            }
        };
    var tn = function(a, b, c) {
            if (fn && !Rm[a]) {
                a !== Nm && (Im(), Nm = a);
                var d = c + b;
                Qm = Qm ? Qm + "." + d : "&epr=" + d;
                Mm();
                Jm()
            }
        },
        un = function(a, b, c) {};
    var vn = {
            active: !0,
            isAllowed: function() {
                return !0
            }
        },
        wn = function(a) {
            var b = U.zones;
            return b ? b.checkState(vf.N, a) : vn
        },
        xn = function(a) {
            var b = U.zones;
            !b && a && (b = U.zones = a());
            return b
        };

    function yn() {}

    function zn() {};

    function An(a, b, c, d) {
        var e = Ye[a],
            f = Bn(a, b, c, d);
        if (!f) return null;
        var g = ff(e[pe.mg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = An(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Kg ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Bn(a, b, c, d) {
        function e() {
            if (f[pe.oi]) h();
            else {
                var w = gf(f, c, []);
                var z = w[pe.sh];
                if (null != z)
                    for (var x = 0; x < z.length; x++)
                        if (!lh(z[x])) {
                            h();
                            return
                        }
                var y = em(c.jb, String(f[pe.sb]), Number(f[pe.og]), w[pe.ri]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = bb() - C;
                        mn(c.id, Ye[a], "5", E);
                        fm(c.jb, y, "success",
                            E);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = bb() - C;
                        mn(c.id, Ye[a], "6", E);
                        fm(c.jb, y, "failure", E);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                mn(c.id, f, "1");
                var D = function() {
                    var E = bb() - C;
                    mn(c.id, f, "7", E);
                    fm(c.jb, y, "exception", E);
                    B || (B = !0, h())
                };
                var C = bb();
                try {
                    ef(w, c)
                } catch (E) {
                    D(E)
                }
            }
        }
        var f = Ye[a],
            g = b.onSuccess,
            h = b.onFailure,
            l = b.terminate;
        if (c.ff(f)) return null;
        var n = ff(f[pe.pg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = An(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.Kg ? l : q
        }
        if (f[pe.ig] || f[pe.ui]) {
            var r = f[pe.ig] ? Ze :
                c.Jj,
                u = g,
                t = h;
            if (!r[a]) {
                e = db(e);
                var v = Cn(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function Cn(a, b, c) {
        var d = [],
            e = [];
        b[a] = Dn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = En;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Fn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Dn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function En(a) {
        a()
    }

    function Fn(a, b) {
        b()
    };
    var In = function(a, b) {
        for (var c = [], d = 0; d < Ye.length; d++)
            if (a[d]) {
                var e = Ye[d];
                var f = hm(b.jb);
                try {
                    var g = An(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            l = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = $e[p];
                        l.call(h, {
                            gh: n,
                            Yg: q ? q.priorityOverride || 0 : 0,
                            Ub: g
                        })
                    } else Gn(d, b), f()
                } catch (t) {
                    f()
                }
            }
        var r = b.jb;
        r.P = !0;
        r.s >= r.B && gm(r);
        c.sort(Hn);
        for (var u = 0; u < c.length; u++) c[u].Ub();
        return 0 < c.length
    };

    function Hn(a, b) {
        var c, d = b.Yg,
            e = a.Yg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.gh,
                h = b.gh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Gn(a, b) {
        if (!fn) return;
        var c = function(d) {
            var e = b.ff(Ye[d]) ? "3" : "4",
                f = ff(Ye[d][pe.mg], b, []);
            f && f.length && c(f[0].index);
            mn(b.id, Ye[d], e);
            var g = ff(Ye[d][pe.pg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Jn = !1,
        Pn = function(a) {
            var b = bb(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Jn) return !1;
                Jn = !0;
            }
            var g = wn(c),
                h = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                h = !0;
                g = wn(Number.MAX_SAFE_INTEGER)
            }
            ln(c, d);
            var l = a.eventCallback,
                n = a.eventTimeout,
                p = l;
            var q = {
                id: c,
                name: d,
                ff: Wl(g.isAllowed),
                Jj: [],
                Ug: function() {
                    Ng(6)
                },
                Cg: Kn(c),
                jb: new dm(p, n)
            };
            q.Bg = Ln();
            Mn(c, q.jb);
            var r = qf(q);
            h && (r = Nn(r));
            var u = In(r, q);
            "gtm.js" !== d && "gtm.sync" !== d || tm(vf.N);
            switch (d) {
                case "gtm.init":
                    u && Ng(20)
            }
            return On(r, u)
        };

    function Kn(a) {
        return function(b) {
            fn && (Nc(b) || un(a, "input", b))
        }
    }

    function Mn(a, b) {
        nj(a, "event", 1);
        nj(a, "ecommerce", 1);
        nj(a, "gtm");
        nj(a, "eventModel");
    }

    function Ln() {
        var a = {};
        a.event = mj("event", 1);
        a.ecommerce = mj("ecommerce", 1);
        a.gtm = mj("gtm");
        a.eventModel = mj("eventModel");
        return a
    }

    function Nn(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Qi[String(Ye[c][pe.sb])] && (b[c] = !0);
        return b
    }

    function On(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ye[c] && !Ri[String(Ye[c][pe.sb])]) return !0;
        return !1
    }

    function Qn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Th("" + c + b).href
        }
    }

    function Rn(a, b) {
        return Sn() ? Qn(a, b) : void 0
    }

    function Sn() {
        var a = !1;
        return a
    };
    var Tn;
    if (3 === vf.wd.length) Tn = "g";
    else {
        var Un = "G";
        Tn = Un
    }
    var Vn = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Tn,
            OPT: "o"
        },
        Wn = function(a) {
            var b = vf.N.split("-"),
                c = b[0].toUpperCase(),
                d = Vn[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === vf.wd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + vf.wd + e
        };

    function Xn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Yn = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };
    var Zn = function() {
        return Ob("iPhone") && !Ob("iPod") && !Ob("iPad")
    };
    Ob("Opera");
    Ob("Trident") || Ob("MSIE");
    Ob("Edge");
    !Ob("Gecko") || -1 != Ib.toLowerCase().indexOf("webkit") && !Ob("Edge") || Ob("Trident") || Ob("MSIE") || Ob("Edge"); - 1 != Ib.toLowerCase().indexOf("webkit") && !Ob("Edge") && Ob("Mobile");
    Ob("Macintosh");
    Ob("Windows");
    Ob("Linux") || Ob("CrOS");
    var $n = ra.navigator || null;
    $n && ($n.appVersion || "").indexOf("X11");
    Ob("Android");
    Zn();
    Ob("iPad");
    Ob("iPod");
    Zn() || Ob("iPad") || Ob("iPod");
    Ib.toLowerCase().indexOf("kaios");
    var ao = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b])
                } catch (h) {
                    e = !1
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f)) break
            }
            return null
        },
        bo = function(a) {
            var b = I;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c = document.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c
        };
    var co = function() {};
    var eo = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        fo = function(a, b) {
            this.s = a;
            this.g = null;
            this.F = {};
            this.P = 0;
            this.H = void 0 === b ? 500 : b;
            this.B = null
        };
    pa(fo, co);
    var ho = function(a) {
        return "function" === typeof a.s.__tcfapi || null != go(a)
    };
    fo.prototype.addEventListener = function(a) {
        var b = {},
            c = Wb(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.H && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.H));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = eo(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            io(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    fo.prototype.removeEventListener = function(a) {
        a && a.listenerId && io(this, "removeEventListener", null, a.listenerId)
    };
    var ko = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = jo(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && ("DE" === a.publisherCC || "CH" === a.publisherCC) ? !0 : n && jo(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === h ? a.purpose &&
                a.vendor ? jo(a.purpose.legitimateInterests, b) && jo(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        jo = function(a, b) {
            return !(!a || !a[b])
        },
        io = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (go(a)) {
                lo(a);
                var f = ++a.P;
                a.F[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        go = function(a) {
            if (a.g) return a.g;
            a.g = ao(a.s, "__tcfapiLocator");
            return a.g
        },
        lo = function(a) {
            a.B ||
                (a.B = function(b) {
                    try {
                        var c;
                        c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                        a.F[c.callId](c.returnValue, c.success)
                    } catch (d) {}
                }, Yn(a.s, a.B))
        };
    var mo = !0;
    mo = !1;
    var no = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        oo = Xn("", 550),
        po = Xn("", 500);

    function qo() {
        var a = U.tcf || {};
        return U.tcf = a
    }
    var ro = function(a, b) {
            this.B = a;
            this.g = b;
            this.s = bb();
        },
        so = function(a) {},
        to = function(a) {},
        zo = function() {
            var a = qo(),
                b = new fo(A, mo ? 3E3 : -1),
                c = new ro(b, a);
            if ((uo() ? !0 === A.gtag_enable_tcf_support : !1 !== A.gtag_enable_tcf_support) && !a.active && ("function" === typeof A.__tcfapi || ho(b))) {
                a.active = !0;
                a.Rc = {};
                vo();
                var d = null;
                mo ? d = A.setTimeout(function() {
                    wo(a);
                    xo(a);
                    d = null
                }, po) : a.tcString = "tcunavailable";
                try {
                    b.addEventListener(function(e) {
                        d && (clearTimeout(d), d = null);
                        if (0 !== e.internalErrorState) wo(a), xo(a), so(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) f = yo(), b.removeEventListener(e);
                            else if ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus || "cmpuishown" === e.eventStatus) {
                                var g = {},
                                    h;
                                for (h in no)
                                    if (no.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var l = e,
                                                n = !0;
                                            n = void 0 === n ? !1 : n;
                                            var p;
                                            var q = l;
                                            !1 === q.gdprApplies ? p = !0 : (void 0 === q.internalErrorState && (q.internalErrorState = eo(q)), p = "error" === q.cmpStatus || 0 !== q.internalErrorState || "loaded" === q.cmpStatus && ("tcloaded" === q.eventStatus || "useractioncomplete" ===
                                                q.eventStatus) ? !0 : !1);
                                            g["1"] = p ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : ko(l, "1", 0) : !1
                                        } else g[h] = ko(e, h, no[h]);
                                f = g
                            }
                            f && (a.tcString = e.tcString || "tcempty", a.Rc = f, xo(a), so(c))
                        }
                    }), to(c)
                } catch (e) {
                    d && (clearTimeout(d), d = null), wo(a), xo(a)
                }
            }
        };

    function wo(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        mo && (a.Rc = yo())
    }

    function vo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = oo, a);
        ih(b)
    }
    var uo = function() {
        var a = !1;
        a = !0;
        return a
    };

    function yo() {
        var a = {},
            b;
        for (b in no) no.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function xo(a) {
        var b = {},
            c = (b.ad_storage = a.Rc["1"] ? "granted" : "denied", b);
        Ao();
        kh(c, 0)
    }
    var Bo = function() {
            var a = qo();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
        },
        Ao = function() {
            var a = qo();
            return a.active ? a.tcString || "" : ""
        },
        Co = function() {
            var a = qo();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Do = function(a) {
            if (!no.hasOwnProperty(String(a))) return !0;
            var b = qo();
            return b.active && b.Rc ? !!b.Rc[String(a)] : !0
        };
    var Eo = !1;
    var Fo = !1;

    function Go(a) {
        var b = String(A.location).split(/[?#]/)[0],
            c = vf.uh || A._CONSENT_MODE_SALT,
            d;
        if (a) {
            var e;
            if (c) {
                var f = b + a + c,
                    g = 1,
                    h, l, n;
                if (f)
                    for (g = 0, l = f.length - 1; 0 <= l; l--) n = f.charCodeAt(l), g = (g << 6 & 268435455) + n + (n << 14), h = g & 266338304, g = 0 != h ? g ^ h >> 21 : g;
                e = String(g)
            } else e = "0";
            d = e
        } else d = "";
        return d
    }

    function Ho(a) {
        function b(t) {
            var v;
            U.reported_gclid || (U.reported_gclid = {});
            v = U.reported_gclid;
            var w;
            w = !g || ah() && !lh(R.D) ? l + (t ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
            if (!v[w]) {
                v[w] = !0;
                var z = [],
                    x = {},
                    y = function(L, M) {
                        M && (z.push(L + "=" + encodeURIComponent(M)), x[L] = !0)
                    },
                    B = "https://www.google.com";
                if (ah()) {
                    var D = lh(R.D);
                    y("gcs", mh());
                    t && y("gcu", "1");
                    bh() && y("gcd", nh());
                    U.dedupe_gclid || (U.dedupe_gclid = "" + Mj());
                    y("rnd", U.dedupe_gclid);
                    if ((!l || n && "aw.ds" !== n) && lh(R.D)) {
                        var C = Ok("_gcl_aw");
                        y("gclaw", C.join("."))
                    }
                    y("url", String(A.location).split(/[?#]/)[0]);
                    y("dclid", Io(d, p));
                    var E = !1;
                    E = !0;
                    D || !d && !E || (B = "https://pagead2.googlesyndication.com")
                }
                y("gdpr_consent", Ao()), y("gdpr", Co());
                "1" === vk(!1)._up && y("gtm_up", "1");
                y("gclid", Io(d, l));
                y("gclsrc", n);
                if (!(x.gclid || x.dclid || x.gclaw) && (y("gbraid", Io(d, q)), !x.gbraid && ah() && lh(R.D))) {
                    var F = Ok("_gcl_gb");
                    y("gclgb", F.join("."))
                }
                y("gtm", Wn(!e));
                g && lh(R.D) && (Xj(f || {}), y("auid", Tj[Uj(f.prefix)] || ""));
                Eo || a.Ed && y("did", a.Ed), Fo && (a.Vb && y("gdid", a.Vb), a.Tb && y("edid", a.Tb));
                var O = B + "/pagead/landing?" + z.join("&");
                sc(O)
            }
        }
        var c = !!a.Re,
            d = !!a.xa,
            e = a.X,
            f = void 0 === a.Cd ? {} : a.Cd,
            g = void 0 === a.Md ? !0 : a.Md,
            h = Uk(),
            l = h.gclid || "",
            n = h.gclsrc,
            p = h.dclid || "",
            q = h.gbraid || "",
            r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q),
            u = ah();
        if (r || u) u ? qh(function() {
            b();
            lh(R.D) || ph(function(t) {
                return b(!0, t.Ji)
            }, R.D)
        }, [R.D]) : b()
    }

    function Io(a, b) {
        var c = a && !lh(R.D);
        return b && c ? "0" : b
    }
    var Jo = ["aw", "dc", "gb"];

    function Ko(a, b, c, d) {
        var e = a.kh,
            f = a.callback,
            g = a.Vg;
        if ("function" === typeof f)
            if (e === R.ce && void 0 === g) {
                var h = d(b.prefix, c);
                0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
            } else e === R.Jh ? (Ng(65), Xj(b, !1), f(Tj[Uj(b.prefix)])) : f(g)
    }

    function Lo(a, b) {
        var c = a.Eg,
            d = a.Tg,
            e = a.ih;
        if (a.Sb) {
            var f = void 0 === c ? !0 : !!c;
            Gk(d[R.Mb], !!d[R.R]) && Zk(Jo, b);
            Wk(b);
            bl(Jo, b);
            pl(f, b)
        }
        d[R.R] && al(Jo, d[R.R], d[R.kc], !!d[R.Nb], b.prefix);
        e && dl(["aw", "dc", "gb"])
    };
    var Mo = !1;
    var No = function() {
            this.g = {}
        },
        Oo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        Po = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        Ro = function(a, b, c, d, e) {};
    var To = !1,
        Uo = Number("200");

    function Vo() {
        if (!A.Promise) return !1;
        Ha(I.interestCohort) || To || (To = !0, bo("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
        return Ha(I.interestCohort)
    }

    function Wo() {
        var a = U.floc;
        if (a) {
            var b = a.ts,
                c = a.floc;
            if (b && c && 1E3 > bb() - b) return Promise.resolve(c)
        }
        var d = void 0;
        try {
            d = Promise.race([I.interestCohort().then(function(e) {
                U.floc = {
                    ts: bb(),
                    floc: e
                };
                return e
            }), new Promise(function(e) {
                A.setTimeout(function() {
                    return e()
                }, Uo)
            })]).catch(function() {})
        } catch (e) {
            return
        }
        return d
    }
    var rp = function() {
            if (!lh(R.D) || !qp && !bo("AyAn/mFtBYa4Wyk+GnNjBOd+4bBUeWbwyAOxMR+8EnXgn06S1FFiyBquja0zc/37lDGh1P547ivAAKXoCT+9YAgAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ21hbmFnZXIuY29tOjQ0MyIsImZlYXR1cmUiOiJDb252ZXJzaW9uTWVhc3VyZW1lbnQiLCJleHBpcnkiOjE2MzE2NjM5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9")) return !1;
            qp = !0;
            if (uc("attribution-reporting") || uc("conversion-measurement")) return !0;
            return !1
        },
        sp = function(a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        tp = function(a, b) {
            var c;
            if (2 === b.Ca) return a("ord", Oa(1E11, 1E13)), !0;
            if (3 === b.Ca) return a("ord", "1"), a("num", Oa(1E11, 1E13)), !0;
            if (4 === b.Ca) return sp(b.sessionId) &&
                a("ord", b.sessionId), !0;
            if (5 === b.Ca) c = "1";
            else if (6 === b.Ca) c = b.wf;
            else return !1;
            sp(c) && a("qty", c);
            sp(b.Dd) && a("cost", b.Dd);
            sp(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        yp = function(a, b, c) {
            function d(K, S, ia) {
                v.hasOwnProperty(K) || (S = String(S), t.push(";" + K + "=" + (ia ? S : up(S))))
            }

            function e(K, S) {
                S && d(K, S)
            }

            function f() {
                if (sp(a.Pd)) {
                    var K = a.Pd || "";
                    q || n || !a.xa || (K = Uh(K));
                    d("~oref", K)
                }
                var S = l + t.join("") + "?";
                h ? ic(S, a.onSuccess) : jc(S, a.onSuccess,
                    a.onFailure);
                L && jc("https://" + g + ".fls.doubleclick.net/activityi;register_conversion=1" + t.join("") + "?");
            }
            var g = a.Xe,
                h = a.zf,
                l = a.protocol,
                n = a.bf,
                p = [],
                q = lh(R.D);
            l += h ? "//" + g + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            var r = ";",
                u = !1;
            u = !0;
            lh(R.D) ||
                n || !a.xa && !u || (l = "https://ade.googlesyndication.com/ddm/activity", r = "/", h = !1);
            var t = [r, "src=" + up(g), ";type=" + up(a.af), ";cat=" + up(a.wc)],
                v = a.Pi || {};
            Sa(v, function(K, S) {
                t.push(";" + up(K) + "=" + up(S + ""))
            });
            if (tp(d, a)) {
                sp(a.Xd) && d("u", a.Xd);
                sp(a.Wd) && d("tran", a.Wd);
                d("gtm", Wn());
                ah() && !n && (d("gcs", mh()), c && d("gcu", "1"));
                e("gdpr_consent", Ao()), e("gdpr", Co());
                "1" === vk(!1)._up && d("gtm_up", "1");
                !1 === a.Bi && d("npa", "1");
                if (a.Sb) {
                    var w =
                        void 0 === a.xa ? !0 : !!a.xa,
                        z = ll(a.ja, w),
                        x = !1;
                    z && z.length && (d("gcldc", z.join(".")), x = !0);
                    var y = !0;
                    y = h;
                    if (y) {
                        var B = "_gcl" !== Sk(a.ja);
                        if (vp && !x && ql(a.ja)) {
                            var D = jl("gb", a.ja, w);
                            D.length && d("gclgb", D.join("."));
                            if (!B || !wp) {
                                var C = ol(w);
                                C && d("gacgb", C)
                            }
                        } else {
                            var E = kl(a.ja, w);
                            E && E.length && (d("gclaw", E.join(".")), Ng(59));
                            var F = nl(w);
                            F && (B ? (Ng(60), wp || d("gac", F)) : d("gac", F))
                        }
                    }
                    Xj({
                        prefix: a.ja,
                        yb: a.Ni,
                        domain: a.Mi,
                        flags: a.$j
                    });
                    var O = Tj[Uj(a.ja)];
                    O && d("auiddc", O)
                }
                sp(a.sf) && d("prd", a.sf, !0);
                Sa(a.Df, function(K, S) {
                    d(K, S)
                });
                t.push(b || "");
                xp && (sp(a.Vb) && d("gdid", a.Vb), sp(a.Tb) && d("edid", a.Tb));
                var L = rp();
                L && t.push(";ps=1");
                var M = !1;
                if (M && a.ma) {
                    var ca = Ci(a.ma, []);
                    ca && (ca = ca.then(function(K) {
                        sp(K.Nc) && d("em", K.Nc, !0)
                    }), p.push(ca))
                }
                if (p.length) try {
                    Promise.all(p).then(function() {
                        f()
                    });
                    return
                } catch (K) {}
                f()
            } else J(a.onFailure)
        },
        vp = !1;
    vp = !0;
    var wp = !1;
    var xp = !1;
    var up = encodeURIComponent,
        qp = !1,
        zp = function(a, b) {
            !ah() || a.bf ? yp(a, b) : qh(function() {
                yp(a, b);
                lh(R.D) || ph(function() {
                    yp(a, b, !0)
                }, R.D)
            }, [R.D])
        };
    var Ap = function(a, b, c, d) {
            function e() {
                var f = {
                    config: a,
                    gtm: Wn()
                };
                c && (Xj(d), f.auiddc = Tj[Uj(d.prefix)]);
                b && (f.loadInsecure = b);
                void 0 === A.__dc_ns_processor && (A.__dc_ns_processor = []);
                A.__dc_ns_processor.push(f);
                gc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
            }
            lh(R.D) ? e() : fh(e, R.D)
        },
        Bp = function(a) {
            var b = /^u([1-9]\d?|100)$/,
                c = a.getWithConfig(R.Of) || {},
                d = Ni(a),
                e = {},
                f = {};
            if (Jc(c))
                for (var g in c)
                    if (c.hasOwnProperty(g) && b.test(g)) {
                        var h = c[g];
                        m(h) && (e[g] = h)
                    }
            for (var l = 0; l < d.length; l++) {
                var n =
                    d[l];
                b.test(n) && (e[n] = n)
            }
            for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
            return f
        },
        Cp = function(a, b) {
            function c(n, p, q) {
                void 0 !== q && 0 !== (q + "").length && e.push(n + p + ":" + d(q + ""))
            }
            var d = encodeURIComponent,
                e = [],
                f = a(R.aa) || [];
            if (Ja(f))
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        l = g + 1;
                    c("i", l, h.id);
                    c("p", l, h.price);
                    c("q", l, h.quantity);
                    c("c", l, b ? h[R.ed] : a(R.ed));
                    c("l", l, b ? h[R.pb] : a(R.pb));
                    b && c("a", l, h.accountId)
                }
            return e.join("|")
        },
        Dp = function(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    X: b[3] ? a : "",
                    zi: b[1],
                    yi: b[3] || "",
                    wc: b[4] || "",
                    Ca: c
                }
            }
        },
        Fp = function(a, b, c, d) {
            var e = Dp(a);
            if (e) {
                var f = function(N) {
                        return d.getWithConfig(N)
                    },
                    g = !1 !== f(R.Ja),
                    h = f(R.Ia) || f(R.da),
                    l = f(R.oa),
                    n = f(R.Ka),
                    p = f(R.Ra),
                    q = {
                        prefix: h,
                        domain: l,
                        yb: n,
                        flags: p
                    },
                    r = f(R.Uh),
                    u = void 0 != f(R.T) && !1 !== f(R.T) && (!d.isGtmEvent || !lh(R.D)),
                    t = 3 === yl();
                var B = {},
                    D = f(R.Th);
                if (Jc(D))
                    for (var C in D)
                        if (D.hasOwnProperty(C)) {
                            var E =
                                D[C];
                            void 0 !== E && null !== E && (B[C] = E)
                        }
                var F = "";
                if (5 === e.Ca || 6 === e.Ca) F = Cp(f, d.isGtmEvent);
                var O = Bp(d),
                    L = !0 === f(R.de);
                if (xl() && L) {
                    L = !1
                }
                var M = d.isGtmEvent ? "" : t ? "http:" : "https:",
                    ca = {
                        wc: e.wc,
                        Sb: g,
                        Mi: l,
                        Ni: n,
                        ja: h,
                        Dd: f(R.ia),
                        Ca: e.Ca,
                        Pi: B,
                        Xe: e.zi,
                        af: e.yi,
                        onFailure: d.onFailure,
                        onSuccess: d.onSuccess,
                        Pd: d.isGtmEvent ? f("oref") : Sh(Th(A.location.href)),
                        sf: F,
                        protocol: M,
                        wf: f(R.ag),
                        zf: L,
                        sessionId: f(R.qc),
                        Wd: d.isGtmEvent ? f("tran") : void 0,
                        transactionId: f(R.rb),
                        Xd: d.isGtmEvent ? f("u") : void 0,
                        ma: d.isGtmEvent ? f(R.Aa) : void 0,
                        Df: O,
                        Bi: !1 !== f(R.Ha),
                        eventId: d.eventId,
                        xa: u
                    };
                Ep && (ca.Vb = mb(Oi(d, R.qa, 1), "."), ca.Tb = mb(Oi(d, R.qa, 2), "."));
                zp(ca)
            } else J(d.onFailure)
        },
        Ep = !1;
    var Up = function() {
            var a = !0;
            Do(7) && Do(9) && Do(10) || (a = !1);
            var b = !0;
            b = !1;
            b && !Tp() && (a = !1);
            return a
        },
        Tp = function() {
            var a = !0;
            Do(3) && Do(4) || (a = !1);
            return a
        };
    var Aq = !1;
    var Bq = !1;
    Bq = !0;

    function Cq() {
        var a = U;
        return a.gcq = a.gcq || new Dq
    }
    var Eq = function(a, b, c) {
            Cq().register(a, b, c)
        },
        Fq = function(a, b, c, d) {
            Cq().push("event", [b, a], c, d)
        },
        Gq = function(a, b) {
            Cq().push("config", [a], b)
        },
        Hq = function(a, b, c, d) {
            Cq().push("get", [a, b], c, d)
        },
        Iq = function(a) {
            return Cq().getRemoteConfig(a)
        },
        Jq = {},
        Kq = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.s = {};
            this.B = null;
            this.g = !1
        },
        Lq = function(a, b, c, d, e) {
            this.type = a;
            this.B = b;
            this.X = c || "";
            this.g = d;
            this.s = e
        },
        Dq = function() {
            this.s = {};
            this.B = {};
            this.g = [];
            this.F = {
                AW: !1,
                UA: !1
            };
            this.enableDeferrableCommandAfterConfig = Aq
        },
        Mq = function(a, b) {
            var c = ul(b);
            return a.s[c.containerId] = a.s[c.containerId] || new Kq
        },
        Nq = function(a, b, c) {
            if (b) {
                var d = ul(b);
                if (d && 1 === Mq(a, b).status) {
                    Mq(a, b).status = 2;
                    var e = {};
                    fn && (e.timeoutId = A.setTimeout(function() {
                        Ng(38);
                        Mm()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Jq[d.containerId] = bb();
                    if (xl()) {} else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
                            h = ("http:" != A.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            l = Rn(c, g) || h;
                        gc(l)
                    }
                }
            }
        },
        Oq = function(a, b, c, d) {
            if (d.X) {
                var e = Mq(a, d.X),
                    f = e.B;
                if (f) {
                    var g = P(c),
                        h = P(e.targetConfig[d.X]),
                        l = P(e.containerConfig),
                        n = P(e.remoteConfig),
                        p = P(a.B),
                        q = hj("gtm.uniqueEventId"),
                        r = ul(d.X).prefix,
                        u = db(function() {
                            var v =
                                g[R.Kb];
                            v && J(v)
                        }),
                        t = Li(Ki(Mi(Ji(Ii(Hi(Gi(Fi(Ei(g), h), l), n), p), function() {
                            tn(q, r, "2");
                            Bq && u()
                        }), function() {
                            tn(q, r, "3");
                            Bq && u()
                        }), function(v, w) {
                            a.F[v] = w
                        }), function(v) {
                            return a.F[v]
                        });
                    try {
                        tn(q, r, "1");
                        f(d.X, b, d.B, t)
                    } catch (v) {
                        tn(q, r, "4");
                    }
                }
            }
        };
    Dq.prototype.register = function(a, b, c) {
        var d = Mq(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            c && (P(d.remoteConfig, c), d.remoteConfig = c);
            var e = ul(a),
                f = Jq[e.containerId];
            if (void 0 !== f) {
                var g = U[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                U[e.containerId]._spx && (h = h.toLowerCase());
                var l = hj("gtm.uniqueEventId"),
                    n = h,
                    p = bb() - g;
                if (fn && !Rm[l]) {
                    l !== Nm && (Im(), Nm = l);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Vm = Vm ? Vm + "," + q : "&cl=" + q
                }
                delete Jq[e.containerId]
            }
            this.flush()
        }
    };
    Dq.prototype.push = function(a, b, c, d) {
        var e = Math.floor(bb() / 1E3);
        Nq(this, c, b[0][R.sa] || this.B[R.sa]);
        Aq && c && Mq(this, c).g && (d = !1);
        this.g.push(new Lq(a, e, c, b, d));
        d || this.flush()
    };
    Dq.prototype.insert = function(a, b, c) {
        var d = Math.floor(bb() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Lq(a, d, c, b, !1)) : this.g.push(new Lq(a, d, c, b, !1))
    };
    Dq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.s) Aq ? !f.X || Mq(this, f.X).g ? (f.s = !1, this.g.push(f)) : c.push(f) : (f.s = !1, this.g.push(f)), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Mq(this, f.X).status && !a) {
                            Aq && this.g.push.apply(this.g, c);
                            return
                        }
                        fn && A.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Sa(f.g[0], function(r, u) {
                            P(kb(r, u), b.B)
                        });
                        break;
                    case "config":
                        e.Ma = {};
                        Sa(f.g[0], function(r) {
                            return function(u, t) {
                                P(kb(u, t), r.Ma)
                            }
                        }(e));
                        var g = !!e.Ma[R.nd];
                        delete e.Ma[R.nd];
                        var h = Mq(this, f.X),
                            l = ul(f.X),
                            n = l.containerId === l.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.X] = {});
                        h.g && g || Oq(this, R.Ga, e.Ma, f);
                        h.g = !0;
                        delete e.Ma[R.uc];
                        n ? P(e.Ma, h.containerConfig) : P(e.Ma, h.targetConfig[f.X]);
                        Aq && (d = !0);
                        break;
                    case "event":
                        e.Xc = {};
                        Sa(f.g[0], function(r) {
                            return function(u, t) {
                                P(kb(u, t), r.Xc)
                            }
                        }(e));
                        Oq(this, f.g[1], e.Xc, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[R.Sa] = f.g[0], p[R.ab] = f.g[1], p);
                        Oq(this, R.Pa, q, f)
                }
                this.g.shift();
                Pq(this, f)
            }
            e = {
                Ma: e.Ma,
                Xc: e.Xc
            }
        }
        Aq && (this.g.push.apply(this.g,
            c), d && this.flush())
    };
    var Pq = function(a, b) {
        if ("require" !== b.type)
            if (b.X)
                for (var c = a.getCommandListeners(b.X)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        var f = a.s[e];
                        if (f && f.s)
                            for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    Dq.prototype.getRemoteConfig = function(a) {
        return Mq(this, a).remoteConfig
    };
    Dq.prototype.getCommandListeners = function(a) {
        return Mq(this, a).s
    };

    function Qq(a, b) {
        var c = this;
    };

    function Rq(a, b, c) {};

    function Sq(a, b, c, d) {};

    function Tq(a) {};
    var Uq = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": tc(a, "className"),
                "gtm.elementId": a["for"] || mc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || tc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || tc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Vq = function(a) {
            U.hasOwnProperty("autoEventsSettings") || (U.autoEventsSettings = {});
            var b = U.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Wq = function(a, b, c) {
            Vq(a)[b] = c
        },
        Xq = function(a, b, c, d) {
            var e = Vq(a),
                f = cb(e, b, d);
            e[b] = c(f)
        },
        Yq = function(a, b, c) {
            var d = Vq(a);
            return cb(d, b, c)
        };
    var Zq = ["input", "select", "textarea"],
        $q = ["button", "hidden", "image", "reset", "submit"],
        ar = function(a) {
            var b = a.tagName.toLowerCase();
            return !Ma(Zq, function(c) {
                return c === b
            }) || "input" === b && Ma($q, function(c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        br = function(a) {
            return a.form ? a.form.tagName ? a.form : I.getElementById(a.form) : rc(a, ["form"], 100)
        },
        cr = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (ar(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        };

    function gr(a) {};
    var hr = {},
        ir = [],
        jr = {},
        kr = 0,
        lr = 0;

    function sr(a, b) {}

    function zr(a, b) {};

    function Er(a) {};
    var Fr = {},
        Gr = [];
    var Nr = function(a, b) {};

    function Ur(a, b) {};
    var Vr = /^\s*$/,
        Wr, Xr = !1;

    function hs(a, b) {}

    function is(a, b, c) {};
    var js = !!A.MutationObserver,
        ks = void 0,
        ls = function(a) {
            if (!ks) {
                var b = function() {
                    var c = I.body;
                    if (c)
                        if (js)(new MutationObserver(function() {
                            for (var e = 0; e < ks.length; e++) J(ks[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            kc(c, "DOMNodeInserted", function() {
                                d || (d = !0, J(function() {
                                    d = !1;
                                    for (var e = 0; e < ks.length; e++) J(ks[e])
                                }))
                            })
                        }
                };
                ks = [];
                I.body ? b() : J(b)
            }
            ks.push(a)
        };
    var ns = ["www.youtube.com", "www.youtube-nocookie.com"],
        os, ps = !1,
        qs = 0;

    function As(a, b) {}

    function Bs(a, b) {
        return !0
    };

    function Cs(a, b, c) {};

    function Ds(a, b) {
        var c;
        return c
    };

    function Es(a) {};

    function Fs(a) {};
    var Gs = !1,
        Hs = [];

    function Is() {
        if (!Gs) {
            Gs = !0;
            for (var a = 0; a < Hs.length; a++) J(Hs[a])
        }
    }
    var Js = function(a) {
        Gs ? J(a) : Hs.push(a)
    };

    function Ks(a) {
        Q(H(this), ["listener:!Fn"], arguments);
        sg(this, "process_dom_events", "window", "load");
        Js(Lc(a))
    };

    function Ls(a) {
        var b;
        return b
    };

    function Ms(a, b) {
        var c;
        var d = !1;
        var e = Kc(c, this.g, d);
        void 0 === e && void 0 !== c && Ng(45);
        return e
    };

    function Ns(a) {
        var b;
        return b
    };

    function Os(a, b) {
        var c = null,
            d = !1;
        Q(H(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        sg(this, "access_globals", "readwrite", a);
        sg(this, "access_globals", "readwrite", b);
        var e = [A, I],
            f = a.split("."),
            g = jb(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var l = g[h];
        if (l && !Ha(l)) return null;
        if (l) return Kc(l, this.g, d);
        var n;
        l = function() {
            if (!Ha(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = l;
        var p = b.split("."),
            q = jb(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            l.apply(l, Array.prototype.slice.call(arguments, 0))
        };
        return Kc(c, this.g, d)
    };

    function Ps(a) {
        var b;
        Q(H(this), ["path:!string"], arguments);
        sg(this, "access_globals", "readwrite", a);
        var c = a.split("."),
            d = jb(c, [A, I]),
            e = c[c.length - 1];
        if (void 0 === d) throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [], d[e] = f);
        b = function() {
            if (!Ha(f.push)) throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        };
        var g = !1;
        return Kc(b, this.g, g)
    };

    function Qs(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var Rs = new Qa;

    function Ss(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Rs.get(e);
            f || (f = new RegExp(b, d), Rs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Ts(a, b) {
        function c(g) {
            var h = Th(g),
                l = Rh(h, "protocol"),
                n = Rh(h, "host", !0),
                p = Rh(h, "port"),
                q = Rh(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Us(a) {
        return Vs(a) ? 1 : 0
    }

    function Vs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Ja(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = P(a, {});
                P({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Us(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var h = 0; h < g.length; h++)
                                if (b[g[h]]) {
                                    f = b[g[h]](c);
                                    break a
                                }
                        } catch (n) {}
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return Qs(b, c);
            case "_eq":
                return String(b) ==
                    String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return 0 <= La(l, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Ss(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return Ts(b, c)
        }
        return !1
    };

    function Ws(a) {
        return !1
    }
    var Xs;

    function Ys(a) {
        var b = !1;
        return b
    };
    var Zs = function(a) {
        var b;
        return b
    };

    function $s(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };

    function at(a) {
        var b = null;
        return b
    };

    function bt(a, b) {
        var c;
        return c
    };

    function ct(a, b) {
        var c;
        return c
    };

    function dt(a, b) {
        var c;
        return c
    };

    function et(a) {
        var b = "";
        return b
    };

    function ft(a, b) {
        var c;
        return c
    };

    function gt(a) {
        var b = "";
        return b
    };

    function ht() {
        sg(this, "get_user_agent");
        return A.navigator.userAgent
    };

    function it(a, b) {};
    var jt = {};

    function kt(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], gc(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
            g.push = function(l) {
                J(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
            e[f] = null
        }, b)) : gc(a, c, d, b)
    }

    function lt(a, b, c, d) {
        Q(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
        sg(this, "inject_script", a);
        var e = this.g;
        kt(a, void 0, function() {
            b && b.s(e)
        }, function() {
            c && c.s(e)
        }, jt, d);
    }
    var mt = Object.freeze({
            dl: 1,
            id: 1
        }),
        nt = {};

    function ot(a, b, c, d) {};

    function pt(a) {
        var b = !0;
        return b
    };
    var qt = function() {
            return !1
        },
        rt = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var st = ["textContent", "value", "tagName", "children", "childElementCount"];

    function tt(a) {
        var b;
        return b
    };

    function ut() {};

    function vt(a, b) {
        var c;
        return c
    };

    function wt(a) {
        var b = void 0;
        return b
    };

    function xt(a, b) {
        var c = !1;
        return c
    };

    function yt() {
        var a = "";
        return a
    };

    function zt() {
        var a = "";
        return a
    };
    var At = ["set", "get", "config", "event"];

    function Bt(a, b, c) {};

    function Ct() {};

    function Dt(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    };

    function Et(a, b, c) {};

    function Ft(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };

    function Gt(a) {
        Q(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.tb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== R.Zd && sg(this, "access_consent", e, "write")
        }
        ih(Lc(a))
    };

    function Ht(a, b, c) {
        Q(H(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        sg(this, "access_globals", "readwrite", a);
        var d = !1;
        var e = a.split("."),
            f = jb(e, [A, I]),
            g = e.pop();
        if (f && (void 0 === f[g] || c)) return f[g] = Lc(b, this.g, d), !0;
        return !1
    };

    function It(a, b, c) {};

    function Jt(a, b, c) {};
    var Kt = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function Lt(a, b, c, d) {
        var e = this;
    };

    function Mt(a, b, c) {};
    var Nt = {},
        Ot = {};
    Nt.getItem = function(a) {
        var b = null;
        return b
    };
    Nt.setItem = function(a, b) {};
    Nt.removeItem = function(a) {};
    Nt.clear = function() {};
    var Pt = function(a) {
        var b;
        return b
    };

    function Qt(a) {
        Q(H(this), ["consentSettings:!DustMap"], arguments);
        var b = Lc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && sg(this, "access_consent", c, "write");
        kh(b)
    };
    var me = function() {
        var a = new Fg;
        xl() ? (a.add("injectHiddenIframe", Ga), a.add("injectScript", Ga)) : (a.add("injectHiddenIframe", it), a.add("injectScript", lt));
        var b = Et;
        a.add("Math", lg());
        a.add("TestHelper", Ig());
        a.add("addConsentListener", Qq);
        a.add("addEventCallback", Tq);
        a.add("aliasInWindow", Bs);
        a.add("assertApi", hg);
        a.add("assertThat",
            ig);
        a.add("callInWindow", Ds);
        a.add("callLater", Es);
        a.add("copyFromDataLayer", Ms);
        a.add("copyFromWindow", Ns);
        a.add("createArgumentsQueue", Os);
        a.add("createQueue", Ps);
        a.add("decodeUri", mg);
        a.add("decodeUriComponent", ng);
        a.add("encodeUri", og);
        a.add("encodeUriComponent", pg);
        a.add("fail", qg);
        a.add("fromBase64", Zs, !("atob" in A));
        a.add("generateRandom", rg);
        a.add("getContainerVersion", tg);
        a.add("getCookieValues", $s);
        a.add("getQueryParameters", ct);
        a.add("getReferrerQueryParameters", dt);
        a.add("getReferrerUrl",
            et);
        a.add("getTimestamp", ug);
        a.add("getTimestampMillis", ug);
        a.add("getType", vg);
        a.add("getUrl", gt);
        a.add("localStorage", rt, !qt());
        a.add("isConsentGranted", pt);
        a.add("logToConsole", ut);
        a.add("makeInteger", xg);
        a.add("makeNumber", yg);
        a.add("makeString", zg);
        a.add("makeTableMap", Ag);
        a.add("mock", Cg);
        a.add("parseUrl", wt);
        a.add("queryPermission", xt);
        a.add("readCharacterSet", yt);
        a.add("readTitle", zt);
        a.add("sendPixel", b);
        a.add("setCookie", Ft);
        a.add("setDefaultConsentState", Gt);
        a.add("setInWindow", Ht);
        a.add("sha256",
            Lt);
        a.add("templateStorage", Nt);
        a.add("toBase64", Pt, !("btoa" in A));
        a.add("updateConsentState", Qt);
        Hg(a, "callOnWindowLoad", Ks);
        a.add("JSON", wg(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        Hg(a, "internal.addHistoryChangeListener", Nr);

        Hg(a, "internal.sendGtagEvent", Dt);
        xl() ? Hg(a, "internal.injectScript", Ga) : Hg(a, "internal.injectScript", ot);
        Hg(a, "internal.locateUserData", tt);
        Hg(a, "internal.addFormInteractionListener", sr);
        Hg(a, "internal.addFormSubmitListener", zr);
        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.s.hasOwnProperty(c)) {
                    var f = !1,
                        g = this.g.g;
                    if (g) {
                        var h = g.Hc();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var l = a.s.hasOwnProperty(c) ? a.s[c] : void 0;
                    d = l
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var Rt = function() {
            return !1
        },
        St = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var ke, Bf;

    function Tt() {
        var a = data.runtime || [],
            b = data.runtime_lines;
        ke = new ie;
        Ut();
        Ue = function(e, f, g) {
            Vt(f);
            var h = new tb;
            Sa(f, function(u, t) {
                var v = Kc(t);
                void 0 === v && void 0 !== t && Ng(44);
                h.set(u, v)
            });
            ke.g.g.H = nf();
            var l = {
                Ei: Cf(e),
                eventId: void 0 !== g ? g.id : void 0,
                yc: void 0 !== g ? function(u) {
                    return g.jb.yc(u)
                } : void 0,
                Hc: function() {
                    return e
                },
                log: function() {}
            };
            if (Rt()) {
                var n = St(),
                    p = void 0,
                    q = void 0;
                l.Fa = {
                    zc: {},
                    Wb: function(u, t, v) {
                        1 === t && (p = u);
                        7 === t && (q = v);
                        n(u, t, v)
                    },
                    lf: Bg()
                };
                l.log = function(u, t) {
                    if (p) {
                        var v = Array.prototype.slice.call(arguments, 1);
                        n(p, 4, {
                            level: u,
                            source: q,
                            message: v
                        })
                    }
                }
            }
            var r = le(l, [e, h]);
            ke.g.g.H = void 0;
            r instanceof ta && "return" === r.g && (r = r.s);
            return Lc(r)
        };
        ne();
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (!Ja(d) || 3 > d.length) {
                if (0 === d.length) continue;
                break
            }
            b && b[c] && b[c].length && kf(d, b[c]);
            ke.Ub(d)
        }
    }

    function Vt(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ha(b) && (a.gtmOnSuccess = function() {
            J(b)
        });
        Ha(c) && (a.gtmOnFailure = function() {
            J(c)
        })
    }

    function Ut() {
        var a = ke;
        U.SANDBOXED_JS_SEMAPHORE = U.SANDBOXED_JS_SEMAPHORE || 0;
        oe(a, function(b, c, d) {
            U.SANDBOXED_JS_SEMAPHORE++;
            try {
                return b.apply(c, d)
            } finally {
                U.SANDBOXED_JS_SEMAPHORE--
            }
        })
    }

    function Wt(a) {
        void 0 !== a && Sa(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                $i[e] = $i[e] || [];
                $i[e].push(b)
            }
        })
    };
    var $t = "HA GF G UA AW DC".split(" "),
        au = !1;
    au = !0;
    var bu = !1,
        cu = !1;

    function du(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = P(b), b[R.Kb] && (c.eventCallback = b[R.Kb]), b[R.gd] && (c.eventTimeout = b[R.gd]));
        return c
    }

    function eu(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: aj()
        });
        return a["gtm.uniqueEventId"]
    }

    function fu() {
        return bu
    }
    var gu = {
            config: function(a) {
                var b, c = eu(a);
                return b
            },
            consent: function(a) {
                function b() {
                    fu() && P(a[2], {
                        subcommand: a[1]
                    })
                }
                if (3 === a.length) {
                    Ng(39);
                    var c = aj(),
                        d = a[1];
                    "default" === d ? (b(), ih(a[2])) : "update" === d && (b(), kh(a[2], c))
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && m(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Jc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = du(b, c),
                        e = eu(a);
                    d["gtm.uniqueEventId"] = e;
                    return d
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    cu = !0;
                    fu();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = eu(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2],
                        d = Bf.s;
                    d.g[b] ?
                        d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Jc(a[1]) ? b = P(a[1]) : 3 == a.length && m(a[1]) && (b = {}, Jc(a[2]) || Ja(a[2]) ? b[a[1]] = P(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    b._clear = !0;
                    return b
                }
            }
        },
        hu = {
            policy: !0
        };
    var iu = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break
                    }
                d && (c.end(), c.end = null)
            }
        },
        ku = function(a) {
            var b = ju(),
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Bu = function(a) {
        if (Au(a)) return a;
        this.g = a
    };
    Bu.prototype.$i = function() {
        return this.g
    };
    var Au = function(a) {
        return !a || "object" !== Hc(a) || Jc(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    Bu.prototype.getUntrustedUpdateValue = Bu.prototype.$i;
    var Cu = [],
        Du = !1,
        Eu = !1,
        Fu = function(a) {
            return A["dataLayer"].push(a)
        },
        Gu = function(a) {
            var b = U["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0,
                e = a;
            return function() {
                ++d === c && (e(), e = null)
            }
        };

    function Hu(a) {
        var b = a._clear;
        Sa(a, function(d, e) {
            "_clear" !== d && (b && kj(d, void 0), kj(d, e))
        });
        Wi || (Wi = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = aj(), a["gtm.uniqueEventId"] = c, kj("gtm.uniqueEventId", c));
        return Pn(a)
    }

    function Iu() {
        var a = Cu[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ua(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function Ju() {
        for (var a = !1; !Eu && 0 < Cu.length;) {
            if (!Du && Iu()) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d);
                Cu.unshift(c, e);
                Du = !0
            }
            Eu = !0;
            delete ej.eventModel;
            gj();
            var g = Cu.shift();
            if (null != g) {
                var h = Au(g);
                if (h) {
                    var l = g;
                    g = Au(l) ? l.getUntrustedUpdateValue() : void 0;
                    lj()
                }
                try {
                    if (Ha(g)) try {
                        g.call(ij)
                    } catch (w) {} else if (Ja(g)) {
                        var n = g;
                        if (m(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                u = hj(p.join("."), 2);
                            if (void 0 !== u && null !== u) try {
                                u[q].apply(u, r)
                            } catch (w) {}
                        }
                    } else {
                        if (Ua(g)) {
                            a: {
                                var t = g;
                                if (t.length && m(t[0])) {
                                    var v = gu[t[0]];
                                    if (v && (!h || !hu[t[0]])) {
                                        g = v(t);
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            if (!g) {
                                Eu = !1;
                                continue
                            }
                        }
                        a = Hu(g) || a
                    }
                } finally {
                    h && gj(!0)
                }
            }
            Eu = !1
        }
        return !a
    }

    function Ku() {
        var b = Ju();
        try {
            iu(A["dataLayer"], vf.N)
        } catch (c) {}
        return b
    }
    var Mu = function() {
            var a = cc("dataLayer", []),
                b = cc("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            bm(function() {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            Js(function() {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < U.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new Bu(arguments[f])
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                Cu.push.apply(Cu, e);
                if (300 <
                    this.length)
                    for (Ng(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Ju() && h
            };
            var d = a.slice(0);
            Cu.push.apply(Cu, d);
            if (Lu()) {
                J(Ku)
            }
        },
        Lu = function() {
            var a = !0;
            return a
        };
    var Nu = {};
    Nu.sd = new String("undefined");
    var Ou = function(a) {
        this.g = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Nu.sd ? b : a[d]);
            return c.join("")
        }
    };
    Ou.prototype.toString = function() {
        return this.g("undefined")
    };
    Ou.prototype.valueOf = Ou.prototype.toString;
    Nu.wi = Ou;
    Nu.Ke = {};
    Nu.Oi = function(a) {
        return new Ou(a)
    };
    var Pu = {};
    Nu.Aj = function(a, b) {
        var c = aj();
        Pu[c] = [a, b];
        return c
    };
    Nu.Fg = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Pu[c];
            if (d && "function" === typeof d[b]) d[b]();
            Pu[c] = void 0
        }
    };
    Nu.cj = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Nu.vj = function(a) {
        if (a === Nu.sd) return a;
        var b = aj();
        Nu.Ke[b] = a;
        return 'google_tag_manager["' + vf.N + '"].macro(' + b + ")"
    };
    Nu.oj = function(a, b, c) {
        a instanceof Nu.wi && (a = a.g(Nu.Aj(b, c)), b = Ga);
        return {
            aj: a,
            onSuccess: b
        }
    };
    var $u = A.clearTimeout,
        av = A.setTimeout,
        W = function(a, b, c) {
            if (xl()) {
                b && J(b)
            } else return gc(a, b, c)
        },
        bv = function() {
            return new Date
        },
        cv = function() {
            return A.location.href
        },
        dv = function(a) {
            return Rh(Th(a), "fragment")
        },
        ev = function(a) {
            return Sh(Th(a))
        },
        fv = function(a, b) {
            return hj(a, b || 2)
        },
        gv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Fu(a)) : d = Fu(a);
            return d
        },
        hv = function(a, b) {
            A[a] = b
        },
        X = function(a, b, c) {
            b &&
                (void 0 === A[a] || c && !A[a]) && (A[a] = b);
            return A[a]
        },
        iv = function(a, b, c) {
            return Aj(a, b, void 0 === c ? !0 : !!c)
        },
        jv = function(a, b, c) {
            return 0 === Jj(a, b, c)
        },
        kv = function(a, b) {
            if (xl()) {
                b && J(b)
            } else ic(a, b)
        },
        lv = function(a) {
            return !!Yq(a, "init", !1)
        },
        mv = function(a) {
            Wq(a, "init", !0)
        },
        nv = function(a) {
            var b = Ui + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            W(zl("https://", "http://", b))
        },
        ov = function(a, b, c) {
            fn && (Nc(a) || un(c, b, a))
        };
    var pv = Nu.oj;
    var Mv = encodeURI,
        Y = encodeURIComponent,
        Nv = jc;
    var Ov = function(a, b) {
        if (!a) return !1;
        var c = Rh(Th(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Pv = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };

    function wx() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var xx = function() {
            var a = wx();
            a.hid = a.hid || Oa();
            return a.hid
        },
        yx = function(a, b) {
            var c = wx();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var Zx = function() {
        if (Ha(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var xy = window,
        yy = document,
        zy = function(a) {
            var b = xy._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === xy["ga-disable-" + a]) return !0;
            try {
                var c = xy.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = wj("AMP_TOKEN", String(yy.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return yy.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var Ay = {};

    function Dy(a) {
        delete a.eventModel[R.uc];
        Fy(a.eventModel)
    }
    var Fy = function(a) {
        Sa(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.Ta] || {};
        Sa(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Iy = function(a, b, c) {
            Fq(b, c, a)
        },
        Jy = function(a, b, c) {
            Fq(b, c, a, !0)
        },
        Ny = function(a, b) {};

    function Ky(a, b) {}
    var Z = {
        h: {}
    };
    Z.h.gaawc = ["google"],
        function() {
            function a(b, c, d) {
                for (var e = 0; e < c.length; e++) b.hasOwnProperty(c[e]) && (b[c[e]] = d(b[c[e]]))
            }(function(b) {
                Z.__gaawc = b;
                Z.__gaawc.m = "gaawc";
                Z.__gaawc.o = !0;
                Z.__gaawc.priorityOverride = 10
            })(function(b) {
                var c = String(b.vtp_measurementId),
                    d = Pv(b.vtp_fieldsToSet, "name", "value") || {};
                if (d.hasOwnProperty(R.Ta) || b.vtp_userProperties) {
                    var e = d[R.Ta] || {};
                    P(Pv(b.vtp_userProperties, "name", "value"), e);
                    d[R.Ta] = e
                }
                b.vtp_enableSendToServerContainer && b.vtp_serverContainerUrl && (d[R.sa] = b.vtp_serverContainerUrl,
                    d[R.jc] = !0);
                var f = b.vtp_userDataVariable;
                f && (d[R.Aa] = f);
                a(d, R.eg, function(g) {
                    return Ya(g)
                });
                a(d, R.gg, function(g) {
                    return Number(g)
                });
                d.send_page_view = b.vtp_sendPageView;
                Gq(d, c);
                J(b.vtp_gtmOnSuccess)
            })
        }();

    Z.h.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.m = "jsm";
                Z.__jsm.o = !0;
                Z.__jsm.priorityOverride = 0
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        ov(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.h.flc = [],
        function() {
            function a(c, d) {
                d = d ? d.slice(0, -1) : void 0;
                zp(c, d)
            }
            var b = !1;
            b = !0;
            (function(c) {
                Z.__flc = c;
                Z.__flc.m = "flc";
                Z.__flc.o = !0;
                Z.__flc.priorityOverride = 0
            })(function(c) {
                var d = !c.hasOwnProperty("vtp_enableConversionLinker") || !!c.vtp_enableConversionLinker,
                    e = Pv(c.vtp_customVariable || [], "key",
                        "value") || {};
                if (b) {
                    var f = {},
                        g = (f[R.T] = fv(R.T), f[R.de] = !0 === c.vtp_useImageTag ? !1 : !0, f[R.Ia] = c.vtp_conversionCookiePrefix || void 0, f[R.Ja] = d, f[R.qc] = c.vtp_sessionId, f.oref = c.vtp_useImageTag ? void 0 : c.vtp_url, f.tran = c.vtp_transactionVariable, f.u = c.vtp_userVariable, f[R.Aa] = c.vtp_userDataVariable, f),
                        h;
                    for (h in e) e.hasOwnProperty(h) && (g[h] = e[h]);
                    var l = "DC-" + c.vtp_advertiserId + "/" + c.vtp_groupTag + "/" + (c.vtp_activityTag + "+" + ({
                            UNIQUE: "unique",
                            SESSION: "per_session"
                        }[c.vtp_ordinalType] || "standard")),
                        n = Mi(Ji(Ei(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    n.isGtmEvent = !0;
                    Fp(l, "", Date.now(), n);
                    return
                }
                var p = {
                        wc: c.vtp_activityTag,
                        Sb: d,
                        ja: c.vtp_conversionCookiePrefix || void 0,
                        Dd: void 0,
                        Ca: {
                            UNIQUE: 3,
                            SESSION: 4
                        }[c.vtp_ordinalType] || 2,
                        Xe: c.vtp_advertiserId,
                        af: c.vtp_groupTag,
                        onFailure: c.vtp_gtmOnFailure,
                        onSuccess: c.vtp_gtmOnSuccess,
                        Pd: c.vtp_useImageTag ? void 0 : c.vtp_url,
                        protocol: "",
                        wf: void 0,
                        zf: !c.vtp_useImageTag,
                        sessionId: c.vtp_sessionId,
                        Wd: c.vtp_transactionVariable,
                        transactionId: void 0,
                        Xd: c.vtp_userVariable,
                        ma: c.vtp_userDataVariable,
                        Df: e
                    },
                    q = !1;
                var r = !(lh(R.D) || q) && void 0 != fv(R.T) && !1 !== fv(R.T);
                p.xa = r;
                if (c.vtp_enableAttribution) {
                    var u = c.vtp_attributionFields || [];
                    if (u.length) {
                        W("//www.gstatic.com/attribution/collection/attributiontools.js",
                            function() {
                                a(p, X("google_attr").build([Pv(u, "key", "value") || {}]))
                            }, c.vtp_gtmOnFailure);
                        return
                    }
                }
                a(p)
            })
        }();
    Z.h.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.o = !0;
                Z.__e.priorityOverride = 0
            })(function(a) {
                var b = String(oj(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b
            })
        }();
    Z.h.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.m = "f";
                Z.__f.o = !0;
                Z.__f.priorityOverride = 0
            })(function(a) {
                var b = fv("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? Rh(Th(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ev(String(b)) : String(b)
            })
        }();
    Z.h.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = Uq(c, "gtm.click");
                    gv(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.m = "cl";
                Z.__cl.o = !0;
                Z.__cl.priorityOverride = 0
            })(function(b) {
                if (!lv("cl")) {
                    var c = X("document");
                    kc(c, "click", a, !0);
                    mv("cl")
                }
                J(b.vtp_gtmOnSuccess)
            })
        }();
    Z.h.j = ["google"],
        function() {
            (function(a) {
                Z.__j = a;
                Z.__j.m = "j";
                Z.__j.o = !0;
                Z.__j.priorityOverride = 0
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = X(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                ov(c, "j", a.vtp_gtmEventId);
                return c
            })
        }();
    Z.h.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.m = "k";
                Z.__k.o = !0;
                Z.__k.priorityOverride = 0
            })(function(a) {
                return iv(a.vtp_name, fv("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();

    Z.h.fls = [],
        function() {
            function a(c, d) {
                d = d ? d.slice(0, -1) : void 0;
                zp(c, d)
            }
            var b = !1;
            b = !0;
            (function(c) {
                Z.__fls = c;
                Z.__fls.m = "fls";
                Z.__fls.o = !0;
                Z.__fls.priorityOverride = 0
            })(function(c) {
                var d, e = [];
                if (c.vtp_enableProductReporting) {
                    var f =
                        function(B) {
                            B = B || [];
                            for (var D = [], C = [
                                    ["i", "id"],
                                    ["p", "price"],
                                    ["q", "quantity"],
                                    ["c", "country"],
                                    ["l", "language"],
                                    ["a", "accountId"]
                                ], E = 0; E < B.length; E++)
                                for (var F = 0; F < C.length; F++) {
                                    var O = C[F],
                                        L = B[E][O[1]];
                                    void 0 !== L && D.push(O[0] + (E + 1) + ":" + Y(L))
                                }
                            return D.join("|")
                        };
                    switch (c.vtp_dataSource) {
                        case "DATA_LAYER":
                            e = fv("ecommerce.purchase.products");
                            d = f(e);
                            break;
                        case "JSON":
                            e = c.vtp_productData;
                            d = f(e);
                            break;
                        case "STRING":
                            for (var g = (c.vtp_productData || "").split("|"), h = 0; h < g.length; h++) {
                                var l = g[h].split(":");
                                l[1] =
                                    l[1] && Y(l[1]) || "";
                                g[h] = l.join(":");
                                b && function(B) {
                                    var D = {
                                            i: "id",
                                            p: "price",
                                            q: "quantity",
                                            c: "country",
                                            l: "language",
                                            a: "accountId"
                                        },
                                        C = B[0][0],
                                        E = Number(B[0].slice(1)) - 1,
                                        F = e[E] || {};
                                    D.hasOwnProperty(C) && (F[D[C]] = B[1]);
                                    e[E] = F
                                }(l);
                            }
                            d = g.join("|")
                    }
                }
                var n = !c.hasOwnProperty("vtp_enableConversionLinker") || !!c.vtp_enableConversionLinker,
                    p = Pv(c.vtp_customVariable || [], "key", "value") || {};
                if (b) {
                    var q = {},
                        r = (q[R.T] = fv(R.T), q[R.de] = !c.vtp_useImageTag, q[R.aa] = e, q[R.Ia] = c.vtp_conversionCookiePrefix || void 0, q[R.Ja] = n, q[R.ag] = c.vtp_quantity, q[R.rb] = c.vtp_orderId, q[R.ia] = c.vtp_revenue, q.oref = c.vtp_useImageTag ? void 0 : c.vtp_url, q.tran = c.vtp_transactionVariable, q.u = c.vtp_userVariable, q[R.Aa] = c.vtp_userDataVariable, q),
                        u;
                    for (u in p) p.hasOwnProperty(u) && (r[u] = p[u]);
                    var t = "DC-" + c.vtp_advertiserId +
                        "/" + c.vtp_groupTag + "/" + (c.vtp_activityTag + "+" + ("ITEM_SOLD" === c.vtp_countingMethod ? "items_sold" : "transactions")),
                        v = Mi(Ji(Ei(r), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
                    v.isGtmEvent = !0;
                    Fp(t, "", Date.now(), v);
                    return
                }
                var w = {
                        wc: c.vtp_activityTag,
                        Sb: n,
                        ja: c.vtp_conversionCookiePrefix || void 0,
                        Dd: c.vtp_revenue,
                        Ca: "ITEM_SOLD" === c.vtp_countingMethod ? 6 : 5,
                        Xe: c.vtp_advertiserId,
                        af: c.vtp_groupTag,
                        onFailure: c.vtp_gtmOnFailure,
                        onSuccess: c.vtp_gtmOnSuccess,
                        Pd: c.vtp_useImageTag ? void 0 : c.vtp_url,
                        sf: d,
                        protocol: "",
                        wf: c.vtp_quantity,
                        zf: !c.vtp_useImageTag,
                        Wd: c.vtp_transactionVariable,
                        transactionId: c.vtp_orderId,
                        Xd: c.vtp_userVariable,
                        ma: c.vtp_userDataVariable,
                        Df: p
                    },
                    z = !1;
                var x = !(lh(R.D) || z) && void 0 != fv(R.T) && !1 !== fv(R.T);
                w.xa = x;
                if (c.vtp_enableAttribution) {
                    var y = c.vtp_attributionFields || [];
                    if (y.length) {
                        W("//www.gstatic.com/attribution/collection/attributiontools.js",
                            function() {
                                a(w, X("google_attr").build([Pv(y, "key", "value") || {}]))
                            }, c.vtp_gtmOnFailure);
                        return
                    }
                }
                a(w)
            })
        }();
    Z.h.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.m = "access_globals";
                Z.__access_globals.o = !0;
                Z.__access_globals.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = l.key;
                    l.read && e.push(n);
                    l.write && f.push(n);
                    l.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!m(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < La(e, r)) return
                        } else if ("write" === q) {
                            if (-1 < La(f, r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < La(f, r) && -1 < La(e, r)) return
                        } else if ("execute" === q) {
                            if (-1 < La(g, r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " +
                            r + ".");
                    },
                    W: a
                }
            })
        }();
    Z.h.r = ["google"],
        function() {
            (function(a) {
                Z.__r = a;
                Z.__r.m = "r";
                Z.__r.o = !0;
                Z.__r.priorityOverride = 0
            })(function(a) {
                return Oa(a.vtp_min, a.vtp_max)
            })
        }();
    Z.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.o = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : fv("gtm.url", 1)) || cv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return ev(String(c));
                var e = Th(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ja(h) ? n = h : n = String(h).replace(/\s+/g,
                        "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = Rh(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = Rh(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.h.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.m = "v";
                Z.__v.o = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = fv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                ov(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.h.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.kf && b.nf >= b.kf) b.ef && X("self").clearInterval(b.ef);
                    else {
                        b.nf++;
                        var c = bv().getTime();
                        gv({
                            event: b.K,
                            "gtm.timerId": b.ef,
                            "gtm.timerEventNumber": b.nf,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.kf,
                            "gtm.timerStartTime": b.fh,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.fh,
                            "gtm.triggers": b.Nj
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.m = "tl";
                Z.__tl.o = !0;
                Z.__tl.priorityOverride = 0
            })(function(b) {
                J(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        K: b.vtp_eventName,
                        nf: 0,
                        interval: Number(b.vtp_interval),
                        kf: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        Nj: String(b.vtp_uniqueTriggerId || "0"),
                        fh: bv().getTime()
                    };
                    c.ef = X("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();
    Z.h.ua = ["google"],
        function() {
            function a(t) {
                return lh(t)
            }

            function b(t, v, w) {
                var z = !1;
                if (ah() && !z && !f[t]) {
                    var x = !lh(R.J),
                        y = function() {
                            var B = nm(),
                                D = "gtm" + aj(),
                                C = q(v);
                            C["&gtm"] = Wn(!0);
                            var E = {
                                name: D
                            };
                            p(C, E, !0);
                            var F = void 0,
                                O = E._useUp;
                            B(function() {
                                var L = B.getByName(w);
                                L && (F = L.get("clientId"))
                            });
                            B("create", t, E);
                            x && lh(R.J) && (x = !1, B(function() {
                                var L = nm().getByName(D);
                                !L || L.get("clientId") === F && O || (C["&gcs"] = mh(), C["&gcu"] = "1", L.set(C), L.send("pageview"))
                            }));
                            B(function() {
                                B.remove(D)
                            })
                        };
                    fh(y, R.J);
                    fh(y, R.D);
                    f[t] = !0
                }
            }
            var c = !1;
            var d, e = {},
                f = {},
                g = {
                    name: !0,
                    clientId: !0,
                    sampleRate: !0,
                    siteSpeedSampleRate: !0,
                    alwaysSendReferrer: !0,
                    allowAnchor: !0,
                    allowLinker: !0,
                    cookieName: !0,
                    cookieDomain: !0,
                    cookieExpires: !0,
                    cookiePath: !0,
                    cookieUpdate: !0,
                    cookieFlags: !0,
                    legacyCookieDomain: !0,
                    legacyHistoryImport: !0,
                    storage: !0,
                    useAmpClientId: !0,
                    storeGac: !0,
                    _cd2l: !0,
                    _useUp: !0,
                    _cs: !0
                },
                h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            var p = function(t, v, w) {
                    var z = 0;
                    if (t)
                        for (var x in t)
                            if (!l[x] &&
                                t.hasOwnProperty(x) && (w && g[x] || !w && void 0 === g[x])) {
                                var y = h[x] ? Ya(t[x]) : t[x];
                                "anonymizeIp" != x || y || (y = void 0);
                                v[x] = y;
                                z++
                            }
                    return z
                },
                q = function(t) {
                    var v = {};
                    t.vtp_gaSettings && P(Pv(t.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), v);
                    P(Pv(t.vtp_fieldsToSet, "fieldName", "value"), v);
                    Ya(v.urlPassthrough) && (v._useUp = !0);
                    t.vtp_transportUrl && (v._x_19 = t.vtp_transportUrl);
                    if (!c) {
                        v._x_19 && (v._cd2l = !0);
                        lh(R.J) || (v.storage = "none");
                        lh(R.D) || (v.allowAdFeatures = !1, v.storeGac = !1);
                        Up() || (v.allowAdFeatures = !1);
                        Tp() || (v.allowAdPersonalizationSignals = !1);
                        if (Ya(v.urlPassthrough)) {
                            var w = !1;
                            ah() && !w && (v._cs = a)
                        }
                    }
                    return v
                },
                r = function(t, v) {},
                u = function(t) {
                    function v(Ba, ha) {
                        void 0 !== t[ha] && M("set", Ba, t[ha])
                    }
                    var w = {},
                        z = {},
                        x = {},
                        y = {};
                    if (t.vtp_gaSettings) {
                        var B = t.vtp_gaSettings;
                        P(Pv(B.vtp_contentGroup, "index", "group"), z);
                        P(Pv(B.vtp_dimension, "index", "dimension"), x);
                        P(Pv(B.vtp_metric, "index", "metric"), y);
                        var D = P(B);
                        D.vtp_fieldsToSet = void 0;
                        D.vtp_contentGroup = void 0;
                        D.vtp_dimension = void 0;
                        D.vtp_metric = void 0;
                        t = P(t, D)
                    }
                    P(Pv(t.vtp_contentGroup, "index", "group"), z);
                    P(Pv(t.vtp_dimension, "index", "dimension"), x);
                    P(Pv(t.vtp_metric, "index", "metric"),
                        y);
                    var C = q(t),
                        E = "",
                        F = pm(t.vtp_functionName);
                    if (Ha(F)) {
                        var O = "",
                            L = "";
                        t.vtp_setTrackerName && "string" == typeof t.vtp_trackerName ? "" !== t.vtp_trackerName && (L = t.vtp_trackerName, O = L + ".") : (L = "gtm" + aj(), O = L + ".");
                        var M = function(Ba) {
                                var ha = [].slice.call(arguments, 0);
                                ha[0] = O + ha[0];
                                F.apply(window, ha)
                            },
                            ca = function(Ba, ha) {
                                return void 0 === ha ? ha : Ba(ha)
                            },
                            N = function(Ba, ha) {
                                if (ha)
                                    for (var Wa in ha) ha.hasOwnProperty(Wa) && (c ? C[Ba + Wa] = ha[Wa] : M("set", Ba + Wa, ha[Wa]))
                            },
                            K = function() {
                                var Ba = {
                                        transaction_id: "id",
                                        affiliation: "affiliation",
                                        value: "revenue",
                                        tax: "tax",
                                        shipping: "shipping",
                                        coupon: "coupon",
                                        item_list_name: "list"
                                    },
                                    ha = {},
                                    Wa = (ha[R.ae] = "click", ha[R.Oa] = "detail", ha[R.Fb] = "add", ha[R.Gb] = "remove", ha[R.mb] = "checkout", ha[R.za] = "purchase", ha[R.Ib] = "refund", ha),
                                    Xc = {
                                        item_id: "id",
                                        item_name: "name",
                                        item_list_name: "list",
                                        item_brand: "brand",
                                        item_variant: "variant",
                                        index: "position",
                                        promotion_id: "id",
                                        promotion_name: "name",
                                        creative_name: "creative",
                                        creative_slot: "position"
                                    },
                                    bc = {
                                        item_category: 0,
                                        item_category2: 1,
                                        item_category3: 2,
                                        item_category4: 3,
                                        item_category5: 4
                                    },
                                    Ab = function(Mb, fb, Ta) {
                                        var Pa = c ? Ta : Mb,
                                            sb;
                                        for (sb in Mb) Ba.hasOwnProperty(sb) && (Pa[fb] = Pa[fb] || {}, Pa[fb].actionField = Pa[fb].actionField || {}, Pa[fb].actionField[Ba[sb]] = Mb[sb])
                                    },
                                    Kb = function(Mb, fb) {
                                        for (var Ta = "", Pa = 0; Pa < fb.length; Pa++) void 0 !== fb[Pa] && ("" !== Ta && (Ta += "/"), Ta += fb[Pa]);
                                        Mb.category = Ta
                                    },
                                    Lb = function(Mb) {
                                        for (var fb = [], Ta = {}, Pa = 0; Pa < Mb.length; Ta = {
                                                Cb: Ta.Cb,
                                                $b: Ta.$b
                                            }, Pa++) {
                                            Ta.Cb = {};
                                            var sb = Mb[Pa];
                                            Ta.$b = [];
                                            Sa(sb, function(xe) {
                                                return function(Id,
                                                    ye) {
                                                    Xc.hasOwnProperty(Id) ? xe.Cb[Xc[Id]] = ye : bc.hasOwnProperty(Id) ? xe.$b[bc[Id]] = ye : xe.Cb[Id] = ye
                                                }
                                            }(Ta));
                                            0 < Ta.$b.length && Kb(Ta.Cb, Ta.$b);
                                            fb.push(Ta.Cb)
                                        }
                                        return fb
                                    },
                                    Bb = function(Mb, fb, Ta) {
                                        if (!Jc(fb)) return !1;
                                        for (var Pa = cb(Object(fb), Ta, []), sb = 0; Pa && sb < Pa.length; sb++) M(Mb, Pa[sb]);
                                        return !!Pa && 0 < Pa.length
                                    },
                                    V;
                                if (t.vtp_useEcommerceDataLayer) {
                                    var Yc = !1;
                                    if (t.vtp_useGA4SchemaForEcommerce) {
                                        t.vtp_gtmCachedValues && (V = t.vtp_gtmCachedValues.eventModel);
                                        V = V || oj(t.vtp_gtmEventId, "eventModel");
                                        Yc = !!V
                                    }
                                    Yc || (V = fv("ecommerce", 1))
                                } else t.vtp_ecommerceMacroData && (V = t.vtp_ecommerceMacroData.ecommerce, !V && t.vtp_useGA4SchemaForEcommerce &&
                                    (V = t.vtp_ecommerceMacroData));
                                if (!Jc(V)) return null;
                                V = Object(V);
                                t.vtp_gtmCachedValues && (E = t.vtp_gtmCachedValues.event);
                                E = E || String(oj(t.vtp_gtmEventId, "event"));
                                if (!c && t.vtp_useGA4SchemaForEcommerce)
                                    if (V = P(V), E === R.Hb && !V.impressions && V.items) V.impressions = Lb(V.items);
                                    else if (E === R.cc && !V.promoView && V.items) V.promoView = {}, V.promoView.promotions = Lb(V.items);
                                else if (E === R.bd && !V.promoClick) V.items &&
                                    (V.promoClick = {}, V.promoClick.promotions = Lb(V.items)), Ab(V, "promoClick");
                                else if (Wa.hasOwnProperty(E)) {
                                    var Xa = Wa[E];
                                    V[Xa] || (V.items && (V[Xa] = {}, V[Xa].products = Lb(V.items)), Ab(V, Xa))
                                }
                                var Fa = {},
                                    te = V.currencyCode;
                                t.vtp_useGA4SchemaForEcommerce && (te = te || V.currency);
                                var ue = cb(C, "currencyCode", te);
                                if (c) {
                                    ue && (Fa.currencyCode = ue);
                                    V.impressions && (Fa.impressions = V.impressions);
                                    V.promoView && (Fa.promoView = V.promoView);
                                    if (t.vtp_useGA4SchemaForEcommerce) {
                                        if (E === R.Hb && !V.impressions) V.items && (Fa.impressions = V.items,
                                            Fa.translateIfKeyEquals = "impressions");
                                        else if (E === R.cc && !V.promoView) V.promoView = {}, V.items && (Fa.promoView = {}, Fa.promoView.promotions = V.items, Fa.translateIfKeyEquals = "promoView");
                                        else if (E === R.bd && !V.promoClick) V.promoClick = {}, V.items && (Fa.promoClick = {}, Fa.promoClick.promotions = V.items, Fa.translateIfKeyEquals = "promoClick", Ab(V, "promoClick", Fa));
                                        else if (Wa.hasOwnProperty(E)) {
                                            var ve = Wa[E];
                                            !V[ve] && V.items && (Fa[ve] = {}, Fa[ve].products = V.items, Fa.translateIfKeyEquals = "products", Ab(V, ve, Fa))
                                        }
                                        var th = Fa.translateIfKeyEquals;
                                        if ("promoClick" === th || "products" === th) return Fa
                                    }
                                    if (V.promoClick) return Fa.promoClick = V.promoClick, Fa
                                } else if (void 0 !== ue && M("set", "&cu", ue), Bb("ec:addImpression", V, "impressions"), Bb("ec:addPromo", V[V.promoClick ? "promoClick" : "promoView"], "promotions") && V.promoClick) return M("ec:setAction", "promo_click", V.promoClick.actionField), null;
                                for (var Gd = "detail checkout checkout_option click add remove purchase refund".split(" "), we = "refund purchase remove checkout checkout_option add click detail".split(" "),
                                        pc = 0; pc < Gd.length; pc++) {
                                    var qc = V[Gd[pc]];
                                    if (qc) {
                                        c ? Fa[Gd[pc]] = qc : (Bb("ec:addProduct", qc, "products"), M("ec:setAction", Gd[pc], qc.actionField));
                                        if (fn)
                                            for (var Zc = 0; Zc < we.length; Zc++) {
                                                var Hd = V[we[Zc]];
                                                if (Hd) {
                                                    Hd !== qc && Ng(13);
                                                    break
                                                }
                                            }
                                        return Fa
                                    }
                                }
                                c && t.vtp_useGA4SchemaForEcommerce && Wa.hasOwnProperty(E) && Ab(V, Wa[E], Fa);
                                return Fa;
                                return null
                            },
                            S = function(Ba, ha) {
                                return void 0 === t[Ba] ? w[ha] : t[Ba]
                            },
                            ia = t.vtp_trackingId || w.trackingId;
                        if (!c) {
                            var fa = function(Ba, ha) {
                                    void 0 !== ha && M("set", Ba, ha)
                                },
                                ya = {
                                    name: L
                                };
                            p(C, ya, !0);
                            F("create", ia, ya);
                            M("set", "&gtm", Wn(!0));
                            N("contentGroup", z);
                            N("dimension", x);
                            N("metric", y);
                            var Ka = !1;
                            ah() && !Ka && (M("set", "&gcs", mh()), b(ia, t, L));
                            C._x_19 && C._x_20 && !e[L] && (e[L] = !0, F(um(L, String(C._x_20))));
                            t.vtp_enableRecaptcha && M("require", "recaptcha", "recaptcha.js");
                            v("nonInteraction", "vtp_nonInteraction");
                            var ib = {};
                            p(C, ib, !1) && M("set", ib);
                            t.vtp_enableLinkId && M("require", "linkid", "linkid.js");
                            M("set", "hitCallback", function() {
                                var Ba = C && C.hitCallback;
                                Ha(Ba) && Ba();
                                t.vtp_gtmOnSuccess()
                            })
                        }
                        var Na;
                        if ("TRACK_EVENT" == t.vtp_trackType) {
                            if (!c) {
                                t.vtp_enableEcommerce && (M("require", "ec", "ec.js"), K());
                                var Cd = {
                                    hitType: "event",
                                    eventCategory: String(S("vtp_eventCategory", "category")),
                                    eventAction: String(S("vtp_eventAction", "action")),
                                    eventLabel: ca(String, S("vtp_eventLabel", "label")),
                                    eventValue: ca(Va, S("vtp_eventValue", "value"))
                                };
                                p(Na, Cd, !1);
                                M("send", Cd);
                            }
                        } else if ("TRACK_SOCIAL" ==
                            t.vtp_trackType) {
                            if (!c) {}
                        } else if ("TRACK_TRANSACTION" == t.vtp_trackType) {} else if ("TRACK_TIMING" == t.vtp_trackType) {
                            if (!c) {}
                        } else if ("DECORATE_LINK" == t.vtp_trackType) {} else if ("DECORATE_FORM" == t.vtp_trackType) {} else if ("TRACK_DATA" == t.vtp_trackType) {} else if (!c) {
                            t.vtp_enableEcommerce && (M("require", "ec", "ec.js"), K());
                            if (t.vtp_doubleClick || "DISPLAY_FEATURES" == t.vtp_advertisingFeaturesType) {
                                var re = "_dc_gtm_" + String(t.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
                                    "");
                                M("require", "displayfeatures", void 0, {
                                    cookieName: re
                                })
                            }
                            if ("DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == t.vtp_advertisingFeaturesType) {
                                var Dk = "_dc_gtm_" + String(t.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                                M("require", "adfeatures", {
                                    cookieName: Dk
                                })
                            }
                            Na ? M("send", "pageview", Na) : M("send", "pageview");
                            r(t, O);
                            Ya(C.urlPassthrough) && rm(O)
                        }
                        if (!d) {
                            var Fc = t.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                            t.vtp_useInternalVersion && !t.vtp_useDebugVersion && (Fc = "internal/" + Fc);
                            d = !0;
                            var se = Rn(C._x_19, "/analytics.js"),
                                sh = zl("https:", "http:", "//www.google-analytics.com/" + Fc, C && !!C.forceSSL);
                            W("analytics.js" === Fc && se ? se : sh, function() {
                                var Ba = nm();
                                Ba && Ba.loaded || t.vtp_gtmOnFailure();
                            }, t.vtp_gtmOnFailure)
                        }
                    } else J(t.vtp_gtmOnFailure)
                };
            (function(t) {
                Z.__ua = t;
                Z.__ua.m = "ua";
                Z.__ua.o = !0;
                Z.__ua.priorityOverride = 0
            })(function(t) {
                qh(function() {
                    u(t)
                }, [R.J, R.D])
            })
        }();
    Z.h.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.m = "inject_script";
                Z.__inject_script.o = !0;
                Z.__inject_script.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (ag(Th(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    W: a
                }
            })
        }();


    Z.h.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.m = "cid";
                Z.__cid.o = !0;
                Z.__cid.priorityOverride = 0
            })(function() {
                return vf.N
            })
        }();

    Z.h.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.m = "gclidw";
                Z.__gclidw.o = !0;
                Z.__gclidw.priorityOverride = 100
            })(function(b) {
                J(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = null;
                b.vtp_enableCookieUpdateFeature && (g = !0, void 0 !== b.vtp_cookieUpdate && (g = !!b.vtp_cookieUpdate));
                var h = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature &&
                    (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain || Ck()) && Zk(a, h));
                Wk(h);
                bl(["aw", "dc"], h);
                pl(g, h);
                var l = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var n = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    al(a, n, b.vtp_urlPosition, !!b.vtp_formDecoration, l)
                }
                var p = fv(R.T);
                Ho({
                    Re: !1,
                    xa: void 0 != p && !1 !== p,
                    Cd: h,
                    Md: !0
                });
                b.vtp_enableUrlPassthrough && dl(["aw", "dc", "gb"])
            })
        }();

    Z.h.aev = ["google"],
        function() {
            function a(u, t, v) {
                var w = u || oj(t, "gtm");
                if (w) return w[v]
            }

            function b(u, t, v, w, z) {
                z || (z = "element");
                var x = t + "." + v,
                    y;
                if (p.hasOwnProperty(x)) y = p[x];
                else {
                    var B = a(u, t, z);
                    if (B && (y = w(B), p[x] = y, q.push(x), 35 < q.length)) {
                        var D = q.shift();
                        delete p[D]
                    }
                }
                return y
            }

            function c(u, t, v, w) {
                var z = a(u, t, r[v]);
                return void 0 !== z ? z : w
            }

            function d(u, t) {
                if (!u) return !1;
                var v = e(cv());
                Ja(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var w = [v], z = 0; z < t.length; z++) {
                    var x = t[z];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x =
                                new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x = x.domain;
                    if (x instanceof RegExp) {
                        if (x.test(u)) return !1
                    } else {
                        var y = x;
                        if (0 != y.length) {
                            if (0 <= e(u).indexOf(y)) return !1;
                            w.push(e(y))
                        }
                    }
                }
                return !Ov(u, w)
            }

            function e(u) {
                n.test(u) || (u = "http://" + u);
                return Rh(Th(u), "HOST", !0)
            }

            function f(u, t, v, w) {
                switch (u) {
                    case "SUBMIT_TEXT":
                        return b(t, v, "FORM." + u, g, "formSubmitElement") || w;
                    case "LENGTH":
                        var z = b(t, v, "FORM." + u, h);
                        return void 0 === z ? w : z;
                    case "INTERACTED_FIELD_ID":
                        return l(t, v, "id", w);
                    case "INTERACTED_FIELD_NAME":
                        return l(t,
                            v, "name", w);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t, v, "type", w);
                    case "INTERACTED_FIELD_POSITION":
                        var x = a(t, v, "interactedFormFieldPosition");
                        return void 0 === x ? w : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = a(t, v, "interactSequenceNumber");
                        return void 0 === y ? w : y;
                    default:
                        return w
                }
            }

            function g(u) {
                switch (u.tagName.toLowerCase()) {
                    case "input":
                        return mc(u, "value");
                    case "button":
                        return nc(u);
                    default:
                        return null
                }
            }

            function h(u) {
                if ("form" === u.tagName.toLowerCase() && u.elements) {
                    for (var t = 0, v = 0; v < u.elements.length; v++) ar(u.elements[v]) &&
                        t++;
                    return t
                }
            }

            function l(u, t, v, w) {
                var z = a(u, t, "interactedFormField");
                return z && mc(z, v) || w
            }
            var n = /^https?:\/\//i,
                p = {},
                q = [],
                r = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(u) {
                Z.__aev = u;
                Z.__aev.m = "aev";
                Z.__aev.o = !0;
                Z.__aev.priorityOverride =
                    0
            })(function(u) {
                var t = u.vtp_gtmEventId,
                    v = u.vtp_defaultValue,
                    w = u.vtp_varType,
                    z;
                u.vtp_gtmCachedValues && (z = u.vtp_gtmCachedValues.gtm);
                switch (w) {
                    case "TAG_NAME":
                        var x = a(z, t, "element");
                        return x && x.tagName || v;
                    case "TEXT":
                        return b(z, t, w, nc) || v;
                    case "URL":
                        var y;
                        a: {
                            var B = String(a(z, t, "elementUrl") || v || ""),
                                D = Th(B),
                                C = String(u.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    y = B;
                                    break a;
                                case "IS_OUTBOUND":
                                    y =
                                        d(B, u.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Rh(D, C, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var E;
                        if (void 0 === u.vtp_attribute) E = c(z, t, w, v);
                        else {
                            var F = u.vtp_attribute,
                                O = a(z, t, "element");
                            E = O && mc(O, F) || v || ""
                        }
                        return E;
                    case "MD":
                        var L = u.vtp_mdValue,
                            M = b(z, t, "MD", Wu);
                        return L && M ? Zu(M, L) || v : M || v;
                    case "FORM":
                        return f(String(u.vtp_component || "SUBMIT_TEXT"), z, t, v);
                    default:
                        var ca = c(z, t, w, v);
                        ov(ca, "aev", u.vtp_gtmEventId);
                        return ca
                }
            })
        }();

    Z.h.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.m = "gas";
                Z.__gas.o = !0;
                Z.__gas.priorityOverride = 0
            })(function(a) {
                var b = P(a),
                    c = b;
                c[pe.sb] = null;
                c[pe.li] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.h.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : cv()
            }

            function b(f, g) {
                kc(f, "hashchange", function(h) {
                    var l = a(h);
                    g({
                        source: "hashchange",
                        state: null,
                        url: ev(l),
                        U: dv(l)
                    })
                })
            }

            function c(f, g) {
                kc(f, "popstate", function(h) {
                    var l = a(h);
                    g({
                        source: "popstate",
                        state: h.state,
                        url: ev(l),
                        U: dv(l)
                    })
                })
            }

            function d(f, g, h) {
                var l = g.history,
                    n = l[f];
                if (Ha(n)) try {
                    l[f] = function(p, q, r) {
                        n.apply(l, [].slice.call(arguments, 0));
                        h({
                            source: f,
                            state: p,
                            url: ev(cv()),
                            U: dv(cv())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: X("history").state || null,
                    url: ev(cv()),
                    U: dv(cv())
                };
                return function(g) {
                    var h = f,
                        l = {};
                    l[h.source] = !0;
                    l[g.source] = !0;
                    if (!l.popstate || !l.hashchange || h.U != g.U) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": g.source,
                            "gtm.oldUrlFragment": f.U,
                            "gtm.newUrlFragment": g.U,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": g.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": g.url
                        };
                        f = g;
                        gv(n)
                    }
                }
            }(function(f) {
                Z.__hl = f;
                Z.__hl.m = "hl";
                Z.__hl.o = !0;
                Z.__hl.priorityOverride =
                    0
            })(function(f) {
                var g = X("self");
                if (!lv("hl")) {
                    var h = e();
                    b(g, h);
                    c(g, h);
                    d("pushState", g, h);
                    d("replaceState", g, h);
                    mv("hl")
                }
                J(f.vtp_gtmOnSuccess)
            })
        }();
    Z.h.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.m = "remm";
                Z.__remm.o = !0;
                Z.__remm.priorityOverride = 0
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var l = new RegExp(h, e);
                    if (l.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
                        f = n;
                        break
                    }
                }
                ov(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();




    Z.h.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.m = "paused";
                Z.__paused.o = !0;
                Z.__paused.priorityOverride = 0
            })(function(a) {
                J(a.vtp_gtmOnFailure)
            })
        }();

    Z.h.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                l = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = I.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, ec(n, l));
                                d.insertBefore(n, null);
                                p || l()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, l, g)()
                            } else d.insertBefore(h, null), l()
                        } else f()
                    } catch (r) {
                        J(g)
                    }
                }
            }
            var c = function(d) {
                if (I.body) {
                    var e =
                        d.vtp_gtmOnFailure,
                        f = pv(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.aj,
                        h = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? b(g, h, e) : a(I.body, oc(g), h, e)()
                } else av(function() {
                        c(d)
                    },
                    200)
            };
            Z.__html = c;
            Z.__html.m = "html";
            Z.__html.o = !0;
            Z.__html.priorityOverride = 0
        }();








    var Oy = {};
    Oy.macro = function(a) {
        if (Nu.Ke.hasOwnProperty(a)) return Nu.Ke[a]
    }, Oy.onHtmlSuccess = Nu.Fg(!0), Oy.onHtmlFailure = Nu.Fg(!1);
    Oy.dataLayer = ij;
    Oy.callback = function(a) {
        Zi.hasOwnProperty(a) && Ha(Zi[a]) && Zi[a]();
        delete Zi[a]
    };
    Oy.bootstrap = 0;
    Oy._spx = !1;

    function Py() {
        U[vf.N] = Oy;
        eb($i, Z.h);
        bf = bf || Nu;
        cf = rf
    }

    function Qy() {
        var a = !1;
        a && jm("INIT");
        Qg().s();
        U = A.google_tag_manager = A.google_tag_manager || {};
        zo();
        Hk.enable_gbraid_cookie_write = !0;
        var b = !!U[vf.N];
        if (b) {
            var c = U.zones;
            c && c.unregisterChild(vf.N);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Ve.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++) Ye.push(g[h]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++) Xe.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], u = {}, t = 0; t < r.length; t++) u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
                We.push(u)
            }
            $e = Z;
            af = Us;
            var v = data.permissions || {},
                w = data.sandboxed_scripts,
                z = data.security_groups;
            Tt();
            Bf = new Af(v);
            if (void 0 !== w)
                for (var x = ["sandboxedScripts"], y = 0; y < w.length; y++) {
                    var B = w[y].replace(/^_*/, "");
                    $i[B] = x
                }
            Wt(z);
            Py();
            Mu();
            Xl = !1;
            Yl = 0;
            if ("interactive" ==
                I.readyState && !I.createEventObject || "complete" == I.readyState) $l();
            else {
                kc(I, "DOMContentLoaded", $l);
                kc(I, "readystatechange", $l);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !A.frameElement
                    } catch (L) {}
                    D && am()
                }
                kc(A, "load", $l)
            }
            Gs = !1;
            "complete" === I.readyState ? Is() : kc(A, "load", Is);
            fn &&
                A.setInterval($m, 864E5);
            Xi = (new Date).getTime();
            if (a) {
                var O = km("INIT");
            }
        }
    }
    (function(a) {
        if (!A["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = Th(I.referrer);
                b = "cct.google" === Qh(c, "host")
            }
            if (!b) {
                var d = Aj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (A["__TAGGY_INSTALLED"] = !0, gc("https://cct.google/taggy/agent.js"))
        }
        var f = function() {
                var n = A["google.tagmanager.debugui2.queue"];
                n || (n = [], A["google.tagmanager.debugui2.queue"] = n, gc("https://www.googletagmanager.com/debug/bootstrap"));
                var p = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: $b,
                        containerProduct: "GTM",
                        debug: !1
                    }
                };
                p.data.resume = function() {
                    a()
                };
                vf.th && (p.data.initialPublish = !0);
                n.push(p)
            },
            g = "x" === Rh(A.location, "query", !1, void 0, "gtm_debug");
        if (!g && I.referrer) {
            var h = Th(I.referrer);
            g = "tagassistant.google.com" === Qh(h, "host")
        }
        if (!g) {
            var l = Aj("__TAG_ASSISTANT");
            g = l.length && l[0].length
        }!g && A.__TAG_ASSISTANT_API && (g = !0);
        !g && I.documentElement.hasAttribute("data-tag-assistant-present") && (g = !0);
        g && $b ? f() : a()
    })(Qy);

})()