"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_nev, _Book_ertekeles;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(nev, ertekeles) {
        _Book_nev.set(this, void 0);
        _Book_ertekeles.set(this, void 0);
        __classPrivateFieldSet(this, _Book_nev, nev, "f");
        if (ertekeles > 10) {
            __classPrivateFieldSet(this, _Book_ertekeles, 10, "f");
        }
        else if (ertekeles < 1) {
            __classPrivateFieldSet(this, _Book_ertekeles, 1, "f");
        }
        else {
            __classPrivateFieldSet(this, _Book_ertekeles, ertekeles, "f");
        }
    }
    getnev() {
        return __classPrivateFieldGet(this, _Book_nev, "f");
    }
    getertekeles() {
        return __classPrivateFieldGet(this, _Book_ertekeles, "f");
    }
    setnev(v) {
        __classPrivateFieldSet(this, _Book_nev, v, "f");
    }
    setertekeles(v) {
        if (v > 10) {
            __classPrivateFieldSet(this, _Book_ertekeles, 10, "f");
        }
        else if (v < 1) {
            __classPrivateFieldSet(this, _Book_ertekeles, 1, "f");
        }
        else {
            __classPrivateFieldSet(this, _Book_ertekeles, v, "f");
        }
    }
    toString() {
        return __classPrivateFieldGet(this, _Book_nev, "f") + " - " + __classPrivateFieldGet(this, _Book_ertekeles, "f") + "/10";
    }
}
exports.Book = Book;
_Book_nev = new WeakMap(), _Book_ertekeles = new WeakMap();
