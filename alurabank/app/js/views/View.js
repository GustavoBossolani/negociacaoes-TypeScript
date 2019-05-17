System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escape) {
                    this._elemento = $(seletor);
                    if (escape == undefined) {
                        escape = false;
                    }
                    this._escape = escape;
                }
                update(model, classeBootstrapAlert) {
                    let template;
                    if (classeBootstrapAlert == undefined) {
                        template = this.template(model);
                    }
                    else {
                        template = this.template(model, classeBootstrapAlert);
                    }
                    if (this._escape) {
                        template = template.replace('/<script>[\s\S]*?</script>/', this.template(model));
                    }
                    this._elemento.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
