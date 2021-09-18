/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n\n\nclass Comment {\n    constructor(userId, text, data) {\n        this.id = Comment.id++\n        this.userId = userId\n        this.text = text\n        this.comments = []\n        this.data = data\n    }\n\n    static id = 0\n\n    renderComment() {\n        return `\n            <div>\n                <h5>${this.text}</h5>\n                <p>${this.data}, comment by ${(0,_data__WEBPACK_IMPORTED_MODULE_0__.findUserById)(this.userId).name}</p>\n            </div>\n        `\n    }\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/comment.js?");

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findUserById\": () => (/* binding */ findUserById),\n/* harmony export */   \"getUserIdByUserName\": () => (/* binding */ getUserIdByUserName),\n/* harmony export */   \"addCommentToMessage\": () => (/* binding */ addCommentToMessage),\n/* harmony export */   \"findMessagesByUserId\": () => (/* binding */ findMessagesByUserId),\n/* harmony export */   \"addNewMessage\": () => (/* binding */ addNewMessage),\n/* harmony export */   \"users\": () => (/* binding */ users),\n/* harmony export */   \"messages\": () => (/* binding */ messages)\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment */ \"./src/js/comment.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n\r\n\r\n\r\n\r\n// const URL = 'http//google.com'\r\n\r\nconst users = [\r\n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Vasya Pupkin', 'Berlin'),   // -> id \r\n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Maksym Kostenko', 'Mainz'),\r\n    new _user__WEBPACK_IMPORTED_MODULE_0__.default('Ivan Ivanov', 'Kiev')\r\n]\r\n\r\nconst messages = [\r\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(0, 'Hello', 'World', new Date().toLocaleDateString()),\r\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(0, 'About', 'Meeting', new Date().toLocaleDateString()),\r\n    new _message__WEBPACK_IMPORTED_MODULE_2__.default(1, 'Text', 'Info', new Date().toLocaleDateString())\r\n]\r\n\r\nfunction findUserById(id){\r\n    return users.find(user => user.id === id)   //{name: Vasya, city: Berlin, id:0}\r\n}\r\n\r\nfunction getUserIdByUserName(name){\r\n    const user = users.find(u => u.name === name);\r\n    return user ? user.id : -1;\r\n}\r\n\r\nfunction addCommentToMessage(messageId, comment){\r\n    const message = messages.find(m => m.id === messageId);\r\n    message.comments.push(comment);\r\n}\r\n\r\nfunction findMessagesByUserId(userId){\r\n    return messages.filter(m => m.userId === userId);\r\n   \r\n}\r\n\r\nfunction addNewMessage(message){\r\n    messages.push(message);\r\n}\r\n\r\naddCommentToMessage(0, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(0, 'very good',new Date().toLocaleDateString()));\r\naddCommentToMessage(0, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(1, 'nice to see you', new Date().toLocaleDateString()));\r\naddCommentToMessage(1, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(2, 'hello!', new Date().toLocaleDateString()));\r\naddCommentToMessage(1, new _comment__WEBPACK_IMPORTED_MODULE_1__.default(0, 'good bye!', new Date().toLocaleDateString()));\r\n\r\n//export default URL\r\n\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/data.js?");

/***/ }),

/***/ "./src/js/forms.js":
/*!*************************!*\
  !*** ./src/js/forms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAddMessageForm\": () => (/* binding */ renderAddMessageForm),\n/* harmony export */   \"renderAddCommentForm\": () => (/* binding */ renderAddCommentForm)\n/* harmony export */ });\nfunction renderAddMessageForm(userId){\r\n    return `\r\n    <h4>Write new message</h4>\r\n    <form name = 'message' action = '#'>\r\n    <input id = 'title' \r\n           class = 'form-control\r\n           type = 'text'\r\n           name = 'title'\r\n           placeholder = 'type title'\r\n       />\r\n       <textarea\r\n           id = 'text' \r\n           class = 'form-control\r\n           type = 'text'\r\n           name = 'text'\r\n           placeholder = 'type text'\r\n       ></textarea>\r\n       <br>\r\n       <button class = 'add-btn' name = 'button' data-user = ${userId}>add message</button>\r\n       </form>         \r\n    `\r\n}\r\n\r\nfunction renderAddCommentForm(messageId){\r\n    return `\r\n    <h4>To write new comment enter you name</h4>\r\n               <form name = \"userName\" action = \"#\">\r\n                    <input\r\n                    id=\"userName\"\r\n                    class=\"form-control\"\r\n                    type=\"text\"\r\n                    name=\"uname\"\r\n                    placeholder=\"Type name\"\r\n                />\r\n                <button class=\"add-btn\" name = \"button\">send</button>\r\n                </form>\r\n                <form name = \"comment\" action = \"#\" class = \"hide\">\r\n                    <input\r\n                    id=\"message_${messageId}\"\r\n                    class=\"form-control\"\r\n                    type=\"text\"\r\n                    name=\"ucomment\"\r\n                    placeholder=\"Type name\"\r\n                />\r\n                <button class=\"add-btn\" name = \"button\">add comment</button>\r\n                </form>\r\n                <h4 id=\"not-found-user\" class = \"hide\">no such user!</h4>\r\n    `\r\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/forms.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/js/data.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/js/forms.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ \"./src/js/comment.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst usersList = document.querySelector('.users-list')\r\nconst leftBox = document.querySelector('.left')\r\nconst messageForm = document.querySelector('.form')\r\nconst listMessages = document.querySelector('.message-list')\r\nconst rightBox = document.querySelector('.right');\r\n\r\nconst renderUsersList = (array) => {\r\n    array.forEach(item => {\r\n        usersList.innerHTML += item.renderUser()\r\n    })\r\n}\r\n\r\nrenderUsersList(_data__WEBPACK_IMPORTED_MODULE_0__.users)\r\n\r\nusersList.onclick = (event) => {\r\n    rightBox.innerHTML = ''\r\n    if(event.target.tagName === 'H3'){\r\n         const userId = +event.target.dataset.id;\r\n         usersList.querySelectorAll('h3').forEach(el => el.classList.remove('active'));\r\n         event.target.classList.add('active');\r\n         renderLeftPart(userId)\r\n    }\r\n}\r\n\r\nfunction renderLeftPart(userId){\r\n    const userMessages = (0,_data__WEBPACK_IMPORTED_MODULE_0__.findMessagesByUserId)(userId)\r\n        console.log(userMessages)\r\n        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'\r\n        listMessages.innerHTML = `${messageList}`;\r\n     messageForm.innerHTML = `${(0,_forms__WEBPACK_IMPORTED_MODULE_1__.renderAddMessageForm)(userId)}`\r\n        const form = leftBox.querySelector('form')\r\n        form.onsubmit = formClickHandler;\r\n        listMessages.onclick = messageClickHandler;\r\n}\r\n\r\nfunction formClickHandler(e){\r\n     e.preventDefault();\r\n     const form = e.target;\r\n     const userId = +form.button.dataset.user\r\n     const message = new _message__WEBPACK_IMPORTED_MODULE_2__.default(\r\n         userId,\r\n         form.title.value,\r\n         form.text.value,\r\n         new Date().toLocaleDateString()\r\n     )\r\n     ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.addNewMessage)(message);\r\n     rightBox.innerHTML = '';\r\n     renderLeftPart(userId)\r\n}\r\n\r\nfunction messageClickHandler(event){\r\n    let target = event.target;\r\n    if(target.tagName !== 'DIV'){\r\n        target = event.target.parentNode\r\n    }\r\n    const message = _data__WEBPACK_IMPORTED_MODULE_0__.messages.find(m => m.id === +target.dataset.message);\r\n    renderRightBox(message);\r\n}\r\n\r\nfunction renderRightBox(message){\r\n    rightBox.innerHTML = (message) ? (0,_message__WEBPACK_IMPORTED_MODULE_2__.renderFullInfo)(message) : '';\r\n    rightBox.innerHTML += (0,_forms__WEBPACK_IMPORTED_MODULE_1__.renderAddCommentForm)(message.id);\r\n    const nameForm = document.forms.userName;\r\n    nameForm.onsubmit = checkNameHandler;\r\n}\r\n\r\nfunction checkNameHandler(event){\r\n    event.preventDefault();\r\n    const name = event.target.uname.value;\r\n    const userId = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getUserIdByUserName)(name);\r\n    const alert = document.querySelector('#not-found-user');\r\n    const comment = document.forms.comment\r\n    if(userId < 0){\r\n        alert.classList.remove('hide')\r\n    }else{\r\n        comment.classList.remove('hide');\r\n        alert.classList.add('hide');\r\n        event.target.classList.add('hide');\r\n        comment.onsubmit = (event)=>{\r\n            event.preventDefault();\r\n            const messageId = event.target.ucomment.id.split('_')[1];\r\n            console.log(messageId)\r\n            const newComment = new _comment__WEBPACK_IMPORTED_MODULE_3__.default(\r\n                userId,\r\n                event.target.ucomment.value,\r\n                new Date().toLocaleString()\r\n            )\r\n            ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.addCommentToMessage)(messageId, newComment);\r\n            const message = _data__WEBPACK_IMPORTED_MODULE_0__.messages.find(m => m.id === messageId)\r\n            renderRightBox(message)\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\nclass Message {\n    constructor(userId, title, text, data) {\n        this.userId = userId\n        this.title = title\n        this.text = text\n        this.data = data\n        this.comments = []\n        this.id = Message.id++\n    }\n\n    static id = 0\n\n    renderMessage() {\n        return `\n            <div data-message=\"${this.id}\">\n                <h4>${this.title}</h4>\n                <p>Published: ${this.data}</p>\n            </div>\n        `\n    }\n\n    renderFullInfo() {\n        return `\n            <div>\n               <h3>${this.title}</h3>\n               <p>${this.text}</p>\n               <h4>Published: ${this.data}</h4>\n               <hr>\n               ${(this.comments.length === 0) ? \"<p>No comment</p>\" : this.comments.map(item => item.renderComment()).join('')}\n            </div>\n        `\n    }\n\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/message.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(name, city) {\n        this.name = name\n        this.city = city\n        this.id = User.id++\n    }\n\n    static id = 0\n\n    renderUser() {\n        return `<h3 data-id =\"${this.id}\">${this.name}, ${this.city}</h3>`\n    }\n}\n\n//# sourceURL=webpack://messagenger-webpack/./src/js/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;