(function () {
  function setYear() {
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function initThemeToggle() {
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');
    var saved = localStorage.getItem('mitsucss-theme');

    if (saved === 'dark' || saved === 'light') {
      root.setAttribute('data-theme', saved);
    }

    function syncLabel() {
      if (!toggle) return;
      var dark = root.getAttribute('data-theme') === 'dark';
      toggle.textContent = dark ? '🌙' : '☀';
      toggle.setAttribute('aria-label', dark ? 'Theme: Dark (switch to light)' : 'Theme: Light (switch to dark)');
      toggle.setAttribute('title', dark ? 'Theme: Dark' : 'Theme: Light');
      toggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('mitsucss-theme', next);
        syncLabel();
      });
    }

    syncLabel();
  }

  function initVisitedStatus() {
    var key = 'mitsucss-visited-links';
    var store = {};

    try {
      var saved = localStorage.getItem(key);
      if (saved) store = JSON.parse(saved) || {};
    } catch (err) {
      store = {};
    }

    function normHref(href) {
      try {
        return new URL(href, window.location.href).href;
      } catch (err) {
        return '';
      }
    }

    function mark(anchor) {
      if (!anchor) return;
      anchor.classList.add('vst');
    }

    function save() {
      try {
        localStorage.setItem(key, JSON.stringify(store));
      } catch (err) {
        /* no-op */
      }
    }

    var links = document.querySelectorAll('a.lnk[data-vstat], a.mitsu-link[data-vstat]');
    links.forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      var full = normHref(href);
      if (full && store[full]) mark(anchor);

      anchor.addEventListener('click', function () {
        if (anchor.classList.contains('lnk-off') || anchor.classList.contains('mitsu-link-off')) return;
        var nextHref = anchor.getAttribute('href');
        if (!nextHref || nextHref === '#') return;
        var nextFull = normHref(nextHref);
        if (!nextFull) return;
        store[nextFull] = true;
        mark(anchor);
        save();
      });
    });
  }

  function initCardFlip() {
    var flipCards = document.querySelectorAll('[data-mitsu-flip]');
    flipCards.forEach(function (card) {
      var trigger = card.querySelector('.card-flip-inner');
      if (!trigger) return;

      function toggleFlip() {
        var isFlipped = card.classList.toggle('is-flipped');
        trigger.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
      }

      trigger.addEventListener('click', toggleFlip);
      trigger.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleFlip();
        }
      });
    });
  }

  function initDialogAssist() {
    var outsideClosable = document.querySelectorAll('.mitsu-dialog[data-mitsu-outside-close="true"]');
    outsideClosable.forEach(function (dialogEl) {
      dialogEl.addEventListener('click', function (event) {
        if (event.target !== dialogEl) return;
        dialogEl.classList.add('mitsu-hidden');
        dialogEl.setAttribute('aria-hidden', 'true');
      });
    });
  }

  function initFakeTimeline() {
    var timelines = document.querySelectorAll('[data-mitsu-fake-timeline]');
    timelines.forEach(function (timeline) {
      var rows = Array.prototype.slice.call(timeline.querySelectorAll('li'));
      if (!rows.length) return;

      function formatAgo(seconds) {
        if (seconds < 60) return seconds + 's ago';
        var mins = Math.floor(seconds / 60);
        return mins + 'm ago';
      }

      var active = rows.findIndex(function (row) { return row.classList.contains('is-active'); });
      if (active < 0) active = 0;

      function tick() {
        rows.forEach(function (row, idx) {
          row.classList.toggle('is-active', idx === active);
          var timeEl = row.querySelector('.timeline-time');
          if (!timeEl) return;
          var sec = parseInt(timeEl.getAttribute('data-seconds') || '0', 10) || 0;
          sec += 3;
          timeEl.setAttribute('data-seconds', String(sec));
          timeEl.textContent = formatAgo(sec);
        });
        active = (active + 1) % rows.length;
      }

      window.setInterval(tick, 3000);
    });
  }

  function initDualStateButtons() {
    var groups = document.querySelectorAll('[data-mitsu-dual-state]');
    groups.forEach(function (group) {
      var options = Array.prototype.slice.call(group.querySelectorAll('.mitsu-btn-option'));
      if (!options.length) return;

      function setActive(target) {
        options.forEach(function (opt) {
          var on = opt === target;
          opt.classList.toggle('is-selected', on);
          opt.setAttribute('aria-pressed', on ? 'true' : 'false');
        });

        var out = document.querySelector('[data-mitsu-dual-output]');
        if (out) out.textContent = target.getAttribute('data-value') || '';
      }

      options.forEach(function (option) {
        option.addEventListener('click', function () {
          setActive(option);
        });
      });
    });
  }

  window.MitsuCSS.ready(function () {
    window.MitsuCSS.init();
    setYear();
    initThemeToggle();
    initVisitedStatus();
    initCardFlip();
    initDialogAssist();
    initFakeTimeline();
    initDualStateButtons();
  });
})();
