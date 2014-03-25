/** Compiled By KISSY-XTemplate */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/
        var t = function (scope, S, buffer, payload, undefined) {
            var engine = this,
                moduleWrap, nativeCommands = engine.nativeCommands,
                utils = engine.utils;
            if ("1.50" !== S.version) {
                throw new Error("current xtemplate file(" + engine.name + ")(v1.50) need to be recompiled using current kissy(v" + S.version + ")!");
            }
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
                macroCommand = nativeCommands.macro,
                debuggerCommand = nativeCommands["debugger"];
            buffer.write('');
            var option0 = {
                escape: 1
            };
            var params1 = [];
            var id2 = scope.resolve(["type"]);
            var exp3 = id2;
            exp3 = (id2) === ('combo');
            params1.push(exp3);
            option0.params = params1;
            option0.fn = function (scope, buffer) {

                buffer.write('\n<div id="J_Order_');
                var id4 = scope.resolve(["uniqueId"]);
                buffer.write(id4, true);
                buffer.write('"\n     class="J_Order clearfix order-body combo-order J_Combo ');
                var option5 = {
                    escape: 1
                };
                var params6 = [];
                var id7 = scope.resolve(["isValid"]);
                var exp8 = id7;
                exp8 = (id7) === (false);
                params6.push(exp8);
                option5.params = params6;
                option5.fn = function (scope, buffer) {

                    buffer.write(' order-invalid ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option5, buffer, 3, payload);
                buffer.write('">\n    <div class="J_ItemHead shop clearfix">\n        ');
                var option9 = {
                    escape: 1
                };
                var params10 = [];
                var id11 = scope.resolve(["isValid"]);
                params10.push(id11);
                option9.params = params10;
                option9.fn = function (scope, buffer) {

                    buffer.write('\n        <span class="s-checkbox J_forShop"></span>\n        ');

                    return buffer;
                };
                option9.inverse = function (scope, buffer) {

                    buffer.write('\n        <span class="act-status">套餐已失效</span>\n        ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option9, buffer, 5, payload);
                buffer.write('\n        ');
                var option12 = {
                    escape: 1
                };
                var params13 = [];
                var id14 = scope.resolve(["host"]);
                var exp15 = id14;
                exp15 = (id14) !== ('C');
                params13.push(exp15);
                option12.params = params13;
                option12.fn = function (scope, buffer) {

                    buffer.write('<span class="icon-');
                    var id16 = scope.resolve(["host"]);
                    buffer.write(id16, true);
                    buffer.write('"></span>');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option12, buffer, 10, payload);
                buffer.write('\n        <span class="act-name" title="');
                var id17 = scope.resolve(["title"]);
                buffer.write(id17, true);
                buffer.write('">套餐：');
                var id18 = scope.resolve(["title"]);
                buffer.write(id18, true);
                buffer.write('</span>\n    </div>\n    <div class="order-content clearfix">\n        <div id="J_BundleList_');
                var id19 = scope.resolve(["uniqueId"]);
                buffer.write(id19, true);
                buffer.write('" class="item-list">\n            ');
                var option20 = {
                    escape: 1
                };
                var params21 = [];
                var id22 = scope.resolve(["bundles"]);
                params21.push(id22);
                option20.params = params21;
                option20.fn = function (scope, buffer) {

                    buffer.write('\n            ');
                    var option23 = {
                        escape: 1
                    };
                    var params24 = [];
                    var id25 = scope.resolve(["bundles"]);
                    params24.push(id25);
                    option23.params = params24;
                    option23.fn = function (scope, buffer) {

                        buffer.write('\n            <div id="J_Bundle_');
                        var option26 = {
                            escape: 1
                        };
                        var params27 = [];
                        var id28 = scope.resolve(["id"]);
                        params27.push(id28);
                        option26.params = params27;
                        option26.fn = function (scope, buffer) {

                            buffer.write('');
                            var id29 = scope.resolve(["id"]);
                            buffer.write(id29, true);
                            buffer.write('');

                            return buffer;
                        };
                        option26.inverse = function (scope, buffer) {

                            buffer.write('');
                            var id30 = scope.resolve(["uniqueId"], 1);
                            buffer.write(id30, true);
                            buffer.write('_');
                            var id31 = scope.resolve(["xindex"]);
                            buffer.write(id31, true);
                            buffer.write('');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option26, buffer, 17, payload);
                        buffer.write('"\n                 class="bundle ');
                        var option32 = {
                            escape: 1
                        };
                        var params33 = [];
                        var id34 = scope.resolve(["xindex"]);
                        var exp37 = id34;
                        var id35 = scope.resolve(["xcount"]);
                        var exp36 = id35;
                        exp36 = (id35) - (1);
                        exp37 = (id34) === (exp36);
                        params33.push(exp37);
                        option32.params = params33;
                        option32.fn = function (scope, buffer) {

                            buffer.write(' bundle-last ');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option32, buffer, 18, payload);
                        buffer.write('">\n                ');
                        var option38 = {
                            escape: 1
                        };
                        var params39 = [];
                        var id40 = scope.resolve(["orders"]);
                        params39.push(id40);
                        option38.params = params39;
                        option38.fn = function (scope, buffer) {

                            buffer.write('\n                ');
                            var option41 = {
                                escape: 1
                            };
                            var params42 = [];
                            var id43 = scope.resolve(["orders"]);
                            params42.push(id43);
                            option41.params = params42;
                            option41.fn = function (scope, buffer) {

                                buffer.write('\n                <div id="J_ItemHolder_');
                                var id44 = scope.resolve(["cartId"]);
                                buffer.write(id44, true);
                                buffer.write('"></div>\n                ');

                                return buffer;
                            };
                            buffer = eachCommand.call(engine, scope, option41, buffer, 20, payload);
                            buffer.write('\n                ');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option38, buffer, 19, payload);
                        buffer.write('\n            </div>\n            ');

                        return buffer;
                    };
                    buffer = eachCommand.call(engine, scope, option23, buffer, 16, payload);
                    buffer.write('\n            ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option20, buffer, 15, payload);
                buffer.write('\n        </div>\n        <div class="item-operations J_ComboOp">\n            <a href="javascript:void(0);" class="btn-item-del J_ComboDel J_MakePoint">删除</a>\n        </div>\n    </div>\n</div>\n');

                return buffer;
            };
            option0.inverse = function (scope, buffer) {

                buffer.write('\n');
                var option45 = {
                    escape: 1
                };
                var params46 = [];
                var id47 = scope.resolve(["type"]);
                var exp48 = id47;
                exp48 = (id47) === ('act');
                params46.push(exp48);
                option45.params = params46;
                option45.fn = function (scope, buffer) {

                    buffer.write('\n<div id="J_Order_');
                    var id49 = scope.resolve(["uniqueId"]);
                    buffer.write(id49, true);
                    buffer.write('"\n     class="J_Order clearfix order-body cross-shop-act J_CrossShopAct ');
                    var option50 = {
                        escape: 1
                    };
                    var params51 = [];
                    var id52 = scope.resolve(["isValid"]);
                    var exp53 = id52;
                    exp53 = (id52) === (false);
                    params51.push(exp53);
                    option50.params = params51;
                    option50.fn = function (scope, buffer) {

                        buffer.write(' order-invalid ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option50, buffer, 36, payload);
                    buffer.write('">\n    <div class="J_ItemHead shop clearfix ');
                    var option54 = {
                        escape: 1
                    };
                    var params55 = [];
                    var id56 = scope.resolve(["isValid"]);
                    params55.push(!(id56));
                    option54.params = params55;
                    option54.fn = function (scope, buffer) {

                        buffer.write(' disable');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option54, buffer, 37, payload);
                    buffer.write('">\n        <div class="shop-info">\n            ');
                    var option57 = {
                        escape: 1
                    };
                    var params58 = [];
                    var id59 = scope.resolve(["isValid"]);
                    params58.push(id59);
                    option57.params = params58;
                    option57.fn = function (scope, buffer) {

                        buffer.write('\n            <span class="s-checkbox J_forShop"></span>\n            ');

                        return buffer;
                    };
                    option57.inverse = function (scope, buffer) {

                        buffer.write('\n            <span class="act-status">活动已失效</span>\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option57, buffer, 39, payload);
                    buffer.write('\n            <a href="');
                    var id60 = scope.resolve(["url"]);
                    buffer.write(id60, true);
                    buffer.write('" class="act-name J_MakePoint" data-point="tbcart.8.15" target="_blank" title="');
                    var id61 = scope.resolve(["title"]);
                    buffer.write(id61, true);
                    buffer.write('">活动：');
                    var id62 = scope.resolve(["title"]);
                    buffer.write(id62, true);
                    buffer.write('</a>\n        </div>\n        ');
                    var option63 = {
                        escape: 1
                    };
                    var params64 = [];
                    var id65 = scope.resolve(["scrollPromos"]);
                    params64.push(id65);
                    option63.params = params64;
                    option63.fn = function (scope, buffer) {

                        buffer.write('\n        <div class="act-promo">\n            <div class="act-promo-wrapper">\n                <ul class="act-promo-hint J_ScrollingPromoHint">\n                    ');
                        var option66 = {
                            escape: 1
                        };
                        var params67 = [];
                        var id68 = scope.resolve(["scrollPromos"]);
                        params67.push(id68);
                        option66.params = params67;
                        option66.fn = function (scope, buffer) {

                            buffer.write('\n                    <li>');
                            var id69 = scope.resolve(["campaignPlan"]);
                            buffer.write(id69, true);
                            buffer.write('</li>\n                    ');

                            return buffer;
                        };
                        buffer = eachCommand.call(engine, scope, option66, buffer, 50, payload);
                        buffer.write('\n                </ul>\n            </div>\n            <span class="pipe-left"></span><span class="pipe-right"></span>\n        </div>\n        ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option63, buffer, 46, payload);
                    buffer.write('\n    </div>\n    <div class="order-content">\n        <div id="J_BundleList_');
                    var id70 = scope.resolve(["uniqueId"]);
                    buffer.write(id70, true);
                    buffer.write('" class="item-list">\n            ');
                    var option71 = {
                        escape: 1
                    };
                    var params72 = [];
                    var id73 = scope.resolve(["bundles"]);
                    params72.push(id73);
                    option71.params = params72;
                    option71.fn = function (scope, buffer) {

                        buffer.write('\n            ');
                        var option74 = {
                            escape: 1
                        };
                        var params75 = [];
                        var id76 = scope.resolve(["bundles"]);
                        params75.push(id76);
                        option74.params = params75;
                        option74.fn = function (scope, buffer) {

                            buffer.write('\n            <div id="J_Bundle_');
                            var option77 = {
                                escape: 1
                            };
                            var params78 = [];
                            var id79 = scope.resolve(["id"]);
                            params78.push(id79);
                            option77.params = params78;
                            option77.fn = function (scope, buffer) {

                                buffer.write('');
                                var id80 = scope.resolve(["id"]);
                                buffer.write(id80, true);
                                buffer.write('');

                                return buffer;
                            };
                            option77.inverse = function (scope, buffer) {

                                buffer.write('');
                                var id81 = scope.resolve(["uniqueId"], 1);
                                buffer.write(id81, true);
                                buffer.write('_');
                                var id82 = scope.resolve(["xindex"]);
                                buffer.write(id82, true);
                                buffer.write('');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option77, buffer, 63, payload);
                            buffer.write('"\n                 class="bundle ');
                            var option83 = {
                                escape: 1
                            };
                            var params84 = [];
                            var id85 = scope.resolve(["xindex"]);
                            var exp88 = id85;
                            var id86 = scope.resolve(["xcount"]);
                            var exp87 = id86;
                            exp87 = (id86) - (1);
                            exp88 = (id85) === (exp87);
                            params84.push(exp88);
                            option83.params = params84;
                            option83.fn = function (scope, buffer) {

                                buffer.write(' bundle-last ');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option83, buffer, 64, payload);
                            buffer.write('">\n                ');
                            var option89 = {
                                escape: 1
                            };
                            var params90 = [];
                            var id91 = scope.resolve(["orders"]);
                            params90.push(id91);
                            option89.params = params90;
                            option89.fn = function (scope, buffer) {

                                buffer.write('\n                ');
                                var option92 = {
                                    escape: 1
                                };
                                var params93 = [];
                                var id94 = scope.resolve(["orders"]);
                                params93.push(id94);
                                option92.params = params93;
                                option92.fn = function (scope, buffer) {

                                    buffer.write('\n                <div id="J_ItemHolder_');
                                    var id95 = scope.resolve(["cartId"]);
                                    buffer.write(id95, true);
                                    buffer.write('"></div>\n                ');

                                    return buffer;
                                };
                                buffer = eachCommand.call(engine, scope, option92, buffer, 66, payload);
                                buffer.write('\n                ');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option89, buffer, 65, payload);
                            buffer.write('\n            </div>\n            ');

                            return buffer;
                        };
                        buffer = eachCommand.call(engine, scope, option74, buffer, 62, payload);
                        buffer.write('\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option71, buffer, 61, payload);
                    buffer.write('\n        </div>\n        ');
                    var option96 = {
                        escape: 1
                    };
                    var params97 = [];
                    var id98 = scope.resolve(["gradeMessage"]);
                    params97.push(id98);
                    option96.params = params97;
                    option96.fn = function (scope, buffer) {

                        buffer.write('\n        <div class="act-saveinfo">\n            <div class="msg">\n                <p class="naked tips">\n                    ');
                        var id99 = scope.resolve(["gradeMessage"]);
                        buffer.write(id99, true);
                        buffer.write('\n                </p>\n            </div>\n        </div>\n        ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option96, buffer, 74, payload);
                    buffer.write('\n    </div>\n</div>\n');

                    return buffer;
                };
                option45.inverse = function (scope, buffer) {

                    buffer.write('\n<div id="J_Order_');
                    var id100 = scope.resolve(["uniqueId"]);
                    buffer.write(id100, true);
                    buffer.write('"\n     class="J_Order clearfix order-body ');
                    var option101 = {
                        escape: 1
                    };
                    var params102 = [];
                    var id103 = scope.resolve(["extraItem"]);
                    params102.push(id103);
                    option101.params = params102;
                    option101.fn = function (scope, buffer) {

                        buffer.write('order-redemption');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option101, buffer, 87, payload);
                    buffer.write(' ');
                    var option104 = {
                        escape: 1
                    };
                    var params105 = [];
                    var id106 = scope.resolve(["isValid"]);
                    var exp107 = id106;
                    exp107 = (id106) === (false);
                    params105.push(exp107);
                    option104.params = params105;
                    option104.fn = function (scope, buffer) {

                        buffer.write(' order-invalid ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option104, buffer, 87, payload);
                    buffer.write('">\n    <div class="J_ItemHead shop clearfix">\n        <div class="shop-info">\n            ');
                    var option108 = {
                        escape: 1
                    };
                    var params109 = [];
                    var id110 = scope.resolve(["isValid"]);
                    params109.push(id110);
                    option108.params = params109;
                    option108.fn = function (scope, buffer) {

                        buffer.write('<span class="s-checkbox J_forShop"></span>');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option108, buffer, 90, payload);
                    buffer.write('\n            ');
                    var option111 = {
                        escape: 1
                    };
                    var params112 = [];
                    var id113 = scope.resolve(["host"]);
                    var exp114 = id113;
                    exp114 = (id113) !== ('C');
                    params112.push(exp114);
                    option111.params = params112;
                    option111.fn = function (scope, buffer) {

                        buffer.write('<span class="icon-');
                        var id115 = scope.resolve(["host"]);
                        buffer.write(id115, true);
                        buffer.write('"></span>');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option111, buffer, 91, payload);
                    buffer.write('\n            ');
                    var option116 = {
                        escape: 1
                    };
                    var params117 = [];
                    var id118 = scope.resolve(["title"]);
                    params117.push(id118);
                    option116.params = params117;
                    option116.fn = function (scope, buffer) {

                        buffer.write('shop: <a href="');
                        var id119 = scope.resolve(["url"]);
                        buffer.write(id119, true);
                        buffer.write('" target="_blank" title="');
                        var id120 = scope.resolve(["title"]);
                        buffer.write(id120, true);
                        buffer.write('" class="J_MakePoint"\n                                    data-point="tbcart.8.15">');
                        var id121 = scope.resolve(["title"]);
                        buffer.write(id121, true);
                        buffer.write('</a>\n            ');

                        return buffer;
                    };
                    option116.inverse = function (scope, buffer) {

                        buffer.write('卖家：<a href="');
                        var id122 = scope.resolve(["url"]);
                        buffer.write(id122, true);
                        buffer.write('" target="_blank" title="');
                        var id123 = scope.resolve(["seller"]);
                        buffer.write(id123, true);
                        buffer.write('" class="J_MakePoint"\n                          data-point="tbcart.8.15">');
                        var id124 = scope.resolve(["seller"]);
                        buffer.write(id124, true);
                        buffer.write('</a>\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option116, buffer, 92, payload);
                    buffer.write('\n        </div>\n        ');
                    var option125 = {
                        escape: 1
                    };
                    var params126 = [];
                    var id127 = scope.resolve(["scrollPromos"]);
                    params126.push(id127);
                    option125.params = params126;
                    option125.fn = function (scope, buffer) {

                        buffer.write('\n        <div class="order-promo-info">\n            <div class="scrolling-container">\n                <ul class="scrolling-promo-hint J_ScrollingPromoHint">\n                    ');
                        var option128 = {
                            escape: 1
                        };
                        var params129 = [];
                        var id130 = scope.resolve(["scrollPromos"]);
                        params129.push(id130);
                        option128.params = params129;
                        option128.fn = function (scope, buffer) {

                            buffer.write('\n                    ');
                            var id131 = scope.resolve(["this"]);
                            buffer.write(id131, false);
                            buffer.write('\n                    ');

                            return buffer;
                        };
                        buffer = eachCommand.call(engine, scope, option128, buffer, 102, payload);
                        buffer.write('\n                </ul>\n            </div>\n        </div>\n        ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option125, buffer, 98, payload);
                    buffer.write('\n    </div>\n    <div class="order-content">\n        <div id="J_BundleList_');
                    var id132 = scope.resolve(["uniqueId"]);
                    buffer.write(id132, true);
                    buffer.write('" class="item-list">\n            ');
                    var option133 = {
                        escape: 1
                    };
                    var params134 = [];
                    var id135 = scope.resolve(["bundles"]);
                    params134.push(id135);
                    option133.params = params134;
                    option133.fn = function (scope, buffer) {

                        buffer.write('\n            ');
                        var option136 = {
                            escape: 1
                        };
                        var params137 = [];
                        var id138 = scope.resolve(["bundles"]);
                        params137.push(id138);
                        option136.params = params137;
                        option136.fn = function (scope, buffer) {

                            buffer.write('\n            <div id="J_Bundle_');
                            var option139 = {
                                escape: 1
                            };
                            var params140 = [];
                            var id141 = scope.resolve(["id"]);
                            params140.push(id141);
                            option139.params = params140;
                            option139.fn = function (scope, buffer) {

                                buffer.write('');
                                var id142 = scope.resolve(["id"]);
                                buffer.write(id142, true);
                                buffer.write('');

                                return buffer;
                            };
                            option139.inverse = function (scope, buffer) {

                                buffer.write('');
                                var id143 = scope.resolve(["uniqueId"], 1);
                                buffer.write(id143, true);
                                buffer.write('_');
                                var id144 = scope.resolve(["xindex"]);
                                buffer.write(id144, true);
                                buffer.write('');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option139, buffer, 114, payload);
                            buffer.write('"\n                 class="bundle ');
                            var option145 = {
                                escape: 1
                            };
                            var params146 = [];
                            var id147 = scope.resolve(["xindex"]);
                            var exp150 = id147;
                            var id148 = scope.resolve(["xcount"]);
                            var exp149 = id148;
                            exp149 = (id148) - (1);
                            exp150 = (id147) === (exp149);
                            params146.push(exp150);
                            option145.params = params146;
                            option145.fn = function (scope, buffer) {

                                buffer.write(' bundle-last ');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option145, buffer, 115, payload);
                            buffer.write('">\n                ');
                            var option151 = {
                                escape: 1
                            };
                            var params152 = [];
                            var id153 = scope.resolve(["orders"]);
                            params152.push(id153);
                            option151.params = params152;
                            option151.fn = function (scope, buffer) {

                                buffer.write('\n                ');
                                var option154 = {
                                    escape: 1
                                };
                                var params155 = [];
                                var id156 = scope.resolve(["orders"]);
                                params155.push(id156);
                                option154.params = params155;
                                option154.fn = function (scope, buffer) {

                                    buffer.write('\n                <div id="J_ItemHolder_');
                                    var id157 = scope.resolve(["cartId"]);
                                    buffer.write(id157, true);
                                    buffer.write('"></div>\n                ');

                                    return buffer;
                                };
                                buffer = eachCommand.call(engine, scope, option154, buffer, 117, payload);
                                buffer.write('\n                ');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option151, buffer, 116, payload);
                            buffer.write('\n            </div>\n            ');

                            return buffer;
                        };
                        buffer = eachCommand.call(engine, scope, option136, buffer, 113, payload);
                        buffer.write('\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option133, buffer, 112, payload);
                    buffer.write('\n        </div>\n        ');
                    var option158 = {
                        escape: 1
                    };
                    var params159 = [];
                    var id160 = scope.resolve(["extraItem"]);
                    params159.push(id160);
                    option158.params = params159;
                    option158.fn = function (scope, buffer) {

                        buffer.write('\n        <div class="redemption-info">\n            <div class="redemption-tip clearfix">\n                ');
                        var option161 = {
                            escape: 1
                        };
                        var params162 = [];
                        var id163 = scope.resolve(["model"]);
                        var exp165 = id163;
                        if ((id163)) {
                            var id164 = scope.resolve(["model", "totalShopPrice"]);
                            exp165 = id164;
                        }
                        var exp169 = exp165;
                        if ((exp165)) {
                            var id166 = scope.resolve(["extraItem", "totalExtraItemNum"]);
                            var exp168 = id166;
                            var id167 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                            exp168 = (id166) > (id167);
                            exp169 = exp168;
                        }
                        params162.push(exp169);
                        option161.params = params162;
                        option161.fn = function (scope, buffer) {

                            buffer.write('\n                <div class="remain">还可换购<em class="J_Remain number">');
                            var id170 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                            buffer.write(id170, true);
                            buffer.write('</em>件商品</div>\n                ');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option161, buffer, 128, payload);
                        buffer.write('\n                <div class="amount">\n                    <span class="redemption-count">选中商品合计<span class="J_TotalPrice">');
                        var id171 = scope.resolve(["model", "totalShopPrice"]);
                        buffer.write(id171, true);
                        buffer.write('元</span>，可换购<em\n                            class="J_TotalRedemptionAmount number">');
                        var id172 = scope.resolve(["extraItem", "totalExtraItemNum"]);
                        buffer.write(id172, true);
                        buffer.write('件</em>商品</span>\n                    <a class="J_Redemption entry ');
                        var option173 = {
                            escape: 1
                        };
                        var params174 = [];
                        var id175 = scope.resolve(["extraItem", "remainExtraItemNum"]);
                        var exp176 = id175;
                        exp176 = (id175) === (0);
                        params174.push(exp176);
                        option173.params = params174;
                        option173.fn = function (scope, buffer) {

                            buffer.write('entry-disabled');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option173, buffer, 134, payload);
                        buffer.write('"\n                       href="#" hidefocus="true">马上换购<span class="arrow"></span></a>\n                </div>\n            </div>\n            <div class="redemption-list J_RedemptionList carousel"></div>\n            <div class="redemption-sku J_SkuPanel"></div>\n        </div>\n        ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option158, buffer, 125, payload);
                    buffer.write('\n    </div>\n</div>\n');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option45, buffer, 34, payload);
                buffer.write('\n');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option0, buffer, 1, payload);
            buffer.write('\n');
            return buffer;
        };
t.TPL_NAME = module.name;
return t;
});