//Form JS File
function formHome_formHome_preshow_seq0(eventobject, neworientation) {
    createList.call(this);
};

function formHome_button685085079818_onClick_seq0(eventobject) {
    testcaseNavigator.call(this);
};

function addWidgetsformHome() {
    var TestCaseID = new kony.ui.TextBox2({
        "id": "TestCaseID",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "placeholder": "Test Case ID",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "TextBox",
        "focusSkin": "TextBox",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button685085079818 = new kony.ui.Button({
        "id": "button685085079818",
        "isVisible": true,
        "text": "Button",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": formHome_button685085079818_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var hbox685085079816 = new kony.ui.Box({
        "id": "hbox685085079816",
        "isVisible": true,
        "skin": "hBox",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox685085079816.add(
    TestCaseID, button685085079818);
    var TestCases = new kony.ui.Label({
        "id": "TestCases",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    formHome.add(
    hbox685085079816, TestCases);
};

function formHomeGlobals() {
    var MenuId = [];
    formHome = new kony.ui.Form2({
        "id": "formHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "skin1",
        "preShow": formHome_formHome_preshow_seq0,
        "addWidgets": addWidgetsformHome
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