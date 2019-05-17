System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                template(model, classeBootstrap) {
                    let bootstrapClass;
                    if (classeBootstrap == undefined) {
                        bootstrapClass = `alert-info`;
                    }
                    else {
                        bootstrapClass = classeBootstrap;
                    }
                    return `<p class="alert ${bootstrapClass}">${model}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
