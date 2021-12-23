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
  ohref: 'ohref'
});
String.prototype.hexEncode = function () {
  var hex, i;

  var result = '';
  for (i = 0; i < this.length; i++) {
    hex = this.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
};
String.prototype.hexDecode = function () {
  var j;
  var hexes = this.match(/.{1,4}/g) || [];
  var back = '';

  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
};

// "\u6f22\u5b57" === "漢字"
var str = '\u6f22\u5b57';
console.log(str.hexEncode().hexDecode());

function hex2a(hexx) {
  var hex = hexx.toString(); //force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  console.log(str);
  return str;
}

hex2a(
  '3c703e48692c3c62723e3c62723e5468652070726f6f66206f6620796f75722061727469636c65207b7b6964656e7469666965727d7d2c207768696368206973207363686564756c656420666f72207075626c69636174696f6e20696e203c693e7b7b70726f6a6563747469746c657d7d3c2f693e2c20697320617661696c61626c65206f6e6c696e652e20546f20616363657373207468652070726f6f662c20706c6561736520636c69636b20686572653a266e6273703b3c2f703e3c703e3c6120687265663d5c227b7b63757272656e7475726c7d7d76616c696461746575726c2e68746d6c3f6b65793d7b7b6b65797d7d5c223e436c69636b206865726520746f206f70656e3c2f613e266e6273703b3c2f703e3c703e3c7374726f6e673e506c6561736520656e73757265207468617420616c6c20617574686f7220717565726965732061726520616e7377657265642c2061732070726f6f662077696c6c206e6f742062652073656e7420666f7220667572746865722065646974696e672e3c2f7374726f6e673e3c2f703e3c703e436f7272656374696f6e732073686f756c64206265207265737472696374656420746f20666f726d617474696e6720616e64206661637475616c206572726f72732e20436f7272656374696f6e7320636f6e74726164696374696e67206a6f75726e616c207374796c652073686f756c64206e6f74206265206d6164652e20436f7272656374696f6e732063616e6e6f74206265206d61646520746f20796f75722061727469636c65206166746572206f6e6c696e65207075626c69636174696f6e206f662074686520636f727265637465642070726f6f662c2065786365707420636f7272656374696f6e7320746f20616e79206d616a6f72206572726f7273207468617420796f75206d61792066696e642e205468657265666f72652c20706c6561736520656e7375726520796f757220636f7272656374696f6e732061726520636c65617220616e6420636f6d706c6574652e20506c656173652075736520616e79206f6620746865206c6174657374205765622062726f777365727320737563682061732074686520476f6f676c65204368726f6d652c204d6f7a696c6c612046697265666f782c20536166617269206f7220496e7465726e6574204578706c6f7265722e3c2f703e3c703e5765207265717565737420796f7520746f20757365207468652068656c70206d656e7520746861742077696c6c20677569646520796f7520746f207573652074686520766172696f757320666561747572657320617661696c61626c6520696e207468652073797374656d2e3c2f703e3c703e5468616e6b20796f7520666f72207075626c697368696e67207769746820576f6c74657273204b6c75776572204865616c74682c20496e632e3c2f703e'
); // returns '2460'

hex2a(
  '3c703e48692c3c62723e3c62723e5468652070726f6f66206f6620796f75722061727469636c65207b7b6964656e7469666965727d7d2c207768696368206973207363686564756c656420666f72207075626c69636174696f6e20696e203c693e7b7b70726f6a6563747469746c657d7d3c2f693e2c20697320617661696c61626c65206f6e6c696e652e20546f20616363657373207468652070726f6f662c20706c6561736520636c69636b20686572653a266e6273703b3c2f703e3c703e3c6120687265663d5c227b7b63757272656e7475726c7d7d76616c696461746575726c2e68746d6c3f6b65793d7b7b6b65797d7d5c223e436c69636b206865726520746f206f70656e3c2f613e266e6273703b3c2f703e3c703e3c7374726f6e673e506c6561736520656e73757265207468617420616c6c20617574686f7220717565726965732061726520616e7377657265642c2061732070726f6f662077696c6c206e6f742062652073656e7420666f7220667572746865722065646974696e672e3c2f7374726f6e673e3c2f703e3c703e436f7272656374696f6e732073686f756c64206265207265737472696374656420746f20666f726d617474696e6720616e64206661637475616c206572726f72732e20436f7272656374696f6e7320636f6e74726164696374696e67206a6f75726e616c207374796c652073686f756c64206e6f74206265206d6164652e20436f7272656374696f6e732063616e6e6f74206265206d61646520746f20796f75722061727469636c65206166746572206f6e6c696e65207075626c69636174696f6e206f662074686520636f727265637465642070726f6f662c2065786365707420636f7272656374696f6e7320746f20616e79206d616a6f72206572726f7273207468617420796f75206d61792066696e642e205468657265666f72652c20706c6561736520656e7375726520796f757220636f7272656374696f6e732061726520636c65617220616e6420636f6d706c6574652e20506c656173652075736520616e79206f6620746865206c6174657374205765622062726f777365727320737563682061732074686520476f6f676c65204368726f6d652c204d6f7a696c6c612046697265666f782c20536166617269206f7220496e7465726e6574204578706c6f7265722e3c2f703e3c703e5765207265717565737420796f7520746f20757365207468652068656c70206d656e7520746861742077696c6c20677569646520796f7520746f207573652074686520766172696f757320666561747572657320617661696c61626c6520696e207468652073797374656d2e3c2f703e'
);
