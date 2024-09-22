jQuery((function(t){var e,n=[],i={start:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=t.Deferred();return r.loading.show(),setTimeout((function(){return n.resolve()}),e),n.promise()},stop:function(){e&&e.reject(),e=null,n=[],r.loading.hide()},until:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e=e||t.Deferred().always(a.load.stop);for(var r=n.push(!1)-1,o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return l.push(a.load.start(i)),t.when.apply(t,l).always((function(){if(n[r]=!0,-1===t.inArray(!1,n))return e.resolve()})),e.promise()}},a={p:function(e){return t("#cws-wp-help-".concat(e))},load:i,bindH2Updates:function(){r.menu().text(r.h2.edit.input.val()),r.h2.edit.input.bind("keyup",(function(){r.menu().text(t(this).val())}))},sortable:function(){t(this).sortable({opacity:.8,placeholder:"cws-wp-help-placeholder",axis:"y",cursor:"move",cursorAt:{left:0,top:0},distance:10,delay:50,handle:".sort-handle",items:"> li.cws-wp-help-local, > div#cws-wp-help-remote-docs-block",start:function(e,n){var i,a=t(n.item),r=t(".cws-wp-help-placeholder");i="cws-wp-help-remote-docs-block"===a.attr("id")?4:-2,r.height(a.height()+i)},update:function(e,n){var i=t.post(ajaxurl,{action:"cws_wp_help_reorder",_ajax_nonce:r.ul.data("nonce"),order:t(this).sortable("toArray")});a.load.until(200,i)}}),t(this).find("> li:not(.cws-wp-help-is-slurped) > ul > li:nth-child(2)").parent("ul").each(a.sortable)},sortableInit:function(){r.ul.find("> #cws-wp-help-remote-docs-block > li").unwrap(),r.ul.find("> li.cws-wp-help-is-slurped:first").before('<div id="cws-wp-help-remote-docs-block"></div>'),r.ul.find("> li.cws-wp-help-is-slurped").detach().appendTo("#cws-wp-help-remote-docs-block"),r.ulSortable.each(a.sortable)},init:function(){a.sortableInit(),r.ul.find("li.page_item").each((function(){var e=t(this);e.attr("id","page-".concat(e.attr("class").match(/page-item-([0-9]+)/)[1]))})),r.apiURL.click((function(){this.select()})),r.saveButton.click(a.saveSettings),r.cancelLink.click((function(t){t.preventDefault(),a.restoreSettings(),a.hideSettings()})),r.settingsButton.click((function(t){t.preventDefault(),a.revealSettings(!0)})),r.h2.display.text.dblclick((function(){a.revealSettings(),r.h2.edit.input.focus().select()})),r.h3.display.text.dblclick((function(){a.revealSettings(),r.h3.edit.input.focus().select()})),r.returnMonitor.bind("keydown",(function(e){13===e.which&&(t(this).blur(),a.saveSettings())})),a.bindH2Updates(),r.menuLocation.change((function(){var e=String(window.location);e=-1===r.menuLocation.val().indexOf("submenu")?e.replace("/index.php","/admin.php"):e.replace("/admin.php","/index.php");var n="".concat(String(e),"&wp-help-preview-menu-location=").concat(r.menuLocation.val()),i=String(e).replace(/\/wp-admin\/.*$/,"/wp-admin/js/common.js");t("#adminmenu").load(n+" #adminmenu",(function(){window.history.replaceState&&window.history.replaceState(null,null,e),t.getScript(i),a.bindH2Updates()}))}))},fadeOutIn:function(t,e){t.fadeOut(150,(function(){return e.fadeIn(150)}))},hideShow:function(t,e){t.hide(),e.show()},revealSettings:function(t){[r.h2,r.h3].forEach((function(t){return a.hideShow(t.display.wrap,t.edit.wrap)})),r.actions.fadeTo(200,.3),r.ul.fadeTo(200,.3),a.fadeOutIn(r.doc,r.settings),t&&r.h2.edit.input.focus().select()},restoreSettings:function(){t("input, select",r.settings).each((function(){var e=t(this);e.data("original-value")&&e.val(e.data("original-value")).change()}))},saveSettings:function(){a.clearError(),[r.h2,r.h3].forEach((function(t){return t.display.text.text(t.edit.input.val())}));var e=t.post(ajaxurl,{action:"cws_wp_help_settings",_ajax_nonce:t("#_cws_wp_help_nonce").val(),h2:r.h2.edit.input.val(),h3:r.h3.edit.input.val(),menu_location:r.menuLocation.val(),slurp_url:r.slurp.val()});return e.success((function(e){e=t.parseJSON(e),r.slurp.val(e.slurp_url),e.error?(a.error(e.error),r.slurp.focus()):a.hideSettings(),e.topics&&(a.p("nodocs").remove(),r.ul.html(e.topics),a.sortableInit())})),a.load.until(200,e)},hideSettings:function(){[r.h2,r.h3].forEach((function(t){return a.hideShow(t.edit.wrap,t.display.wrap)})),[r.actions,r.ul].forEach((function(t){return t.fadeTo(200,1)})),a.fadeOutIn(r.settings,r.doc)},clearError:function(){r.slurpError.html("").hide()},error:function(t){r.slurpError.html("<p>".concat(t,"</p>")).fadeIn(150)}},r={menu:function(){return t("#adminmenu a.current .wp-menu-name")},h2:{edit:{input:a.p("h2-label"),wrap:a.p("h2-label-wrap")},display:{text:t(".wrap h1:first"),wrap:t(".wrap h1:first")}},h3:{edit:{input:a.p("listing-label"),wrap:a.p("listing-labels")},display:{text:a.p("listing h3"),wrap:a.p("listing h3")}},settingsButton:a.p("settings-on"),doc:a.p("document"),ul:a.p("listing-wrap > ul"),ulSortable:a.p("listing-wrap > ul.can-sort"),actions:a.p("actions"),settings:a.p("settings"),listing:a.p("listing"),apiURL:a.p("api-url"),slurp:a.p("slurp-url"),slurpError:a.p("slurp-error"),saveButton:a.p("settings-save"),cancelLink:a.p("settings-cancel"),menuLocation:a.p("menu-location"),loading:a.p("loading"),returnMonitor:t('.wrap input[type="text"]')};return a.init()}));