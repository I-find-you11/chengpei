webpackJsonp([8],{Ib9x:function(a,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t={data:function(){return{account:500,couponNum:6,freight:300,permium:100,charge:100,balance:53,selectWay:null}},components:{"user-header":e("ISZi").a},methods:{selectPayWay:function(a){"wallet"==a&&this.balance<this.account||(this.selectWay=a)},qrcode:function(){console.log("qrcode")},confirm:function(){this.selectWay&&console.log(this.selectWay)}}},c={render:function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",[e("user-header",{attrs:{text:"付款"}}),a._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"dialog-header"},[e("div",{staticClass:"ff"},[e("div",[e("span",[a._v("合计")]),a._v(" "),e("div",[a._v("\n                        ￥"),e("span",[a._v(a._s(a.account))]),a._v("元\n                    ")])]),a._v(" "),e("a",{attrs:{href:"javascript:;"}},[a._v(a._s(a.couponNum)+"张优惠券")])]),a._v(" "),e("p",{staticClass:"explain"},[a._v("运费¥"+a._s(a.freight)+"元、保费¥"+a._s(a.permium)+"元、附加费¥"+a._s(a.charge)+"元")])]),a._v(" "),e("div",{staticClass:"select-group"},[e("div",{staticClass:"pay-way",on:{click:function(s){a.selectPayWay("wallet")}}},[e("i"),a._v(" "),e("div",{staticClass:"info"},[e("div",[e("span",[a._v("我的钱包")]),a._v(" "),e("span",{staticClass:"balance"},[a._v("可用余额:"+a._s(a.balance))])]),a._v(" "),a.balance>a.account?e("i",{class:"wallet"==a.selectWay?"selected":"unselected"}):a._e(),a._v(" "),a.balance<a.account?e("span",{staticStyle:{"margin-right":".12rem"}},[a._v("余额不足")]):a._e()])]),a._v(" "),e("div",{staticClass:"pay-way",on:{click:function(s){a.selectPayWay("alipay")}}},[e("i"),a._v(" "),e("div",{staticClass:"info"},[e("span",[a._v("支付宝")]),a._v(" "),e("i",{class:"alipay"==a.selectWay?"selected":"unselected"})])]),a._v(" "),e("div",{staticClass:"pay-way",on:{click:function(s){a.selectPayWay("weixin")}}},[e("i"),a._v(" "),e("div",{staticClass:"info"},[e("span",[a._v("微信支付")]),a._v(" "),e("i",{class:"weixin"==a.selectWay?"selected":"unselected"})])]),a._v(" "),e("div",{staticClass:"pay-way",on:{click:function(s){a.selectPayWay("credit")}}},[e("i"),a._v(" "),e("div",{staticClass:"info"},[a._m(0),a._v(" "),e("i",{class:"credit"==a.selectWay?"selected":"unselected"})])])])]),a._v(" "),e("div",{staticClass:"btns wraper"},[e("div",{staticClass:"cancel",on:{click:a.qrcode}},[a._v("扫码支付")]),a._v(" "),e("div",{staticClass:"confirm",on:{click:a.confirm}},[a._v(a._s("credit"==a.selectWay?"确定":"去支付"))])])],1)},staticRenderFns:[function(){var a=this.$createElement,s=this._self._c||a;return s("div",[s("div",[s("span",[this._v("到付")]),this._v(" "),s("span",[this._v("·收货人付款")])])])}]};var i=e("VU/8")(t,c,!1,function(a){e("UViE")},"data-v-46f83e1c",null);s.default=i.exports},UViE:function(a,s){}});
//# sourceMappingURL=8.1739f37971143ee21fe5.js.map