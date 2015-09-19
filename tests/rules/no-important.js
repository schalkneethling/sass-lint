'use strict';

var lint = require('./_lint');

describe('no important - scss', function () {
  var file = lint.file('no-important.scss');

  it('enforce', function (done) {
    lint.test(file, {
      'no-important': 1
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});

describe('no important - sass', function () {
  var file = lint.file('no-important.sass');

  it('enforce', function (done) {
    lint.test(file, {
      'no-important': 1
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});
