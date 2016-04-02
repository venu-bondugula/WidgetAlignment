var testID = 0;
var obj = {
	"1":Browser,
	"2":Button,
	"3":Camera,
	"4":CheckBoxGroup,
	"5":ComboBox,
	"6":DataGrid,
	"7":HBox,
	"8":HzImageStrip,
	"9":Image,
	"10":Label,
	"11":Line,
	"12":Link,
	"13":ListBox,
	"14":Map,
	"15":Phone,
	"16":PickerView,
	"17":RadioButton,
	"18":RichText,
	"19":ScrollBox,
	"20":Segment,
	"21":Slider,
	"22":Switch,
	"23":TabPane,
	"24":TextArea,
	"25":TextBox
};

function createList() {
    testcases = "TestCases for Widget Alignment" + "\n\n";
/*    for (index in obj) {
        testcases += index + " : " + obj[index].toString() + "\n\n";
    }*/
    formHome.TestCases.text = obj["1"] + "\n\n";
    formHome.TestCases.text += testcases;
}

function testcaseNavigator() {
	formDyn.destroy();
	formDyn.postShow = null;
	formDyn.preShow = null;
    if (formHome['TestCaseID'].text != null){
    	testID = (formHome['TestCaseID'].text).toString();
    }else{
    	alert("TestID is null");
    }

    testID_num = parseInt(testID);
    testcase(obj[testID]);
    formDyn.skin = "skn1";
    formDyn.show();
}

function nextTestCase(){
	if(obj.testID.widgetAlignment != 9){
		obj.testID.widgetAlignment = obj.testID.widgetAlignment + 1;
	}
	else
	{
		home();
	}
}

function home()
{
	currentForm=kony.application.getCurrentForm();
	frmHome.show();
	if(currentForm!=frmHome){
		currentForm.destroy();
	}
}