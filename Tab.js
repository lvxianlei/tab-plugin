/**
 * Created by lvxianlei on 2017/9/4.
 */
'use strict';
String.prototype.myTrim = function myTrim() {
    if ('trim' in String.prototype) {
        return this.trim();
    }
    return this.replace(/^ +| +$/g, '');
};

var Tab = function (ele, ele2) {
    var lis = document.getElementsByClassName(ele)[0].children;
    var divs = document.getElementsByClassName(ele2)[0].children;
    var _this = this;
    for (var i = 0; i < lis.length; i++) {
        (function (i) {
            lis[i].addEventListener('click', function () {
                for (var j = 0; j < lis.length; j++) {
                    _this.removeClass(lis[j], 'show');
                    _this.removeClass(divs[j], 'show');
                }
                _this.addClass(lis[i], 'show');
                _this.addClass(divs[i], 'show');
            }, false);
        })(i);
    }
};

Tab.prototype.hasClass = function (curEle, strClass) {
    return new RegExp('\\b' + strClass + '\\b').test(curEle.className);
};

Tab.prototype.addClass = function (curEle, strClass) {
    var classList = strClass.myTrim().split(/ +/);
    for (var i = 0, len = classList.length; i < len; i++) {
        var curClass = classList[i];
        !this.hasClass(curEle, curClass) ? curEle.className += ' ' + curClass : null;
    }
    curEle.className = curEle.className.myTrim().replace(/ +/g, ' ');
};

Tab.prototype.removeClass = function (curEle, strClass) {
    var classList = strClass.myTrim().split(/ +/);
    for (var i = 0, len = classList.length; i < len; i++) {
        var curClass = classList[i],
            reg = new RegExp('(^| +)' + curClass + '( +|$)', 'g');
        if (this.hasClass(curEle, curClass)) {
            curEle.className = curEle.className.replace(reg, ' ');
        }
    }
};