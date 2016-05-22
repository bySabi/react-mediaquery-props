'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// The EM units are based on html, body { font-size: 16px; } CSS

var
// max-width 543px
// Exta small devices (portrait Mobile)
xs = 'only screen and (max-width: 33.938em)',


// min-width 544px and max-width 767px
// Mobile
sm = 'only screen and (min-width: 34em) and (max-width: 47.938em)',
    smUp = 'only screen and (min-width: 34em)',
    smDown = 'only screen and (max-width: 47.938em)',


// min-width 768px and max-width 991px
// Tablet
md = 'only screen and (min-width: 48em) and (max-width: 61.938em)',
    mdUp = 'only screen and (min-width: 48em)',
    mdDown = 'only screen and (max-width: 61.938em)',


// min-width 992px and max-width 1199px
// Desktop
lg = 'only screen and (min-width: 62em) and (max-width: 74.938em)',
    lgUp = 'only screen and (min-width: 62em)',
    lgDown = 'only screen and (max-width: 74.938em)',


// min-width 1200px
// Large Desktop
xl = 'only screen and (min-width: 75em)',


// detect portrait orientation
portrait = 'only screen and (orientation: portrait)',


// detect portrait orientation
landscape = 'only screen and (orientation: landscape)';

exports.xs = xs;
exports.sm = sm;
exports.smUp = smUp;
exports.smDown = smDown;
exports.md = md;
exports.mdUp = mdUp;
exports.mdDown = mdDown;
exports.lg = lg;
exports.lgUp = lgUp;
exports.lgDown = lgDown;
exports.xl = xl;
exports.portrait = portrait;
exports.landscape = landscape;