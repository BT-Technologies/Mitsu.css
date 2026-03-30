(function (window, document) {
  'use strict';

  var MitsuCSS = {
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
      this.initDismiss();
      this.initAttention();
    },

    initToggles: function () {
      document.querySelectorAll('[data-mitsu-toggle]').forEach(function (trigger) {
        var selector = trigger.getAttribute('data-mitsu-toggle');
        var target = document.querySelector(selector);
        if (!target) return;

        trigger.addEventListener('click', function () {
          var hidden = target.classList.toggle('mitsu-hidden');
          trigger.setAttribute('aria-expanded', hidden ? 'false' : 'true');
        });
      });
    },

    initTabs: function () {
      document.querySelectorAll('[data-mitsu-tabs]').forEach(function (tabsRoot) {
        var tabs = tabsRoot.querySelectorAll('[role="tab"]');
        var panels = tabsRoot.querySelectorAll('[role="tabpanel"]');

        tabs.forEach(function (tab) {
          tab.addEventListener('click', function () {
            var panelId = tab.getAttribute('aria-controls');

            tabs.forEach(function (t) {
              t.setAttribute('aria-selected', 'false');
            });

            panels.forEach(function (panel) {
              panel.classList.add('mitsu-hidden');
            });

            tab.setAttribute('aria-selected', 'true');
            var panel = tabsRoot.querySelector('#' + panelId);
            if (panel) panel.classList.remove('mitsu-hidden');
          });
        });
      });
    },

    initDismiss: function () {
      document.querySelectorAll('[data-mitsu-dismiss]').forEach(function (trigger) {
        var alertEl = trigger.closest('.mitsu-alert');
        if (alertEl) {
          var side = trigger.getAttribute('data-mitsu-dismiss-side') || alertEl.getAttribute('data-mitsu-dismiss-side') || 'right';
          var sizePreset = trigger.getAttribute('data-mitsu-dismiss-size') || alertEl.getAttribute('data-mitsu-dismiss-size') || 'md';
          var size = trigger.getAttribute('data-mitsu-dismiss-height') || alertEl.getAttribute('data-mitsu-dismiss-height');
          var presetMap = { sm: '1.2rem', md: '1.45rem', lg: '1.75rem' };

          trigger.classList.remove('mitsu-alert-dismiss-left', 'mitsu-alert-dismiss-right');
          trigger.classList.add(side === 'left' ? 'mitsu-alert-dismiss-left' : 'mitsu-alert-dismiss-right');

          alertEl.classList.remove('mitsu-alert-with-left-dismiss', 'mitsu-alert-with-right-dismiss');
          alertEl.classList.add(side === 'left' ? 'mitsu-alert-with-left-dismiss' : 'mitsu-alert-with-right-dismiss');

          trigger.style.setProperty('--mitsu-alert-dismiss-size', presetMap[sizePreset] || presetMap.md);

          if (size) trigger.style.setProperty('--mitsu-alert-dismiss-size', size);
        }

        trigger.addEventListener('click', function () {
          var selector = trigger.getAttribute('data-mitsu-dismiss');
          var target = selector ? document.querySelector(selector) : trigger.closest('.mitsu-alert');
          if (!target) return;

          target.classList.add('mitsu-hidden');
          target.setAttribute('aria-hidden', 'true');
        });
      });
    },

    initAttention: function () {
      document.querySelectorAll('[data-mitsu-attention]').forEach(function (el) {
        MitsuCSS.attention(el, el.getAttribute('data-mitsu-attention'));
      });
    },

    attention: function (el, mode) {
      if (!el) return;
      var style = mode || 'pulse';

      el.classList.remove('mitsu-attention-pulse', 'mitsu-attention-shake');
      el.classList.add(style === 'shake' ? 'mitsu-attention-shake' : 'mitsu-attention-pulse');
    }
  };

  window.MitsuCSS = MitsuCSS;
  window.Gumby = MitsuCSS;
})(window, document);
