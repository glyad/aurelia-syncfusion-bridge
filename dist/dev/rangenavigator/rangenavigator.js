System.register(['../common/common', 'datavisualization/ej.rangenavigator.min'], function (_export) {
  'use strict';

  var inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, ejRangeNavigator;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_commonCommon) {
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
    }, function (_datavisualizationEjRangenavigatorMin) {}],
    execute: function () {
      ejRangeNavigator = (function (_WidgetBase) {
        var _instanceInitializers = {};

        _inherits(ejRangeNavigator, _WidgetBase);

        _createDecoratedClass(ejRangeNavigator, [{
          key: 'series',
          decorators: [children(constants.elementPrefix + 'range-series')],
          initializer: function initializer() {
            return [];
          },
          enumerable: true
        }], null, _instanceInitializers);

        function ejRangeNavigator(element) {
          _classCallCheck(this, _ejRangeNavigator);

          _WidgetBase.call(this);

          _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers);

          this.element = element;
          this.hasChildProperty = true;
          this.childPropertyName = 'series';
        }

        var _ejRangeNavigator = ejRangeNavigator;
        ejRangeNavigator = inject(Element)(ejRangeNavigator) || ejRangeNavigator;
        ejRangeNavigator = generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'enableDeferredUpdate', 'enableScrollbar', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': 'enableRtl' })(ejRangeNavigator) || ejRangeNavigator;
        ejRangeNavigator = inlineView('' + constants.aureliaTemplateString)(ejRangeNavigator) || ejRangeNavigator;
        ejRangeNavigator = customElement(constants.elementPrefix + 'range-navigator')(ejRangeNavigator) || ejRangeNavigator;
        return ejRangeNavigator;
      })(WidgetBase);

      _export('ejRangeNavigator', ejRangeNavigator);
    }
  };
});
//# sourceMappingURL=../dist/dev/rangenavigator/rangenavigator.js.map
