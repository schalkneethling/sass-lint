'use strict';

var lint = require('./_lint');

describe('no debug - scss', function () {
  var file = lint.file('no-debug.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-debug': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });
});

describe('no debug - sass', function () {
  var file = lint.file('no-debug.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-debug': 1
    }, function (data) {
      lint.assert.equal(3, data.warningCount);
      done();
    });
  });
});
