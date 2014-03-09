/** Compiled By kissy-xtemplate */
KISSY.add(function (S, require, exports, module) {
    /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/
    var t = function (scope, S, payload, undefined) {
        var buffer = "",
            engine = this,
            moduleWrap, escapeHtml = S.escapeHtml,
            nativeCommands = engine.nativeCommands,
            utils = engine.utils;
        if (typeof module !== "undefined" && module.kissy) {
            moduleWrap = module;
        }
        var callCommandUtil = utils.callCommand,
            eachCommand = nativeCommands.each,
            withCommand = nativeCommands["with"],
            ifCommand = nativeCommands["if"],
            setCommand = nativeCommands.set,
            includeCommand = nativeCommands.include,
            parseCommand = nativeCommands.parse,
            extendCommand = nativeCommands.extend,
            blockCommand = nativeCommands.block,
            macroCommand = nativeCommands.macro;
        buffer += '';
        var option0 = {};
        var params1 = [];
        var id2 = scope.resolve(["type"]);
        params1.push(id2 === ('combo'));
        option0.params = params1;
        option0.fn = function (scope) {
            var buffer = "";
            buffer += '\n<div id="J_Order_';
            var id3 = scope.resolve(["uniqueId"]);
            buffer += escapeHtml(id3);
            buffer += '"\n     class="J_Order clearfix order-body combo-order J_Combo ';
            var option4 = {};
            var params5 = [];
            var id6 = scope.resolve(["isValid"]);
            params5.push(id6 === (false));
            option4.params = params5;
            option4.fn = function (scope) {
                var buffer = "";
                buffer += ' order-invalid ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option4, payload);
            buffer += '">\n    <div class="J_ItemHead shop clearfix">\n        ';
            var option7 = {};
            var params8 = [];
            var id9 = scope.resolve(["isValid"]);
            params8.push(id9);
            option7.params = params8;
            option7.fn = function (scope) {
                var buffer = "";
                buffer += '\n        <span class="s-checkbox J_forShop"></span>\n        ';
                return buffer;
            };
            option7.inverse = function (scope) {
                var buffer = "";
                buffer += '\n        <span class="act-status">套餐已失效</span>\n        ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option7, payload);
            buffer += '\n        ';
            var option10 = {};
            var params11 = [];
            var id12 = scope.resolve(["host"]);
            params11.push(id12 !== ('C'));
            option10.params = params11;
            option10.fn = function (scope) {
                var buffer = "";
                buffer += '<span class="icon-';
                var id13 = scope.resolve(["host"]);
                buffer += escapeHtml(id13);
                buffer += '"></span>';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option10, payload);
            buffer += '\n        <span class="act-name" title="';
            var id14 = scope.resolve(["title"]);
            buffer += escapeHtml(id14);
            buffer += '">套餐：';
            var id15 = scope.resolve(["title"]);
            buffer += escapeHtml(id15);
            buffer += '</span>\n    </div>\n    <div class="order-content clearfix">\n        <div id="J_BundleList_';
            var id16 = scope.resolve(["uniqueId"]);
            buffer += escapeHtml(id16);
            buffer += '" class="item-list">\n            ';
            var option17 = {};
            var params18 = [];
            var id19 = scope.resolve(["bundles"]);
            params18.push(id19);
            option17.params = params18;
            option17.fn = function (scope) {
                var buffer = "";
                buffer += '\n            ';
                var option20 = {};
                var params21 = [];
                var id22 = scope.resolve(["bundles"]);
                params21.push(id22);
                option20.params = params21;
                option20.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            <div id="J_Bundle_';
                    var option23 = {};
                    var params24 = [];
                    var id25 = scope.resolve(["id"]);
                    params24.push(id25);
                    option23.params = params24;
                    option23.fn = function (scope) {
                        var buffer = "";
                        buffer += '';
                        var id26 = scope.resolve(["id"]);
                        buffer += escapeHtml(id26);
                        buffer += '';
                        return buffer;
                    };
                    option23.inverse = function (scope) {
                        var buffer = "";
                        buffer += '';
                        var id27 = scope.resolve(["uniqueId"], 1);
                        buffer += escapeHtml(id27);
                        buffer += '_';
                        var id28 = scope.resolve(["xindex"]);
                        buffer += escapeHtml(id28);
                        buffer += '';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option23, payload);
                    buffer += '"\n                 class="bundle ';
                    var option29 = {};
                    var params30 = [];
                    var id31 = scope.resolve(["xindex"]);
                    var id32 = scope.resolve(["xcount"]);
                    params30.push(id31 === (id32 - (1)));
                    option29.params = params30;
                    option29.fn = function (scope) {
                        var buffer = "";
                        buffer += ' bundle-last ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option29, payload);
                    buffer += '">\n                ';
                    var option33 = {};
                    var params34 = [];
                    var id35 = scope.resolve(["orders"]);
                    params34.push(id35);
                    option33.params = params34;
                    option33.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n                ';
                        var option36 = {};
                        var params37 = [];
                        var id38 = scope.resolve(["orders"]);
                        params37.push(id38);
                        option36.params = params37;
                        option36.fn = function (scope) {
                            var buffer = "";
                            buffer += '\n                <div id="J_ItemHolder_';
                            var id39 = scope.resolve(["cartId"]);
                            buffer += escapeHtml(id39);
                            buffer += '"></div>\n                ';
                            return buffer;
                        };
                        buffer += eachCommand.call(engine, scope, option36, payload);
                        buffer += '\n                ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option33, payload);
                    buffer += '\n            </div>\n            ';
                    return buffer;
                };
                buffer += eachCommand.call(engine, scope, option20, payload);
                buffer += '\n            ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option17, payload);
            buffer += '\n        </div>\n        <div class="item-operations J_ComboOp">\n            <a href="javascript:void(0);" class="btn-item-del J_ComboDel J_MakePoint">删除</a>\n        </div>\n    </div>\n</div>\n';
            return buffer;
        };
        option0.inverse = function (scope) {
            var buffer = "";
            buffer += '\n';
            var option40 = {};
            var params41 = [];
            var id42 = scope.resolve(["type"]);
            params41.push(id42 === ('act'));
            option40.params = params41;
            option40.fn = function (scope) {
                var buffer = "";
                buffer += '\n<div id="J_Order_';
                var id43 = scope.resolve(["uniqueId"]);
                buffer += escapeHtml(id43);
                buffer += '"\n     class="J_Order clearfix order-body cross-shop-act J_CrossShopAct ';
                var option44 = {};
                var params45 = [];
                var id46 = scope.resolve(["isValid"]);
                params45.push(id46 === (false));
                option44.params = params45;
                option44.fn = function (scope) {
                    var buffer = "";
                    buffer += ' order-invalid ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option44, payload);
                buffer += '">\n    <div class="J_ItemHead shop clearfix ';
                var option47 = {};
                var params48 = [];
                var id49 = scope.resolve(["isValid"]);
                id49 = !id49;
                params48.push(id49);
                option47.params = params48;
                option47.fn = function (scope) {
                    var buffer = "";
                    buffer += ' disable';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option47, payload);
                buffer += '">\n        <div class="shop-info">\n            ';
                var option50 = {};
                var params51 = [];
                var id52 = scope.resolve(["isValid"]);
                params51.push(id52);
                option50.params = params51;
                option50.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            <span class="s-checkbox J_forShop"></span>\n            ';
                    return buffer;
                };
                option50.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n            <span class="act-status">活动已失效</span>\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option50, payload);
                buffer += '\n            <a href="';
                var id53 = scope.resolve(["url"]);
                buffer += escapeHtml(id53);
                buffer += '" class="act-name J_MakePoint" data-point="tbcart.8.15" target="_blank" title="';
                var id54 = scope.resolve(["title"]);
                buffer += escapeHtml(id54);
                buffer += '">活动：';
                var id55 = scope.resolve(["title"]);
                buffer += escapeHtml(id55);
                buffer += '</a>\n        </div>\n        ';
                var option56 = {};
                var params57 = [];
                var id58 = scope.resolve(["scrollPromos"]);
                params57.push(id58);
                option56.params = params57;
                option56.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="act-promo">\n            <div class="act-promo-wrapper">\n                <ul class="act-promo-hint J_ScrollingPromoHint">\n                    ';
                    var option59 = {};
                    var params60 = [];
                    var id61 = scope.resolve(["scrollPromos"]);
                    params60.push(id61);
                    option59.params = params60;
                    option59.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n                    <li>';
                        var id62 = scope.resolve(["campaignPlan"]);
                        buffer += escapeHtml(id62);
                        buffer += '</li>\n                    ';
                        return buffer;
                    };
                    buffer += eachCommand.call(engine, scope, option59, payload);
                    buffer += '\n                </ul>\n            </div>\n            <span class="pipe-left"></span><span class="pipe-right"></span>\n        </div>\n        ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option56, payload);
                buffer += '\n    </div>\n    <div class="order-content">\n        <div id="J_BundleList_';
                var id63 = scope.resolve(["uniqueId"]);
                buffer += escapeHtml(id63);
                buffer += '" class="item-list">\n            ';
                var option64 = {};
                var params65 = [];
                var id66 = scope.resolve(["bundles"]);
                params65.push(id66);
                option64.params = params65;
                option64.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    var option67 = {};
                    var params68 = [];
                    var id69 = scope.resolve(["bundles"]);
                    params68.push(id69);
                    option67.params = params68;
                    option67.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n            <div id="J_Bundle_';
                        var option70 = {};
                        var params71 = [];
                        var id72 = scope.resolve(["id"]);
                        params71.push(id72);
                        option70.params = params71;
                        option70.fn = function (scope) {
                            var buffer = "";
                            buffer += '';
                            var id73 = scope.resolve(["id"]);
                            buffer += escapeHtml(id73);
                            buffer += '';
                            return buffer;
                        };
                        option70.inverse = function (scope) {
                            var buffer = "";
                            buffer += '';
                            var id74 = scope.resolve(["uniqueId"], 1);
                            buffer += escapeHtml(id74);
                            buffer += '_';
                            var id75 = scope.resolve(["xindex"]);
                            buffer += escapeHtml(id75);
                            buffer += '';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option70, payload);
                        buffer += '"\n                 class="bundle ';
                        var option76 = {};
                        var params77 = [];
                        var id78 = scope.resolve(["xindex"]);
                        var id79 = scope.resolve(["xcount"]);
                        params77.push(id78 === (id79 - (1)));
                        option76.params = params77;
                        option76.fn = function (scope) {
                            var buffer = "";
                            buffer += ' bundle-last ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option76, payload);
                        buffer += '">\n                ';
                        var option80 = {};
                        var params81 = [];
                        var id82 = scope.resolve(["orders"]);
                        params81.push(id82);
                        option80.params = params81;
                        option80.fn = function (scope) {
                            var buffer = "";
                            buffer += '\n                ';
                            var option83 = {};
                            var params84 = [];
                            var id85 = scope.resolve(["orders"]);
                            params84.push(id85);
                            option83.params = params84;
                            option83.fn = function (scope) {
                                var buffer = "";
                                buffer += '\n                <div id="J_ItemHolder_';
                                var id86 = scope.resolve(["cartId"]);
                                buffer += escapeHtml(id86);
                                buffer += '"></div>\n                ';
                                return buffer;
                            };
                            buffer += eachCommand.call(engine, scope, option83, payload);
                            buffer += '\n                ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option80, payload);
                        buffer += '\n            </div>\n            ';
                        return buffer;
                    };
                    buffer += eachCommand.call(engine, scope, option67, payload);
                    buffer += '\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option64, payload);
                buffer += '\n        </div>\n        ';
                var option87 = {};
                var params88 = [];
                var id89 = scope.resolve(["gradeMessage"]);
                params88.push(id89);
                option87.params = params88;
                option87.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="act-saveinfo">\n            <div class="msg">\n                <p class="naked tips">\n                    ';
                    var id90 = scope.resolve(["gradeMessage"]);
                    buffer += escapeHtml(id90);
                    buffer += '\n                </p>\n            </div>\n        </div>\n        ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option87, payload);
                buffer += '\n    </div>\n</div>\n';
                return buffer;
            };
            option40.inverse = function (scope) {
                var buffer = "";
                buffer += '\n<div id="J_Order_';
                var id91 = scope.resolve(["uniqueId"]);
                buffer += escapeHtml(id91);
                buffer += '"\n     class="J_Order clearfix order-body ';
                var option92 = {};
                var params93 = [];
                var id94 = scope.resolve(["extraItem"]);
                params93.push(id94);
                option92.params = params93;
                option92.fn = function (scope) {
                    var buffer = "";
                    buffer += 'order-redemption';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option92, payload);
                buffer += ' ';
                var option95 = {};
                var params96 = [];
                var id97 = scope.resolve(["isValid"]);
                params96.push(id97 === (false));
                option95.params = params96;
                option95.fn = function (scope) {
                    var buffer = "";
                    buffer += ' order-invalid ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option95, payload);
                buffer += '">\n    <div class="J_ItemHead shop clearfix">\n        <div class="shop-info">\n            ';
                var option98 = {};
                var params99 = [];
                var id100 = scope.resolve(["isValid"]);
                params99.push(id100);
                option98.params = params99;
                option98.fn = function (scope) {
                    var buffer = "";
                    buffer += '<span class="s-checkbox J_forShop"></span>';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option98, payload);
                buffer += '\n            ';
                var option101 = {};
                var params102 = [];
                var id103 = scope.resolve(["host"]);
                params102.push(id103 !== ('C'));
                option101.params = params102;
                option101.fn = function (scope) {
                    var buffer = "";
                    buffer += '<span class="icon-';
                    var id104 = scope.resolve(["host"]);
                    buffer += escapeHtml(id104);
                    buffer += '"></span>';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option101, payload);
                buffer += '\n            ';
                var option105 = {};
                var params106 = [];
                var id107 = scope.resolve(["title"]);
                params106.push(id107);
                option105.params = params106;
                option105.fn = function (scope) {
                    var buffer = "";
                    buffer += 'shop: <a href="';
                    var id108 = scope.resolve(["url"]);
                    buffer += escapeHtml(id108);
                    buffer += '" target="_blank" title="';
                    var id109 = scope.resolve(["title"]);
                    buffer += escapeHtml(id109);
                    buffer += '" class="J_MakePoint"\n                                 data-point="tbcart.8.15">';
                    var id110 = scope.resolve(["title"]);
                    buffer += escapeHtml(id110);
                    buffer += '</a>\n            ';
                    return buffer;
                };
                option105.inverse = function (scope) {
                    var buffer = "";
                    buffer += '卖家：<a href="';
                    var id111 = scope.resolve(["url"]);
                    buffer += escapeHtml(id111);
                    buffer += '" target="_blank" title="';
                    var id112 = scope.resolve(["seller"]);
                    buffer += escapeHtml(id112);
                    buffer += '" class="J_MakePoint"\n                          data-point="tbcart.8.15">';
                    var id113 = scope.resolve(["seller"]);
                    buffer += escapeHtml(id113);
                    buffer += '</a>\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option105, payload);
                buffer += '\n        </div>\n        ';
                var option114 = {};
                var params115 = [];
                var id116 = scope.resolve(["scrollPromos"]);
                params115.push(id116);
                option114.params = params115;
                option114.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="order-promo-info">\n            <div class="scrolling-container">\n                <ul class="scrolling-promo-hint J_ScrollingPromoHint">\n                    ';
                    var option117 = {};
                    var params118 = [];
                    var id119 = scope.resolve(["scrollPromos"]);
                    params118.push(id119);
                    option117.params = params118;
                    option117.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n                    ';
                        var id120 = scope.resolve(["this"]);
                        if (id120 || id120 === 0) {
                            buffer += id120;
                        }
                        buffer += '\n                    ';
                        return buffer;
                    };
                    buffer += eachCommand.call(engine, scope, option117, payload);
                    buffer += '\n                </ul>\n            </div>\n        </div>\n        ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option114, payload);
                buffer += '\n    </div>\n    <div class="order-content">\n        <div id="J_BundleList_';
                var id121 = scope.resolve(["uniqueId"]);
                buffer += escapeHtml(id121);
                buffer += '" class="item-list">\n            ';
                var option122 = {};
                var params123 = [];
                var id124 = scope.resolve(["bundles"]);
                params123.push(id124);
                option122.params = params123;
                option122.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    var option125 = {};
                    var params126 = [];
                    var id127 = scope.resolve(["bundles"]);
                    params126.push(id127);
                    option125.params = params126;
                    option125.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n            <div id="J_Bundle_';
                        var option128 = {};
                        var params129 = [];
                        var id130 = scope.resolve(["id"]);
                        params129.push(id130);
                        option128.params = params129;
                        option128.fn = function (scope) {
                            var buffer = "";
                            buffer += '';
                            var id131 = scope.resolve(["id"]);
                            buffer += escapeHtml(id131);
                            buffer += '';
                            return buffer;
                        };
                        option128.inverse = function (scope) {
                            var buffer = "";
                            buffer += '';
                            var id132 = scope.resolve(["uniqueId"], 1);
                            buffer += escapeHtml(id132);
                            buffer += '_';
                            var id133 = scope.resolve(["xindex"]);
                            buffer += escapeHtml(id133);
                            buffer += '';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option128, payload);
                        buffer += '"\n                 class="bundle ';
                        var option134 = {};
                        var params135 = [];
                        var id136 = scope.resolve(["xindex"]);
                        var id137 = scope.resolve(["xcount"]);
                        params135.push(id136 === (id137 - (1)));
                        option134.params = params135;
                        option134.fn = function (scope) {
                            var buffer = "";
                            buffer += ' bundle-last ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option134, payload);
                        buffer += '">\n                ';
                        var option138 = {};
                        var params139 = [];
                        var id140 = scope.resolve(["orders"]);
                        params139.push(id140);
                        option138.params = params139;
                        option138.fn = function (scope) {
                            var buffer = "";
                            buffer += '\n                ';
                            var option141 = {};
                            var params142 = [];
                            var id143 = scope.resolve(["orders"]);
                            params142.push(id143);
                            option141.params = params142;
                            option141.fn = function (scope) {
                                var buffer = "";
                                buffer += '\n                <div id="J_ItemHolder_';
                                var id144 = scope.resolve(["cartId"]);
                                buffer += escapeHtml(id144);
                                buffer += '"></div>\n                ';
                                return buffer;
                            };
                            buffer += eachCommand.call(engine, scope, option141, payload);
                            buffer += '\n                ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option138, payload);
                        buffer += '\n            </div>\n            ';
                        return buffer;
                    };
                    buffer += eachCommand.call(engine, scope, option125, payload);
                    buffer += '\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option122, payload);
                buffer += '\n        </div>\n        ';
                var option145 = {};
                var params146 = [];
                var id147 = scope.resolve(["extraItem"]);
                params146.push(id147);
                option145.params = params146;
                option145.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="redemption-info">\n            <div class="redemption-tip clearfix">\n                ';
                    var option148 = {};
                    var params149 = [];
                    var id150 = scope.resolve(["model"]);
                    var id151 = scope.resolve(["model", "totalShopPrice"]);
                    var id152 = scope.resolve(["extraItem", "totalExtraItemNum"]);
                    var id153 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                    params149.push((id150 && id151) && (id152 > id153));
                    option148.params = params149;
                    option148.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n                <div class="remain">还可换购<em class="J_Remain number">';
                        var id154 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                        buffer += escapeHtml(id154);
                        buffer += '</em>件商品</div>\n                ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option148, payload);
                    buffer += '\n                <div class="amount">\n                    <span class="redemption-count">选中商品合计<span class="J_TotalPrice">';
                    var id155 = scope.resolve(["model", "totalShopPrice"]);
                    buffer += escapeHtml(id155);
                    buffer += '元</span>，可换购<em\n                            class="J_TotalRedemptionAmount number">';
                    var id156 = scope.resolve(["extraItem", "totalExtraItemNum"]);
                    buffer += escapeHtml(id156);
                    buffer += '件</em>商品</span>\n                    <a class="J_Redemption entry ';
                    var option157 = {};
                    var params158 = [];
                    var id159 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                    params158.push(id159 === (0));
                    option157.params = params158;
                    option157.fn = function (scope) {
                        var buffer = "";
                        buffer += 'entry-disabled';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option157, payload);
                    buffer += '"\n                       href="#" hidefocus="true">马上换购<span class="arrow"></span></a>\n                </div>\n            </div>\n            <div class="redemption-list J_RedemptionList carousel"></div>\n            <div class="redemption-sku J_SkuPanel"></div>\n        </div>\n        ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option145, payload);
                buffer += '\n    </div>\n</div>\n';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option40, payload);
            buffer += '\n';
            return buffer;
        };
        buffer += ifCommand.call(engine, scope, option0, payload);
        buffer += '\n';
        return buffer;
    };
    t.TPL_NAME = "/Users/zihan/Documents/project/cart/3.0/cart/mods/order/tpl/order.app.xtpl.html";
    return t;
});