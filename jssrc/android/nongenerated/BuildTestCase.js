function testcase(testObj) {
    hbox = createHbox("hbox");
    imagewidget = createImage("refImageWidget");
    hbox.add(testObj, imagewidget);
    formDyn.add(hbox);
    btn_testCaseNavigator = new kony.ui.Button({
        "id": "navigator",
        "isVisible": true,
        "text": "Navigate to next testcase",
        "skin": "btnSkin",
        "focusSkin": "btnFocus",
        "onClick": nextTestCase
    }, {
        "widgetAlignment": 1,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    formDyn.add(btn_testCaseNavigator);
}