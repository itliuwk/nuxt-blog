import {Message, MessageBox} from 'element-ui';


const myalert = {};
myalert.success = function (msg) {
  Message({
    message: msg,
    type: 'success'
  });
};
myalert.fail = function (msg) {
  Message.error(msg);
};
myalert.confirm = function (msg) {
  return MessageBox.confirm(msg, '提示', {
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
};

export default myalert
