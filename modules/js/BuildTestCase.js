function testcase(testObj) {

    hbox = createHbox("hbox");
 
    testObj.widgetAlignment = 1;
//    testObj.hExpand=false;
  //  testObj.vExpand=false;
        
    imagewidget = createImage("refImageWidget");
    hbox.add(testObj, imagewidget);
    formDyn.add(hbox);
	btn_testCaseNavigator = createButton("navigator");
	formDyn.add(btn_testCaseNavigator);    
}