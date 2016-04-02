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

var testcaseParams = {
    priority: undefined,
    type: undefined
};

var frmParams = {
    frmname: undefined,
    skin: "skn1",
    caseID: undefined
};


function sample() {
	formHome.TestCases.text = constants.WIDGET_ALIGN_TOP_LEFT.toString();
	  							

}
function testcaseNavigator() {

/*	formDyn.destroy();
	formDyn.postShow = null;
	formDyn.preShow = null;
    if (formHome['TestCaseID'].text != null){
    	testID = (formHome['TestCaseID'].text).toString();
    }else{
    	alert("TestID is null");
    }
    frmParams.frmname = formDyn;
    frmParams.caseID = testID;

    testID_num = parseInt(testID);
    frmParams.frmname.TestCaseTitle.text = obj[(testID_num).toString()];
    frmParams = testcase(frmParams, obj);
    frmParams.frmname.skin = "frmskn";
    frmParams.frmname.show();*/
}
