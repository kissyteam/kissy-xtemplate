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
            buffer.write('<div id="J_Item_');
            var id0 = scope.resolve(["cartId"]);
            buffer.write(id0, true);
            buffer.write('" class="J_ItemBody item-body clearfix item-');
            var id1 = scope.resolve(["type"]);
            buffer.write(id1, true);
            buffer.write(' ');
            var option2 = {
                escape: 1
            };
            var params3 = [];
            var id4 = scope.resolve(["services"]);
            params3.push(id4);
            option2.params = params3;
            option2.fn = function (scope, buffer) {

                buffer.write('item-with-services');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option2, buffer, 1, payload);
            buffer.write(' ');
            var option5 = {
                escape: 1
            };
            var params6 = [];
            var id7 = scope.resolve(["isFirstOne"]);
            params6.push(id7);
            option5.params = params6;
            option5.fn = function (scope, buffer) {

                buffer.write('first-item');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option5, buffer, 1, payload);
            buffer.write(' ');
            var option8 = {
                escape: 1
            };
            var params9 = [];
            var id10 = scope.resolve(["isLastOne"]);
            params9.push(id10);
            option8.params = params9;
            option8.fn = function (scope, buffer) {

                buffer.write(' last-item ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option8, buffer, 1, payload);
            buffer.write(' ');
            var option11 = {
                escape: 1
            };
            var params12 = [];
            var id13 = scope.resolve(["isValid"]);
            var exp14 = id13;
            exp14 = (id13) === (false);
            var exp17 = exp14;
            if ((exp14)) {
                var id15 = scope.resolve(["type"]);
                var exp16 = id15;
                exp16 = (id15) !== (' ju11');
                exp17 = exp16;
            }
            params12.push(exp17);
            option11.params = params12;
            option11.fn = function (scope, buffer) {

                buffer.write(' item-invalid ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option11, buffer, 1, payload);
            buffer.write(' ');
            var option18 = {
                escape: 1
            };
            var params19 = [];
            var id20 = scope.resolve(["model"]);
            var exp22 = id20;
            if ((id20)) {
                var id21 = scope.resolve(["model", "isSelected"]);
                exp22 = id21;
            }
            params19.push(exp22);
            option18.params = params19;
            option18.fn = function (scope, buffer) {

                buffer.write(' selected item-selected ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option18, buffer, 1, payload);
            buffer.write('">\n<div class="item-content table">\n    <div class="td td-chk">\n        <div class="td-inner">\n            ');
            var option23 = {
                escape: 1
            };
            var params24 = [];
            var id25 = scope.resolve(["isValid"]);
            params24.push(id25);
            option23.params = params24;
            option23.fn = function (scope, buffer) {

                buffer.write('\n            ');
                var option26 = {
                    escape: 1
                };
                var params27 = [];
                var id28 = scope.resolve(["type"]);
                var exp29 = id28;
                exp29 = (id28) === ('combo');
                var exp32 = exp29;
                if (!(exp29)) {
                    var id30 = scope.resolve(["orderType"]);
                    var exp31 = id30;
                    exp31 = (id30) === ('combo');
                    exp32 = exp31;
                }
                params27.push(exp32);
                option26.params = params27;
                option26.fn = function (scope, buffer) {

                    buffer.write('\n            ');

                    return buffer;
                };
                option26.inverse = function (scope, buffer) {

                    buffer.write('\n            ');
                    var option33 = {
                        escape: 1
                    };
                    var params34 = [];
                    var id35 = scope.resolve(["type"]);
                    var exp36 = id35;
                    exp36 = (id35) === ('redemption');
                    params34.push(exp36);
                    option33.params = params34;
                    option33.fn = function (scope, buffer) {

                        buffer.write('\n            <em class="icon-redemption">换购</em>\n            ');

                        return buffer;
                    };
                    option33.inverse = function (scope, buffer) {

                        buffer.write('\n            <span class="s-checkbox J_CheckBoxItem"></span>\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option33, buffer, 8, payload);
                    buffer.write('\n            ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option26, buffer, 6, payload);
                buffer.write('\n            ');

                return buffer;
            };
            option23.inverse = function (scope, buffer) {

                buffer.write('\n            ');
                var option37 = {
                    escape: 1
                };
                var params38 = [];
                var id39 = scope.resolve(["type"]);
                var exp40 = id39;
                exp40 = (id39) === ('ju11');
                params38.push(exp40);
                option37.params = params38;
                option37.fn = function (scope, buffer) {

                    buffer.write('\n            <a class="icon-ju11" title="该商品为聚划算宝贝，目前正在预热，显示商品原价，暂时无法购买，开团后可恢复正常购买！" href="javascript: void(0);">聚划算</a>\n            ');

                    return buffer;
                };
                option37.inverse = function (scope, buffer) {

                    buffer.write('\n            <a class="icon-invalid" title="商品被下架、删除、库存不足，或商家处于被监管或冻结状态" target="_blank"\n               href="http://service.taobao.com/support/knowledge-1116245.htm">invalid</a>\n            ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option37, buffer, 15, payload);
                buffer.write('\n            ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option23, buffer, 5, payload);
            buffer.write('\n        </div>\n    </div>\n    <div class="td td-item">\n        <div class="td-inner">\n            <div class="item-pic cart-pic s70 J_ItemPic">\n                <a href="');
            var id41 = scope.resolve(["url"]);
            buffer.write(id41, true);
            buffer.write('" target="_blank" class="J_MakePoint" data-point="tbcart.8.12">\n                    ');
            var option42 = {
                escape: 1
            };
            var params43 = [];
            var id44 = scope.resolve(["pic"]);
            var exp45 = id44;
            exp45 = (id44) === ('');
            params43.push(exp45);
            option42.params = params43;
            option42.fn = function (scope, buffer) {

                buffer.write('\n                    <img src="http://a.tbcdn.cn/app/tc/img/nopic_s50.gif" class="itempic J_ItemImg" />\n                    ');

                return buffer;
            };
            option42.inverse = function (scope, buffer) {

                buffer.write('\n                    <img src="http://a.tbcdn.cn/s.gif" lazyload="');
                var id46 = scope.resolve(["pic"]);
                buffer.write(id46, true);
                buffer.write('_80x80.jpg" class="itempic J_ItemImg" />\n                    ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option42, buffer, 28, payload);
            buffer.write('\n                </a>\n            </div>\n            <div class="item-info">\n                <a href="');
            var id47 = scope.resolve(["url"]);
            buffer.write(id47, true);
            buffer.write('" target="_blank" class="item-title J_MakePoint" data-point="tbcart.8.11" />');
            var id48 = scope.resolve(["title"]);
            buffer.write(id48, true);
            buffer.write('</a>\n                ');
            var option49 = {
                escape: 1
            };
            var params50 = [];
            var id51 = scope.resolve(["skus"]);
            params50.push(id51);
            option49.params = params50;
            option49.fn = function (scope, buffer) {

                buffer.write('\n                <div class="item-props">\n                    ');
                var option52 = {
                    escape: 1
                };
                var params53 = [];
                var id54 = scope.resolve(["skus"]);
                params53.push(id54);
                option52.params = params53;
                option52.fn = function (scope, buffer) {

                    buffer.write('<span>');
                    var id55 = scope.resolve(["this"]);
                    buffer.write(id55, true);
                    buffer.write('</span>');

                    return buffer;
                };
                buffer = eachCommand.call(engine, scope, option52, buffer, 39, payload);
                buffer.write('\n                </div>\n                ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option49, buffer, 37, payload);
            buffer.write('\n                ');
            var option56 = {
                escape: 1
            };
            var params57 = [];
            var id58 = scope.resolve(["type"]);
            var exp59 = id58;
            exp59 = (id58) === ('combo');
            var exp62 = exp59;
            if (!(exp59)) {
                var id60 = scope.resolve(["type"]);
                var exp61 = id60;
                exp61 = (id60) === ('campaign');
                exp62 = exp61;
            }
            var exp65 = exp62;
            if (!(exp62)) {
                var id63 = scope.resolve(["orderType"]);
                var exp64 = id63;
                exp64 = (id63) === ('act');
                exp65 = exp64;
            }
            var exp68 = exp65;
            if (!(exp65)) {
                var id66 = scope.resolve(["orderType"]);
                var exp67 = id66;
                exp67 = (id66) === ('combo');
                exp68 = exp67;
            }
            params57.push(exp68);
            option56.params = params57;
            option56.fn = function (scope, buffer) {

                buffer.write('\n                <div class="shop-info">\n                    ');
                var option69 = {
                    escape: 1
                };
                var params70 = [];
                var id71 = scope.resolve(["shopName"]);
                params70.push(id71);
                option69.params = params70;
                option69.fn = function (scope, buffer) {

                    buffer.write('\n                    <a title="');
                    var id72 = scope.resolve(["shopName"]);
                    buffer.write(id72, true);
                    buffer.write('" class="shop-title J_MakePoint" data-point="tbcart.8.15" target="_blank" href="');
                    var id73 = scope.resolve(["shopUrl"]);
                    buffer.write(id73, true);
                    buffer.write('">');
                    var id74 = scope.resolve(["shopName"]);
                    buffer.write(id74, true);
                    buffer.write('</a>\n                    ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option69, buffer, 44, payload);
                buffer.write('\n                    ');
                var option75 = {
                    escape: 1
                };
                var params76 = [];
                var id77 = scope.resolve(["host"]);
                var exp78 = id77;
                exp78 = (id77) !== ('C');
                params76.push(exp78);
                option75.params = params76;
                option75.fn = function (scope, buffer) {

                    buffer.write('<span class="host-icon icon-');
                    var id79 = scope.resolve(["host"]);
                    buffer.write(id79, true);
                    buffer.write('"></span>');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option75, buffer, 47, payload);
                buffer.write('\n                    <span class="J_WangWang" data-icon="small" data-nick="');
                var id80 = scope.resolve(["seller"]);
                buffer.write(id80, true);
                buffer.write('" data-display="inline"></span>\n                </div>\n                ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option56, buffer, 42, payload);
            buffer.write('\n            </div>\n        </div>\n    </div>\n    <div class="td td-price">\n        <div class="td-inner">\n            <div class="item-price">\n                ');
            var option81 = {
                escape: 1
            };
            var params82 = [];
            var id83 = scope.resolve(["price", "now"]);
            var exp85 = id83;
            var id84 = scope.resolve(["price", "origin"]);
            exp85 = (id83) < (id84);
            params82.push(exp85);
            option81.params = params82;
            option81.fn = function (scope, buffer) {

                buffer.write('\n                <div class="price-line"><em class="price-original">');
                var id86 = scope.resolve(["price", "origin_str"]);
                buffer.write(id86, true);
                buffer.write('</em></div>\n                ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option81, buffer, 57, payload);
            buffer.write('\n                <div class="price-line"><em class="price-now" tabindex="0">');
            var id87 = scope.resolve(["price", "now_str"]);
            buffer.write(id87, true);
            buffer.write('</em></div>\n                ');
            var option88 = {
                escape: 1
            };
            var params89 = [];
            var id90 = scope.resolve(["isValid"]);
            params89.push(id90);
            option88.params = params89;
            option88.fn = function (scope, buffer) {

                buffer.write('\n                ');
                var option91 = {
                    escape: 1
                };
                var params92 = [];
                var id93 = scope.resolve(["promotions"]);
                var exp95 = id93;
                if ((id93)) {
                    var id94 = scope.resolve(["promotions", "type"]);
                    exp95 = id94;
                }
                params92.push(exp95);
                option91.params = params92;
                option91.fn = function (scope, buffer) {

                    buffer.write('\n                ');
                    var option96 = {
                        escape: 1
                    };
                    var params97 = [];
                    var id98 = scope.resolve(["promotions", "hideTitle"]);
                    var exp99 = id98;
                    exp99 = (id98) === (false);
                    params97.push(exp99);
                    option96.params = params97;
                    option96.fn = function (scope, buffer) {

                        buffer.write('\n                <div class="promo-main promo-');
                        var id100 = scope.resolve(["promotions", "type"]);
                        buffer.write(id100, true);
                        buffer.write('">\n                    <div class="promo-content ');
                        var option101 = {
                            escape: 1
                        };
                        var params102 = [];
                        var id103 = scope.resolve(["promotions", "endTime"]);
                        params102.push(id103);
                        option101.params = params102;
                        option101.fn = function (scope, buffer) {

                            buffer.write(' promo-limited ');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option101, buffer, 65, payload);
                        buffer.write('">\n                        ');
                        var id104 = scope.resolve(["promotions", "name"]);
                        buffer.write(id104, true);
                        buffer.write('\n                    </div>\n                </div>\n                ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option96, buffer, 63, payload);
                    buffer.write('\n                ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option91, buffer, 62, payload);
                buffer.write('\n                ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option88, buffer, 61, payload);
            buffer.write('\n            </div>\n        </div>\n    </div>\n    <div class="td td-amount">\n        <div class="td-inner">\n            ');
            var option105 = {
                escape: 1
            };
            var params106 = [];
            var id107 = scope.resolve(["type"]);
            var exp108 = id107;
            exp108 = (id107) === ('combo');
            var exp111 = exp108;
            if (!(exp108)) {
                var id109 = scope.resolve(["type"]);
                var exp110 = id109;
                exp110 = (id109) === ('redemption');
                exp111 = exp110;
            }
            var exp114 = exp111;
            if (!(exp111)) {
                var id112 = scope.resolve(["orderType"]);
                var exp113 = id112;
                exp113 = (id112) === ('combo');
                exp114 = exp113;
            }
            params106.push(exp114);
            option105.params = params106;
            option105.fn = function (scope, buffer) {

                buffer.write('\n            ');
                var id115 = scope.resolve(["amount", "now"]);
                buffer.write(id115, true);
                buffer.write('\n            ');

                return buffer;
            };
            option105.inverse = function (scope, buffer) {

                buffer.write('\n            <div class="item-amount ');
                var option116 = {
                    escape: 1
                };
                var params117 = [];
                var id118 = scope.resolve(["isValid"]);
                var exp121 = id118;
                if ((id118)) {
                    var id119 = scope.resolve(["amount", "max"]);
                    var exp120 = id119;
                    exp120 = (id119) <= (3);
                    exp121 = exp120;
                }
                var exp124 = exp121;
                if ((exp121)) {
                    var id122 = scope.resolve(["type"]);
                    var exp123 = id122;
                    exp123 = (id122) === ('redemption');
                    exp124 = exp123;
                }
                params117.push(exp124);
                option116.params = params117;
                option116.fn = function (scope, buffer) {

                    buffer.write(' s-lack ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option116, buffer, 80, payload);
                buffer.write('">\n            ');
                var option125 = {
                    escape: 1
                };
                var params126 = [];
                var id127 = scope.resolve(["isValid"]);
                var exp130 = id127;
                if ((id127)) {
                    var id128 = scope.resolve(["type"]);
                    var exp129 = id128;
                    exp129 = (id128) !== ('redemption');
                    exp130 = exp129;
                }
                params126.push(exp130);
                option125.params = params126;
                option125.fn = function (scope, buffer) {

                    buffer.write('\n            <input type="text" value="');
                    var id131 = scope.resolve(["amount", "now"]);
                    buffer.write(id131, true);
                    buffer.write('" class="text text-amount J_ItemAmount" data-max="');
                    var id132 = scope.resolve(["amount", "max"]);
                    buffer.write(id132, true);
                    buffer.write('" data-now="');
                    var id133 = scope.resolve(["amount", "now"]);
                    buffer.write(id133, true);
                    buffer.write('" autocomplete="off" />\n            ');

                    return buffer;
                };
                option125.inverse = function (scope, buffer) {

                    buffer.write('\n            ');
                    var id134 = scope.resolve(["amount", "now"]);
                    buffer.write(id134, true);
                    buffer.write('\n            ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option125, buffer, 81, payload);
                buffer.write('\n        </div>\n        ');
                var option135 = {
                    escape: 1
                };
                var params136 = [];
                var id137 = scope.resolve(["isValid"]);
                params136.push(id137);
                option135.params = params136;
                option135.fn = function (scope, buffer) {

                    buffer.write('\n        <div class="amount-msg J_AmountMsg">\n            ');
                    var option138 = {
                        escape: 1
                    };
                    var params139 = [];
                    var id140 = scope.resolve(["amount", "max"]);
                    var exp141 = id140;
                    exp141 = (id140) < (1);
                    params139.push(exp141);
                    option138.params = params139;
                    option138.fn = function (scope, buffer) {

                        buffer.write('\n            <em class="error-msg">该宝贝库存不足,请联系卖家</em>\n            ');

                        return buffer;
                    };
                    option138.inverse = function (scope, buffer) {

                        buffer.write('\n            ');
                        var option142 = {
                            escape: 1
                        };
                        var params143 = [];
                        var id144 = scope.resolve(["amount", "max"]);
                        var exp146 = id144;
                        var id145 = scope.resolve(["amount", "now"]);
                        exp146 = (id144) < (id145);
                        params143.push(exp146);
                        option142.params = params143;
                        option142.fn = function (scope, buffer) {

                            buffer.write('\n            <em class="error-msg">最多只能购买');
                            var id147 = scope.resolve(["amount", "max"]);
                            buffer.write(id147, true);
                            buffer.write('件</em>\n            ');

                            return buffer;
                        };
                        option142.inverse = function (scope, buffer) {

                            buffer.write('\n            ');
                            var option148 = {
                                escape: 1
                            };
                            var params149 = [];
                            var id150 = scope.resolve(["amount", "limit"]);
                            var exp152 = id150;
                            var id151 = scope.resolve(["amount", "max"]);
                            exp152 = (id150) <= (id151);
                            params149.push(exp152);
                            option148.params = params149;
                            option148.fn = function (scope, buffer) {

                                buffer.write('\n            <em class="s-danger-text">限购');
                                var id153 = scope.resolve(["amount", "limit"]);
                                buffer.write(id153, true);
                                buffer.write('件</em>\n            ');

                                return buffer;
                            };
                            option148.inverse = function (scope, buffer) {

                                buffer.write('\n            ');
                                var option154 = {
                                    escape: 1
                                };
                                var params155 = [];
                                var id156 = scope.resolve(["amount", "max"]);
                                var exp157 = id156;
                                exp157 = (id156) <= (3);
                                params155.push(exp157);
                                option154.params = params155;
                                option154.fn = function (scope, buffer) {

                                    buffer.write('\n            <em class="s-danger-text" title="该商品只有');
                                    var id158 = scope.resolve(["amount", "max"]);
                                    buffer.write(id158, true);
                                    buffer.write('件了哦，要买的赶紧啊">库存紧张</em>\n            ');

                                    return buffer;
                                };
                                option154.inverse = function (scope, buffer) {

                                    buffer.write('\n            ');
                                    var option159 = {
                                        escape: 1
                                    };
                                    var params160 = [];
                                    var id161 = scope.resolve(["amount", "supply"]);
                                    var exp163 = id161;
                                    var id162 = scope.resolve(["amount", "demand"]);
                                    exp163 = (id161) < (id162);
                                    params160.push(exp163);
                                    option159.params = params160;
                                    option159.fn = function (scope, buffer) {

                                        buffer.write('\n            <em class="error-msg" title="该商品只有');
                                        var id164 = scope.resolve(["amount", "supply"]);
                                        buffer.write(id164, true);
                                        buffer.write('件了哦，但是有');
                                        var id165 = scope.resolve(["amount", "demand"]);
                                        buffer.write(id165, true);
                                        buffer.write('人已经加入购物车打算购买">库存紧张</em>\n            ');

                                        return buffer;
                                    };
                                    buffer = ifCommand.call(engine, scope, option159, buffer, 101, payload);
                                    buffer.write('\n            ');

                                    return buffer;
                                };
                                buffer = ifCommand.call(engine, scope, option154, buffer, 98, payload);
                                buffer.write('\n            ');

                                return buffer;
                            };
                            buffer = ifCommand.call(engine, scope, option148, buffer, 95, payload);
                            buffer.write('\n            ');

                            return buffer;
                        };
                        buffer = ifCommand.call(engine, scope, option142, buffer, 92, payload);
                        buffer.write('\n            ');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option138, buffer, 89, payload);
                    buffer.write('\n        </div>\n        ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option135, buffer, 87, payload);
                buffer.write('\n        ');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option105, buffer, 77, payload);
            buffer.write('\n    </div>\n</div>\n<div class="td td-sum">\n    <div class="td-inner">\n        <em tabindex="0" class="number">');
            var id166 = scope.resolve(["price", "sum_str"]);
            buffer.write(id166, true);
            buffer.write('</em>\n    </div>\n</div>\n</div>\n<div class="item-operations J_ItemOps">\n    <a title="移至收藏夹" class="btn-item-fav J_Fav J_MakePoint"  data-point-url="http://www.atpanel.com/jsclick?cache=');
            var id167 = scope.resolve(["randomNum"]);
            buffer.write(id167, true);
            buffer.write('1&mycart=collect" href="#">移入收藏夹</a>\n    <a href="javascript:;" data-point-url="http://www.atpanel.com/jsclick?cache=');
            var id168 = scope.resolve(["randomNum"]);
            buffer.write(id168, true);
            buffer.write('2&cartlist=delete" class="btn-item-del J_Del J_MakePoint">删除</a>\n</div>\n');
            var option169 = {
                escape: 1
            };
            var params170 = [];
            var id171 = scope.resolve(["services"]);
            params170.push(id171);
            option169.params = params170;
            option169.fn = function (scope, buffer) {

                buffer.write('\n<div class="item-services ');
                var option172 = {
                    escape: 1
                };
                var params173 = [];
                var id174 = scope.resolve(["model"]);
                var exp177 = id174;
                if ((id174)) {
                    var id175 = scope.resolve(["model", "serviceCollapsed"]);
                    var exp176 = id175;
                    exp176 = (id175) !== (false);
                    exp177 = exp176;
                }
                params173.push(exp177);
                option172.params = params173;
                option172.fn = function (scope, buffer) {

                    buffer.write(' services-collapsed ');

                    return buffer;
                };
                buffer = ifCommand.call(engine, scope, option172, buffer, 124, payload);
                buffer.write('">\n    <div class="service-wp">\n        <span class="service-header">售后服务</span>\n        <ul class="services-list">\n            ');
                var option178 = {
                    escape: 1
                };
                var params179 = [];
                var id180 = scope.resolve(["services"]);
                params179.push(id180);
                option178.params = params179;
                option178.fn = function (scope, buffer) {

                    buffer.write('\n            <li class="service-list table ');
                    var option181 = {
                        escape: 1
                    };
                    var params182 = [];
                    var id183 = scope.resolve(["collapseShow"]);
                    params182.push(id183);
                    option181.params = params182;
                    option181.fn = function (scope, buffer) {

                        buffer.write('collapse-show');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option181, buffer, 129, payload);
                    buffer.write('">\n                <div class="td td-item service-name">\n                    <div class="item-info"><img class="service-icon" src="');
                    var id184 = scope.resolve(["icon"]);
                    buffer.write(id184, true);
                    buffer.write('" alt="');
                    var id185 = scope.resolve(["title"]);
                    buffer.write(id185, true);
                    buffer.write('" /><a class="service-title J_MakePoint" href="');
                    var id186 = scope.resolve(["url"]);
                    buffer.write(id186, true);
                    buffer.write('" data-point="tbcart.8.27" target="_blank">');
                    var id187 = scope.resolve(["title"]);
                    buffer.write(id187, true);
                    buffer.write('</a></div>\n                </div>\n                <div class="td td-price"><span class="price">');
                    var option188 = {
                        escape: 1
                    };
                    var params189 = [];
                    var id190 = scope.resolve(["promo"]);
                    params189.push(id190);
                    option188.params = params189;
                    option188.fn = function (scope, buffer) {

                        buffer.write('');
                        var id191 = scope.resolve(["promo"]);
                        buffer.write(id191, true);
                        buffer.write('');

                        return buffer;
                    };
                    option188.inverse = function (scope, buffer) {

                        buffer.write('');
                        var id192 = scope.resolve(["price_str"]);
                        buffer.write(id192, true);
                        buffer.write('');

                        return buffer;
                    };
                    buffer = ifCommand.call(engine, scope, option188, buffer, 133, payload);
                    buffer.write('</span></div>\n                <div class="td td-amount service-amount"><span class="number">');
                    var id193 = scope.resolve(["quantity"]);
                    buffer.write(id193, true);
                    buffer.write('</span></div>\n                <div class="td td-sum service-sum"><span class="price">');
                    var id194 = scope.resolve(["sum_str"]);
                    buffer.write(id194, true);
                    buffer.write('</span></div>\n            </li>\n            ');

                    return buffer;
                };
                buffer = eachCommand.call(engine, scope, option178, buffer, 128, payload);
                buffer.write('\n        </ul>\n    </div>\n</div>\n');

                return buffer;
            };
            buffer = ifCommand.call(engine, scope, option169, buffer, 123, payload);
            buffer.write('\n</div>');
            return buffer;
        };
t.TPL_NAME = module.name;
return t;
});