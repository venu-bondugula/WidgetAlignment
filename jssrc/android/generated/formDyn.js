//Form JS File
function addWidgetsformDyn() {
    var label685085079821 = new kony.ui.Label({
        "id": "label685085079821",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    formDyn.add(
    label685085079821);
};

function formDynGlobals() {
    var MenuId = [];
    formDyn = new kony.ui.Form2({
        "id": "formDyn",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "skin1",
        "addWidgets": addWidgetsformDyn
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};