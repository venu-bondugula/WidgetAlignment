function testcase(testObj) {
    if (formHome['TestCaseID'].text == "2") {
        formDyn.testCaseTitle.text = testObj.name;
    } else formDyn.testCaseTitle.text = testObj.id + testObj.widgetAlignment;
    formDyn.testCaseTitle.skin = "lblNormal";
    hbox = createHbox("hbox");
    testObj.widgetAlignment = 1;
    //    testObj.hExpand=false;
    //  testObj.vExpand=false;
    imagewidget = createImage("refImageWidget");
    hbox.add(testObj.name, imagewidget);
    formDyn.add(hbox);
    if (formHome['TestCaseID'].text == "2") testObj.align = 3;
    btn_testCaseNavigator = createButton("navigator");
    formDyn.add(btn_testCaseNavigator);
}