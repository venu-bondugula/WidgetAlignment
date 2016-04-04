//this is random

function testcase(testObj) {

    formDyn.testCaseTitle.text = testObj.id + testObj.widgetAlignment;
    
    hbox = createHbox("hbox");
 
    testObj.widgetAlignment = constants.WIDGET_ALIGN_TOP_LEFT;
    testObj.hExpand=false;
    testObj.vExpand=false;
        
    imagewidget = createImage("refImageWidget");
    hbox.add(testObj, imagewidget);
    formDyn.add(hbox);
	
	btn_testCaseNavigator = createButton("navigator");
	formDyn.add(btn_testCaseNavigator);    
}
