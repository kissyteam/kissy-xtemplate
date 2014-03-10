/** Compiled By KISSY-XTemplate */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark:false, loopfunc:true, indent:false, asi:true, unused:false, boss:true*/
        return function (scope, S, payload, undefined) {
            var buffer = "",
                engine = this,
                moduleWrap, escapeHtml = S.escapeHtml,
                nativeCommands = engine.nativeCommands,
                utils = engine.utils;
            if (typeof module !== "undefined" && module.kissy) {
                moduleWrap = module;
            }
            var callCommandUtil = utils.callCommand,
                debuggerCommand = nativeCommands.debugger,
                eachCommand = nativeCommands.each,
                withCommand = nativeCommands["with"],
                ifCommand = nativeCommands["if"],
                setCommand = nativeCommands.set,
                includeCommand = nativeCommands.include,
                parseCommand = nativeCommands.parse,
                extendCommand = nativeCommands.extend,
                blockCommand = nativeCommands.block,
                macroCommand = nativeCommands.macro;
            buffer += '<div id="J_Item_';
            var id0 = scope.resolve(["cartId"]);
            buffer += escapeHtml(id0);
            buffer += '" class="J_ItemBody item-body clearfix item-';
            var id1 = scope.resolve(["type"]);
            buffer += escapeHtml(id1);
            buffer += ' ';
            var option2 = {};
            var params3 = [];
            var id4 = scope.resolve(["services"]);
            params3.push(id4);
            option2.params = params3;
            option2.fn = function (scope) {
                var buffer = "";
                buffer += 'item-with-services';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option2, payload);
            buffer += ' ';
            var option5 = {};
            var params6 = [];
            var id7 = scope.resolve(["isFirstOne"]);
            params6.push(id7);
            option5.params = params6;
            option5.fn = function (scope) {
                var buffer = "";
                buffer += 'first-item';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option5, payload);
            buffer += ' ';
            var option8 = {};
            var params9 = [];
            var id10 = scope.resolve(["isLastOne"]);
            params9.push(id10);
            option8.params = params9;
            option8.fn = function (scope) {
                var buffer = "";
                buffer += ' last-item ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option8, payload);
            buffer += ' ';
            var option11 = {};
            var params12 = [];
            var id13 = scope.resolve(["isValid"]);
            var id14 = scope.resolve(["type"]);
            params12.push((id13 === (false)) && (id14 !== (' ju11')));
            option11.params = params12;
            option11.fn = function (scope) {
                var buffer = "";
                buffer += ' item-invalid ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option11, payload);
            buffer += ' ';
            var option15 = {};
            var params16 = [];
            var id17 = scope.resolve(["model"]);
            var id18 = scope.resolve(["model", "isSelected"]);
            params16.push(id17 && id18);
            option15.params = params16;
            option15.fn = function (scope) {
                var buffer = "";
                buffer += ' selected item-selected ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option15, payload);
            buffer += '">\n<div class="item-content table">\n    <div class="td td-chk">\n        <div class="td-inner">\n            ';
            var option19 = {};
            var params20 = [];
            var id21 = scope.resolve(["isValid"]);
            params20.push(id21);
            option19.params = params20;
            option19.fn = function (scope) {
                var buffer = "";
                buffer += '\n            ';
                var option22 = {};
                var params23 = [];
                var id24 = scope.resolve(["type"]);
                var id25 = scope.resolve(["orderType"]);
                params23.push((id24 === ('combo')) || (id25 === ('combo')));
                option22.params = params23;
                option22.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    return buffer;
                };
                option22.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    var option26 = {};
                    var params27 = [];
                    var id28 = scope.resolve(["type"]);
                    params27.push(id28 === ('redemption'));
                    option26.params = params27;
                    option26.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n            <em class="icon-redemption">换购</em>\n            ';
                        return buffer;
                    };
                    option26.inverse = function (scope) {
                        var buffer = "";
                        buffer += '\n            <span class="s-checkbox J_CheckBoxItem"></span>\n            ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option26, payload);
                    buffer += '\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option22, payload);
                buffer += '\n            ';
                return buffer;
            };
            option19.inverse = function (scope) {
                var buffer = "";
                buffer += '\n            ';
                var option29 = {};
                var params30 = [];
                var id31 = scope.resolve(["type"]);
                params30.push(id31 === ('ju11'));
                option29.params = params30;
                option29.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            <a class="icon-ju11" title="该商品为聚划算宝贝，目前正在预热，显示商品原价，暂时无法购买，开团后可恢复正常购买！" href="javascript: void(0);">聚划算</a>\n            ';
                    return buffer;
                };
                option29.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n            <a class="icon-invalid" title="商品被下架、删除、库存不足，或商家处于被监管或冻结状态" target="_blank"\n               href="http://service.taobao.com/support/knowledge-1116245.htm">invalid</a>\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option29, payload);
                buffer += '\n            ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option19, payload);
            buffer += '\n        </div>\n    </div>\n    <div class="td td-item">\n        <div class="td-inner">\n            <div class="item-pic cart-pic s70 J_ItemPic">\n                <a href="';
            var id32 = scope.resolve(["url"]);
            buffer += escapeHtml(id32);
            buffer += '" target="_blank" class="J_MakePoint" data-point="tbcart.8.12">\n                    ';
            var option33 = {};
            var params34 = [];
            var id35 = scope.resolve(["pic"]);
            params34.push(id35 === (''));
            option33.params = params34;
            option33.fn = function (scope) {
                var buffer = "";
                buffer += '\n                    <img src="http://a.tbcdn.cn/app/tc/img/nopic_s50.gif" class="itempic J_ItemImg" />\n                    ';
                return buffer;
            };
            option33.inverse = function (scope) {
                var buffer = "";
                buffer += '\n                    <img src="http://a.tbcdn.cn/s.gif" lazyload="';
                var id36 = scope.resolve(["pic"]);
                buffer += escapeHtml(id36);
                buffer += '_80x80.jpg" class="itempic J_ItemImg" />\n                    ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option33, payload);
            buffer += '\n                </a>\n            </div>\n            <div class="item-info">\n                <a href="';
            var id37 = scope.resolve(["url"]);
            buffer += escapeHtml(id37);
            buffer += '" target="_blank" class="item-title J_MakePoint" data-point="tbcart.8.11" />';
            var id38 = scope.resolve(["title"]);
            buffer += escapeHtml(id38);
            buffer += '</a>\n                ';
            var option39 = {};
            var params40 = [];
            var id41 = scope.resolve(["skus"]);
            params40.push(id41);
            option39.params = params40;
            option39.fn = function (scope) {
                var buffer = "";
                buffer += '\n                <div class="item-props">\n                    ';
                var option42 = {};
                var params43 = [];
                var id44 = scope.resolve(["skus"]);
                params43.push(id44);
                option42.params = params43;
                option42.fn = function (scope) {
                    var buffer = "";
                    buffer += '<span>';
                    var id45 = scope.resolve(["this"]);
                    buffer += escapeHtml(id45);
                    buffer += '</span>';
                    return buffer;
                };
                buffer += eachCommand.call(engine, scope, option42, payload);
                buffer += '\n                </div>\n                ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option39, payload);
            buffer += '\n                ';
            var option46 = {};
            var params47 = [];
            var id48 = scope.resolve(["type"]);
            var id49 = scope.resolve(["type"]);
            var id50 = scope.resolve(["orderType"]);
            var id51 = scope.resolve(["orderType"]);
            params47.push((((id48 === ('combo')) || (id49 === ('campaign'))) || (id50 === ('act'))) || (id51 === ('combo')));
            option46.params = params47;
            option46.fn = function (scope) {
                var buffer = "";
                buffer += '\n                <div class="shop-info">\n                    ';
                var option52 = {};
                var params53 = [];
                var id54 = scope.resolve(["shopName"]);
                params53.push(id54);
                option52.params = params53;
                option52.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n                    <a title="';
                    var id55 = scope.resolve(["shopName"]);
                    buffer += escapeHtml(id55);
                    buffer += '" class="shop-title J_MakePoint" data-point="tbcart.8.15" target="_blank" href="';
                    var id56 = scope.resolve(["shopUrl"]);
                    buffer += escapeHtml(id56);
                    buffer += '">';
                    var id57 = scope.resolve(["shopName"]);
                    buffer += escapeHtml(id57);
                    buffer += '</a>\n                    ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option52, payload);
                buffer += '\n                    ';
                var option58 = {};
                var params59 = [];
                var id60 = scope.resolve(["host"]);
                params59.push(id60 !== ('C'));
                option58.params = params59;
                option58.fn = function (scope) {
                    var buffer = "";
                    buffer += '<span class="host-icon icon-';
                    var id61 = scope.resolve(["host"]);
                    buffer += escapeHtml(id61);
                    buffer += '"></span>';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option58, payload);
                buffer += '\n                    <span class="J_WangWang" data-icon="small" data-nick="';
                var id62 = scope.resolve(["seller"]);
                buffer += escapeHtml(id62);
                buffer += '" data-display="inline"></span>\n                </div>\n                ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option46, payload);
            buffer += '\n            </div>\n        </div>\n    </div>\n    <div class="td td-price">\n        <div class="td-inner">\n            <div class="item-price">\n                ';
            var option63 = {};
            var params64 = [];
            var id65 = scope.resolve(["price", "now"]);
            var id66 = scope.resolve(["price", "origin"]);
            params64.push(id65 < id66);
            option63.params = params64;
            option63.fn = function (scope) {
                var buffer = "";
                buffer += '\n                <div class="price-line"><em class="price-original">';
                var id67 = scope.resolve(["price", "origin_str"]);
                buffer += escapeHtml(id67);
                buffer += '</em></div>\n                ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option63, payload);
            buffer += '\n                <div class="price-line"><em class="price-now" tabindex="0">';
            var id68 = scope.resolve(["price", "now_str"]);
            buffer += escapeHtml(id68);
            buffer += '</em></div>\n                ';
            var option69 = {};
            var params70 = [];
            var id71 = scope.resolve(["isValid"]);
            params70.push(id71);
            option69.params = params70;
            option69.fn = function (scope) {
                var buffer = "";
                buffer += '\n                ';
                var option72 = {};
                var params73 = [];
                var id74 = scope.resolve(["promotions"]);
                var id75 = scope.resolve(["promotions", "type"]);
                params73.push(id74 && id75);
                option72.params = params73;
                option72.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n                ';
                    var option76 = {};
                    var params77 = [];
                    var id78 = scope.resolve(["promotions", "hideTitle"]);
                    params77.push(id78 === (false));
                    option76.params = params77;
                    option76.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n                <div class="promo-main promo-';
                        var id79 = scope.resolve(["promotions", "type"]);
                        buffer += escapeHtml(id79);
                        buffer += '">\n                    <div class="promo-content ';
                        var option80 = {};
                        var params81 = [];
                        var id82 = scope.resolve(["promotions", "endTime"]);
                        params81.push(id82);
                        option80.params = params81;
                        option80.fn = function (scope) {
                            var buffer = "";
                            buffer += ' promo-limited ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option80, payload);
                        buffer += '">\n                        ';
                        var id83 = scope.resolve(["promotions", "name"]);
                        buffer += escapeHtml(id83);
                        buffer += '\n                    </div>\n                </div>\n                ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option76, payload);
                    buffer += '\n                ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option72, payload);
                buffer += '\n                ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option69, payload);
            buffer += '\n            </div>\n        </div>\n    </div>\n    <div class="td td-amount">\n        <div class="td-inner">\n            ';
            var option84 = {};
            var params85 = [];
            var id86 = scope.resolve(["type"]);
            var id87 = scope.resolve(["type"]);
            var id88 = scope.resolve(["orderType"]);
            params85.push(((id86 === ('combo')) || (id87 === ('redemption'))) || (id88 === ('combo')));
            option84.params = params85;
            option84.fn = function (scope) {
                var buffer = "";
                buffer += '\n            ';
                var id89 = scope.resolve(["amount", "now"]);
                buffer += escapeHtml(id89);
                buffer += '\n            ';
                return buffer;
            };
            option84.inverse = function (scope) {
                var buffer = "";
                buffer += '\n            <div class="item-amount ';
                var option90 = {};
                var params91 = [];
                var id92 = scope.resolve(["isValid"]);
                var id93 = scope.resolve(["amount", "max"]);
                var id94 = scope.resolve(["type"]);
                params91.push((id92 && (id93 <= (3))) && (id94 === ('redemption')));
                option90.params = params91;
                option90.fn = function (scope) {
                    var buffer = "";
                    buffer += ' s-lack ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option90, payload);
                buffer += '">\n            ';
                var option95 = {};
                var params96 = [];
                var id97 = scope.resolve(["isValid"]);
                var id98 = scope.resolve(["type"]);
                params96.push(id97 && (id98 !== ('redemption')));
                option95.params = params96;
                option95.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            <input type="text" value="';
                    var id99 = scope.resolve(["amount", "now"]);
                    buffer += escapeHtml(id99);
                    buffer += '" class="text text-amount J_ItemAmount" data-max="';
                    var id100 = scope.resolve(["amount", "max"]);
                    buffer += escapeHtml(id100);
                    buffer += '" data-now="';
                    var id101 = scope.resolve(["amount", "now"]);
                    buffer += escapeHtml(id101);
                    buffer += '" autocomplete="off" />\n            ';
                    return buffer;
                };
                option95.inverse = function (scope) {
                    var buffer = "";
                    buffer += '\n            ';
                    var id102 = scope.resolve(["amount", "now"]);
                    buffer += escapeHtml(id102);
                    buffer += '\n            ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option95, payload);
                buffer += '\n        </div>\n        ';
                var option103 = {};
                var params104 = [];
                var id105 = scope.resolve(["isValid"]);
                params104.push(id105);
                option103.params = params104;
                option103.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n        <div class="amount-msg J_AmountMsg">\n            ';
                    var option106 = {};
                    var params107 = [];
                    var id108 = scope.resolve(["amount", "max"]);
                    params107.push(id108 < (1));
                    option106.params = params107;
                    option106.fn = function (scope) {
                        var buffer = "";
                        buffer += '\n            <em class="error-msg">该宝贝库存不足,请联系卖家</em>\n            ';
                        return buffer;
                    };
                    option106.inverse = function (scope) {
                        var buffer = "";
                        buffer += '\n            ';
                        var option109 = {};
                        var params110 = [];
                        var id111 = scope.resolve(["amount", "max"]);
                        var id112 = scope.resolve(["amount", "now"]);
                        params110.push(id111 < id112);
                        option109.params = params110;
                        option109.fn = function (scope) {
                            var buffer = "";
                            buffer += '\n            <em class="error-msg">最多只能购买';
                            var id113 = scope.resolve(["amount", "max"]);
                            buffer += escapeHtml(id113);
                            buffer += '件</em>\n            ';
                            return buffer;
                        };
                        option109.inverse = function (scope) {
                            var buffer = "";
                            buffer += '\n            ';
                            var option114 = {};
                            var params115 = [];
                            var id116 = scope.resolve(["amount", "limit"]);
                            var id117 = scope.resolve(["amount", "max"]);
                            params115.push(id116 <= id117);
                            option114.params = params115;
                            option114.fn = function (scope) {
                                var buffer = "";
                                buffer += '\n            <em class="s-danger-text">限购';
                                var id118 = scope.resolve(["amount", "limit"]);
                                buffer += escapeHtml(id118);
                                buffer += '件</em>\n            ';
                                return buffer;
                            };
                            option114.inverse = function (scope) {
                                var buffer = "";
                                buffer += '\n            ';
                                var option119 = {};
                                var params120 = [];
                                var id121 = scope.resolve(["amount", "max"]);
                                params120.push(id121 <= (3));
                                option119.params = params120;
                                option119.fn = function (scope) {
                                    var buffer = "";
                                    buffer += '\n            <em class="s-danger-text" title="该商品只有';
                                    var id122 = scope.resolve(["amount", "max"]);
                                    buffer += escapeHtml(id122);
                                    buffer += '件了哦，要买的赶紧啊">库存紧张</em>\n            ';
                                    return buffer;
                                };
                                option119.inverse = function (scope) {
                                    var buffer = "";
                                    buffer += '\n            ';
                                    var option123 = {};
                                    var params124 = [];
                                    var id125 = scope.resolve(["amount", "supply"]);
                                    var id126 = scope.resolve(["amount", "demand"]);
                                    params124.push(id125 < id126);
                                    option123.params = params124;
                                    option123.fn = function (scope) {
                                        var buffer = "";
                                        buffer += '\n            <em class="error-msg" title="该商品只有';
                                        var id127 = scope.resolve(["amount", "supply"]);
                                        buffer += escapeHtml(id127);
                                        buffer += '件了哦，但是有';
                                        var id128 = scope.resolve(["amount", "demand"]);
                                        buffer += escapeHtml(id128);
                                        buffer += '人已经加入购物车打算购买">库存紧张</em>\n            ';
                                        return buffer;
                                    };
                                    buffer += ifCommand.call(engine, scope, option123, payload);
                                    buffer += '\n            ';
                                    return buffer;
                                };
                                buffer += ifCommand.call(engine, scope, option119, payload);
                                buffer += '\n            ';
                                return buffer;
                            };
                            buffer += ifCommand.call(engine, scope, option114, payload);
                            buffer += '\n            ';
                            return buffer;
                        };
                        buffer += ifCommand.call(engine, scope, option109, payload);
                        buffer += '\n            ';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option106, payload);
                    buffer += '\n        </div>\n        ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option103, payload);
                buffer += '\n        ';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option84, payload);
            buffer += '\n    </div>\n</div>\n<div class="td td-sum">\n    <div class="td-inner">\n        <em tabindex="0" class="number">';
            var id129 = scope.resolve(["price", "sum_str"]);
            buffer += escapeHtml(id129);
            buffer += '</em>\n    </div>\n</div>\n</div>\n<div class="item-operations J_ItemOps">\n    <a title="移至收藏夹" class="btn-item-fav J_Fav J_MakePoint"  data-point-url="http://www.atpanel.com/jsclick?cache=';
            var id130 = scope.resolve(["randomNum"]);
            buffer += escapeHtml(id130);
            buffer += '1&mycart=collect" href="#">移入收藏夹</a>\n    <a href="javascript:;" data-point-url="http://www.atpanel.com/jsclick?cache=';
            var id131 = scope.resolve(["randomNum"]);
            buffer += escapeHtml(id131);
            buffer += '2&cartlist=delete" class="btn-item-del J_Del J_MakePoint">删除</a>\n</div>\n';
            var option132 = {};
            var params133 = [];
            var id134 = scope.resolve(["services"]);
            params133.push(id134);
            option132.params = params133;
            option132.fn = function (scope) {
                var buffer = "";
                buffer += '\n<div class="item-services ';
                var option135 = {};
                var params136 = [];
                var id137 = scope.resolve(["model"]);
                var id138 = scope.resolve(["model", "serviceCollapsed"]);
                params136.push(id137 && (id138 !== (false)));
                option135.params = params136;
                option135.fn = function (scope) {
                    var buffer = "";
                    buffer += ' services-collapsed ';
                    return buffer;
                };
                buffer += ifCommand.call(engine, scope, option135, payload);
                buffer += '">\n    <div class="service-wp">\n        <span class="service-header">售后服务</span>\n        <ul class="services-list">\n            ';
                var option139 = {};
                var params140 = [];
                var id141 = scope.resolve(["services"]);
                params140.push(id141);
                option139.params = params140;
                option139.fn = function (scope) {
                    var buffer = "";
                    buffer += '\n            <li class="service-list table ';
                    var option142 = {};
                    var params143 = [];
                    var id144 = scope.resolve(["collapseShow"]);
                    params143.push(id144);
                    option142.params = params143;
                    option142.fn = function (scope) {
                        var buffer = "";
                        buffer += 'collapse-show';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option142, payload);
                    buffer += '">\n                <div class="td td-item service-name">\n                    <div class="item-info"><img class="service-icon" src="';
                    var id145 = scope.resolve(["icon"]);
                    buffer += escapeHtml(id145);
                    buffer += '" alt="';
                    var id146 = scope.resolve(["title"]);
                    buffer += escapeHtml(id146);
                    buffer += '" /><a class="service-title J_MakePoint" href="';
                    var id147 = scope.resolve(["url"]);
                    buffer += escapeHtml(id147);
                    buffer += '" data-point="tbcart.8.27" target="_blank">';
                    var id148 = scope.resolve(["title"]);
                    buffer += escapeHtml(id148);
                    buffer += '</a></div>\n                </div>\n                <div class="td td-price"><span class="price">';
                    var option149 = {};
                    var params150 = [];
                    var id151 = scope.resolve(["promo"]);
                    params150.push(id151);
                    option149.params = params150;
                    option149.fn = function (scope) {
                        var buffer = "";
                        buffer += '';
                        var id152 = scope.resolve(["promo"]);
                        buffer += escapeHtml(id152);
                        buffer += '';
                        return buffer;
                    };
                    option149.inverse = function (scope) {
                        var buffer = "";
                        buffer += '';
                        var id153 = scope.resolve(["price_str"]);
                        buffer += escapeHtml(id153);
                        buffer += '';
                        return buffer;
                    };
                    buffer += ifCommand.call(engine, scope, option149, payload);
                    buffer += '</span></div>\n                <div class="td td-amount service-amount"><span class="number">';
                    var id154 = scope.resolve(["quantity"]);
                    buffer += escapeHtml(id154);
                    buffer += '</span></div>\n                <div class="td td-sum service-sum"><span class="price">';
                    var id155 = scope.resolve(["sum_str"]);
                    buffer += escapeHtml(id155);
                    buffer += '</span></div>\n            </li>\n            ';
                    return buffer;
                };
                buffer += eachCommand.call(engine, scope, option139, payload);
                buffer += '\n        </ul>\n    </div>\n</div>\n';
                return buffer;
            };
            buffer += ifCommand.call(engine, scope, option132, payload);
            buffer += '\n</div>';
            return buffer;
        };
});