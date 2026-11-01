/**
 * ============================================================================
 * DOMINIO CYCLING CLUB — INTERACTIVIDAD Y RENDERIZADO
 * ============================================================================
 * Lee la información de js/data.js y construye las secciones dinámicas
 * (instalaciones, horarios, instructores, galería y contacto), además de
 * manejar el menú móvil, el header fijo, las animaciones de aparición y
 * el lightbox accesible de la galería.
 * ============================================================================
 */
(function () {
  'use strict';

  /* ---- Utilidades ------------------------------------------------------ */
  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function onlyDigits(value) {
    return String(value || '').replace(/\D/g, '');
  }

  function formatWhatsapp(number) {
    return number.indexOf('+') === 0 ? number : '+' + number;
  }

  function getSocialIcon(url) {
    var value = String(url || '').toLowerCase();
    if (value.indexOf('instagram.com') !== -1) return 'icon-instagram';
    if (value.indexOf('facebook.com') !== -1 || value.indexOf('fb.com') !== -1) return 'icon-facebook';
    if (value.indexOf('wa.me') !== -1 || value.indexOf('whatsapp.com') !== -1) return 'icon-whatsapp';
    return 'icon-link';
  }

  /**
   * Dibuja el ícono de marcador de posición dentro de un .media-slot existente.
   */
  function renderMediaPlaceholder(el, options) {
    el.innerHTML = '';
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', (options.alt ? options.alt + ' ' : '') + '(fotografía próximamente)');

    var svgNS = 'http://www.w3.org/2000/svg';
    var icon = document.createElementNS(svgNS, 'svg');
    icon.setAttribute('class', 'media-slot-icon');
    icon.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS(svgNS, 'use');
    use.setAttribute('href', '#' + (options.iconId || 'icon-camera'));
    icon.appendChild(use);
    el.appendChild(icon);

    if (options.caption) {
      var caption = document.createElement('span');
      caption.className = 'media-slot-caption';
      caption.textContent = options.caption;
      el.appendChild(caption);
    }
  }

  /**
   * Crea un marcador de posición de fotografía (o la fotografía real si
   * "photo" tiene una ruta válida). Si la fotografía falla al cargar,
   * vuelve automáticamente al marcador de posición.
   */
  function createMediaSlot(opts) {
    var options = opts || {};
    var el = document.createElement('div');
    el.className = 'media-slot' + (options.sizeClass ? ' ' + options.sizeClass : '');

    if (options.photo) {
      var img = document.createElement('img');
      img.src = options.photo;
      img.alt = options.alt || '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.onerror = function () { renderMediaPlaceholder(el, options); };
      el.appendChild(img);
    } else {
      renderMediaPlaceholder(el, options);
    }
    return el;
  }

  /* ---- Textos principales ----------------------------------------------- */
  function hydrateTexts(data) {
    function setText(id, value) {
      var el = document.getElementById(id);
      if (el && value) el.textContent = value;
    }
    var brand = data.brand || {};
    var texts = data.texts || {};

    setText('brand-name', brand.name);
    setText('brand-sub', brand.subname);
    setText('hero-eyebrow', texts.heroEyebrow);
    setText('hero-title', texts.heroTitle);
    setText('footer-location', brand.locationFull || brand.locationShort);
  }

  /* ---- Instalaciones ------------------------------------------------------ */
  function renderFacilities(container, list) {
    if (!container) return;
    container.innerHTML = '';
    (list || []).forEach(function (facility) {
      var card = document.createElement('article');
      card.className = 'card facility-card';
      card.appendChild(createMediaSlot({
        photo: facility.photo,
        alt: facility.title,
        caption: facility.title
      }));
      var body = document.createElement('div');
      body.className = 'facility-body';
      body.innerHTML =
        '<h3 class="card-title">' + esc(facility.title) + '</h3>' +
        '<p class="card-desc">' + esc(facility.desc) + '</p>';
      card.appendChild(body);
      container.appendChild(card);
    });
  }

  /* ---- Horarios ------------------------------------------------------------ */
  function renderSchedule(container, schedule, contact) {
    if (!container) return;
    container.innerHTML = '';

    if (Array.isArray(schedule) && schedule.length > 0) {
      var list = document.createElement('div');
      list.className = 'schedule-list';
      schedule.forEach(function (item) {
        var row = document.createElement('div');
        row.className = 'schedule-row';
        row.innerHTML =
          '<span class="schedule-days">' + esc(item.dias) + '</span>' +
          '<span class="schedule-time">' + esc(item.horario) + '</span>' +
          (item.nota ? '<span class="schedule-note">' + esc(item.nota) + '</span>' : '');
        list.appendChild(row);
      });
      container.appendChild(list);
      return;
    }

    var waDigits = contact ? onlyDigits(contact.whatsapp) : '';
    var empty = document.createElement('div');
    empty.className = 'schedule-empty';
    empty.innerHTML =
      '<svg class="schedule-empty-icon" aria-hidden="true"><use href="#icon-clock"></use></svg>' +
      '<h3 class="schedule-empty-title">Consulta nuestros horarios disponibles</h3>' +
      '<p class="schedule-empty-text">Estamos afinando el calendario de clases. Escríbenos y con gusto te compartimos las opciones disponibles.</p>' +
      '<a class="btn btn-primary" href="' + (waDigits ? 'https://wa.me/' + waDigits : '#contacto') + '"' +
      (waDigits ? ' target="_blank" rel="noopener noreferrer"' : '') + '>Preguntar por horarios</a>';
    container.appendChild(empty);
  }

  /* ---- Instructores --------------------------------------------------------- */
  function renderInstructors(container, list) {
    if (!container) return;
    container.innerHTML = '';
    (list || []).forEach(function (instructor) {
      var card = document.createElement('article');
      card.className = 'card instructor-card';

      var avatar = document.createElement('div');
      avatar.className = 'instructor-avatar';
      avatar.appendChild(createMediaSlot({
        photo: instructor.photo,
        alt: instructor.name,
        iconId: 'icon-user',
        sizeClass: 'media-slot--fill'
      }));
      card.appendChild(avatar);

      var name = document.createElement('h3');
      name.className = 'instructor-name';
      name.textContent = instructor.name || 'Nombre del instructor';
      card.appendChild(name);

      var role = document.createElement('p');
      role.className = 'instructor-role';
      role.textContent = instructor.role || 'Especialidad por definir';
      card.appendChild(role);

      if (instructor.bio) {
        var bio = document.createElement('p');
        bio.className = 'instructor-bio';
        bio.textContent = instructor.bio;
        card.appendChild(bio);
      }

      if (instructor.social) {
        var social = document.createElement('a');
        social.className = 'instructor-social';
        social.href = instructor.social;
        social.target = '_blank';
        social.rel = 'noopener noreferrer';
        social.setAttribute('aria-label', 'Red social de ' + (instructor.name || 'instructor'));
        social.innerHTML = '<svg aria-hidden="true"><use href="#' + getSocialIcon(instructor.social) + '"></use></svg>';
        card.appendChild(social);
      }

      container.appendChild(card);
    });
  }

  /* ---- Galería + Lightbox ----------------------------------------------------- */
  var galleryData = [];
  var currentIndex = 0;
  var activeList = [];
  var lastFocusedEl = null;
  var lightboxEls = {};

  function renderCertifications(container, list) {
    if (!container) return;
    container.innerHTML = '';
    var images = (list || []).filter(function (c) { return c.photo; });
    (list || []).forEach(function (item) {
      var el;
      if (item.pdf) {
        el = document.createElement('a');
        el.href = item.pdf;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.setAttribute('aria-label', 'Abrir PDF: ' + item.caption);
        el.innerHTML = '<span class="cert-pdf">PDF</span>';
      } else {
        el = document.createElement('button');
        el.type = 'button';
        el.setAttribute('aria-haspopup', 'dialog');
        el.setAttribute('aria-label', 'Ampliar: ' + item.caption);
        el.appendChild(createMediaSlot({ photo: item.photo, alt: item.caption, caption: item.caption }));
        el.addEventListener('click', function () { openLightbox(images.indexOf(item), images); });
      }
      el.classList.add('cert-item');
      var cap = document.createElement('span');
      cap.className = 'gallery-caption';
      cap.textContent = item.caption || '';
      el.appendChild(cap);
      container.appendChild(el);
    });
  }

  function renderGallery(container, list) {
    if (!container) return;
    container.innerHTML = '';
    galleryData = list || [];
    galleryData.forEach(function (item, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gallery-item';
      btn.setAttribute('aria-haspopup', 'dialog');
      btn.setAttribute('aria-label', 'Ampliar imagen: ' + (item.caption || 'fotografía de Dominio Cycling Club'));
      btn.appendChild(createMediaSlot({ photo: item.photo, alt: item.caption, caption: item.caption }));

      var caption = document.createElement('span');
      caption.className = 'gallery-caption';
      caption.textContent = item.caption || '';
      btn.appendChild(caption);

      btn.addEventListener('click', function () { openLightbox(index); });
      container.appendChild(btn);
    });
  }

  /* ---- Eventos (línea de tiempo) ------------------------------------------- */
  function renderEvents(container, events, contact) {
    if (!container) return;
    container.innerHTML = '';

    (events || []).forEach(function (ev) {
      var photos = Array.isArray(ev.photos) ? ev.photos : [];
      // El lightbox espera objetos { photo, caption }, no rutas sueltas.
      var lightboxList = photos.map(function (src) {
        return { photo: src, caption: ev.title || '' };
      });
      var item = document.createElement('article');
      item.className = 'timeline-item';
      if (ev.id) item.id = 'evento-' + ev.id;

      var dot = document.createElement('span');
      dot.className = 'timeline-dot';
      dot.setAttribute('aria-hidden', 'true');
      item.appendChild(dot);

      var card = document.createElement('div');
      card.className = 'timeline-card';

      var media = document.createElement('div');
      media.className = 'timeline-media';
      var img = document.createElement('img');
      img.className = 'timeline-cover';
      img.src = ev.cover || '';
      img.alt = ev.title || 'Evento de Dominio Cycling Club';
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);
      if (ev.tag) {
        var chip = document.createElement('span');
        chip.className = 'timeline-chip';
        chip.textContent = ev.tag;
        media.appendChild(chip);
      }
      card.appendChild(media);

      var body = document.createElement('div');
      body.className = 'timeline-body';

      var meta = document.createElement('p');
      meta.className = 'timeline-meta';
      meta.innerHTML =
        (ev.date ? '<span class="timeline-date">' + esc(ev.date) + '</span>' : '') +
        (ev.tag ? '<span class="timeline-tag">' + esc(ev.tag) + '</span>' : '');
      body.appendChild(meta);

      var title = document.createElement('h3');
      title.className = 'timeline-title';
      title.textContent = ev.title || 'Evento Dominio';
      body.appendChild(title);

      if (ev.excerpt) {
        var excerpt = document.createElement('p');
        excerpt.className = 'timeline-excerpt';
        excerpt.textContent = ev.excerpt;
        body.appendChild(excerpt);
      }

      var actions = document.createElement('div');
      actions.className = 'timeline-actions';

      if (photos.length > 0) {
        var photosBtn = document.createElement('button');
        photosBtn.type = 'button';
        photosBtn.className = 'btn btn-primary timeline-btn';
        photosBtn.setAttribute('aria-haspopup', 'dialog');
        photosBtn.textContent = 'Ver fotos (' + photos.length + ')';
        photosBtn.addEventListener('click', function () { openLightbox(0, lightboxList); });
        actions.appendChild(photosBtn);
      }

      if (actions.childElementCount > 0) body.appendChild(actions);

      var videos = Array.isArray(ev.videos) ? ev.videos : (ev.video ? [{ src: ev.video }] : []);
      if (videos.length > 0) {
        var videosSection = document.createElement('section');
        videosSection.className = 'timeline-videos';
        var videosTitle = document.createElement('h4');
        videosTitle.className = 'timeline-videos-title';
        videosTitle.textContent = 'Videos del evento';
        videosSection.appendChild(videosTitle);

        var videoGrid = document.createElement('div');
        videoGrid.className = 'timeline-video-grid';
        videos.forEach(function (videoItem, index) {
          var videoData = typeof videoItem === 'string' ? { src: videoItem } : videoItem;
          var videoTitle = videoData.title || ('Video ' + (index + 1));
          var videoCard = document.createElement('article');
          videoCard.className = 'timeline-video-card';

          var videoHeading = document.createElement('h5');
          videoHeading.className = 'timeline-video-title';
          videoHeading.textContent = videoTitle;
          videoCard.appendChild(videoHeading);

          if (videoData.youtubeEmbed && videoData.youtubeUrl) {
            var embed = document.createElement('div');
            embed.className = 'timeline-youtube-embed';
            var frame = document.createElement('iframe');
            frame.src = videoData.youtubeEmbed;
            frame.title = videoTitle;
            frame.loading = 'lazy';
            frame.referrerPolicy = 'origin';
            frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            frame.allowFullscreen = true;
            embed.appendChild(frame);
            videoCard.appendChild(embed);

            var youtubeLink = document.createElement('a');
            youtubeLink.className = 'timeline-youtube-link';
            youtubeLink.href = videoData.youtubeUrl;
            youtubeLink.target = '_blank';
            youtubeLink.rel = 'noopener noreferrer';
            youtubeLink.textContent = 'Abrir en YouTube';
            videoCard.appendChild(youtubeLink);
          } else {
            var video = document.createElement('video');
            video.className = 'timeline-video-el';
            video.controls = true;
            video.playsInline = true;
            video.preload = 'none';
            video.setAttribute('aria-label', 'Video del evento: ' + videoTitle);
            if (videoData.poster || ev.cover) video.poster = videoData.poster || ev.cover;

            var source = document.createElement('source');
            source.src = videoData.src;
            source.type = 'video/mp4';
            video.appendChild(source);
            video.addEventListener('error', function () {
              video.hidden = true;
              var note = document.createElement('p');
              note.className = 'timeline-video-error';
              note.textContent = 'No pudimos cargar este video en el navegador.';
              videoCard.appendChild(note);
            });
            videoCard.appendChild(video);
          }
          videoGrid.appendChild(videoCard);
        });

        videosSection.appendChild(videoGrid);
        body.appendChild(videosSection);
      }

      card.appendChild(body);
      item.appendChild(card);
      container.appendChild(item);
    });

    var waDigits = onlyDigits(contact && contact.whatsapp);
    var cta = document.createElement('div');
    cta.className = 'timeline-cta';
    cta.innerHTML =
      '<p class="timeline-cta-text">¿Te apuntas al próximo evento?</p>' +
      '<a class="btn btn-primary" href="' + (waDigits ? 'https://wa.me/' + waDigits : '#contacto') + '"' +
      (waDigits ? ' target="_blank" rel="noopener noreferrer"' : '') + '>Escríbenos por WhatsApp</a>';
    container.appendChild(cta);
  }

  function showLightboxItem() {
    var item = activeList[currentIndex];
    if (!item || !lightboxEls.media) return;
    lightboxEls.media.innerHTML = '';
    lightboxEls.media.appendChild(createMediaSlot({ photo: item.photo, alt: item.caption, caption: item.caption }));
    lightboxEls.caption.textContent = item.caption || '';
    lightboxEls.counter.textContent = (currentIndex + 1) + ' / ' + activeList.length;
  }

  function openLightbox(index, list) {
    activeList = list || galleryData;
    if (!lightboxEls.root || activeList.length === 0) return;
    lastFocusedEl = document.activeElement;
    currentIndex = index;
    showLightboxItem();
    lightboxEls.root.hidden = false;
    lightboxEls.root.removeAttribute('aria-hidden');
    requestAnimationFrame(function () { lightboxEls.root.classList.add('is-open'); });
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', onLightboxKeydown);
    if (lightboxEls.closeBtn) lightboxEls.closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxEls.root) return;
    lightboxEls.root.classList.remove('is-open');
    lightboxEls.root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', onLightboxKeydown);
    window.setTimeout(function () { lightboxEls.root.hidden = true; }, 350);
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % activeList.length;
    showLightboxItem();
  }
  function showPrevItem() {
    currentIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    showLightboxItem();
  }

  function onLightboxKeydown(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNextItem();
    } else if (e.key === 'ArrowLeft') {
      showPrevItem();
    } else if (e.key === 'Tab') {
      var focusables = lightboxEls.root.querySelectorAll('button');
      if (focusables.length === 0) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function initLightbox() {
    lightboxEls.root = document.getElementById('lightbox');
    lightboxEls.media = document.getElementById('lightbox-media');
    lightboxEls.caption = document.getElementById('lightbox-caption');
    lightboxEls.counter = document.getElementById('lightbox-counter');
    lightboxEls.closeBtn = lightboxEls.root ? lightboxEls.root.querySelector('.lightbox-close') : null;

    if (!lightboxEls.root) return;

    lightboxEls.root.querySelectorAll('[data-lightbox-close]').forEach(function (el) {
      el.addEventListener('click', closeLightbox);
    });
    var prevBtn = document.getElementById('lightbox-prev');
    var nextBtn = document.getElementById('lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', showPrevItem);
    if (nextBtn) nextBtn.addEventListener('click', showNextItem);
  }

  /* ---- Contacto --------------------------------------------------------------- */
  function renderContact(data) {
    var contact = data.contact || {};
    var brand = data.brand || {};
    var waDigits = onlyDigits(contact.whatsapp);
    var mailtoHref = 'mailto:' + (contact.email || '') +
      '?subject=' + encodeURIComponent('Información Dominio Cycling Club') +
      '&body=' + encodeURIComponent('Hola, me gustaría recibir información sobre Dominio Cycling Club.');

    var infoContainer = document.getElementById('contact-info');
    if (infoContainer) {
      var rows = [];
      rows.push({ icon: 'icon-pin', label: 'Ubicación', value: brand.locationFull || brand.locationShort || '' });
      if (contact.address) rows.push({ icon: 'icon-pin', label: 'Dirección', value: contact.address });
      if (contact.phone) rows.push({ icon: 'icon-phone', label: 'Teléfono', value: contact.phone, href: 'tel:' + contact.phone.replace(/\s+/g, '') });
      if (waDigits) rows.push({ icon: 'icon-whatsapp', label: 'WhatsApp', value: formatWhatsapp(contact.whatsapp), href: 'https://wa.me/' + waDigits, external: true });
      if (contact.email) rows.push({ icon: 'icon-mail', label: 'Correo', value: contact.email, href: mailtoHref });

      infoContainer.innerHTML = '';
      rows.forEach(function (row) {
        var el = document.createElement(row.href ? 'a' : 'div');
        el.className = 'contact-row';
        if (row.href) {
          el.setAttribute('href', row.href);
          if (row.external) {
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
          }
        }
        el.innerHTML =
          '<span class="contact-row-icon"><svg aria-hidden="true"><use href="#' + row.icon + '"></use></svg></span>' +
          '<span><span class="contact-row-label">' + esc(row.label) + '</span>' +
          '<span class="contact-row-value">' + esc(row.value) + '</span></span>';
        infoContainer.appendChild(el);
      });

      var hasDirectContact = contact.address || contact.phone || waDigits || contact.email;
      if (!hasDirectContact) {
        var note = document.createElement('p');
        note.className = 'contact-empty';
        note.textContent = 'Estamos por compartir aquí nuestros datos de contacto directo. ¡Muy pronto!';
        infoContainer.appendChild(note);
      }
    }

    var socialLinks = [];
    if (contact.facebook) socialLinks.push({ icon: 'icon-facebook', href: contact.facebook, label: 'Facebook de Dominio Cycling Club' });
    if (contact.instagram) socialLinks.push({ icon: 'icon-instagram', href: contact.instagram, label: 'Instagram de Dominio Cycling Club' });

    [document.getElementById('contact-social'), document.getElementById('footer-social')].forEach(function (cont) {
      if (!cont) return;
      cont.innerHTML = '';
      socialLinks.forEach(function (s) {
        var a = document.createElement('a');
        a.className = 'social-link';
        a.href = s.href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', s.label);
        a.innerHTML = '<svg aria-hidden="true"><use href="#' + s.icon + '"></use></svg>';
        cont.appendChild(a);
      });
    });

    var footerContact = document.getElementById('footer-contact');
    if (footerContact) {
      footerContact.innerHTML = '';
      var items = [];
      if (contact.phone) items.push({ text: contact.phone, href: 'tel:' + contact.phone.replace(/\s+/g, '') });
      if (waDigits) items.push({ text: 'WhatsApp', href: 'https://wa.me/' + waDigits, external: true });
      if (contact.email) items.push({ text: contact.email, href: mailtoHref });
      if (items.length === 0) items.push({ text: brand.locationFull || brand.locationShort || '', href: '#contacto' });
      items.forEach(function (item) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = item.href;
        if (item.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        a.textContent = item.text;
        li.appendChild(a);
        footerContact.appendChild(li);
      });
    }

    var mapCoords = contact.mapCoords || '';
    var mapQuery = contact.mapQuery || brand.locationFull || brand.locationShort;
    var mapContainer = document.getElementById('contact-map');
    if (mapContainer) {
      var embedSrc = mapCoords || mapQuery
        ? 'https://www.google.com/maps?q=' + encodeURIComponent(mapCoords || mapQuery) + '&z=17&output=embed'
        : '';

      if (embedSrc) {
        mapContainer.innerHTML = '';

        var card = document.createElement('div');
        card.className = 'place-card';

        if (Array.isArray(contact.photos) && contact.photos.length > 0) {
          var strip = document.createElement('div');
          strip.className = 'place-photos';
          contact.photos.slice(0, 3).forEach(function (p) {
            var img = document.createElement('img');
            img.src = p.src;
            img.alt = p.alt || 'Dominio Cycling Club';
            img.loading = 'lazy';
            img.decoding = 'async';
            strip.appendChild(img);
          });
          card.appendChild(strip);
        }

        var body = document.createElement('div');
        body.className = 'place-body';

        var name = document.createElement('p');
        name.className = 'place-name';
        name.textContent = (brand.name || '') + (brand.subname ? ' ' + brand.subname : '');
        body.appendChild(name);

        var cat = document.createElement('p');
        cat.className = 'place-cat';
        cat.textContent = 'Gimnasio · Centro oficial de Spinning®';
        body.appendChild(cat);

        var rows = [
          { icon: 'icon-pin', text: contact.address, href: contact.mapUrl, external: true },
          { icon: 'icon-clock', text: contact.hoursNote || '', href: '' },
          { icon: 'icon-link', text: 'dominio.work', href: 'https://dominio.work', external: true },
          { icon: 'icon-map', text: contact.plusCode || '', href: '' }
        ];

        rows.forEach(function (r) {
          if (!r.text) return;
          var row = document.createElement(r.href ? 'a' : 'div');
          row.className = 'place-row';
          if (r.href) {
            row.setAttribute('href', r.href);
            if (r.external) {
              row.setAttribute('target', '_blank');
              row.setAttribute('rel', 'noopener noreferrer');
            }
          }
          row.innerHTML =
            '<svg class="place-row-icon" aria-hidden="true"><use href="#' + r.icon + '"></use></svg>' +
            '<span>' + esc(r.text) + '</span>';
          body.appendChild(row);
        });

        var actions = document.createElement('div');
        actions.className = 'place-actions';

        var dirBtn = document.createElement('a');
        dirBtn.className = 'btn btn-primary place-btn';
        dirBtn.href = contact.mapUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapCoords));
        dirBtn.target = '_blank';
        dirBtn.rel = 'noopener noreferrer';
        dirBtn.textContent = 'Indicaciones';
        actions.appendChild(dirBtn);

        var mapBtn = document.createElement('a');
        mapBtn.className = 'btn btn-outline place-btn';
        mapBtn.href = contact.mapUrl || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapCoords));
        mapBtn.target = '_blank';
        mapBtn.rel = 'noopener noreferrer';
        mapBtn.textContent = 'Ver en Google Maps';
        actions.appendChild(mapBtn);

        body.appendChild(actions);
        card.appendChild(body);

        var frame = document.createElement('div');
        frame.className = 'place-map';
        var iframe = document.createElement('iframe');
        iframe.src = embedSrc;
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'no-referrer-when-downgrade';
        iframe.setAttribute('allowfullscreen', '');
        iframe.title = 'Ubicación de Dominio Cycling Club en el mapa';
        frame.appendChild(iframe);

        mapContainer.appendChild(card);
        mapContainer.appendChild(frame);
      } else {
        mapContainer.innerHTML =
          '<div class="contact-map-fallback">' +
          '<svg aria-hidden="true"><use href="#icon-map"></use></svg>' +
          '<span>Agrega una ubicación en js/data.js para mostrar el mapa.</span>' +
          '</div>';
      }
    }

    var waFloat = document.getElementById('whatsapp-float');
    if (waFloat) {
      if (waDigits) {
        waFloat.setAttribute('href', 'https://wa.me/' + waDigits);
        waFloat.hidden = false;
      } else {
        waFloat.hidden = true;
      }
    }

    var mapHref = contact.mapUrl
      || (mapCoords ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapCoords) : '')
      || (mapQuery ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapQuery) : '#contacto');
    document.querySelectorAll('[data-map-link]').forEach(function (a) {
      a.setAttribute('href', mapHref);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /* ---- Header fijo al hacer scroll --------------------------------------------- */
  function initHeaderScroll() {
    var header = document.getElementById('site-header');
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 40) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Menú móvil --------------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    function onKeydown(e) {
      if (e.key === 'Escape') closeMenu(true);
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      document.body.classList.add('no-scroll');
      document.addEventListener('keydown', onKeydown);
      var firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeMenu(returnFocus) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', onKeydown);
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu(true);
      else openMenu();
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { closeMenu(false); });
    });
  }

  /* ---- Animaciones de aparición al hacer scroll --------------------------------- */
  function initScrollReveal() {
    var items = document.querySelectorAll('.reveal');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Año del footer ------------------------------------------------------------ */
  function setFooterYear() {
    var el = document.getElementById('footer-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---- Datos estructurados (SEO local) ---------------------------------------------
     Solo incluye campos que realmente existan en data.js; nunca inventa
     horarios, precios, calificaciones ni datos de contacto.
  ------------------------------------------------------------------------------------ */
  function injectStructuredData(data) {
    var brand = data.brand || {};
    var contact = data.contact || {};
    var schema = {
      '@context': 'https://schema.org',
      '@type': 'ExerciseGym',
      name: (brand.name || '') + (brand.subname ? ' ' + brand.subname : '')
    };

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.content) schema.description = metaDescription.content;

    var locationParts = String(brand.locationShort || '').split(',').map(function (part) { return part.trim(); }).filter(Boolean);
    if (contact.address || locationParts.length > 0) {
      schema.address = { '@type': 'PostalAddress', addressCountry: 'MX' };
      if (contact.address) schema.address.streetAddress = contact.address;
      if (locationParts[0]) schema.address.addressLocality = locationParts[0];
      if (locationParts[1]) schema.address.addressRegion = locationParts[1];
    }

    if (contact.phone) schema.telephone = contact.phone;
    if (contact.email) schema.email = contact.email;

    var sameAs = [];
    if (contact.facebook) sameAs.push(contact.facebook);
    if (contact.instagram) sameAs.push(contact.instagram);
    if (sameAs.length > 0) schema.sameAs = sameAs;

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /* ---- Inicio -------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    var data = window.DOMINIO_DATA || {};

    hydrateTexts(data);
    renderFacilities(document.getElementById('facilities-grid'), data.facilities);
    renderSchedule(document.getElementById('schedule-content'), data.schedule, data.contact);
    renderInstructors(document.getElementById('instructors-grid'), data.instructors);
    renderCertifications(document.getElementById('certifications-grid'), data.certifications);
    renderGallery(document.getElementById('gallery-grid'), data.gallery);
    renderEvents(document.getElementById('events-timeline'), data.events, data.contact);
    renderContact(data);
    injectStructuredData(data);
    setFooterYear();

    initHeaderScroll();
    initMobileMenu();
    initLightbox();
    initScrollReveal();
  });
})();
