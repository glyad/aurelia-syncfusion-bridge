define(['exports', '../common/common', 'datavisualization/ej.lineargauge.min'], function (exports, _commonCommon, _datavisualizationEjLineargaugeMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejLinearGauge = (function (_WidgetBase) {
    _inherits(ejLinearGauge, _WidgetBase);

    function ejLinearGauge(element) {
      _classCallCheck(this, _ejLinearGauge);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejLinearGauge = ejLinearGauge;
    ejLinearGauge = _commonCommon.inject(Element)(ejLinearGauge) || ejLinearGauge;
    ejLinearGauge = _commonCommon.generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejLinearGauge) || ejLinearGauge;
    ejLinearGauge = _commonCommon.inlineView('' + _commonCommon.constants.aureliaTemplateString)(ejLinearGauge) || ejLinearGauge;
    ejLinearGauge = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'linear-gauge')(ejLinearGauge) || ejLinearGauge;
    return ejLinearGauge;
  })(_commonCommon.WidgetBase);

  exports.ejLinearGauge = ejLinearGauge;
});