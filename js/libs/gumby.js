(function (window, document) {
  'use strict';

  var Gumby = {
    version: '3.0.0',

    ready: function (callback) {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback, { once: true });
      } else {
        callback();
      }
      return this;
    },

    init: function () {
      this.initToggles();
      this.initTabs();
    },

    initToggles: function () {
      document.querySelectorAll('[data-gumby-toggle]').forEach(function (trigger) {
        var selector = trigger.getAttribute('data-gumby-toggle');
        var target = document.querySelector(selector);
        if (!target) return;

        trigger.addEventListener('click', function () {
          var hidden = target.classList.toggle('gumby-hidden');
          trigger.setAttribute('aria-expanded', hidden ? 'false' : 'true');
        });
      });
    },

    initTabs: function () {
      document.querySelectorAll('[data-gumby-tabs]').forEach(function (tabsRoot) {
        var tabs = tabsRoot.querySelectorAll('[role="tab"]');
        var panels = tabsRoot.querySelectorAll('[role="tabpanel"]');

        tabs.forEach(function (tab) {
          tab.addEventListener('click', function () {
            var panelId = tab.getAttribute('aria-controls');

            tabs.forEach(function (t) {
              t.setAttribute('aria-selected', 'false');
            });

            panels.forEach(function (panel) {
              panel.classList.add('gumby-hidden');
            });

            tab.setAttribute('aria-selected', 'true');
            var panel = tabsRoot.querySelector('#' + panelId);
            if (panel) panel.classList.remove('gumby-hidden');
          });
        });
      });
    }
  };

  window.Gumby = Gumby;
})(window, document);