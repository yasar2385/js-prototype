// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

if (!Element.prototype.removeAttributesDOM) {
  Element.prototype.removeAttributesDOM = function (...attrs) {
    try {
      //code goes here
      attrs.forEach((attr) => this.removeAttribute(attr));
    } catch (err) {
      console.warn(err.message);
    }
  };
}
if (!Element.prototype.setAttributesDOM) {
  Element.prototype.setAttributesDOM = function (json) {
    try {
      //code goes here
      Object.keys(json).forEach(function (attr) {
        this.setAttribute(attr, json[attr]);
      });
    } catch (err) {
      console.warn(err.message);
    }
  };
}

appDiv.setAttributesDOM({
  'data-link': 'remove',
  'data-time': 'DateTime',
  'data-username': 'user',
  ohref: 'ohref',
});
